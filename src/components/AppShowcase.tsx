"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Store,
  CreditCard,
  Split,
  ShoppingCart,
  Sparkles,
  ScanBarcode,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface AppScreenItem {
  id: string;
  badge: string;
  tabLabel: string;
  title: string;
  description: string;
  bullets: string[];
  screenshot: string;
  alt: string;
  highlightStat: string;
}

const APP_SCREENS: AppScreenItem[] = [
  {
    id: "comparador",
    badge: "1. Comparador Multisupermercado",
    tabLabel: "Comparador",
    title: "Compara las 6 cadenas de Chile en una sola vista",
    description:
      "Busca por producto, marca o código EAN y revisa de inmediato en qué supermercado está más barato hoy, junto con un banner en vivo que calcula dónde conviene comprar tu canasta actual.",
    bullets: [
      "Monitoreo de Líder, Jumbo, Santa Isabel, Tottus, Unimarc y Alvi.",
      "Ordena por menor precio total, menor costo por kg/litro o mayor ahorro.",
      "Filtro rápido de productos «0 sellos» con tabla nutricional verificada.",
    ],
    screenshot: "/screens/screen-comparador.png",
    alt: "Captura real de la pantalla Comparador de Precios en Canasta Inteligente",
    highlightStat: "1.083 productos cruzados por código EAN-13",
  },
  {
    id: "canasta-tarjetas",
    badge: "2. Tarjetas Reales vs Todo Medio de Pago",
    tabLabel: "Mis Tarjetas",
    title: "Precios 100% reales según tus tarjetas de descuento",
    description:
      "Nunca inflamos ni inventamos descuentos. Si no marcas una tarjeta, calculamos tu canasta estrictamente a todo medio de pago; si activas CMR, Cencosud, Lider Bci o Club Unimarc, aplicamos los precios club verificados en catálogo.",
    bullets: [
      "Selector en un toque: Todo medio de pago, CMR Falabella, Club Unimarc, Cencosud, Lider Bci y Club Alvi.",
      "Guía integrada de días de descuento bancario y condiciones por cadena.",
      "Compara exactamente cuánto pagas con o sin tarjeta antes de ir a la caja.",
    ],
    screenshot: "/screens/screen-canasta.png",
    alt: "Captura real de Mi Canasta con selector de tarjetas y clubs de descuento",
    highlightStat: "Cero precios falsos o descuentos estimados",
  },
  {
    id: "dos-cadenas",
    badge: "3. Optimizador en 2 Supermercados",
    tabLabel: "Plan 2 Cadenas",
    title: "El balance ideal entre comodidad y ahorro máximo",
    description:
      "Nuestro algoritmo evalúa las 15 combinaciones posibles de parejas de supermercados y divide tu lista en solo 2 tiendas para capturar las mejores ofertas de cada una sin recorrer toda la ciudad.",
    bullets: [
      "Desglose exacto de qué artículos comprar en la Tienda A y cuáles en la Tienda B.",
      "Avisa con transparencia si algún producto no tiene stock en una cadena.",
      "Botón independiente para armar el carrito web de cada una de las 2 tiendas.",
    ],
    screenshot: "/screens/screen-2cadenas.png",
    alt: "Captura real del plan dividido en 2 cadenas de supermercados",
    highlightStat: "Evalúa las 15 parejas posibles al instante",
  },
  {
    id: "autocarro",
    badge: "4. Auto-Carro Web Integrado",
    tabLabel: "Auto-Carro Web",
    title: "Armamos el carrito en la web del súper por ti",
    description:
      "Olvídate de buscar producto por producto en la web del supermercado. Con nuestro navegador integrado solo inicias sesión con tu cuenta, confirmas tu dirección y la app carga todas tus unidades automáticamente.",
    bullets: [
      "Corre 100% en tu teléfono dentro de tu propia sesión segura (tus claves nunca salen de tu celular).",
      "Modo automático o modo asistido paso a paso con lista de control en vivo.",
      "Al terminar te deja directamente en el resumen del carro listo para pagar.",
    ],
    screenshot: "/screens/screen-autocarro.png",
    alt: "Captura real del asistente de Auto-Carro Web cargando productos en Líder",
    highlightStat: "Solo inicias sesión y pagas en el súper elegido",
  },
  {
    id: "asistente-pills",
    badge: "5. Asistente IA con 3 Pills",
    tabLabel: "Asistente 3 Pills",
    title: "Ahorro, Calorías Ley 20.606 y Modo Chef en un toque",
    description:
      "Un asistente inteligente conectado a los productos, precios y sellos reales de tu canasta, organizado en 3 Pills especializadas según tu objetivo del día.",
    bullets: [
      "Pill Ahorro: analiza tu canasta y sugiere formatos por kg/L o marcas más baratas.",
      "Pill Calorías: calcula kcal por porción y recomienda alternativas 0 sellos.",
      "Pill Chef: crea recetas económicas y carga los ingredientes directo al comparador.",
    ],
    screenshot: "/screens/screen-asistente.png",
    alt: "Captura real del Asistente de Compra con las 3 Pills: Ahorro, Calorías y Chef",
    highlightStat: "Consultas por texto o voz (Push-to-Talk)",
  },
  {
    id: "sellos-ley",
    badge: "6. Escáner EAN-13 y Ley 20.606",
    tabLabel: "Sellos Minsal",
    title: "Octágonos oficiales y tabla nutricional verificada",
    description:
      "Escanea cualquier código de barras en el pasillo del supermercado para ver su precio por kilo o litro y los sellos oficiales del Ministerio de Salud.",
    bullets: [
      "Visualiza octágonos ALTO EN Calorías, Azúcares, Sodio y Grasas Saturadas.",
      "Si un producto aún no tiene ficha verificada, jamás lo mostramos falsamente como «0 sellos».",
      "Compara aportes nutricionales cada 100 g o 100 ml antes de comprar.",
    ],
    screenshot: "/screens/screen-detalle.png",
    alt: "Captura real de la ficha de producto con sellos negros Ley 20.606",
    highlightStat: "Cumplimiento estricto Ley 20.606 de Chile",
  },
];

