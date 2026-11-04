import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#049D71",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://canastainteligente.cl"),
  title: "Canasta Inteligente · Comparador de Supermercados y Chef IA de Chile",
  description: "Compara precios en vivo en Líder, Jumbo, Santa Isabel, Tottus, Unimarc y Alvi. Optimiza tus compras dividiendo en 2 tiendas y cocina saludable con nuestro Chef IA.",
  keywords: [
    "comparar precios supermercados chile",
    "lider",
    "jumbo",
    "unimarc",
    "tottus",
    "santa isabel",
    "alvi",
    "ahorro supermercado",
    "sernac",
    "canasta basica",
    "chef ia",
    "sellos negros minsal"
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/app_icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://canastainteligente.cl",
    title: "Canasta Inteligente · Deja de pagar de más en el súper",
    description: "El comparador de supermercados en Chile que optimiza tus compras en 2 tiendas y te recomienda recetas con Chef IA. Ahorra hasta 25% mensual.",
    images: [
      {
        url: "/app_icon.png",
        width: 512,
        height: 512,
        alt: "Logo Canasta Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canasta Inteligente · Comparador de Supermercados de Chile",
    description: "Compara en tiempo real los 6 principales supermercados chilenos y ahorra en grande.",
    images: ["/app_icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-slate-900 bg-white">
        {children}
      </body>
    </html>
  );
}
