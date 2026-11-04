export function SupermarketRibbon() {
  const chains = [
    { name: "LÍDER", bg: "bg-[#0071CE]", subtitle: "Walmart · Mi Club" },
    { name: "JUMBO", bg: "bg-[#0D8239]", subtitle: "Cencosud · Puntos" },
    { name: "SANTA ISABEL", bg: "bg-[#E31B23]", subtitle: "Cencosud · Puntos" },
    { name: "TOTTUS", bg: "bg-[#67B024]", textColor: "text-slate-900", subtitle: "Falabella · CMR" },
    { name: "UNIMARC", bg: "bg-[#ED1C24]", subtitle: "SMU · Club Ahorro" },
    { name: "ALVI", bg: "bg-[#E85D04]", subtitle: "SMU · Mayorista" },
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4">
          Cadenas de supermercados monitoreadas en tiempo real
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {chains.map((c) => (
            <div
              key={c.name}
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex flex-col items-center hover:-translate-y-0.5 hover:shadow-xs transition-all"
            >
              <span
                className={`${c.bg} ${c.textColor || "text-white"} text-xs font-black tracking-wide px-3 py-1 rounded-md min-w-[90px] mb-1.5`}
              >
                {c.name}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {c.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
