export type TemplateDownloadFormat = "xlsx" | "docx" | "txt";

export const TEMPLATE_DOWNLOAD_OPTIONS: Array<{
  format: TemplateDownloadFormat;
  label: string;
  extension: string;
}> = [
  { format: "xlsx", label: "Excel", extension: ".xlsx" },
  { format: "docx", label: "Docs", extension: ".docx" },
  { format: "txt", label: "TXT", extension: ".txt" },
];

const MIME_TYPES: Record<TemplateDownloadFormat, string> = {
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  txt: "text/plain;charset=utf-8",
};

export async function downloadTrainingTemplate(templateHref: string, format: TemplateDownloadFormat) {
  const response = await fetch(templateHref);
  if (!response.ok) {
    throw new Error("The template could not be downloaded. Please try again.");
  }

  const text = await response.text();
  const baseName = getTemplateBaseName(templateHref);
  const filename = `${baseName}.${format}`;
  saveBlob(createTemplateDownloadBlob(text, format, templateHref), filename);
}

export function createTemplateDownloadBlob(text: string, format: TemplateDownloadFormat, templateHref: string) {
  if (format === "txt") {
    return new Blob([text], { type: MIME_TYPES.txt });
  }

  const isCsv = templateHref.toLowerCase().endsWith(".csv");
  const rows = isCsv ? parseCsv(text) : text.split(/\r?\n/).map((line) => [line]);
  const bytes = format === "xlsx" ? buildXlsx(rows) : buildDocx(rows, isCsv);
  return new Blob([bytes], { type: MIME_TYPES[format] });
}

export function getTemplateBaseName(templateHref: string) {
  const fileName = templateHref.split("/").pop() || "sokoos-template";
  return fileName.replace(/\.[^.]+$/, "") || "sokoos-template";
}

function saveBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.length > 0 ? rows : [[""]];
}

function escapeXml(value: string) {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function columnLetter(index: number) {
  let remaining = index;
  let letters = "";
  while (remaining > 0) {
    const offset = (remaining - 1) % 26;
    letters = String.fromCharCode(65 + offset) + letters;
    remaining = Math.floor((remaining - 1) / 26);
  }
  return letters;
}

function buildXlsx(rows: string[][]): Uint8Array {
  const sheetRows = rows.map((row, rowIndex) => {
    const cells = row.map((value, columnIndex) => {
      const ref = `${columnLetter(columnIndex + 1)}${rowIndex + 1}`;
      return `<c r="${ref}" t="inlineStr"><is><t xml:space="preserve">${escapeXml(value)}</t></is></c>`;
    });
    return `<row r="${rowIndex + 1}">${cells.join("")}</row>`;
  });

  const files = {
    "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`,
    "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`,
    "xl/workbook.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="Template" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>`,
    "xl/_rels/workbook.xml.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`,
    "xl/worksheets/sheet1.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetData>
    ${sheetRows.join("")}
  </sheetData>
</worksheet>`,
  };

  return createZip(files);
}

function wordParagraph(text: string) {
  return `<w:p><w:r><w:t xml:space="preserve">${escapeXml(text)}</w:t></w:r></w:p>`;
}

function wordCell(text: string) {
  return `<w:tc><w:tcPr><w:tcW w:w="0" w:type="auto"/></w:tcPr>${wordParagraph(text)}</w:tc>`;
}

function buildDocx(rows: string[][], asTable: boolean): Uint8Array {
  const body = asTable
    ? `<w:tbl>
        <w:tblPr>
          <w:tblW w:w="5000" w:type="pct"/>
          <w:tblBorders>
            <w:top w:val="single" w:sz="4" w:space="0" w:color="D0D5DD"/>
            <w:left w:val="single" w:sz="4" w:space="0" w:color="D0D5DD"/>
            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="D0D5DD"/>
            <w:right w:val="single" w:sz="4" w:space="0" w:color="D0D5DD"/>
            <w:insideH w:val="single" w:sz="4" w:space="0" w:color="D0D5DD"/>
            <w:insideV w:val="single" w:sz="4" w:space="0" w:color="D0D5DD"/>
          </w:tblBorders>
        </w:tblPr>
        ${rows.map((row) => `<w:tr>${row.map((cell) => wordCell(cell)).join("")}</w:tr>`).join("")}
      </w:tbl>`
    : rows.map((row) => wordParagraph(row.join(" "))).join("");

  const files = {
    "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`,
    "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`,
    "word/_rels/document.xml.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>`,
    "word/document.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    ${body}
    <w:sectPr/>
  </w:body>
</w:document>`,
  };

  return createZip(files);
}

function crc32(data: Uint8Array) {
  let crc = 0xffffffff;
  for (let index = 0; index < data.length; index += 1) {
    crc ^= data[index];
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createZip(files: Record<string, string>): Uint8Array {
  const encoder = new TextEncoder();
  const localParts: Uint8Array[] = [];
  const centralParts: Uint8Array[] = [];
  let offset = 0;

  for (const [name, contents] of Object.entries(files)) {
    const nameBytes = encoder.encode(name);
    const data = encoder.encode(contents.replace(/^\uFEFF/, "").trimStart());
    const checksum = crc32(data);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(8, 0, true);
    localView.setUint32(14, checksum, true);
    localView.setUint32(18, data.length, true);
    localView.setUint32(22, data.length, true);
    localView.setUint16(26, nameBytes.length, true);
    localHeader.set(nameBytes, 30);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint32(16, checksum, true);
    centralView.setUint32(20, data.length, true);
    centralView.setUint32(24, data.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);

    localParts.push(localHeader, data);
    centralParts.push(centralHeader);
    offset += localHeader.length + data.length;
  }

  const centralDirectory = concatBytes(centralParts);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  const fileCount = Object.keys(files).length;
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, fileCount, true);
  endView.setUint16(10, fileCount, true);
  endView.setUint32(12, centralDirectory.length, true);
  endView.setUint32(16, offset, true);

  return concatBytes([...localParts, centralDirectory, end]);
}

function concatBytes(parts: Uint8Array[]) {
  const length = parts.reduce((sum, part) => sum + part.length, 0);
  const output = new Uint8Array(length);
  let offset = 0;
  for (const part of parts) {
    output.set(part, offset);
    offset += part.length;
  }
  return output;
}
