"use client";

import { useState } from "react";
import { PRODUCTS_DATA, formatCLP } from "@/data/products";
import { DollarSign } from "lucide-react";

export function PriceComparator() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const currentProduct = PRODUCTS_DATA[selectedIdx];

  // Calculate min & max price
  let minPrice = Infinity;
  let maxPrice = -Infinity;
  let bestStore = "";
  let worstStore = "";

  currentProduct.prices.forEach((p) => {
    if (p.price < minPrice) {
      minPrice = p.price;
      bestStore = p.super;
    }
    if (p.price > maxPrice) {
      maxPrice = p.price;
      worstStore = p.super;
    }
  });

  const diff = maxPrice - minPrice;
  const pct = ((diff / maxPrice) * 100).toFixed(1);

  return (
    <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto" id="comparador">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider block mb-1">
          Demostración en vivo
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
          Compara antes de llegar a la caja
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          El mismo producto tiene valores drásticamente distintos según la cadena. 
          Haz clic en cada categoría para ver los precios actualizados.
        </p>
      </div>

      {/* Main Comparison Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Tabs */}
        <div className="flex bg-slate-100 border-b border-slate-200 overflow-x-auto scrollbar-none">
          {PRODUCTS_DATA.map((prod, idx) => (
            <button
              key={prod.id}
              onClick={() => setSelectedIdx(idx)}
              className={`flex-1 min-w-[140px] py-3.5 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                selectedIdx === idx
                  ? "bg-white text-emerald-600 border-emerald-600 shadow-2xs"
                  : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span>{prod.icon}</span>
              <span>{prod.name.split(" ")[0]} {prod.name.split(" ")[1]}</span>
            </button>
          ))}
        </div>

        {/* Product Details Bar */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                {currentProduct.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {currentProduct.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {currentProduct.subtitle}
                </p>
                <div className="mt-1">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full">
                    {currentProduct.sello}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
              <span className="block text-xs font-semibold text-slate-500">Mejor precio hoy</span>
              <strong className="text-2xl sm:text-3xl font-black text-emerald-600">
                {formatCLP(minPrice)}
              </strong>
            </div>
          </div>

          {/* Grid of 6 Supermarkets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
            {currentProduct.prices.map((item) => {
              const isBest = item.price === minPrice;
              return (
                <div
                  key={item.super}
                  className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isBest
                      ? "border-emerald-500 bg-emerald-50/40 shadow-md ring-1 ring-emerald-500"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      style={{ backgroundColor: item.bgHex, color: item.textColor }}
                      className="text-xs font-black px-2.5 py-1 rounded-md tracking-wide"
                    >
                      {item.super.toUpperCase()}
                    </span>
                    {isBest && (
                      <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-wider animate-pulse">
                        MEJOR PRECIO
                      </span>
                    )}
                  </div>

                  <div>
                    <div className={`text-2xl font-black ${isBest ? "text-emerald-700" : "text-slate-900"}`}>
                      {formatCLP(item.price)}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {item.unit}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
                      <span>✓</span>
                      <span>{item.club}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Savings Callout Banner */}
          <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-amber-900">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <DollarSign className="w-5 h-5 text-amber-600 shrink-0" />
              <span>
                En este producto ahorras <strong>{formatCLP(diff)}</strong> por unidad (<strong>{pct}%</strong> menos) comprando en <strong>{bestStore}</strong> en lugar de <strong>{worstStore}</strong>.
              </span>
            </div>
            <span className="bg-amber-500 text-white text-xs font-black px-3 py-1 rounded-full whitespace-nowrap self-end sm:self-auto shadow-2xs">
              Ahorras hasta {pct}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
