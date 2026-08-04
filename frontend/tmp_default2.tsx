import React from "react";
const Test = () => (<>
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
                                        <div className="grid gap-6 items-stretch" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
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

                                                  <div className={`mt-3 inline-flex items-center rounded-full border px-2 py-1 text-xs font-semibold ${item.availability === 'In stock' || item.availability === 'Available' ? 'border-[#D1FAE5] bg-[#ECFDF5] text-[#065F46]' : 'border-[#FDE8C7] bg-[#FFFBEB] text-[#B45309]'}`}>
                                                    {item.availability}
                                                  </div>
                                                </div>

                                                <div className="mt-auto pt-4">
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
                          </div>
                        </div>
                      </div>
                    )}
</>);
