export interface Ingredient {
  name: string;
  percentage?: string;
  function: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  benefits: string[];
  skinType: string[];
  keyIngredients: Ingredient[];
  allIngredients: string;
  howToUse: string[];
  warnings?: string[];
  size: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "hyaluronic-acid-serum",
    name: "Hyaluronic Acid Serum",
    price: "$7.99",
    category: "Hydration",
    image: "https://ext.same-assets.com/3071055451/2940306733.png",
    images: [
      "https://ext.same-assets.com/3071055451/2940306733.png",
      "https://ext.same-assets.com/3071055451/3180328287.jpeg",
      "https://ext.same-assets.com/3071055451/2025634454.jpeg"
    ],
    description: "A lightweight serum that delivers intense hydration to the skin. Hyaluronic acid can hold up to 1000 times its weight in water, making this serum perfect for plumping and hydrating all skin types.",
    benefits: [
      "Provides intense hydration",
      "Plumps and smooths skin",
      "Suitable for all skin types",
      "Lightweight, non-greasy formula",
      "Can be layered with other products"
    ],
    skinType: ["All skin types", "Dry skin", "Dehydrated skin"],
    keyIngredients: [
      {
        name: "Hyaluronic Acid",
        percentage: "2%",
        function: "Humectant",
        description: "A powerful humectant that can hold up to 1000 times its weight in water, providing intense hydration and plumping effects."
      },
      {
        name: "Vitamin B5",
        function: "Soothing",
        description: "Also known as Panthenol, helps to soothe and calm the skin while providing additional moisture."
      }
    ],
    allIngredients: "Aqua (Water), Sodium Hyaluronate, Panthenol, Sodium Lactate, Sodium PCA, Glycerin, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Apply to clean skin morning and/or evening",
      "Apply before oils and moisturizers",
      "Can be used on face, neck, and eye area",
      "Follow with moisturizer to lock in hydration"
    ],
    size: "30ml",
    inStock: true
  },
  {
    id: "retinol-eye-cream",
    name: "Retinol Eye Cream",
    price: "$9.99",
    category: "Anti-Aging",
    image: "https://ext.same-assets.com/3071055451/1391334971.png",
    images: [
      "https://ext.same-assets.com/3071055451/1391334971.png",
      "https://ext.same-assets.com/3071055451/3808795354.jpeg"
    ],
    description: "A gentle yet effective eye cream formulated with 0.5% Granactive Retinoid to target signs of aging around the delicate eye area without irritation.",
    benefits: [
      "Reduces appearance of fine lines",
      "Improves skin texture",
      "Gentle enough for eye area",
      "Non-irritating retinoid formula",
      "Hydrating base"
    ],
    skinType: ["All skin types", "Mature skin", "Normal skin"],
    keyIngredients: [
      {
        name: "Granactive Retinoid",
        percentage: "0.5%",
        function: "Anti-aging",
        description: "A gentle, stable form of retinoid that provides anti-aging benefits without the irritation of traditional retinol."
      },
      {
        name: "Squalane",
        function: "Moisturizing",
        description: "A lightweight, non-comedogenic oil that provides deep hydration and helps strengthen the skin barrier."
      }
    ],
    allIngredients: "Aqua (Water), Squalane, Glycerin, Caprylic/Capric Triglyceride, Hydroxypinacolone Retinoate, Dimethyl Isosorbide, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Use only in the evening",
      "Apply a small amount around the eye area",
      "Avoid direct contact with eyes",
      "Always use SPF during the day when using retinoids",
      "Start with 2-3 times per week and gradually increase"
    ],
    warnings: [
      "Use only as directed",
      "Discontinue use if irritation occurs",
      "Use sunscreen daily when using this product"
    ],
    size: "15ml",
    inStock: true
  },
  {
    id: "niacinamide",
    name: "Niacinamide",
    price: "$7.99",
    category: "Blemishes",
    image: "https://ext.same-assets.com/3071055451/3096641562.png",
    images: [
      "https://ext.same-assets.com/3071055451/3096641562.png",
      "https://ext.same-assets.com/3071055451/2457931445.jpeg"
    ],
    description: "A 10% Niacinamide serum that helps minimize the appearance of pores, regulate oil production, and improve overall skin texture and tone.",
    benefits: [
      "Minimizes appearance of pores",
      "Regulates oil production",
      "Improves skin texture",
      "Reduces redness",
      "Brightens skin tone"
    ],
    skinType: ["Oily skin", "Combination skin", "Acne-prone skin"],
    keyIngredients: [
      {
        name: "Niacinamide",
        percentage: "10%",
        function: "Pore minimizing, oil control",
        description: "A form of Vitamin B3 that helps regulate sebum production, minimize pore appearance, and improve skin texture."
      },
      {
        name: "Zinc PCA",
        percentage: "1%",
        function: "Antimicrobial",
        description: "Helps control oil production and has antimicrobial properties that can help with acne-prone skin."
      }
    ],
    allIngredients: "Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Apply to clean skin morning and/or evening",
      "Apply before oils and moisturizers",
      "Can be mixed with other serums",
      "May cause slight tingling initially - this is normal"
    ],
    size: "30ml",
    inStock: true
  },
  {
    id: "vitamin-c-serum",
    name: "Vitamin C Serum",
    price: "$15.99",
    category: "Brightening",
    image: "https://ext.same-assets.com/3071055451/4041970853.png",
    images: [
      "https://ext.same-assets.com/3071055451/4041970853.png",
      "https://ext.same-assets.com/3071055451/3696409666.jpeg"
    ],
    description: "A stable 30% Vitamin C serum in silicone base that provides antioxidant protection and helps brighten the appearance of skin while being gentle enough for daily use.",
    benefits: [
      "Brightens skin tone",
      "Provides antioxidant protection",
      "Improves skin radiance",
      "Stable formula",
      "Non-irritating"
    ],
    skinType: ["All skin types", "Dull skin", "Uneven skin tone"],
    keyIngredients: [
      {
        name: "L-Ascorbic Acid",
        percentage: "30%",
        function: "Antioxidant, brightening",
        description: "Pure Vitamin C that provides powerful antioxidant protection and helps brighten skin tone."
      },
      {
        name: "Tocopherol",
        function: "Antioxidant",
        description: "Vitamin E that works synergistically with Vitamin C to provide enhanced antioxidant protection."
      }
    ],
    allIngredients: "Ascorbic Acid, Squalane, Isodecyl Neopentanoate, Isononyl Isononanoate, Coconut Alkanes, Ethylene/Propylene/Styrene Copolymer, Tocopherol, Butylene/Ethylene/Styrene Copolymer",
    howToUse: [
      "Use in the morning",
      "Apply a few drops to clean skin",
      "Allow to absorb before applying moisturizer",
      "Always follow with SPF during the day",
      "Store in a cool, dark place"
    ],
    warnings: [
      "May cause slight tingling",
      "Do not use with other acids in the same routine",
      "Always use SPF when using Vitamin C"
    ],
    size: "30ml",
    inStock: true
  },
  {
    id: "bha-beta-hydroxy-acid",
    name: "BHA (Beta Hydroxy Acid)",
    price: "$11.99",
    category: "Exfoliation",
    image: "https://ext.same-assets.com/3071055451/626584969.png",
    images: [
      "https://ext.same-assets.com/3071055451/626584969.png"
    ],
    description: "A 2% Salicylic Acid treatment that helps exfoliate inside the pore, making it ideal for oily and acne-prone skin types.",
    benefits: [
      "Unclogs pores",
      "Reduces blackheads",
      "Exfoliates dead skin cells",
      "Improves skin texture",
      "Reduces acne breakouts"
    ],
    skinType: ["Oily skin", "Acne-prone skin", "Combination skin"],
    keyIngredients: [
      {
        name: "Salicylic Acid",
        percentage: "2%",
        function: "Chemical exfoliant",
        description: "A beta hydroxy acid that can penetrate oil and exfoliate inside the pore, making it excellent for acne-prone skin."
      },
      {
        name: "Zinc PCA",
        function: "Oil control",
        description: "Helps regulate sebum production and has antimicrobial properties."
      }
    ],
    allIngredients: "Aqua (Water), Cocamidopropyl Dimethylamine, Salicylic Acid, Zinc PCA, Dimethyl Isosorbide, Ethoxydiglycol, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Use in the evening only",
      "Start with 2-3 times per week",
      "Apply to clean, dry skin",
      "Avoid eye area",
      "Always use SPF the next day"
    ],
    warnings: [
      "May increase sun sensitivity",
      "Start slowly to build tolerance",
      "Do not use with other acids initially"
    ],
    size: "30ml",
    inStock: true
  },
  {
    id: "omega-water-cream",
    name: "Omega Water Cream",
    price: "$14.99",
    category: "Moisturizing",
    image: "https://ext.same-assets.com/3071055451/3848146058.png",
    images: [
      "https://ext.same-assets.com/3071055451/3848146058.png"
    ],
    description: "A lightweight, water-based moisturizer enriched with Omega fatty acids and ceramides to strengthen the skin barrier and provide long-lasting hydration.",
    benefits: [
      "Strengthens skin barrier",
      "Provides lasting hydration",
      "Lightweight, non-greasy",
      "Suitable for sensitive skin",
      "Contains essential fatty acids"
    ],
    skinType: ["All skin types", "Sensitive skin", "Normal skin"],
    keyIngredients: [
      {
        name: "Omega 3, 6, 9",
        function: "Barrier repair",
        description: "Essential fatty acids that help strengthen and repair the skin barrier while providing nourishment."
      },
      {
        name: "Ceramides",
        function: "Moisturizing",
        description: "Lipids that help restore and maintain the skin's natural barrier function."
      }
    ],
    allIngredients: "Aqua (Water), Glycerin, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Ceramide NP, Linoleic Acid, Linolenic Acid, Oleic Acid, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Apply to clean skin morning and/or evening",
      "Use as the last step in your routine",
      "Can be used on face and neck",
      "Layer over serums and treatments"
    ],
    size: "50ml",
    inStock: true
  }
];
