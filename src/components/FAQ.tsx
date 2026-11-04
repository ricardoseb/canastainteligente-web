"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Qué supermercados compara Canasta Inteligente?",
      a: "Monitoreamos en vivo las 6 cadenas más grandes de Chile: Líder (Walmart), Jumbo (Cencosud), Santa Isabel (Cencosud), Tottus (Falabella), Unimarc (SMU) y Alvi (SMU). Incluimos precios normales, ofertas con tarjetas de fidelización (Mi Club, Puntos Cencosud, CMR, Club Ahorro) y precios por unidad de medida ($/kilo, $/litro)."
    },
    {
      q: "¿La aplicación es 100% gratuita?",
      a: "Sí, la aplicación es y seguirá siendo 100% gratuita para el consumidor final. Nuestro objetivo es democratizar la información de precios y ayudar a las familias chilenas a hacer rendir su dinero frente a la inflación."
    },
    {
      q: "¿Cómo funciona el optimizador de 2 supermercados?",
      a: "Ir a más de dos supermercados suele ser impracticable por el costo del traslado y el tiempo. Nuestro algoritmo matemático evalúa las 15 parejas posibles entre las 6 cadenas y calcula la combinación exacta que maximiza el ahorro con solo dos paradas."
    },
    {
      q: "¿Cómo cuidan mi privacidad y los permisos de la cámara?",
      a: "El permiso de la cámara se utiliza única y exclusivamente para leer códigos de barra en el dispositivo. No almacenamos fotos, no grabamos rostros y no transmitimos imágenes a nuestros servidores. Puedes leer nuestra Política de Privacidad oficial para conocer todos los detalles técnicos."
    },
    {
      q: "¿Cómo funciona el Chef & Nutricionista IA?",
      a: "Es un modelo de Inteligencia Artificial entrenado con la reglamentación nutricional chilena (Sellos Minsal Ley 20.606) y recetas tradicionales. Puedes pedirle platos según tu presupuesto, número de personas o restricciones alimentarias, y vincular los ingredientes directo al súper más conveniente."
    }
  ];

  return (
    <section className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider block mb-1">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:text-emerald-600"
                >
                  <span>{faq.q}</span>
                  <Plus
                    className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                    {idx === 3 && (
                      <div className="mt-2">
                        <Link href="/privacidad" className="text-emerald-600 font-bold underline">
                          Ver Política de Privacidad oficial →
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
