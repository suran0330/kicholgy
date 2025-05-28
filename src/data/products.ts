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
  // Shopify-specific fields (optional for local products)
  handle?: string;
  vendor?: string;
  productType?: string;
  tags?: string[];
  shopifyId?: string;
  isShopifyProduct?: boolean;
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
  },
  {
    id: "oat-cleansing-balm",
    name: "Oat Cleansing Balm",
    price: "$12.99",
    category: "Cleansing",
    image: "https://ext.same-assets.com/3071055451/1234567890.png",
    images: [
      "https://ext.same-assets.com/3071055451/1234567890.png",
      "https://ext.same-assets.com/3071055451/1234567891.jpeg"
    ],
    description: "A gentle, nourishing cleansing balm enriched with colloidal oatmeal and ceramides. Perfect for removing makeup and daily impurities while maintaining the skin's natural barrier.",
    benefits: [
      "Removes makeup and sunscreen effectively",
      "Nourishes while cleansing",
      "Suitable for sensitive skin",
      "Non-stripping formula",
      "Leaves skin soft and hydrated"
    ],
    skinType: ["All skin types", "Sensitive skin", "Dry skin"],
    keyIngredients: [
      {
        name: "Colloidal Oatmeal",
        percentage: "3%",
        function: "Soothing, cleansing",
        description: "Finely ground oats that gently cleanse while providing anti-inflammatory and soothing benefits to irritated skin."
      },
      {
        name: "Ceramides",
        function: "Barrier support",
        description: "Essential lipids that help maintain and restore the skin's natural protective barrier during cleansing."
      }
    ],
    allIngredients: "Cetyl Ethylhexanoate, PEG-20 Glyceryl Triisostearate, Colloidal Oatmeal, Ceramide NP, Tocopherol, Phenoxyethanol",
    howToUse: [
      "Apply to dry skin and massage gently",
      "Add a small amount of water to emulsify",
      "Rinse thoroughly with warm water",
      "Use morning and/or evening",
      "Follow with your regular skincare routine"
    ],
    size: "150ml",
    inStock: true
  },
  {
    id: "peptide-moisturizer",
    name: "Peptide Moisturizer",
    price: "$16.99",
    category: "Anti-Aging",
    image: "https://ext.same-assets.com/3071055451/2345678901.png",
    images: [
      "https://ext.same-assets.com/3071055451/2345678901.png",
      "https://ext.same-assets.com/3071055451/2345678902.jpeg",
      "https://ext.same-assets.com/3071055451/2345678903.jpeg"
    ],
    description: "An advanced anti-aging moisturizer with multiple peptides to support skin firmness and elasticity. Formulated with hyaluronic acid for optimal hydration.",
    benefits: [
      "Improves skin firmness",
      "Supports collagen production",
      "Reduces appearance of fine lines",
      "Provides deep hydration",
      "Suitable for mature skin"
    ],
    skinType: ["Mature skin", "Normal skin", "Dry skin"],
    keyIngredients: [
      {
        name: "Matrixyl 3000",
        percentage: "3%",
        function: "Anti-aging peptide",
        description: "A powerful peptide complex that stimulates collagen synthesis and helps improve skin firmness and elasticity."
      },
      {
        name: "Argireline",
        percentage: "5%",
        function: "Expression line reducer",
        description: "A peptide that helps reduce the appearance of expression lines by limiting muscle contractions."
      },
      {
        name: "Hyaluronic Acid",
        percentage: "1%",
        function: "Hydration",
        description: "Provides intense moisture and plumping effects to support the anti-aging benefits of peptides."
      }
    ],
    allIngredients: "Aqua, Glycerin, Caprylic/Capric Triglyceride, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Acetyl Hexapeptide-8, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Apply to clean skin morning and evening",
      "Use after serums and treatments",
      "Gently massage into face and neck",
      "Allow to fully absorb",
      "Follow with SPF during the day"
    ],
    size: "50ml",
    inStock: true
  },
  {
    id: "tranexamic-acid-serum",
    name: "Tranexamic Acid Serum",
    price: "$13.99",
    category: "Brightening",
    image: "https://ext.same-assets.com/3071055451/3456789012.png",
    images: [
      "https://ext.same-assets.com/3071055451/3456789012.png",
      "https://ext.same-assets.com/3071055451/3456789013.jpeg"
    ],
    description: "A targeted brightening serum with 2% Tranexamic Acid to help reduce the appearance of dark spots and hyperpigmentation while being gentle on sensitive skin.",
    benefits: [
      "Reduces dark spots",
      "Evens skin tone",
      "Gentle on sensitive skin",
      "Improves skin radiance",
      "Can be used with other actives"
    ],
    skinType: ["All skin types", "Sensitive skin", "Hyperpigmented skin"],
    keyIngredients: [
      {
        name: "Tranexamic Acid",
        percentage: "2%",
        function: "Brightening agent",
        description: "A gentle yet effective ingredient that helps reduce melanin production and fade existing dark spots without irritation."
      },
      {
        name: "Kojic Acid",
        percentage: "1%",
        function: "Tyrosinase inhibitor",
        description: "Works synergistically with tranexamic acid to prevent new pigmentation and brighten existing spots."
      }
    ],
    allIngredients: "Aqua, Tranexamic Acid, Kojic Acid, Glycerin, Propanediol, Dimethyl Isosorbide, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Apply to clean skin morning and/or evening",
      "Can be used with other serums",
      "Apply before moisturizer",
      "Always use SPF during the day",
      "Results visible after 4-6 weeks of consistent use"
    ],
    size: "30ml",
    inStock: true
  },
  {
    id: "ceramide-repair-serum",
    name: "Ceramide Repair Serum",
    price: "$18.99",
    category: "Barrier Repair",
    image: "https://ext.same-assets.com/3071055451/4567890123.png",
    images: [
      "https://ext.same-assets.com/3071055451/4567890123.png",
      "https://ext.same-assets.com/3071055451/4567890124.jpeg"
    ],
    description: "An intensive barrier repair serum with 5 types of ceramides and cholesterol to restore compromised skin barriers and improve overall skin health.",
    benefits: [
      "Repairs damaged skin barrier",
      "Reduces sensitivity",
      "Improves skin resilience",
      "Long-lasting hydration",
      "Calms irritated skin"
    ],
    skinType: ["Sensitive skin", "Compromised barrier", "Dry skin"],
    keyIngredients: [
      {
        name: "Ceramide Complex",
        percentage: "5%",
        function: "Barrier repair",
        description: "A blend of 5 different ceramides (NP, AP, EOP, NS, AS) that mimic the skin's natural lipid composition."
      },
      {
        name: "Cholesterol",
        percentage: "2%",
        function: "Lipid restoration",
        description: "Works with ceramides to restore the skin's natural lipid barrier and improve moisture retention."
      },
      {
        name: "Phytosphingosine",
        percentage: "0.5%",
        function: "Anti-inflammatory",
        description: "A skin-identical lipid that has anti-inflammatory properties and supports barrier function."
      }
    ],
    allIngredients: "Aqua, Glycerin, Ceramide NP, Ceramide AP, Ceramide EOP, Ceramide NS, Ceramide AS, Cholesterol, Phytosphingosine, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Apply to clean skin morning and evening",
      "Use after cleansing and before moisturizer",
      "Can be mixed with other serums",
      "Perfect for post-treatment recovery",
      "Use consistently for 2-4 weeks for best results"
    ],
    warnings: [
      "Patch test recommended for very sensitive skin"
    ],
    size: "30ml",
    inStock: true
  },
  {
    id: "pha-gentle-exfoliant",
    name: "PHA Gentle Exfoliant",
    price: "$14.99",
    category: "Exfoliation",
    image: "https://ext.same-assets.com/3071055451/5678901234.png",
    images: [
      "https://ext.same-assets.com/3071055451/5678901234.png",
      "https://ext.same-assets.com/3071055451/5678901235.jpeg"
    ],
    description: "A gentle exfoliating treatment with Polyhydroxy Acids (PHAs) that provide all the benefits of chemical exfoliation without irritation, perfect for sensitive skin.",
    benefits: [
      "Gentle exfoliation",
      "Suitable for sensitive skin",
      "Improves skin texture",
      "Provides hydration while exfoliating",
      "Less irritating than AHAs/BHAs"
    ],
    skinType: ["Sensitive skin", "All skin types", "Rosacea-prone skin"],
    keyIngredients: [
      {
        name: "Gluconolactone",
        percentage: "8%",
        function: "Gentle exfoliant",
        description: "A PHA that gently exfoliates while providing antioxidant benefits and moisture to the skin."
      },
      {
        name: "Lactobionic Acid",
        percentage: "2%",
        function: "Hydrating exfoliant",
        description: "Another PHA that exfoliates gently while attracting moisture to the skin surface."
      }
    ],
    allIngredients: "Aqua, Gluconolactone, Lactobionic Acid, Glycerin, Propanediol, Sodium Hydroxide, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Use 2-3 times per week initially",
      "Apply to clean skin in the evening",
      "Can be used by those sensitive to AHA/BHA",
      "Follow with moisturizer",
      "Can gradually increase to daily use"
    ],
    size: "30ml",
    inStock: true
  },
  {
    id: "bakuchiol-serum",
    name: "Bakuchiol Serum",
    price: "$19.99",
    category: "Anti-Aging",
    image: "https://ext.same-assets.com/3071055451/6789012345.png",
    images: [
      "https://ext.same-assets.com/3071055451/6789012345.png",
      "https://ext.same-assets.com/3071055451/6789012346.jpeg"
    ],
    description: "A natural retinol alternative derived from the Psoralea Corylifolia plant. Provides anti-aging benefits without the irritation associated with traditional retinoids.",
    benefits: [
      "Natural retinol alternative",
      "Reduces fine lines and wrinkles",
      "Improves skin elasticity",
      "Safe for pregnancy and breastfeeding",
      "Can be used morning and evening"
    ],
    skinType: ["All skin types", "Sensitive skin", "Pregnant/nursing"],
    keyIngredients: [
      {
        name: "Bakuchiol",
        percentage: "1%",
        function: "Natural retinol alternative",
        description: "A plant-derived compound that mimics retinol's anti-aging effects without photosensitivity or irritation."
      },
      {
        name: "Squalane",
        function: "Moisturizing carrier",
        description: "Provides hydration and helps deliver bakuchiol effectively while nourishing the skin."
      }
    ],
    allIngredients: "Squalane, Bakuchiol, Caprylic/Capric Triglyceride, Tocopherol, Rosmarinus Officinalis Leaf Extract",
    howToUse: [
      "Can be used morning and/or evening",
      "Apply to clean skin",
      "Safe to use with other actives",
      "No need to introduce gradually",
      "Perfect for those who can't use retinoids"
    ],
    size: "30ml",
    inStock: true
  },
  {
    id: "azelaic-acid-suspension",
    name: "Azelaic Acid Suspension",
    price: "$8.99",
    category: "Blemishes",
    image: "https://ext.same-assets.com/3071055451/7890123456.png",
    images: [
      "https://ext.same-assets.com/3071055451/7890123456.png",
      "https://ext.same-assets.com/3071055451/7890123457.jpeg"
    ],
    description: "A 10% Azelaic Acid suspension that targets blemishes, uneven skin tone, and textural irregularities. Gentle enough for sensitive skin while being highly effective.",
    benefits: [
      "Reduces acne and blemishes",
      "Evens skin tone",
      "Gentle exfoliation",
      "Anti-inflammatory properties",
      "Suitable for rosacea-prone skin"
    ],
    skinType: ["Acne-prone skin", "Sensitive skin", "Rosacea-prone skin"],
    keyIngredients: [
      {
        name: "Azelaic Acid",
        percentage: "10%",
        function: "Multi-benefit active",
        description: "A naturally occurring acid that helps with acne, hyperpigmentation, and inflammation while being gentle on sensitive skin."
      }
    ],
    allIngredients: "Aqua, Azelaic Acid, Dimethyl Isosorbide, Hydroxyethylcellulose, Potassium Hydroxide, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Apply to clean skin in the evening",
      "Start with 2-3 times per week",
      "Can be used with other actives",
      "May cause slight tingling initially",
      "Gradually increase to daily use as tolerated"
    ],
    warnings: [
      "May cause temporary warmth/tingling",
      "Start slowly to assess tolerance"
    ],
    size: "30ml",
    inStock: false
  },
  {
    id: "zinc-oxide-sunscreen",
    name: "Zinc Oxide Sunscreen SPF 30",
    price: "$12.99",
    category: "Sun Protection",
    image: "https://ext.same-assets.com/3071055451/8901234567.png",
    images: [
      "https://ext.same-assets.com/3071055451/8901234567.png",
      "https://ext.same-assets.com/3071055451/8901234568.jpeg"
    ],
    description: "A mineral sunscreen with 20% Zinc Oxide providing broad-spectrum SPF 30 protection. Lightweight, non-greasy formula suitable for sensitive skin and daily use.",
    benefits: [
      "Broad-spectrum protection",
      "Suitable for sensitive skin",
      "Non-comedogenic",
      "Water-resistant for 80 minutes",
      "No white cast when properly applied"
    ],
    skinType: ["All skin types", "Sensitive skin", "Acne-prone skin"],
    keyIngredients: [
      {
        name: "Zinc Oxide",
        percentage: "20%",
        function: "UV protection",
        description: "A mineral UV filter that provides broad-spectrum protection against UVA and UVB rays without chemical absorption."
      },
      {
        name: "Iron Oxides",
        function: "Tinting agents",
        description: "Provide a subtle tint to minimize white cast while offering additional protection against visible light."
      }
    ],
    allIngredients: "Zinc Oxide, Caprylic/Capric Triglyceride, Coco-Caprylate/Caprate, Iron Oxides, Polyglyceryl-3 Polyricinoleate, Silica, Tocopherol",
    howToUse: [
      "Apply liberally 15 minutes before sun exposure",
      "Reapply every 2 hours",
      "Use daily as the last step in your morning routine",
      "Reapply after swimming or sweating",
      "Use approximately 1/4 teaspoon for face and neck"
    ],
    warnings: [
      "For external use only",
      "Avoid contact with eyes"
    ],
    size: "75ml",
    inStock: true
  },
  {
    id: "mandelic-acid-treatment",
    name: "Mandelic Acid Treatment",
    price: "$10.99",
    category: "Exfoliation",
    image: "https://ext.same-assets.com/3071055451/9012345678.png",
    images: [
      "https://ext.same-assets.com/3071055451/9012345678.png",
      "https://ext.same-assets.com/3071055451/9012345679.jpeg"
    ],
    description: "A gentle 5% Mandelic Acid treatment that provides effective exfoliation while being suitable for sensitive skin. Perfect introduction to AHAs.",
    benefits: [
      "Gentle exfoliation",
      "Improves skin texture",
      "Reduces appearance of pores",
      "Evens skin tone",
      "Less irritating than glycolic acid"
    ],
    skinType: ["Sensitive skin", "All skin types", "AHA beginners"],
    keyIngredients: [
      {
        name: "Mandelic Acid",
        percentage: "5%",
        function: "Gentle AHA",
        description: "A large-molecule AHA derived from almonds that provides gentle exfoliation with minimal irritation."
      },
      {
        name: "Allantoin",
        function: "Soothing agent",
        description: "Helps calm and soothe the skin while the mandelic acid works to exfoliate."
      }
    ],
    allIngredients: "Aqua, Mandelic Acid, Glycerin, Allantoin, Dimethyl Isosorbide, Phenoxyethanol, Ethylhexylglycerin",
    howToUse: [
      "Use in the evening only",
      "Start with 2-3 times per week",
      "Apply to clean, dry skin",
      "Follow with moisturizer",
      "Always use SPF the next day"
    ],
    warnings: [
      "May increase sun sensitivity",
      "Start slowly to build tolerance"
    ],
    size: "30ml",
    inStock: true
  }
];
