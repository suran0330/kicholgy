export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userInitials: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean; // Verified purchase
  helpful: number;
  unhelpful: number;
  photos?: string[];
  skinType?: string;
  ageRange?: string;
  pros?: string[];
  cons?: string[];
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

// Mock review data
export const reviews: Review[] = [
  // Hyaluronic Acid Serum Reviews
  {
    id: "review-1",
    productId: "hyaluronic-acid-serum",
    userId: "user-1",
    userName: "Sarah M.",
    userInitials: "SM",
    rating: 5,
    title: "Holy grail for dry skin!",
    content: "I've been using this serum for 3 months now and it's completely transformed my skin. My face feels plump and hydrated all day long. The texture is perfect - not sticky at all and absorbs quickly. I use it morning and evening under my moisturizer.",
    date: "2024-01-15",
    verified: true,
    helpful: 24,
    unhelpful: 1,
    skinType: "Dry",
    ageRange: "25-34",
    pros: ["Deeply hydrating", "Non-sticky texture", "Great value"],
    cons: ["Wish the bottle was bigger"]
  },
  {
    id: "review-2",
    productId: "hyaluronic-acid-serum",
    userId: "user-2",
    userName: "Jennifer K.",
    userInitials: "JK",
    rating: 4,
    title: "Good hydration, mild scent",
    content: "This serum definitely delivers on hydration. I noticed a difference in my skin's plumpness after just a few days. The only reason I'm not giving 5 stars is because there's a very mild scent that I wasn't expecting from a fragrance-free product.",
    date: "2024-01-20",
    verified: true,
    helpful: 18,
    unhelpful: 3,
    skinType: "Combination",
    ageRange: "35-44",
    pros: ["Effective hydration", "Affordable"],
    cons: ["Slight scent", "Could be more concentrated"]
  },
  {
    id: "review-3",
    productId: "hyaluronic-acid-serum",
    userId: "user-3",
    userName: "Mike R.",
    userInitials: "MR",
    rating: 5,
    title: "Perfect for sensitive skin",
    content: "As someone with very sensitive skin, I'm always hesitant to try new products. This serum has been amazing - no irritation whatsoever and my skin looks so much better. It layers well with my other products too.",
    date: "2024-02-01",
    verified: true,
    helpful: 15,
    unhelpful: 0,
    skinType: "Sensitive",
    ageRange: "18-24",
    pros: ["No irritation", "Gentle formula", "Great for layering"]
  },

  // Niacinamide Reviews
  {
    id: "review-4",
    productId: "niacinamide",
    userId: "user-4",
    userName: "Alex T.",
    userInitials: "AT",
    rating: 5,
    title: "Game changer for oily skin",
    content: "This niacinamide serum has completely changed my skincare routine. My pores look smaller, my skin is less oily throughout the day, and I've noticed fewer breakouts. The 10% concentration is perfect - strong enough to be effective but not irritating.",
    date: "2024-01-25",
    verified: true,
    helpful: 32,
    unhelpful: 2,
    skinType: "Oily",
    ageRange: "25-34",
    pros: ["Reduces oiliness", "Minimizes pores", "No irritation"],
    cons: ["Takes time to see results"]
  },
  {
    id: "review-5",
    productId: "niacinamide",
    userId: "user-5",
    userName: "Lisa H.",
    userInitials: "LH",
    rating: 4,
    title: "Solid product, gradual results",
    content: "I've been using this for about 6 weeks. The texture is nice and it doesn't pill under makeup. I've seen some improvement in my skin texture and oiliness, but the results are gradual. Good value for money though!",
    date: "2024-02-10",
    verified: true,
    helpful: 12,
    unhelpful: 1,
    skinType: "Combination",
    ageRange: "25-34",
    pros: ["Good texture", "Doesn't pill", "Affordable"],
    cons: ["Slow results", "Could be more potent"]
  },

  // Vitamin C Serum Reviews
  {
    id: "review-6",
    productId: "vitamin-c-serum",
    userId: "user-6",
    userName: "Rachel W.",
    userInitials: "RW",
    rating: 5,
    title: "Brightening powerhouse!",
    content: "This vitamin C serum is incredible! I've tried many vitamin C products and this one actually works. My dark spots are fading and my skin looks so much brighter. The silicone base makes it feel luxurious and it doesn't oxidize quickly.",
    date: "2024-01-30",
    verified: true,
    helpful: 28,
    unhelpful: 0,
    skinType: "Normal",
    ageRange: "35-44",
    pros: ["Brightens skin", "Fades dark spots", "Stable formula"],
    cons: ["Pricier than other serums"]
  },
  {
    id: "review-7",
    productId: "vitamin-c-serum",
    userId: "user-7",
    userName: "David C.",
    userInitials: "DC",
    rating: 3,
    title: "Too strong for my sensitive skin",
    content: "While I can see this is a high-quality vitamin C serum, it was unfortunately too strong for my sensitive skin. I experienced some redness and irritation even when using it every other day. Might work better for those with less sensitive skin.",
    date: "2024-02-05",
    verified: true,
    helpful: 8,
    unhelpful: 5,
    skinType: "Sensitive",
    ageRange: "25-34",
    pros: ["High quality", "Effective concentration"],
    cons: ["Too strong for sensitive skin", "Can cause irritation"]
  },

  // Retinol Eye Cream Reviews
  {
    id: "review-8",
    productId: "retinol-eye-cream",
    userId: "user-8",
    userName: "Maria L.",
    userInitials: "ML",
    rating: 4,
    title: "Gentle but effective",
    content: "I was nervous about using retinol around my eyes, but this cream is so gentle. After 2 months of use, I can see a difference in the fine lines around my eyes. It's not dramatic, but it's definitely working. No irritation at all.",
    date: "2024-01-18",
    verified: true,
    helpful: 20,
    unhelpful: 2,
    skinType: "Mature",
    ageRange: "45-54",
    pros: ["Very gentle", "No irritation", "Gradual improvement"],
    cons: ["Results take time", "Small tube"]
  },

  // BHA Reviews
  {
    id: "review-9",
    productId: "bha-beta-hydroxy-acid",
    userId: "user-9",
    userName: "Kevin S.",
    userInitials: "KS",
    rating: 5,
    title: "Best BHA I've tried",
    content: "This BHA has cleared up my blackheads better than any other product I've used. The 2% concentration is perfect - effective but not over-drying. I use it 3x a week and my skin looks smoother and clearer.",
    date: "2024-02-02",
    verified: true,
    helpful: 22,
    unhelpful: 1,
    skinType: "Acne-prone",
    ageRange: "18-24",
    pros: ["Clears blackheads", "Good concentration", "Not over-drying"],
    cons: ["Strong smell"]
  },

  // Omega Water Cream Reviews
  {
    id: "review-10",
    productId: "omega-water-cream",
    userId: "user-10",
    userName: "Emma B.",
    userInitials: "EB",
    rating: 4,
    title: "Perfect daily moisturizer",
    content: "This moisturizer strikes the perfect balance - hydrating without being heavy. I have combination skin and this works well for both my oily T-zone and drier cheeks. It layers well under sunscreen too.",
    date: "2024-01-28",
    verified: true,
    helpful: 16,
    unhelpful: 2,
    skinType: "Combination",
    ageRange: "25-34",
    pros: ["Perfect texture", "Works for combination skin", "Layers well"],
    cons: ["Could be more hydrating for very dry skin"]
  }
];

// Function to get reviews for a specific product
export const getProductReviews = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId);
};

// Function to calculate review statistics
export const getReviewStats = (productId: string): ReviewStats => {
  const productReviews = getProductReviews(productId);

  if (productReviews.length === 0) {
    return {
      averageRating: 0,
      totalReviews: 0,
      ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    };
  }

  const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / productReviews.length;

  const ratingBreakdown = productReviews.reduce((breakdown, review) => {
    breakdown[review.rating as keyof typeof breakdown]++;
    return breakdown;
  }, { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });

  return {
    averageRating: Math.round(averageRating * 10) / 10,
    totalReviews: productReviews.length,
    ratingBreakdown
  };
};
