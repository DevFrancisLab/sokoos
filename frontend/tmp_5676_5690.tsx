import React from "react";
const Test = () => (<>
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
</>);
