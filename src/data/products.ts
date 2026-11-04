export interface StorePrice {
  super: string;
  badgeClass: string;
  bgHex: string;
  textColor: string;
  price: number;
  unit: string;
  club: string;
  isOffer: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  sello: string;
  prices: StorePrice[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "leche",
    name: "Leche Colun Semidescremada 1 L",
    subtitle: "Lácteos · Envase Tetra Top 1 Litro",
    icon: "🥛",
    sello: "✓ 0 SELLOS (Libre)",
    prices: [
      { super: "Líder", badgeClass: "bg-[#0071CE]", bgHex: "#0071CE", textColor: "#fff", price: 1190, unit: "$1.190/L", club: "Mi Club Líder", isOffer: true },
      { super: "Jumbo", badgeClass: "bg-[#0D8239]", bgHex: "#0D8239", textColor: "#fff", price: 1190, unit: "$1.190/L", club: "Puntos Cencosud", isOffer: false },
      { super: "Santa Isabel", badgeClass: "bg-[#E31B23]", bgHex: "#E31B23", textColor: "#fff", price: 1150, unit: "$1.150/L", club: "Puntos Cencosud", isOffer: false },
      { super: "Tottus", badgeClass: "bg-[#67B024]", bgHex: "#67B024", textColor: "#111", price: 1250, unit: "$1.250/L", club: "CMR Falabella", isOffer: true },
      { super: "Unimarc", badgeClass: "bg-[#ED1C24]", bgHex: "#ED1C24", textColor: "#fff", price: 1090, unit: "$1.090/L", club: "Club Ahorro", isOffer: true },
      { super: "Alvi", badgeClass: "bg-[#E85D04]", bgHex: "#E85D04", textColor: "#fff", price: 1250, unit: "$1.250/L", club: "Club Alvi", isOffer: false }
    ]
  },
  {
    id: "aceite",
    name: "Aceite Belmont Vegetal 900 ml",
    subtitle: "Despensa y Abarrotes · Botella 900 ml",
    icon: "🌻",
    sello: "✓ 0 SELLOS (Libre)",
    prices: [
      { super: "Líder", badgeClass: "bg-[#0071CE]", bgHex: "#0071CE", textColor: "#fff", price: 1690, unit: "$1.878/L", club: "Mi Club Líder", isOffer: true },
      { super: "Jumbo", badgeClass: "bg-[#0D8239]", bgHex: "#0D8239", textColor: "#fff", price: 1950, unit: "$2.167/L", club: "Puntos Cencosud", isOffer: false },
      { super: "Santa Isabel", badgeClass: "bg-[#E31B23]", bgHex: "#E31B23", textColor: "#fff", price: 1890, unit: "$2.100/L", club: "Puntos Cencosud", isOffer: false },
      { super: "Tottus", badgeClass: "bg-[#67B024]", bgHex: "#67B024", textColor: "#111", price: 1750, unit: "$1.944/L", club: "CMR Falabella", isOffer: false },
      { super: "Unimarc", badgeClass: "bg-[#ED1C24]", bgHex: "#ED1C24", textColor: "#fff", price: 1890, unit: "$2.100/L", club: "Club Ahorro", isOffer: false },
      { super: "Alvi", badgeClass: "bg-[#E85D04]", bgHex: "#E85D04", textColor: "#fff", price: 1590, unit: "$1.767/L", club: "Club Alvi", isOffer: true }
    ]
  },
  {
    id: "carne",
    name: "Carne Molida Vacuno Especial 500 g",
    subtitle: "Carnes Frescas · Bandeja al vacío 500 g",
    icon: "🥩",
    sello: "✓ 0 SELLOS (Libre)",
    prices: [
      { super: "Líder", badgeClass: "bg-[#0071CE]", bgHex: "#0071CE", textColor: "#fff", price: 4790, unit: "$9.580/kg", club: "Mi Club Líder", isOffer: false },
      { super: "Jumbo", badgeClass: "bg-[#0D8239]", bgHex: "#0D8239", textColor: "#fff", price: 5690, unit: "$11.380/kg", club: "Puntos Cencosud", isOffer: false },
      { super: "Santa Isabel", badgeClass: "bg-[#E31B23]", bgHex: "#E31B23", textColor: "#fff", price: 4690, unit: "$9.380/kg", club: "Puntos Cencosud", isOffer: true },
      { super: "Tottus", badgeClass: "bg-[#67B024]", bgHex: "#67B024", textColor: "#111", price: 4890, unit: "$9.780/kg", club: "CMR Falabella", isOffer: false },
      { super: "Unimarc", badgeClass: "bg-[#ED1C24]", bgHex: "#ED1C24", textColor: "#fff", price: 4990, unit: "$9.980/kg", club: "Club Ahorro", isOffer: false },
      { super: "Alvi", badgeClass: "bg-[#E85D04]", bgHex: "#E85D04", textColor: "#fff", price: 4290, unit: "$8.580/kg", club: "Club Alvi", isOffer: true }
    ]
  },
  {
    id: "arroz",
    name: "Arroz Tucapel Grado 1 Gran Selección 1 kg",
    subtitle: "Despensa · Grano Largo Pregraneado 1 kg",
    icon: "🍚",
    sello: "✓ 0 SELLOS (Libre)",
    prices: [
      { super: "Líder", badgeClass: "bg-[#0071CE]", bgHex: "#0071CE", textColor: "#fff", price: 1590, unit: "$1.590/kg", club: "Mi Club Líder", isOffer: true },
      { super: "Jumbo", badgeClass: "bg-[#0D8239]", bgHex: "#0D8239", textColor: "#fff", price: 1890, unit: "$1.890/kg", club: "Puntos Cencosud", isOffer: false },
      { super: "Santa Isabel", badgeClass: "bg-[#E31B23]", bgHex: "#E31B23", textColor: "#fff", price: 1790, unit: "$1.790/kg", club: "Puntos Cencosud", isOffer: false },
      { super: "Tottus", badgeClass: "bg-[#67B024]", bgHex: "#67B024", textColor: "#111", price: 1650, unit: "$1.650/kg", club: "CMR Falabella", isOffer: false },
      { super: "Unimarc", badgeClass: "bg-[#ED1C24]", bgHex: "#ED1C24", textColor: "#fff", price: 1690, unit: "$1.690/kg", club: "Club Ahorro", isOffer: false },
      { super: "Alvi", badgeClass: "bg-[#E85D04]", bgHex: "#E85D04", textColor: "#fff", price: 1490, unit: "$1.490/kg", club: "Club Alvi", isOffer: true }
    ]
  },
  {
    id: "huevos",
    name: "Huevos Blancos Extra Grandes 12 un.",
    subtitle: "Huevos y Desayuno · Bandeja 12 unidades",
    icon: "🥚",
    sello: "✓ 0 SELLOS (Libre)",
    prices: [
      { super: "Líder", badgeClass: "bg-[#0071CE]", bgHex: "#0071CE", textColor: "#fff", price: 2990, unit: "$249 c/u", club: "Mi Club Líder", isOffer: true },
      { super: "Jumbo", badgeClass: "bg-[#0D8239]", bgHex: "#0D8239", textColor: "#fff", price: 3490, unit: "$291 c/u", club: "Puntos Cencosud", isOffer: false },
      { super: "Santa Isabel", badgeClass: "bg-[#E31B23]", bgHex: "#E31B23", textColor: "#fff", price: 3290, unit: "$274 c/u", club: "Puntos Cencosud", isOffer: false },
      { super: "Tottus", badgeClass: "bg-[#67B024]", bgHex: "#67B024", textColor: "#111", price: 3190, unit: "$266 c/u", club: "CMR Falabella", isOffer: false },
      { super: "Unimarc", badgeClass: "bg-[#ED1C24]", bgHex: "#ED1C24", textColor: "#fff", price: 3290, unit: "$274 c/u", club: "Club Ahorro", isOffer: false },
      { super: "Alvi", badgeClass: "bg-[#E85D04]", bgHex: "#E85D04", textColor: "#fff", price: 2790, unit: "$233 c/u", club: "Club Alvi", isOffer: true }
    ]
  }
];

export function formatCLP(amount: number): string {
  return "$" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
