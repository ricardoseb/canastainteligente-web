import { CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-16 pb-14 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      {/* Pill */}
      <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 shadow-2xs">
        <span>🇨🇱</span>
        <span>Comparador oficial de las 6 cadenas de Chile</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-5">
        Deja de <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-4">pagar de más</span> en el súper
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
        Compara en tiempo real los precios de <strong>Líder, Jumbo, Santa Isabel, Tottus, Unimarc y Alvi</strong>. 
        Divide tus compras en las 2 tiendas más convenientes de tu barrio y cocina saludable con nuestro Chef IA.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10" id="descargar">
        {/* Google Play Button */}
        <a
          href="#descargar"
          className="inline-flex items-center gap-3.5 bg-slate-950 hover:bg-black text-white px-6 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          <div className="text-left leading-tight">
            <div className="text-[10px] tracking-wider uppercase text-slate-400">Disponible en</div>
            <div className="text-base font-bold">Google Play</div>
          </div>
        </a>

        {/* Live Demo Button */}
        <a
          href="#comparador"
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-5 py-3.5 rounded-xl font-semibold shadow-2xs hover:border-emerald-500 hover:text-emerald-600 transition-all"
        >
          <span>Ver Comparador en Vivo</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-500">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>100% Gratuita</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>6 Cadenas Chilenas</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Sellos Ley 20.606 Minsal</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Sin publicidad invasiva</span>
        </div>
      </div>
    </section>
  );
}
