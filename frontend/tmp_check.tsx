import React from "react";
const Test = () => (<>
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
</>);
