"use client";

import { useState } from "react";
import { CHEF_PROMPTS } from "@/data/chefPrompts";
import { ShoppingCart } from "lucide-react";

export function ChefSection() {
  const [selectedKey, setSelectedKey] = useState("cazuela");
  const prompt = CHEF_PROMPTS[selectedKey];

  return (
    <section className="bg-emerald-50/50 border-y border-emerald-100 py-16 px-4 sm:px-6" id="chef-ia">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Description & Chips */}
        <div>
          <span className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider block mb-2">
            Chef & Nutricionista IA
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Pídele recetas económicas y saludables sin sellos negros
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            ¿No sabes qué cocinar o cómo rendir tu presupuesto? Pídele una receta a nuestro asistente de Inteligencia Artificial. 
            Te armará platos balanceados respetando las advertencias nutricionales del Minsal y cargará los ingredientes más baratos a tu canasta en 1 solo toque.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {Object.values(CHEF_PROMPTS).map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedKey(item.id)}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedKey === item.id
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-300 hover:border-emerald-500"
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
          <div className="self-end bg-emerald-100 text-emerald-950 font-semibold px-4 py-3 rounded-2xl rounded-br-xs max-w-[85%] text-xs sm:text-sm shadow-2xs">
            {prompt.userPrompt}
          </div>

          {/* Chef Response */}
          <div className="self-start bg-slate-100 text-slate-800 px-4 py-3.5 rounded-2xl rounded-bl-xs max-w-[95%] text-xs sm:text-sm space-y-3">
            <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
              <span>{prompt.chefTitle}</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {prompt.chefIntro}
            </p>

            {/* Ingredients Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2">
              <span className="font-bold text-slate-800 text-xs block">
                Ingredientes al mejor precio:
              </span>
              <ul className="space-y-1 text-slate-700 text-xs list-disc list-inside">
                {prompt.ingredients.map((ing, i) => (
                  <li key={i}>
                    <strong>{ing.item}</strong> ({ing.store}: {ing.price})
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-slate-100 text-emerald-700 font-extrabold text-xs">
                {prompt.summary}
              </div>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors">
              <ShoppingCart className="w-4 h-4" />
              <span>Cargar estos ingredientes a mi Canasta</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
