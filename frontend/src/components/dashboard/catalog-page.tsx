import type { Dispatch, SetStateAction } from "react";
import { Box, Sparkles } from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: string;
  active: boolean;
};

type CatalogPageProps = {
  CARD: string;
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
};

export default function CatalogPage({ CARD, products, setProducts }: CatalogPageProps) {
  return (
    <div className="space-y-6">
      <div className={`${CARD} border-[#ECFDF5] bg-gradient-to-br from-[#F0FDF4] to-white`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Product catalog</p>
            <h1 className="mt-2 text-[34px] font-semibold text-[#0F172A]">Keep your offers clear and easy to recommend</h1>
            <p className="mt-3 text-[15px] text-[#475569]">The AI can guide customers toward the most relevant products when your catalog is up to date.</p>
          </div>
          <div className="rounded-[24px] border border-[#D1FAE5] bg-white/80 px-4 py-3 text-sm font-semibold text-[#065F46]">
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Simple product setup</div>
          </div>
        </div>
      </div>

      <div className={`${CARD}`}>
        <div className="flex items-center gap-2">
          <Box className="h-5 w-5 text-[#22C55E]" />
          <h2 className="text-[24px] font-semibold text-[#0F172A]">Current offers</h2>
        </div>
        <div className="mt-5 space-y-3">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] p-4">
              <div>
                <p className="font-semibold text-[#111827]">{product.name}</p>
                <p className="text-sm text-[#64748B]">{product.price}</p>
              </div>
              <button
                type="button"
                onClick={() => setProducts((items) => items.map((item) => item.id === product.id ? { ...item, active: !item.active } : item))}
                className={`rounded-full px-3 py-2 text-sm font-semibold ${product.active ? "bg-[#ECFDF5] text-[#047857]" : "bg-[#F3F4F6] text-[#475569]"}`}
              >
                {product.active ? "Active" : "Paused"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
