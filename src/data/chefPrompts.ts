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
  cazuela: {
    id: "cazuela",
    chipLabel: "🍲 Cazuela para 4 económica",
    userPrompt: '"Chef, recomiéndame una cazuela de vacuno para 4 personas, baja en sodio y económica."',
    chefTitle: "👨‍🍳 Chef & Nutri IA",
    chefIntro: "¡Excelente elección! La cazuela es tradicional, nutritiva y rendidora. Armé los ingredientes optimizando carnes y verduras frescas:",
    ingredients: [
      { item: "Posta paleta 600g", store: "Santa Isabel", price: "$4.990" },
      { item: "Choclo entero 2 un.", store: "Líder", price: "$1.190" },
      { item: "Zapallo camote 500g", store: "Líder", price: "$990" },
      { item: "Papas granel 1kg", store: "Unimarc", price: "$1.290" }
    ],
    summary: "✓ 0 sellos negros · $2.117 por plato"
  },
  zerosellos: {
    id: "zerosellos",
    chipLabel: "🥗 Menú semanal 0 sellos",
    userPrompt: '"Chef, dame un menú de almuerzos para 3 días que sea 100% libre de sellos negros y barato."',
    chefTitle: "👨‍🍳 Chef & Nutri IA",
    chefIntro: "¡Hecho! Planifiqué 3 días equilibrados ricos en proteínas y fibra sin ningún octágono negro:",
    ingredients: [
      { item: "Día 1: Lentejas con zapallo y arroz integral", store: "Alvi", price: "$2.490" },
      { item: "Día 2: Pechuga de pollo a la plancha con verduras", store: "Líder", price: "$3.890" },
      { item: "Día 3: Tortilla de espinacas y ensalada surtida", store: "Santa Isabel", price: "$2.150" }
    ],
    summary: "✓ Certificado Ley 20.606 · Ahorro de $7.200 en despensa"
  },
  cincomil: {
    id: "cincomil",
    chipLabel: "⚡ Almuerzo con menos de $5.000",
    userPrompt: '"Chef, tengo $5.000 para cocinar hoy para dos personas. ¿Qué preparo?"',
    chefTitle: "👨‍🍳 Chef & Nutri IA",
    chefIntro: "¡Desafío aceptado! Te alcanza perfecto para un exquisito Salteado de Fideos con Verduras y Huevo:",
    ingredients: [
      { item: "Tallarines Spaghettoni 400g", store: "Alvi", price: "$790" },
      { item: "Bandeja 6 Huevos Grandes", store: "Líder", price: "$1.590" },
      { item: "Mix verduras pimentón y cebollín", store: "Santa Isabel", price: "$1.490" },
      { item: "Salsa de soya baja en sodio", store: "Líder", price: "$890" }
    ],
    summary: "Total: $4.760 · ¡Sobran $240!"
  }
};
