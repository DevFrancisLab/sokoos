
const ts = require('typescript');
const fs = require('fs');
const src = fs.readFileSync('tmp_snippet.tsx','utf8');
const sf = ts.createSourceFile('tmp_snippet.tsx', src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
for (const d of sf.parseDiagnostics) {
  console.log(d.messageText);
  const {line, character}=sf.getLineAndCharacterOfPosition(d.start);
  console.log(line+1, character+1);
}
