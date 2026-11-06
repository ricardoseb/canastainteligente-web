import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  ShoppingCart,
  CreditCard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 max-w-6xl mx-auto text-center overflow-hidden">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 bg-[#DCF0E6] text-[#0B6B57] border border-[#0B6B57]/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold mb-6">
        <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>Comparador oficial de las 6 cadenas de supermercados de Chile</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#14221D] tracking-tight leading-[1.08] mb-5 max-w-4xl mx-auto">
        Deja de{" "}
        <span className="text-[#0B6B57] underline decoration-[#0B6B57]/25 underline-offset-4">
          pagar de más
        </span>{" "}
        en el supermercado
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8">
        Compara en tiempo real en{" "}
        <strong className="text-[#14221D]">
          Líder, Jumbo, Santa Isabel, Tottus, Unimarc y Alvi
        </strong>{" "}
        según tu tarjeta o todo medio de pago, divide tu compra en 2 tiendas y{" "}
        <strong className="text-[#0B6B57]">
          arma tu carrito web automáticamente
        </strong>{" "}
        para que solo entres a pagar.
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8"
        id="descargar"
      >
        <a
          href="#app-en-vivo"
          className="cursor-pointer inline-flex items-center gap-3.5 bg-[#0E4A3E] hover:bg-[#0B6B57] text-white px-7 py-3.5 rounded-2xl font-bold shadow-md transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6B57]"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          <div className="text-left leading-tight">
            <div className="text-[10px] tracking-wider uppercase text-emerald-200">
              Disponible en
            </div>
            <div className="text-base font-extrabold">Google Play</div>
          </div>
        </a>

        <a
          href="#app-en-vivo"
          className="cursor-pointer inline-flex items-center gap-2 bg-white hover:bg-[#DCF0E6]/50 text-[#14221D] border border-slate-300 hover:border-[#0B6B57] px-6 py-3.5 rounded-2xl font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6B57]"
        >
          <span>Explorar Pantallas de la App</span>
          <ArrowRight className="w-4 h-4 text-[#0B6B57]" aria-hidden="true" />
        </a>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-700 mb-12">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-[#0B6B57]" aria-hidden="true" />
          <span>100% Gratuita</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShoppingCart className="w-4 h-4 text-[#0B6B57]" aria-hidden="true" />
          <span>Auto-Carro Web Integrado</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CreditCard className="w-4 h-4 text-[#0B6B57]" aria-hidden="true" />
          <span>Precios Reales con y sin Tarjetas</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#0B6B57]" aria-hidden="true" />
          <span>Sellos Minsal Ley 20.606</span>
        </div>
      </div>

      {/* 3-Phone Real App Showcase (Piya-inspired layout with real Flutter screenshots) */}
      <div className="relative max-w-5xl mx-auto pt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-end justify-items-center">
          {/* Left Phone: Ficha & Sellos Ley 20.606 */}
          <div className="w-[260px] sm:w-[275px] md:translate-y-4 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-2.5 inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-extrabold text-[#14221D] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0B6B57]" aria-hidden="true" />
              <span>Escáner EAN y Sellos Ley 20.606</span>
            </div>
            <div className="bg-[#14221D] p-2.5 rounded-[2.2rem] shadow-xl border border-slate-800">
              <div className="w-20 h-3.5 bg-[#14221D] rounded-b-xl mx-auto -mb-2 relative z-10" />
              <div className="rounded-[1.75rem] overflow-hidden bg-[#F7F2EA]">
                <Image
                  src="/screens/screen-detalle.png"
                  alt="Pantalla real de Canasta Inteligente mostrando sellos negros Ley 20.606 y mejor precio por unidad"
                  width={780}
                  height={1688}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Center Phone (Featured): Mi Canasta + Tarjetas + Auto-Carro */}
          <div className="w-[285px] sm:w-[305px] z-10 transition-transform duration-300 hover:-translate-y-1.5">
            <div className="mb-2.5 inline-flex items-center gap-1.5 bg-[#0E4A3E] text-white px-3.5 py-1 rounded-full text-xs font-extrabold shadow-xs">
              <CreditCard className="w-3.5 h-3.5 text-[#F2A81D]" aria-hidden="true" />
              <span>Canasta con Tarjetas y Auto-Carro</span>
            </div>
            <div className="bg-[#14221D] p-3 rounded-[2.4rem] shadow-2xl ring-2 ring-[#0B6B57]/40">
              <div className="w-24 h-4 bg-[#14221D] rounded-b-xl mx-auto -mb-2 relative z-10" />
              <div className="rounded-[1.9rem] overflow-hidden bg-[#F7F2EA]">
                <Image
                  src="/screens/screen-canasta.png"
                  alt="Pantalla real de Mi Canasta comparando precios en Líder, Tottus, Jumbo y Unimarc con filtro de tarjetas"
                  width={780}
                  height={1688}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Phone: Auto-Carro WebView */}
          <div className="w-[260px] sm:w-[275px] md:translate-y-4 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-2.5 inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-extrabold text-[#14221D] shadow-xs">
              <ShoppingCart className="w-3.5 h-3.5 text-[#0B6B57]" aria-hidden="true" />
              <span>Armamos el Carro Web por Ti</span>
            </div>
            <div className="bg-[#14221D] p-2.5 rounded-[2.2rem] shadow-xl border border-slate-800">
              <div className="w-20 h-3.5 bg-[#14221D] rounded-b-xl mx-auto -mb-2 relative z-10" />
              <div className="rounded-[1.75rem] overflow-hidden bg-[#F7F2EA]">
                <Image
                  src="/screens/screen-autocarro.png"
                  alt="Pantalla real del navegador integrado que arma el carrito automáticamente en la web del supermercado"
                  width={780}
                  height={1688}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
