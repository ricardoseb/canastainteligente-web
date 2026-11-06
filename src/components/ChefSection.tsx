"use client";

import { useState } from "react";
import { CHEF_PROMPTS } from "@/data/chefPrompts";
import { ShoppingCart, PiggyBank, Flame, Utensils } from "lucide-react";

export function ChefSection() {
  const [selectedKey, setSelectedKey] = useState("ahorro");
  const prompt = CHEF_PROMPTS[selectedKey] || CHEF_PROMPTS.cazuela;

  return (
    <section className="bg-[#DCF0E6]/45 border-y border-[#0B6B57]/15 py-16 px-4 sm:px-6" id="chef-ia">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Description & 3 Pills */}
        <div>
          <span className="text-[#0B6B57] font-extrabold text-xs uppercase tracking-wider block mb-2">
            Asistente de Compra con 3 Pills
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#14221D] tracking-tight leading-tight mb-4">
            Ahorro, Calorías Ley 20.606 y Modo Chef en un solo lugar
          </h2>
          <p className="text-slate-700 text-base leading-relaxed mb-6">
            Nuestro asistente inteligente conoce los precios reales, las calorías por 100g y los sellos negros de tu canasta. Elige arriba del chat entre las <strong>3 Pills de especialidad</strong> según lo que busques:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
            <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-2.5">
              <PiggyBank className="w-5 h-5 text-[#0B6B57] shrink-0" aria-hidden="true" />
              <div className="text-xs">
                <strong className="block text-[#14221D]">1. Pill Ahorro</strong>
                <span className="text-slate-600">Optimiza tu canasta</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-[#0B6B57] shrink-0" aria-hidden="true" />
              <div className="text-xs">
                <strong className="block text-[#14221D]">2. Pill Calorías</strong>
                <span className="text-slate-600">Kcal y 0 sellos</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-2.5">
              <Utensils className="w-5 h-5 text-[#0B6B57] shrink-0" aria-hidden="true" />
              <div className="text-xs">
                <strong className="block text-[#14221D]">3. Pill Chef</strong>
                <span className="text-slate-600">Recetas a canasta</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {Object.values(CHEF_PROMPTS).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedKey(item.id)}
                className={`cursor-pointer px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors ${
                  selectedKey === item.id
                    ? "bg-[#0E4A3E] text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-300 hover:border-[#0B6B57]"
                }`}
              >
                {item.chipLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Chat Mockup Frame */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl flex flex-col gap-4">
          {/* User Message */}
          <div className="self-end bg-[#0E4A3E] text-white font-semibold px-4 py-3 rounded-2xl rounded-br-xs max-w-[85%] text-xs sm:text-sm shadow-2xs">
            {prompt.userPrompt}
          </div>

          {/* Assistant Response */}
          <div className="self-start bg-[#F7F2EA] text-[#14221D] border border-[#EAE3D6] px-4 py-3.5 rounded-2xl rounded-bl-xs max-w-[95%] text-xs sm:text-sm space-y-3">
            <div className="font-extrabold text-[#0B6B57] flex items-center gap-1.5">
              <span>{prompt.chefTitle}</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {prompt.chefIntro}
            </p>

            {/* Ingredients Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2">
              <span className="font-bold text-slate-800 text-xs block">
                Productos e ingredientes en el catálogo:
              </span>
              <ul className="space-y-1 text-slate-700 text-xs list-disc list-inside">
                {prompt.ingredients.map((ing, i) => (
                  <li key={i}>
                    <strong>{ing.item}</strong> ({ing.store}: {ing.price})
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-slate-100 text-[#0B6B57] font-extrabold text-xs">
                {prompt.summary}
              </div>
            </div>

            <a
              href="#app-en-vivo"
              className="cursor-pointer w-full bg-[#0B6B57] hover:bg-[#0E4A3E] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <ShoppingCart className="w-4 h-4" aria-hidden="true" />
              <span>Cargar a Mi Canasta y Armar Carro</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
