import { TrendingDown, Sparkles, ShieldAlert, Cpu } from "lucide-react";

export function SernacStats() {
  return (
    <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden" id="estadisticas">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Inteligencia de Mercado & Consumo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-white">
            La trampa de las ofertas: por qué ningún supermercado es el más barato
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Las cadenas de retail aplican precios cruzados: ofrecen productos gancho muy baratos en un pasillo para compensar con márgenes inflados en el resto del carro. 
            Comprar a ciegas en un solo local es la mayor fuga de presupuesto de los hogares chilenos.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-md hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight mb-2">
              +$28.500
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-2">
              Ahorro promedio por compra familiar
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Monto promedio recuperado en compras quincenales al comprar la despensa al por mayor y los productos frescos en cadena tradicional.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-md hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight mb-2">
              15 Parejas
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-2">
              Optimizadas en segundos
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              En vez de recorrer 6 tiendas, nuestro algoritmo evalúa las 15 combinaciones de dos tiendas posibles y te entrega la ruta con el menor costo total.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-md hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight mb-2">
              Hasta 34%
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-2">
              Dispersión en el mismo producto
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Diferencia máxima comprobada entre cadenas competidoras en productos idénticos de marcas como Colun, Tucapel, Belmont o Soprole.
            </p>
          </div>
        </div>

        {/* Methodology Banner */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="font-semibold text-slate-300">Metodología transparente:</span>
          <span>Monitoreo diario de las 6 cadenas chilenas</span>
          <span className="hidden sm:inline">·</span>
          <span>Comparación estricta por unidad de medida ($/kilo y $/litro)</span>
          <span className="hidden sm:inline">·</span>
          <span>Filtro de sellos negros Ley 20.606</span>
        </div>
      </div>
    </section>
  );
}
