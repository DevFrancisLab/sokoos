import React from "react";
const Test = () => (<>
                    {activeWorkspaceSection === "Catalogue" && (
                      <div className="flex-1 min-w-0 space-y-6 overflow-x-hidden">
                        <div className="w-full min-w-0">
                          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                              <div className="flex flex-wrap items-center gap-3">
                                <div className="relative">
                                  <button type="button" onClick={() => setAddProductMenuOpen((s) => !s)} className="inline-flex items-center gap-2 rounded-[12px] bg-[#22C55E] px-3 py-1 text-sm font-semibold text-white transition duration-200 ease-out hover:shadow-sm hover:bg-[#16A34A]">+ Add Product</button>

                                  {addProductMenuOpen && (
                                    <div className="absolute left-0 mt-2 w-56 rounded-md border bg-white shadow-lg z-50">
                                      {[
                                        'Physical Product',
                                        'Service',
                                        'Subscription',
                                        'Digital Product',
                                        'Rental',
                                        'Booking',
                                        'Gift Card',
                                      ].map((t) => (
                                        <button
                                          key={t}
                                          onClick={() => {
                                            setSelectedProductType(t);
                                            setAddProductMenuOpen(false);
                                            setAddProductFormData({ name: `${t} ${catalogProducts.length + 1}`, category: t, price: '$0.00', availability: 'Available' });
                                            setShowAddProductForm(true);
                                          }}
                                          className="w-full text-left px-3 py-2 text-sm hover:bg-[#F8FAFB]"
                                        >
                                          {t}
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>

                                <div className="relative">
                                  <button type="button" onClick={() => setImportMenuOpen((s) => !s)} className="inline-flex items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-1 text-sm font-semibold transition duration-200 ease-out hover:shadow-sm hover:bg-[#F8FAFB]">
                                    Import
                                    <ChevronDown className="h-4 w-4 text-[#6B7280]" />
                                  </button>

                                  {importMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg z-50">
                                      <label className="block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer">
                                        CSV
                                        <input type="file" accept=".csv" className="hidden" onChange={(e) => { setImportMenuOpen(false); simulateImport('CSV', e.target.files?.[0] ?? null); }} />
                                      </label>
                                      <label className="block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer">
                                        Excel
                                        <input type="file" accept=".xlsx,.xls" className="hidden" onChange={(e) => { setImportMenuOpen(false); simulateImport('Excel', e.target.files?.[0] ?? null); }} />
                                      </label>
                                      <label className="block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer">
                                        PDF
                                        <input type="file" accept=".pdf" className="hidden" onChange={(e) => { setImportMenuOpen(false); simulateImport('PDF Catalogues', e.target.files?.[0] ?? null); }} />
                                      </label>
                                      <label className="block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer">
                                        Images
                                        <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => { setImportMenuOpen(false); handleFiles(e.target.files); }} />
                                      </label>
                                      <label className="block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer">
                                        Bulk Upload
                                        <input type="file" accept="*/*" multiple className="hidden" onChange={(e) => { setImportMenuOpen(false); handleFiles(e.target.files); }} />
                                      </label>
                                    </div>
                                  )}
                                </div>

                                <div className="min-w-[240px] flex-1">
                                  <input
                                    value={productSearch}
                                    onChange={(e) => setProductSearch(e.target.value)}
                                    placeholder="Search products, categories, or descriptions"
                                    className="w-full rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm shadow-sm focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#ECFDF5]"
                                  />
                                </div>
                              </div>

                              <div className="text-sm text-[#64748B]">Showing {CATALOG_ITEMS.length} items</div>

                              {/* Add Product Form Modal */}
                              {showAddProductForm && addProductFormData && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                                  <div className="w-full max-w-lg rounded-[12px] bg-white p-6">
                                    <div className="flex items-center justify-between">
                                      <h3 className="text-lg font-semibold">Add {selectedProductType}</h3>
                                      <button onClick={() => { setShowAddProductForm(false); setSelectedProductType(null); }} className="text-sm text-[#6B7280]">Close</button>
                                    </div>

                                    <div className="mt-4 space-y-3">
                                      <div>
                                        <label className="text-xs text-[#6B7280]">Name</label>
                                        <input value={addProductFormData.name} onChange={(e) => setAddProductFormData((d) => d ? { ...d, name: e.target.value } : d)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                      </div>

                                      <div className="grid grid-cols-2 gap-3">
                                        <div>
                                          <label className="text-xs text-[#6B7280]">Category</label>
                                          <input value={addProductFormData.category} onChange={(e) => setAddProductFormData((d) => d ? { ...d, category: e.target.value } : d)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                        </div>
                                        <div>
                                          <label className="text-xs text-[#6B7280]">Price</label>
                                          <input value={addProductFormData.price} onChange={(e) => setAddProductFormData((d) => d ? { ...d, price: e.target.value } : d)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                        </div>
                                      </div>

                                      <div>
                                        <label className="text-xs text-[#6B7280]">Availability</label>
                                        <select value={addProductFormData.availability} onChange={(e) => setAddProductFormData((d) => d ? { ...d, availability: e.target.value } : d)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm">
                                          <option>Available</option>
                                          <option>In stock</option>
                                          <option>Out of stock</option>
                                          <option>By appointment</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="mt-6 flex justify-end gap-3">
                                      <button onClick={() => { setShowAddProductForm(false); setSelectedProductType(null); }} className="rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm">Cancel</button>
                                      <button onClick={() => { if (addProductFormData) addProductWithData(addProductFormData); setShowAddProductForm(false); setSelectedProductType(null); }} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Create Product</button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {catalogueSubsection === "Media Library" ? (
                              <div>
                                <div
                                  onDrop={onDrop}
                                  onDragOver={onDragOver}
                                  className="rounded-[12px] border-dashed border-2 border-[#E5E7EB] bg-[#FAFAFB] p-6 text-center mb-4"
                                >
                                  <p className="text-sm font-semibold text-[#111827]">Drag & drop files here</p>
                                  <p className="mt-2 text-sm text-[#64748B]">Images, PDFs, videos, logos, brochures, flyers, certificates, menus, floor plans</p>
                                  <div className="mt-4">
                                    <input ref={fileInputRef} type="file" multiple className="hidden" onChange={(e) => handleFiles(e.target.files)} />
                                    <button type="button" onClick={() => fileInputRef.current?.click()} className="inline-flex items-center gap-2 rounded-[12px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Upload files</button>
                                  </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                  {mediaAssets.map((asset) => (
                                    <div key={asset.id} className="rounded-[12px] border border-[#EEF2F6] bg-white p-3">
                                      <div className="h-36 w-full mb-3 flex items-center justify-center bg-[#F8FAFB] rounded-md overflow-hidden">
                                        {asset.mime?.startsWith("image") ? (
                                          <img src={asset.url} alt={asset.name} className="object-cover h-full w-full" />
                                        ) : asset.mime?.startsWith("video") ? (
                                          <video src={asset.url} controls className="h-full w-full object-cover" />
                                        ) : asset.mime?.includes("pdf") ? (
                                          <div className="flex flex-col items-center justify-center text-sm text-[#475569]">
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            <span className="mt-2">PDF</span>
                                          </div>
                                        ) : (
                                          <div className="text-sm text-[#475569]">{asset.fileType}</div>
                                        )}
                                      </div>

                                      <p className="text-sm font-semibold text-[#111827] truncate">{asset.name}</p>
                                      <p className="text-xs text-[#6B7280]">{asset.fileType} • {asset.size}</p>
                                      <p className="text-xs text-[#94A3B8]">{asset.uploadDate}</p>

                                      <div className="mt-3 flex justify-end gap-2">
                                        <button type="button" onClick={() => viewAsset(asset)} className="rounded-[8px] border border-[#E5E7EB] bg-white px-2 py-1 text-xs font-semibold">View</button>
                                        <button type="button" onClick={() => renameAsset(asset.id)} className="rounded-[8px] border border-[#E5E7EB] bg-white px-2 py-1 text-xs font-semibold">Rename</button>
                                        <button type="button" onClick={() => deleteAsset(asset.id)} className="rounded-[8px] border border-[#FECACA] bg-white px-2 py-1 text-xs font-semibold text-[#B91C1C]">Delete</button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : catalogueSubsection === "Imports" ? (
                              <div>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                  {IMPORT_TYPES.map((t) => (
                                    <div key={t} className="rounded-[12px] border border-[#EEF2F6] bg-white p-4">
                                      <p className="text-sm font-semibold text-[#111827]">{t}</p>
                                      <p className="mt-1 text-xs text-[#64748B]">
                                        {t === "Excel" && "Imports products, SKUs, prices, categories, and stock levels from an .xlsx file."}
                                        {t === "CSV" && "Imports simple product lists and pricing from CSV files."}
                                        {t === "PDF Catalogues" && "Extracts product listings from PDF catalogs (best-effort parsing)."}
                                        {t === "Website Import" && "Fetches product pages from a website URL and converts into product entries."}
                                      </p>

                                      <div className="mt-4">
                                        {t === "Website Import" ? (
                                          <div className="flex gap-2">
                                            <input placeholder="https://example.com/catalog" className="flex-1 rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" id={`url-${t}`} />
                                            <button type="button" onClick={() => simulateImport(t as string, null)} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-xs font-semibold text-white">Start</button>
</>);
