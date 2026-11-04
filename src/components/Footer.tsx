import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-10 px-4 sm:px-6 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2 font-extrabold text-base text-slate-900">
              <Image
                src="/app_icon.png"
                alt="Logo Canasta Inteligente"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span>Canasta<span className="text-emerald-600">Inteligente</span></span>
            </Link>
            <p className="text-slate-500 leading-relaxed text-xs">
              La plataforma líder de comparación de precios de supermercados y planificación nutricional inteligente para Chile 🇨🇱.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Plataforma
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#comparador" className="hover:text-emerald-600">Comparador de Precios</a></li>
              <li><a href="#dos-tiendas" className="hover:text-emerald-600">Canasta 2 Tiendas</a></li>
              <li><a href="#chef-ia" className="hover:text-emerald-600">Chef & Nutri IA</a></li>
              <li><a href="#estadisticas" className="hover:text-emerald-600">Estadísticas SERNAC</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Legal & Seguridad
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/privacidad" className="hover:text-emerald-600">Política de Privacidad</Link></li>
              <li><Link href="/privacidad#eliminacion" className="hover:text-emerald-600">Eliminación de Cuenta</Link></li>
              <li><Link href="/privacidad#seguridad" className="hover:text-emerald-600">Seguridad de Datos</Link></li>
            </ul>
          </div>

          {/* Official Contact */}
          <div>
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Contacto Oficial
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="mailto:soporte@canastainteligente.cl" className="hover:text-emerald-600 font-semibold text-emerald-700">
                  soporte@canastainteligente.cl
                </a>
              </li>
              <li>
                <a href="mailto:contacto@canastainteligente.cl" className="hover:text-emerald-600">
                  contacto@canastainteligente.cl
                </a>
              </li>
              <li className="text-slate-400">Santiago, Chile</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>© 2026 Canasta Inteligente. Todos los derechos reservados.</div>
          <div>Hecho con orgullo y dedicación para el ahorro familiar chileno 🇨🇱</div>
        </div>
      </div>
    </footer>
  );
}
