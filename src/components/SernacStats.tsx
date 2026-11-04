import { ExternalLink } from "lucide-react";

export function SernacStats() {
  return (
    <section className="bg-slate-900 text-white py-16 px-4 sm:px-6" id="estadisticas">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-wider block mb-2">
            Impacto en el bolsillo chileno
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            El mismo producto. Distinto precio.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            En Chile no existe el &quot;supermercado más barato&quot; permanente. Las cadenas rotan sus ofertas 
            y los estudios del SERNAC comprueban que comprar sin comparar cuesta miles de pesos al mes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-xs hover:border-emerald-500/50 transition-all">
            <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight mb-2">
              $263 mil
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-2">
              Gasto mensual promedio
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Lo que gasta en promedio un hogar chileno cada mes en alimentación y compras de supermercado (INE / SERNAC).
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-xs hover:border-emerald-500/50 transition-all">
            <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight mb-2">
              24,6%
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-2">
              Diferencia entre cadenas
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Brecha de precio encontrada por el SERNAC al cotizar exactamente los mismos productos en distintas tiendas.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-xs hover:border-emerald-500/50 transition-all">
            <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight mb-2">
              +$64.000
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-2">
              Ahorro familiar mensual
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              El dinero que queda en tu bolsillo cada mes al optimizar tu canasta en 2 supermercados con Canasta Inteligente.
            </p>
          </div>
        </div>

        {/* Citations */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span>Fuentes oficiales:</span>
          <a
            href="https://www.sernac.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 underline underline-offset-2"
          >
            <span>Estudio de Canastas Básicas SERNAC</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span>·</span>
          <a
            href="https://www.sernac.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 underline underline-offset-2"
          >
            <span>Comparación de Precios y Ley de Rotulación 20.606</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
