const __temp = (
                    {activeWorkspaceSection === "Catalogue" && (
                      <div className="space-y-6 overflow-x-hidden">
                        <div className="grid gap-6 grid-cols-1 xl:grid-cols-[220px_minmax(0,1fr)_240px] items-start">
                          <aside className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 shadow-sm xl:sticky xl:top-6 self-start">
                            <p className="text-sm font-semibold text-[#111827]">What your AI Employee sells</p>
                            <p className="mt-2 text-sm text-[#6B7280]">Manage the products and services it can offer customers.</p>
                            <div className="mt-4 space-y-2 text-sm">
                              {(() => {
                                const lessons = [
                                  { label: "Products", key: "Products & Services" },
                                  { label: "Pricing", key: "Pricing" },
                                  { label: "Availability", key: "Availability" },
                                  { label: "Categories", key: "Categories" },
                                  { label: "Media", key: "Media Library" },
                                  { label: "Import Catalogue", key: "Imports" },
                                  { label: "Review", key: "Review" },
                                ];
                                const currentIndex = Math.max(0, lessons.findIndex((l) => l.key === catalogueSubsection));
                                return lessons.map((lesson, idx) => {
                                  const isActive = lesson.key === catalogueSubsection;
                                  const isCompleted = idx < currentIndex;
                                  const isFuture = idx > currentIndex;
                                  return (
                                    <button
                                      key={lesson.key}
                                      type="button"
                                      onClick={() => setCatalogueSubsection(lesson.key as any)}
                                      className={`w-full text-left flex items-center justify-between rounded-[10px] px-4 py-2 transition ${
                                        isActive
                                          ? 'bg-[#ECFDF5] text-[#065F46] font-semibold'
                                          : isCompleted
                                          ? 'bg-white text-[#111827]'
                                          : 'text-[#94A3B8]'
                                      }`}
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 flex items-center justify-center">
                                          {isCompleted ? (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                          ) : (
                                            <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-[#065F46]' : 'bg-[#D1D5DB]'}`} />
                                          )}
                                        </div>
                                        <span className="truncate">{lesson.label}</span>
                                      </div>
                                      <div className="text-xs text-[#94A3B8]"></div>
                                    </button>
                                  );
                                });
                              })()}
                            </div>
                          </aside>

                          <div>
                            {(() => {
                              const totalProducts = catalogProducts.length;
                              const productsPercent = Math.min(100, Math.round((totalProducts / 10) * 100));
                              const pricingPercent = totalProducts === 0 ? 0 : Math.round((catalogProducts.filter((p) => p.price && p.price !== '$0.00').length / totalProducts) * 100);
                              const categoriesCount = Array.from(new Set(catalogProducts.map((p) => p.category).filter(Boolean))).length;
                              const categoriesPercent = Math.min(100, Math.round((categoriesCount / 5) * 100));
                              const availabilityPercent = totalProducts === 0 ? 0 : Math.round((catalogProducts.filter((p) => (p as any).availability && (p as any).availability !== '').length / totalProducts) * 100);
                              const mediaPercent = Math.min(100, Math.round((mediaAssets.length / 10) * 100));
                              const importPercent = IMPORT_TYPES.length
                                ? Math.round(
                                    IMPORT_TYPES.reduce((sum, t) => {
                                      const s = importState[t];
                                      if (!s) return sum + 0;
                                      if (s.status === 'done') return sum + 100;
                                      if (s.status === 'uploading') return sum + (s.progress || 0);
                                      return sum + 0;
                                    }, 0) / IMPORT_TYPES.length,
                                  )
                                : 0;
                              const catalogueProgress = Math.round((productsPercent + pricingPercent + categoriesPercent + availabilityPercent + mediaPercent + importPercent) / 6);

                              return (
                                <div className="mb-6 rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
                                  <p className="text-sm font-semibold text-[#111827]">Catalogue Progress</p>
                                  <div className="mt-3 flex items-center gap-4">
                                    <div className="flex-1">
                                      <div className="h-2 w-full rounded-full bg-[#E5E7EB]">
                                        <div className="h-2 rounded-full bg-[#22C55E]" style={{ width: `${catalogueProgress}%` }} />
                                      </div>
                                    </div>
                                    <div className="w-14 text-right text-sm font-semibold">{catalogueProgress}%</div>
                                  </div>
                                </div>
                              );
                            })()}

                            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                              <div className="flex flex-wrap items-center gap-3">
                                <div className="relative">
                                  <button type="button" onClick={() => setAddProductMenuOpen((s) => !s)} className="inline-flex items-center gap-2 rounded-[12px] bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-out hover:shadow-sm hover:bg-[#16A34A]">+ Add Product</button>

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
                                  <button type="button" onClick={() => setImportMenuOpen((s) => !s)} className="inline-flex items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold transition duration-200 ease-out hover:shadow-sm hover:bg-[#F8FAFB]">
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

                                <div className="min-w-[200px] flex-1">
                                  <input
                                    value={productSearch}
                                    onChange={(e) => setProductSearch(e.target.value)}
                                    placeholder="Search products, categories, or descriptions"
                                    className="w-full rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm shadow-sm focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#ECFDF5]"
                                  />
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
                                          </div>
                                        ) : (
                                          <div className="flex items-center gap-2">
                                            <input type="file" accept={t === "Excel" ? ".xlsx, .xls" : ".csv"} onChange={(e) => simulateImport(t as string, e.target.files?.[0] ?? null)} className="text-sm" />
                                          </div>
                                        )}
                                      </div>

                                      <div className="mt-3">
                                        <div className="h-2 w-full bg-[#F1F5F9] rounded-full overflow-hidden">
                                          <div className="h-2 bg-[#22C55E]" style={{ width: `${importState[t]?.progress ?? 0}%` }} />
                                        </div>
                                        <p className="mt-1 text-xs text-[#64748B]">{importState[t]?.status === "uploading" ? `Uploading (${importState[t]?.progress ?? 0}%)` : importState[t]?.status === "done" ? "Completed" : "Idle"}</p>
                                      </div>

                                      {importState[t]?.status === "done" && importState[t]?.result && (
                                        <div className="mt-3 rounded-[8px] bg-[#F8FAFB] p-3 text-sm">
                                          <p className="font-semibold text-[#111827]">{importState[t]!.result!.message}</p>
                                          <p className="mt-1 text-xs text-[#64748B]">Products imported: {importState[t]!.result!.productsImported}</p>
                                          <p className="mt-1 text-xs text-[#F59E0B]">Duplicates found: {importState[t]!.result!.duplicatesFound}</p>
                                          {importState[t]!.result!.warnings.length > 0 && (
                                            <div className="mt-2 text-xs text-[#F59E0B]">
                                              <p className="font-semibold">Warnings:</p>
                                              <ul className="list-disc ml-4">
                                                {importState[t]!.result!.warnings.map((w, i) => (
                                                  <li key={i}>{w}</li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : catalogueSubsection === "Quote Templates" ? (
                              <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
                                <div>
                                  <div className="mb-4 flex items-center justify-between">
                                    <p className="text-sm font-semibold text-[#111827]">Quote Templates</p>
                                    <div className="flex gap-2">
                                      <button type="button" onClick={addQuoteTemplate} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Create Template</button>
                                      <button type="button" onClick={() => { const t = quoteTemplates.find(x => x.id === selectedTemplateId); if (t) alert(`Create Quote from template: ${t.companyName}`); }} className="rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm font-semibold">Create Quote</button>
                                    </div>
                                  </div>

                                  <div className="space-y-3">
                                    <div className="flex gap-3 overflow-x-auto pb-2">
                                      {quoteTemplates.map((t) => (
                                        <button key={t.id} onClick={() => setSelectedTemplateId(t.id)} className={`min-w-[160px] flex-shrink-0 rounded-[10px] border p-3 text-left ${selectedTemplateId === t.id ? 'border-[#22C55E] bg-[#ECFDF5]' : 'bg-white'}`}>
                                          <p className="text-sm font-semibold">{t.companyName}</p>
                                          <p className="text-xs text-[#64748B] truncate">{t.header}</p>
                                        </button>
                                      ))}
                                    </div>

                                    {selectedTemplateId && (
                                      <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-4">
                                        <div className="grid gap-3">
                                          <div className="flex items-center gap-3">
                                            <div className="h-12 w-12 rounded-md overflow-hidden bg-[#F8FAFB] flex items-center justify-center">
                                              {quoteTemplates.find(q => q.id === selectedTemplateId)?.companyLogo ? (
                                                <img src={quoteTemplates.find(q => q.id === selectedTemplateId)!.companyLogo} alt="logo" className="h-full w-full object-cover" />
                                              ) : (
                                                <div className="text-xs text-[#94A3B8]">Logo</div>
                                              )}
                                            </div>
                                            <div className="flex-1">
                                              <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.companyName || ''} onChange={(e) => updateTemplate(selectedTemplateId, { companyName: e.target.value })} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                              <label className="text-xs text-[#6B7280]">Logo</label>
                                              <input type="file" accept="image/*" onChange={(e) => uploadLogoForTemplate(selectedTemplateId, e.target.files?.[0] ?? null)} />
                                            </div>
                                          </div>

                                          <div>
                                            <label className="text-xs text-[#6B7280]">Header</label>
                                            <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.header || ''} onChange={(e) => updateTemplate(selectedTemplateId, { header: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                          </div>

                                          <div>
                                            <label className="text-xs text-[#6B7280]">Footer</label>
                                            <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.footer || ''} onChange={(e) => updateTemplate(selectedTemplateId, { footer: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                          </div>

                                          <div>
                                            <label className="text-xs text-[#6B7280]">Terms & Conditions</label>
                                            <textarea value={quoteTemplates.find(q => q.id === selectedTemplateId)?.terms || ''} onChange={(e) => updateTemplate(selectedTemplateId, { terms: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]" />
                                          </div>

                                          <div className="grid grid-cols-2 gap-3">
                                            <div>
                                              <label className="text-xs text-[#6B7280]">Currency</label>
                                              <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.currency || ''} onChange={(e) => updateTemplate(selectedTemplateId, { currency: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                            </div>
                                            <div>
                                              <label className="text-xs text-[#6B7280]">Tax</label>
                                              <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.tax || ''} onChange={(e) => updateTemplate(selectedTemplateId, { tax: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                            </div>
                                          </div>

                                          <div>
                                            <label className="text-xs text-[#6B7280]">Signature</label>
                                            <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.signature || ''} onChange={(e) => updateTemplate(selectedTemplateId, { signature: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                          </div>

                                          <div>
                                            <label className="text-xs text-[#6B7280]">Primary Color</label>
                                            <input type="color" value={quoteTemplates.find(q => q.id === selectedTemplateId)?.primaryColor || '#065F46'} onChange={(e) => updateTemplate(selectedTemplateId, { primaryColor: e.target.value })} className="mt-1 h-10 w-20 p-0 border-none" />
                                          </div>

                                          <div className="flex justify-end gap-2">
                                            <button type="button" onClick={() => duplicateTemplate(selectedTemplateId!)} className="rounded-[8px] border border-[#E5E7EB] px-3 py-2 text-sm">Duplicate</button>
                                            <button type="button" onClick={() => deleteTemplate(selectedTemplateId!)} className="rounded-[8px] border border-[#FECACA] px-3 py-2 text-sm text-[#B91C1C]">Delete</button>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div>
                                  <div className={`${AI_WORKSPACE_SUBTLE}`}>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-md overflow-hidden bg-[#F8FAFB] flex items-center justify-center">
                                          {quoteTemplates.find(q => q.id === selectedTemplateId)?.companyLogo ? (
                                            <img src={quoteTemplates.find(q => q.id === selectedTemplateId)!.companyLogo} alt="logo" className="h-full w-full object-cover" />
                                          ) : (
                                            <div className="text-xs text-[#94A3B8]">Logo</div>
                                          )}
                                        </div>
                                        <div>
                                          <p className="text-sm font-semibold">{quoteTemplates.find(q => q.id === selectedTemplateId)?.companyName}</p>
                                          <p className="text-xs text-[#64748B]">{quoteTemplates.find(q => q.id === selectedTemplateId)?.header}</p>
                                        </div>
                                      </div>
                                      <div className="text-sm text-[#6B7280]">{quoteTemplates.find(q => q.id === selectedTemplateId)?.currency}</div>
                                    </div>

                                    <div className="mt-4 border-t pt-4">
                                      <p className="text-sm text-[#475569]">Item lines would appear here in a real quote. Tax: {quoteTemplates.find(q => q.id === selectedTemplateId)?.tax}</p>
                                    </div>

                                    <div className="mt-6 border-t pt-4">
                                      <p className="text-sm text-[#64748B]">Terms</p>
                                      <p className="mt-1 text-sm text-[#475569]">{quoteTemplates.find(q => q.id === selectedTemplateId)?.terms}</p>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                      <div>
                                        <p className="text-sm font-semibold">{quoteTemplates.find(q => q.id === selectedTemplateId)?.signature}</p>
                                      </div>
                                      <div>
                                        <button type="button" className="rounded-[10px] bg-white border border-[#E5E7EB] px-3 py-2 text-sm">Preview</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                <div className="mb-4">
                                  <div className="mb-3 flex items-center gap-2">
                                    <button onClick={() => setCatalogueSubsection("Products & Services")} className={`px-3 py-1 rounded border ${catalogueSubsection === "Products & Services" ? 'border-[#22C55E] bg-[#ECFDF5]' : 'border-[#E5E7EB] bg-white'}`}>Products & Services</button>
                                    <button onClick={() => setCatalogueSubsection("Pricing")} className={`px-3 py-1 rounded border ${catalogueSubsection === "Pricing" ? 'border-[#22C55E] bg-[#ECFDF5]' : 'border-[#E5E7EB] bg-white'}`}>Pricing</button>
                                  </div>

                                  {catalogueSubsection === "Pricing" ? (
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Pricing</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Teach your AI exactly how much everything costs.</p>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <button onClick={() => {
                                          setPricingSaved(true);
                                          window.setTimeout(() => setPricingSaved(false), 1800);
                                        }} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Save Pricing</button>
                                      </div>
                                    </div>
                                  ) : catalogueSubsection === "Availability" ? (
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Availability</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Teach the AI when products can be sold.</p>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <button onClick={() => {
                                          setAvailabilitySaved(true);
                                          window.setTimeout(() => setAvailabilitySaved(false), 1800);
                                        }} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Save Availability</button>
                                      </div>
                                    </div>
                                  ) : catalogueSubsection === "Review" ? (
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Review</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Summary of your catalogue before finishing.</p>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <button onClick={() => setActiveWorkspaceSection("Sales Playbooks")} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Finish Catalogue</button>
                                      </div>
                                    </div>
                                  ) : catalogueSubsection === "Bundles & Promotions" ? (
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Bundles & Promotions</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Create bundles and offers that your AI can recommend.</p>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <button onClick={() => {
                                          const newPromotion = {
                                            id: `promo-${Date.now()}`,
                                            title: "New Promotion",
                                            description: "Describe the promotion here.",
                                            productsIncluded: "",
                                            discountType: "Percentage" as const,
                                            discountValue: "0",
                                            startDate: new Date().toISOString().slice(0, 10),
                                            endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().slice(0, 10),
                                            status: "Active" as const,
                                          };
                                          setPromotions((current) => [newPromotion, ...current]);
                                        }} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Create Promotion</button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Products & Services</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Add everything your AI can recommend or sell.</p>
                                      </div>
                                      <div className="flex flex-wrap items-center gap-2 min-w-0">
                                        <input
                                          value={productSearch}
                                          onChange={(e) => setProductSearch(e.target.value)}
                                          placeholder="Search products, categories, or descriptions"
                                          className="w-full max-w-[24rem] min-w-0 rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
                                        />
                                        <button onClick={() => addProduct()} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Add Product</button>
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
                                  {[
                                    { key: "Product", desc: "Physical product" },
                                    { key: "Service", desc: "Bookable service" },
                                    { key: "Subscription", desc: "Recurring plan" },
                                    { key: "Digital Product", desc: "Downloadable item" },
                                  ].map((t) => (
                                    <button key={t.key} onClick={() => addProduct(t.key)} className={`text-left rounded-2xl border p-4 transition hover:shadow-sm bg-white`}>
                                      <div className="flex items-start gap-3">
                                        <div className="h-9 w-9 flex-shrink-0 rounded-xl bg-[#F1F5F9] items-center justify-center flex text-[#475569]"><Package className="h-4 w-4" /></div>
                                        <div className="min-w-0 flex-1">
                                          <p className="text-sm font-semibold text-[#111827]">{t.key}</p>
                                          <p className="mt-1 text-xs text-[#64748B]">{t.desc}</p>
                                        </div>
                                      </div>
                                    </button>
                                  ))}
                                </div>

                                {catalogueSubsection === "Pricing" ? (
                                  <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-4">
                                    <div className="overflow-x-auto">
                                      <table className="min-w-full text-sm">
                                        <thead>
                                          <tr className="text-left text-xs text-[#6B7280]">
                                            <th className="px-3 py-2">Product</th>
                                            <th className="px-3 py-2">Price</th>
                                            <th className="px-3 py-2">Currency</th>
                                            <th className="px-3 py-2">Billing Period</th>
                                            <th className="px-3 py-2">Discount</th>
                                            <th className="px-3 py-2">Status</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {catalogProducts.map((item) => (
                                            <tr key={item.id} className="border-t">
                                              <td className="px-3 py-2 align-top">{item.name}</td>
                                              <td className="px-3 py-2 align-top">
                                                <input value={item.price || ''} onChange={(e) => updateCatalogProductField(item.id, 'price', e.target.value)} className="w-28 rounded border px-2 py-1 text-sm" />
                                              </td>
                                              <td className="px-3 py-2 align-top">
                                                <select value={(item as any).currency || 'USD'} onChange={(e) => updateCatalogProductField(item.id, 'currency', e.target.value)} className="rounded border px-2 py-1 text-sm">
                                                  <option>USD</option>
                                                  <option>KES</option>
                                                  <option>EUR</option>
                                                  <option>NGN</option>
                                                </select>
                                              </td>
                                              <td className="px-3 py-2 align-top">
                                                <select value={(item as any).billingPeriod || 'One-time'} onChange={(e) => updateCatalogProductField(item.id, 'billingPeriod', e.target.value)} className="rounded border px-2 py-1 text-sm">
                                                  <option>One-time</option>
                                                  <option>Monthly</option>
                                                  <option>Yearly</option>
                                                  <option>Usage-based</option>
                                                </select>
                                              </td>
                                              <td className="px-3 py-2 align-top">
                                                <input type="number" value={(item as any).discount ?? ''} onChange={(e) => updateCatalogProductField(item.id, 'discount', e.target.value ? Number(e.target.value) : '')} className="w-20 rounded border px-2 py-1 text-sm" />
                                              </td>
                                              <td className="px-3 py-2 align-top">
                                                <select value={(item as any).status || item.availability || 'Available'} onChange={(e) => updateCatalogProductField(item.id, 'status', e.target.value)} className="rounded border px-2 py-1 text-sm">
                                                  <option>Available</option>
                                                  <option>Low stock</option>
                                                  <option>By appointment</option>
                                                  <option>Out of stock</option>
                                                </select>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                      <div className="text-sm text-[#64748B]">Pricing supports one-time, recurring and usage-based models.</div>
                                      <div>
                                        <button onClick={() => {
                                          setPricingSaved(true);
                                          window.setTimeout(() => setPricingSaved(false), 1800);
                                        }} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Save Pricing</button>
                                        {pricingSaved ? <span className="ml-3 text-sm text-[#16A34A]">Saved</span> : null}
                                      </div>
                                    </div>
                                  </div>
                                ) : catalogueSubsection === "Availability" ? (
                                  <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-4">
                                    <div className="overflow-x-auto">
                                      <table className="min-w-full text-sm">
                                        <thead>
                                          <tr className="text-left text-xs text-[#6B7280]">
                                            <th className="px-3 py-2">Product</th>
                                            <th className="px-3 py-2">Availability</th>
                                            <th className="px-3 py-2">Inventory Status</th>
                                            <th className="px-3 py-2">Available Locations</th>
                                            <th className="px-3 py-2">Estimated Delivery</th>
                                            <th className="px-3 py-2">Visible to AI</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {catalogProducts.map((item) => (
                                            <tr key={item.id} className="border-t hover:bg-[#F8FAFB]">
                                              <td className="px-3 py-3 align-top">{item.name}</td>
                                              <td className="px-3 py-3 align-top">
                                                <input value={(item.availability || 'Available')} onChange={(e) => updateCatalogProductField(item.id, 'availability', e.target.value)} className="w-32 rounded border px-2 py-1 text-sm" />
                                              </td>
                                              <td className="px-3 py-3 align-top">
                                                <select value={(item as any).inventoryStatus || 'In stock'} onChange={(e) => updateCatalogProductField(item.id, 'inventoryStatus', e.target.value)} className="rounded border px-2 py-1 text-sm">
                                                  <option>In stock</option>
                                                  <option>Low stock</option>
                                                  <option>Out of stock</option>
                                                  <option>Pre-order</option>
                                                </select>
                                              </td>
                                              <td className="px-3 py-3 align-top">
                                                <input value={(item as any).availableLocations || 'All locations'} onChange={(e) => updateCatalogProductField(item.id, 'availableLocations', e.target.value)} className="w-48 rounded border px-2 py-1 text-sm" />
                                              </td>
                                              <td className="px-3 py-3 align-top">
                                                <input value={(item as any).estimatedDelivery || '2-5 days'} onChange={(e) => updateCatalogProductField(item.id, 'estimatedDelivery', e.target.value)} className="w-32 rounded border px-2 py-1 text-sm" />
                                              </td>
                                              <td className="px-3 py-3 align-top">
                                                <label className="inline-flex items-center gap-2 text-sm">
                                                  <input type="checkbox" checked={(item as any).visibleToAi ?? true} onChange={(e) => updateCatalogProductField(item.id, 'visibleToAi', e.target.checked)} className="h-4 w-4 rounded border border-[#D1D5DB] text-[#22C55E] focus:ring-[#22C55E]" />
                                                  <span>{(item as any).visibleToAi ?? true ? 'Yes' : 'No'}</span>
                                                </label>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                      <div className="text-sm text-[#64748B]">Teach your AI when products are available and where they can be sold.</div>
                                      <div>
                                        <button onClick={() => {
                                          setAvailabilitySaved(true);
                                          window.setTimeout(() => setAvailabilitySaved(false), 1800);
                                        }} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Save Availability</button>
                                        {availabilitySaved ? <span className="ml-3 text-sm text-[#16A34A]">Saved</span> : null}
                                      </div>
                                    </div>
                                  </div>
                                ) : catalogueSubsection === "Review" ? (
                                  <div className="rounded-[12px] border border-[#E5E7EB] bg-white p-6">
                                    <p className="text-lg font-semibold text-[#111827]">Review</p>
                                    <p className="mt-2 text-sm text-[#64748B]">A checklist of sections in your catalogue. Complete any missing items before finishing.</p>

                                    {(() => {
                                      const hasProducts = catalogProducts.length > 0;
                                      const categoriesCount = Array.from(new Set(catalogProducts.map((p) => p.category).filter(Boolean))).length;
                                      const hasCategories = categoriesCount > 0;
                                      const hasMedia = mediaAssets.length > 0;
                                      const pricingComplete = hasProducts && catalogProducts.every((p) => p.price && p.price !== '$0.00');
                                      const availabilityComplete = hasProducts && catalogProducts.every((p) => (p as any).availability && (p as any).availability !== '');
                                      const bundlesComplete = promotions.length > 0;
                                      const sections = [
                                        { key: 'Products', done: hasProducts, jump: 'Products & Services' },
                                        { key: 'Categories', done: hasCategories, jump: 'Categories' },
                                        { key: 'Media', done: hasMedia, jump: 'Media Library' },
                                        { key: 'Pricing', done: pricingComplete, jump: 'Pricing' },
                                        { key: 'Availability', done: availabilityComplete, jump: 'Availability' },
                                        { key: 'Bundles', done: bundlesComplete, jump: 'Bundles & Promotions' },
                                      ];

                                      const allDone = sections.every((s) => s.done);

                                      return (
                                        <div className="mt-6 space-y-4">
                                          {sections.map((s) => (
                                            <div key={s.key} className="flex items-center justify-between rounded-[10px] border border-[#EEF2F6] p-3">
                                              <div className="flex items-center gap-3">
                                                <div>
                                                  {s.done ? (
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                  ) : (
                                                    <div className="w-5 h-5 rounded-full bg-[#F1F5F9]" />
                                                  )}
                                                </div>
                                                <div>
                                                  <p className="text-sm font-semibold text-[#111827]">{s.key}</p>
                                                  {!s.done && <p className="text-xs text-[#64748B]">Missing or incomplete</p>}
                                                </div>
                                              </div>
                                              <div>
                                                {s.done ? (
                                                  <span className="text-sm text-[#16A34A] font-semibold">Completed</span>
                                                ) : (
                                                  <button onClick={() => setCatalogueSubsection(s.jump as any)} className="text-sm font-semibold text-[#065F46]">Complete now →</button>
                                                )}
                                              </div>
                                            </div>
                                          ))}

                                          <div className="mt-4 border-t pt-4">
                                            <p className="text-sm font-medium">Missing information</p>
                                            {!allDone && (
                                              <div className="mt-3 text-sm text-[#64748B]">Some sections are incomplete — complete them to improve AI recommendations.</div>
                                            )}
                                          </div>

                                          <div className="mt-6 flex items-center justify-end gap-3">
                                            <button onClick={() => setCatalogueSubsection('Products & Services' as any)} className="rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm">Back</button>
                                            <button onClick={() => setActiveWorkspaceSection('Sales Playbooks')} className={`rounded-[10px] px-3 py-2 text-sm font-semibold text-white ${allDone ? 'bg-[#16A34A]' : 'bg-[#9AE6B4]'}`}>Finish Catalogue</button>
                                          </div>
                                        </div>
                                      );
                                    })()}
                                  </div>
                                ) : catalogueSubsection === "Bundles & Promotions" ? (
                                  <div className="space-y-4">
                                    {promotions.map((promo) => (
                                      <div key={promo.id} className="rounded-[20px] border border-[#E5E7EB] bg-white p-5 shadow-sm">
                                        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                                          <div className="min-w-0 flex-1">
                                            <input value={promo.title} onChange={(e) => setPromotions((list) => list.map((item) => item.id === promo.id ? { ...item, title: e.target.value } : item))} className="w-full rounded-[12px] border border-[#E5E7EB] px-3 py-2 text-sm font-semibold text-[#111827]" />
                                            <textarea value={promo.description} onChange={(e) => setPromotions((list) => list.map((item) => item.id === promo.id ? { ...item, description: e.target.value } : item))} className="mt-3 w-full rounded-[12px] border border-[#E5E7EB] px-3 py-2 text-sm text-[#475569]" rows={3} />
                                          </div>
                                          <div className="flex items-center gap-2 text-sm text-[#64748B]">
                                            <span className={`rounded-full border px-3 py-1 ${promo.status === 'Active' ? 'border-[#22C55E] bg-[#ECFDF5] text-[#065F46]' : promo.status === 'Paused' ? 'border-[#F59E0B] bg-[#FFFBEB] text-[#B45309]' : 'border-[#E5E7EB] bg-[#F8FAFB] text-[#475569]'}`}>{promo.status}</span>
                                            <button onClick={() => setPromotions((list) => list.filter((item) => item.id !== promo.id))} className="rounded-[10px] border border-[#FECACA] bg-white px-3 py-2 text-sm font-semibold text-[#B91C1C]">Delete</button>
                                          </div>
                                        </div>

                                        <div className="mt-4 grid gap-4 lg:grid-cols-2">
                                          <div className="space-y-3">
                                            <div>
                                              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">Products Included</label>
                                              <input value={promo.productsIncluded} onChange={(e) => setPromotions((list) => list.map((item) => item.id === promo.id ? { ...item, productsIncluded: e.target.value } : item))} className="mt-2 w-full rounded-[12px] border border-[#E5E7EB] px-3 py-2 text-sm" />
                                            </div>
                                            <div className="grid gap-3 sm:grid-cols-2">
                                              <div>
                                                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">Discount Type</label>
                                                <select value={promo.discountType} onChange={(e) => setPromotions((list) => list.map((item) => item.id === promo.id ? { ...item, discountType: e.target.value as any } : item))} className="mt-2 w-full rounded-[12px] border border-[#E5E7EB] px-3 py-2 text-sm">
                                                  <option>Percentage</option>
                                                  <option>Fixed</option>
                                                </select>
                                              </div>
                                              <div>
                                                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">Discount Value</label>
                                                <input type="text" value={promo.discountValue} onChange={(e) => setPromotions((list) => list.map((item) => item.id === promo.id ? { ...item, discountValue: e.target.value } : item))} className="mt-2 w-full rounded-[12px] border border-[#E5E7EB] px-3 py-2 text-sm" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="grid gap-3 sm:grid-cols-2">
                                            <div>
                                              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">Start Date</label>
                                              <input type="date" value={promo.startDate} onChange={(e) => setPromotions((list) => list.map((item) => item.id === promo.id ? { ...item, startDate: e.target.value } : item))} className="mt-2 w-full rounded-[12px] border border-[#E5E7EB] px-3 py-2 text-sm" />
                                            </div>
                                            <div>
                                              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">End Date</label>
                                              <input type="date" value={promo.endDate} onChange={(e) => setPromotions((list) => list.map((item) => item.id === promo.id ? { ...item, endDate: e.target.value } : item))} className="mt-2 w-full rounded-[12px] border border-[#E5E7EB] px-3 py-2 text-sm" />
                                            </div>
                                            <div className="sm:col-span-2">
                                              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">Status</label>
                                              <select value={promo.status} onChange={(e) => setPromotions((list) => list.map((item) => item.id === promo.id ? { ...item, status: e.target.value as any } : item))} className="mt-2 w-full rounded-[12px] border border-[#E5E7EB] px-3 py-2 text-sm">
                                                <option>Active</option>
                                                <option>Paused</option>
                                                <option>Expired</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="space-y-4">
                                    {(() => {
                                      // Empty state when there are no products at all
                                      if (catalogProducts.length === 0) {
                                        return (
                                          <div className="rounded-[12px] border border-dashed border-[#E5E7EB] bg-white p-10 text-center">
                                            <div className="mx-auto mb-6 h-36 w-36 rounded-lg bg-[#F8FAFB] flex items-center justify-center">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 3v4M8 3v4" />
                                              </svg>
                                            </div>
                                            <p className="text-2xl font-semibold text-[#111827]">No products yet</p>
                                            <p className="mt-2 text-sm text-[#64748B]">Add your products and services so your AI can recommend them to customers.</p>

                                            <div className="mt-6 flex items-center justify-center gap-3">
                                              <button onClick={() => addProduct()} className="rounded-[12px] bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white">Add Product</button>
                                              <button onClick={() => setCatalogueSubsection("Imports")} className="rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold">Import Catalogue</button>
                                            </div>
                                          </div>
                                        );
                                      }
                                      const query = productSearch.trim().toLowerCase();
                                      const filtered = catalogProducts.filter((p) =>
                                        p.name.toLowerCase().includes(query) ||
                                        p.category.toLowerCase().includes(query) ||
                                        (p.description || "").toLowerCase().includes(query),
                                      );
                                      if (filtered.length === 0) return <p className="text-sm text-[#94A3B8]">No products found. Use "Add Product" to create one.</p>;
                                      return (
                                        <div className="grid gap-4 items-stretch" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
                                          {filtered.map((item) => (
                                            <div key={item.id} className="group h-full overflow-hidden rounded-[20px] border border-[#EEF2F6] bg-white shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                                              <div className="h-40 w-full overflow-hidden bg-[#F8FAFB]">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                              </div>

                                              <div className="flex min-h-[320px] flex-col gap-4 p-4">
                                                <div className="min-h-0">
                                                  <p className="text-base font-semibold text-[#111827] leading-6 line-clamp-2">{item.name}</p>
                                                  <p className="mt-2 text-xs text-[#6B7280] uppercase tracking-[0.12em]">{item.category}</p>

                                                  <div className="mt-4">
                                                    <p className="text-lg font-semibold text-[#111827]">{item.price}</p>
                                                  </div>

                                                  <div className={`mt-3 inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold ${item.availability === 'In stock' || item.availability === 'Available' ? 'border-[#D1FAE5] bg-[#ECFDF5] text-[#065F46]' : 'border-[#FDE8C7] bg-[#FFFBEB] text-[#B45309]'}`}>
                                                    {item.availability}
                                                  </div>
                                                </div>

                                                <div className="mt-auto">
                                                  <button type="button" className="w-full rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#111827] transition duration-200 ease-out hover:bg-[#F8FAFB] hover:shadow-sm">Edit</button>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    })()}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <aside className="hidden xl:block rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 xl:sticky xl:top-6 self-start">
                            {catalogueSubsection === "Review" ? (
                              <div className="space-y-4">
                                <p className="text-sm font-semibold">Next steps</p>
                                <p className="text-sm text-[#64748B]">You're ready — continue to Sales Playbooks to define selling flows.</p>
                                <div className="mt-3">
                                  <button onClick={() => setActiveWorkspaceSection("Sales Playbooks")} className="w-full rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Continue</button>
                                </div>
                              </div>
                            ) : catalogueSubsection === "Bundles & Promotions" ? (
                              <div className="space-y-3">
                                <p className="text-sm font-semibold">Promotion tips</p>
                                <p className="text-sm text-[#64748B]">Use concise titles and clear start/end dates for best results.</p>
                              </div>
                            ) : null}
                          </aside>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Sales Playbooks" && (
                      <div className="space-y-6">
                        <div className="flex flex-col gap-4 rounded-[24px] border border-[#E5E7EB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                          <div>
);