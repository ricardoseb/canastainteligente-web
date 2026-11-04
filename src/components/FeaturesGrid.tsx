import { Camera, Tag, LineChart, Users2, MapPin, ShieldCheck } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: <Camera className="w-6 h-6 text-emerald-600" />,
      title: "Escáner de Código EAN-13",
      desc: "Apunta la cámara del celular al código de barra del producto en la góndola y averigua de inmediato si en el supermercado del frente está más barato."
    },
    {
      icon: <Tag className="w-6 h-6 text-emerald-600" />,
      title: "Sellos Ley 20.606 Minsal",
      desc: "Monitorea los octágonos negros oficiales (Azúcares, Calorías, Sodio, Grasas) y encuentra alternativas saludables con distintivo 0 Sellos."
    },
    {
      icon: <LineChart className="w-6 h-6 text-emerald-600" />,
      title: "Historial y Ofertas Reales",
      desc: "Detecta falsos descuentos gracias a nuestro registro histórico de precios en cada cadena para saber cuándo una rebaja es genuina."
    },
    {
      icon: <Users2 className="w-6 h-6 text-emerald-600" />,
      title: "Listas Compartidas",
      desc: "Sincroniza la lista de compras con tu pareja o familia para que cualquiera agregue lo que falta en la casa en tiempo real."
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      title: "Precios por Comuna",
      desc: "Revisa la disponibilidad y precios de las sucursales más cercanas a tu domicilio en Santiago y regiones."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Sin Publicidad Invasiva",
      desc: "Tu privacidad es lo primero. No vendemos tus datos a terceros ni te mostramos anuncios molestos mientras estás en el supermercado."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider block mb-1">
          Funcionalidades
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
          Diseñada para el consumidor inteligente
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          Todas las herramientas que necesitas para cuidar las finanzas de tu hogar en tu bolsillo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
              {f.icon}
            </div>
            <h3 className="text-base font-extrabold text-slate-900 mb-2">{f.title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
