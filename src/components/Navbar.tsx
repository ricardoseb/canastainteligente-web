"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 font-extrabold text-xl text-slate-900 group">
          <Image
            src="/app_icon.png"
            alt="Logo Canasta Inteligente"
            width={38}
            height={38}
            className="rounded-lg shadow-xs group-hover:scale-105 transition-transform"
          />
          <span>
            Canasta<span className="text-emerald-600">Inteligente</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a href="#app-en-vivo" className="hover:text-[#0B6B57] transition-colors">La App en Vivo</a>
          <a href="#comparador" className="hover:text-[#0B6B57] transition-colors">Comparador</a>
          <a href="#dos-tiendas" className="hover:text-[#0B6B57] transition-colors">Canasta 2 Tiendas</a>
          <a href="#chef-ia" className="hover:text-[#0B6B57] transition-colors">Asistente 3 Pills</a>
          <a href="#faq" className="hover:text-[#0B6B57] transition-colors">FAQ</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#descargar"
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all"
          >
            <span>Descargar App</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-emerald-600 focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-3 shadow-lg">
          <a
            href="#app-en-vivo"
            onClick={() => setMobileOpen(false)}
            className="text-slate-700 font-semibold py-1.5 hover:text-[#0B6B57]"
          >
            La App en Vivo
          </a>
          <a
            href="#comparador"
            onClick={() => setMobileOpen(false)}
            className="text-slate-700 font-semibold py-1.5 hover:text-[#0B6B57]"
          >
            Comparador
          </a>
          <a
            href="#dos-tiendas"
            onClick={() => setMobileOpen(false)}
            className="text-slate-700 font-semibold py-1.5 hover:text-[#0B6B57]"
          >
            Canasta 2 Tiendas
          </a>
          <a
            href="#chef-ia"
            onClick={() => setMobileOpen(false)}
            className="text-slate-700 font-semibold py-1.5 hover:text-[#0B6B57]"
          >
            Asistente 3 Pills
          </a>
          <a
            href="#faq"
            onClick={() => setMobileOpen(false)}
            className="text-slate-700 font-semibold py-1.5 hover:text-[#0B6B57]"
          >
            FAQ
          </a>
          <a
            href="#descargar"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center bg-[#0B6B57] text-white py-2.5 rounded-xl font-bold shadow-xs"
          >
            Descargar App en Google Play
          </a>
        </div>
      )}
    </header>
  );
}
