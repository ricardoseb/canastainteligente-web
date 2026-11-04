import { ArrowRight, Sparkles } from "lucide-react";

export function TwoStoreSection() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto" id="dos-tiendas">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Description */}
        <div>
          <span className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider block mb-2">
            Innovación exclusiva
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Canasta Inteligente: Ahorro Dividido en 2 Supermercados
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            Recorrer 6 supermercados es imposible por tiempo y combustible. Comprar todo en uno solo es un derroche. 
            Nuestro algoritmo evalúa las <strong>15 combinaciones posibles de parejas de tiendas</strong> y divide tu lista 
            para que ahorres el máximo visitando únicamente 2 supermercados cercanos.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                1
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Arma tu lista o escanea tus productos</h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Agrega los artículos habituales de tu despensa, carnes, lácteos y limpieza.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                2
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">El optimizador divide tu compra</h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Te indica exactamente qué comprar en el Súper A (ej. Alvi) y qué en el Súper B (ej. Líder).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                3
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Ahorras más del 25% sin recorrer todo Santiago</h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Compras organizadas en 2 paradas específicas con el menor costo total comprobado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Simulation Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="text-center font-extrabold text-slate-900 text-base mb-6 pb-3 border-b border-slate-100">
            Simulación de Canasta Quincenal (28 productos)
          </div>

          {/* Option 1 */}
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-4 flex items-center justify-between mb-3.5">
            <div>
              <div className="font-bold text-slate-800 text-sm">Comprar todo en 1 solo súper</div>
              <div className="text-xs text-slate-500">Comprando toda la lista en Jumbo o Líder</div>
            </div>
            <div className="text-xl font-black text-slate-700">
              $84.990
            </div>
          </div>

          {/* Option 2: Split */}
          <div className="bg-emerald-50/70 border-2 border-emerald-500 rounded-xl p-4 flex items-center justify-between mb-4 shadow-sm">
            <div>
              <div className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                <span>Canasta Inteligente 2 Tiendas</span>
                <Sparkles className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              </div>
              <div className="text-xs text-emerald-800 font-medium">16 artículos en Alvi + 12 artículos en Líder</div>
            </div>
            <div className="text-2xl font-black text-emerald-600">
              $61.420
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="bg-amber-100/80 border border-amber-300 rounded-xl p-4 text-center">
            <span className="text-amber-900 font-extrabold text-sm sm:text-base">
              🎉 ¡Ahorras $23.570 (27,7%) en esta sola compra!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
