export interface ChefPromptData {
  id: string;
  chipLabel: string;
  userPrompt: string;
  chefTitle: string;
  chefIntro: string;
  ingredients: { item: string; store: string; price: string }[];
  summary: string;
}

export const CHEF_PROMPTS: Record<string, ChefPromptData> = {
  ahorro: {
    id: "ahorro",
    chipLabel: "Pill Ahorro: Optimizar mi canasta",
    userPrompt: '"Analiza mi canasta actual para gastar menos sin perder calidad."',
    chefTitle: "Asistente · Pill Ahorro y Precios",
    chefIntro: "¡Revisé los productos de tu canasta! Si aplicas estos ajustes por formato y cadena ahorras de inmediato:",
    ingredients: [
      { item: "Arroz Grado 1 1kg", store: "Alvi (-21% vs Jumbo)", price: "$1.490" },
      { item: "Leche Semidescremada 1L (x3)", store: "Unimarc Club Ahorro", price: "$1.090 c/u" },
      { item: "Huevos Extra Blancos 12 un.", store: "Líder (Todo medio de pago)", price: "$3.550" }
    ],
    summary: "✓ Ahorro verificado en catálogo: $2.460 en esta compra"
  },
  zerosellos: {
    id: "zerosellos",
    chipLabel: "Pill Calorías: Alternativas 0 sellos",
    userPrompt: '"Dame alternativas 0 sellos y bajas en calorías para colaciones y desayuno."',
    chefTitle: "Asistente · Pill Calorías y Ley 20.606",
    chefIntro: "Seleccioné opciones verificadas en catálogo con 0 octágonos negros y menos de 150 kcal por porción:",
    ingredients: [
      { item: "Leche Colun Semidescremada 1L (46 kcal/100ml)", store: "Santa Isabel", price: "$1.150" },
      { item: "Avena Tradicional Integral 1kg (0 sellos)", store: "Alvi", price: "$1.290" },
      { item: "Bandeja Huevos Grandes 12 un. (Proteína limpia)", store: "Líder", price: "$2.990" }
    ],
    summary: "✓ 0 Sellos Ley 20.606 · Tabla nutricional verificada"
  },
  cazuela: {
    id: "cazuela",
    chipLabel: "Pill Chef: Cazuela económica para 4",
    userPrompt: '"Chef, recomiéndame una cazuela de vacuno para 4 personas, baja en sodio y económica."',
    chefTitle: "Asistente · Pill Modo Chef",
    chefIntro: "¡Excelente elección! Armé la receta tradicional optimizando los ingredientes en las cadenas más baratas hoy:",
    ingredients: [
      { item: "Posta paleta 600g", store: "Santa Isabel", price: "$4.990" },
      { item: "Choclo entero 2 un.", store: "Líder", price: "$1.190" },
      { item: "Zapallo camote 500g", store: "Líder", price: "$990" },
      { item: "Papas granel 1kg", store: "Unimarc", price: "$1.290" }
    ],
    summary: "✓ 0 sellos negros · $2.117 por plato (420 kcal/porción)"
  },
  cincomil: {
    id: "cincomil",
    chipLabel: "Almuerzo con menos de $5.000",
    userPrompt: '"Tengo $5.000 para cocinar hoy para dos personas. ¿Qué preparo?"',
    chefTitle: "Asistente · Pill Modo Chef",
    chefIntro: "¡Desafío aceptado! Te alcanza perfecto para un Salteado de Fideos con Verduras y Huevo:",
    ingredients: [
      { item: "Tallarines Spaghettoni 400g", store: "Alvi", price: "$790" },
      { item: "Bandeja 6 Huevos Grandes", store: "Líder", price: "$1.590" },
      { item: "Mix verduras pimentón y cebollín", store: "Santa Isabel", price: "$1.490" },
      { item: "Salsa de soya baja en sodio", store: "Líder", price: "$890" }
    ],
    summary: "Total: $4.760 · ¡Sobran $240!"
  }
};