export function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = APP_SCREENS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? APP_SCREENS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === APP_SCREENS.length - 1 ? 0 : prev + 1));
  };

  const iconFor = (id: string) => {
    switch (id) {
      case "comparador":
        return <Store className="w-4 h-4 shrink-0" aria-hidden="true" />;
      case "canasta-tarjetas":
        return <CreditCard className="w-4 h-4 shrink-0" aria-hidden="true" />;
      case "dos-cadenas":
        return <Split className="w-4 h-4 shrink-0" aria-hidden="true" />;
      case "autocarro":
        return <ShoppingCart className="w-4 h-4 shrink-0" aria-hidden="true" />;
      case "asistente-pills":
        return <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />;
      default:
        return <ScanBarcode className="w-4 h-4 shrink-0" aria-hidden="true" />;
    }
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 max-w-6xl mx-auto"
      id="app-en-vivo"
      aria-labelledby="showcase-heading"
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-[#0B6B57] font-extrabold text-xs uppercase tracking-wider block mb-1.5">
          Capturas reales de la aplicación
        </span>
        <h2
          id="showcase-heading"
          className="text-3xl sm:text-4xl font-black text-[#14221D] tracking-tight mb-3"
        >
          Conoce Canasta Inteligente por dentro
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          Explora cada una de las pantallas reales de nuestra aplicación: desde
          el comparador por medio de pago hasta el armado automático del carrito
          web en tu supermercado favorito.
        </p>
      </div>

      {/* Interactive Tabs Bar */}
      <div
        role="tablist"
        aria-label="Pantallas de la aplicación Canasta Inteligente"
        className="flex flex-wrap items-center justify-center gap-2 mb-10"
      >
        {APP_SCREENS.map((item, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6B57] ${
                isSelected
                  ? "bg-[#0E4A3E] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-300 hover:border-[#0B6B57] hover:text-[#0B6B57]"
              }`}
            >
              {iconFor(item.id)}
              <span>{item.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Main Showcase Panel */}
      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Column: Feature Details */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 bg-[#DCF0E6] text-[#0B6B57] px-3.5 py-1.5 rounded-full text-xs font-extrabold">
            {iconFor(current.id)}
            <span>{current.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#14221D] tracking-tight leading-tight">
            {current.title}
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {current.description}
          </p>

          <ul className="space-y-3 pt-1">
            {current.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-medium"
              >
                <CheckCircle2
                  className="w-5 h-5 text-[#0B6B57] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
            <div className="bg-[#F7F2EA] border border-[#EAE3D6] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#0E4A3E]">
              {current.highlightStat}
            </div>

            {/* Accessible Prev / Next Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Pantalla anterior"
                className="cursor-pointer p-2.5 rounded-xl border border-slate-300 bg-white hover:border-[#0B6B57] hover:text-[#0B6B57] text-slate-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <span className="text-xs font-bold text-slate-500 px-2">
                {activeIndex + 1} / {APP_SCREENS.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Siguiente pantalla"
                className="cursor-pointer p-2.5 rounded-xl border border-slate-300 bg-white hover:border-[#0B6B57] hover:text-[#0B6B57] text-slate-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Real Phone Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-[270px] sm:w-[295px] bg-[#14221D] p-3 rounded-[2.4rem] shadow-2xl border border-slate-800">
            <div className="w-24 h-4 bg-[#14221D] rounded-b-xl mx-auto -mb-2 relative z-10" />
            <div className="rounded-[1.9rem] overflow-hidden bg-[#F7F2EA]">
              <Image
                key={current.screenshot}
                src={current.screenshot}
                alt={current.alt}
                width={780}
                height={1688}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
