// TideRush Surf Co. — Product Data & Store State
// "Golden Swell" design: warm coastal luxury, photography-led, organic forms

export interface ProductVariant {
  type: string;
  options: string[];
}

export interface ProductReview {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice: number;
  description: string;
  shortDescription: string;
  features: string[];
  materials: string;
  variants: ProductVariant[];
  benefits: string[];
  shippingWeight: string;
  sku: string;
  inventoryQty: number;
  seoTitle: string;
  seoDescription: string;
  tags: string[];
  careInstructions: string[];
  image: string;
  rating: number;
  reviewCount: number;
  reviews: ProductReview[];
  crossSells: string[];
  category: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "waverider-pro-surfboard",
    name: "WaveRider Pro Surfboard",
    price: 549.00,
    compareAtPrice: 699.00,
    description: "Engineered for surfers who demand peak performance in every session, the WaveRider Pro is our flagship shortboard built with premium lightweight fiberglass construction. Its refined rocker profile and precision-shaped rails deliver explosive speed and razor-sharp maneuverability on any wave face. Whether you're carving critical sections or launching above the lip, this board responds instantly to your every move. The hand-finished gloss coat not only looks stunning but adds durability for seasons of hard-charging surf. Includes a set of removable FCS-compatible fins so you can fine-tune your setup for any conditions.",
    shortDescription: "Premium performance surfboard for intermediate and advanced surfers. Lightweight fiberglass, high-speed maneuverability.",
    features: [
      "Lightweight fiberglass construction with EPS foam core",
      "High-performance rocker profile for speed and control",
      "Precision-shaped concave bottom for lift and drive",
      "Hand-finished gloss coat for durability",
      "Removable FCS II compatible tri-fin setup included",
      "Reinforced tail pad area for maximum grip"
    ],
    materials: "Premium fiberglass shell, EPS foam core, epoxy resin, FCS II fin boxes",
    variants: [
      { type: "Size", options: ["5'8\"", "6'0\"", "6'2\""] },
      { type: "Color", options: ["White/Blue", "Black/Orange"] }
    ],
    benefits: [
      "Explosive speed through critical sections",
      "Responsive turning in all wave conditions",
      "Lightweight for easy duck diving",
      "Durable construction built to last",
      "Versatile fin setup for customization"
    ],
    shippingWeight: "7.2 lbs",
    sku: "TR-SB-WRP-001",
    inventoryQty: 45,
    seoTitle: "WaveRider Pro Surfboard | Premium Performance Board | TideRush Surf Co.",
    seoDescription: "Shop the WaveRider Pro — a premium lightweight fiberglass surfboard built for speed and maneuverability. Perfect for intermediate to advanced surfers. Free shipping.",
    tags: ["surfboard", "performance", "shortboard", "fiberglass", "summer 2026", "best seller"],
    careInstructions: [
      "Rinse with fresh water after each session",
      "Store out of direct sunlight when not in use",
      "Use a board bag for transport",
      "Repair dings promptly to prevent water damage",
      "Wax regularly with appropriate temperature wax"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653823896/JJkEDSAB6ZodpZyNL79Lgv/product-surfboard-Pf6VH3LLqt65XobiRcqLwe.webp",
    rating: 4.8,
    reviewCount: 127,
    reviews: [
      { author: "Jake M.", rating: 5, text: "Absolutely rips! The speed and responsiveness on this board is insane. Best board I've owned.", date: "2026-04-15" },
      { author: "Sarah K.", rating: 5, text: "Light, fast, and looks incredible. Got the White/Blue and it turns heads at every break.", date: "2026-04-02" },
      { author: "Mike T.", rating: 4, text: "Great board for the price. Handles overhead waves with confidence. Took a star off because shipping took a bit longer than expected.", date: "2026-03-28" }
    ],
    crossSells: ["4", "5"],
    category: "Surfboards",
    badge: "Best Seller"
  },
  {
    id: "2",
    slug: "tiderush-uv-surf-shirt",
    name: "TideRush UV Surf Shirt",
    price: 64.00,
    compareAtPrice: 85.00,
    description: "Stay protected and perform at your best with the TideRush UV Surf Shirt. This premium long-sleeve rash guard delivers UPF 50+ sun protection while keeping you cool and comfortable through marathon sessions. The quick-dry stretch fabric moves with your body, never restricting your paddle or pop-up. Flatlock seams eliminate chafing, while the lightweight breathable construction lets air flow freely. Whether you're surfing dawn patrol or spending the day at the beach, this shirt has you covered — literally. The modern athletic fit looks great in and out of the water.",
    shortDescription: "Premium long-sleeve surf rash guard with UPF 50+ protection. Quick-dry stretch fabric, lightweight breathable fit.",
    features: [
      "UPF 50+ sun protection blocks 98% of UV rays",
      "Quick-dry stretch fabric for unrestricted movement",
      "Flatlock seams prevent chafing and irritation",
      "Lightweight breathable mesh panels",
      "Ergonomic athletic fit",
      "Reinforced collar and cuffs for durability"
    ],
    materials: "85% recycled polyester, 15% elastane, UPF 50+ rated fabric",
    variants: [
      { type: "Size", options: ["S", "M", "L", "XL", "XXL"] },
      { type: "Color", options: ["Ocean Blue", "White", "Sand Beige"] }
    ],
    benefits: [
      "All-day UV protection without sunscreen reapplication",
      "Stays lightweight even when wet",
      "Dries in minutes between sessions",
      "Eco-friendly recycled materials",
      "Versatile for surfing, swimming, and beach activities"
    ],
    shippingWeight: "0.4 lbs",
    sku: "TR-AP-UVS-002",
    inventoryQty: 230,
    seoTitle: "TideRush UV Surf Shirt | UPF 50+ Rash Guard | TideRush Surf Co.",
    seoDescription: "Shop the TideRush UV Surf Shirt — premium UPF 50+ long-sleeve rash guard with quick-dry stretch fabric. Perfect for surfing and beach days. Free shipping over $100.",
    tags: ["rash guard", "surf shirt", "UPF 50", "sun protection", "apparel", "summer 2026"],
    careInstructions: [
      "Rinse in cold fresh water after each use",
      "Machine wash cold on gentle cycle",
      "Do not use fabric softener",
      "Hang dry — do not tumble dry",
      "Do not iron or dry clean"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653823896/JJkEDSAB6ZodpZyNL79Lgv/product-rashguard-d9cxa5QRMY5sJwPxbNEw9x.webp",
    rating: 4.9,
    reviewCount: 203,
    reviews: [
      { author: "Lisa R.", rating: 5, text: "So comfortable! Wore it for a 4-hour session and no sunburn at all. The fit is perfect.", date: "2026-04-20" },
      { author: "Carlos D.", rating: 5, text: "Best rash guard I've ever owned. Dries super fast and the Ocean Blue color is gorgeous.", date: "2026-04-10" },
      { author: "Emma W.", rating: 4, text: "Love the quality and protection. Runs slightly snug — size up if you're between sizes.", date: "2026-03-30" }
    ],
    crossSells: ["1", "5"],
    category: "Apparel",
    badge: "New"
  },
  {
    id: "3",
    slug: "oceancore-waterproof-surf-backpack",
    name: "OceanCore Waterproof Surf Backpack",
    price: 129.00,
    compareAtPrice: 169.00,
    description: "The OceanCore Waterproof Surf Backpack is the ultimate companion for surfers who live between the waves and the city. Featuring a roll-top waterproof closure that keeps your gear bone-dry in any conditions, this 28L pack is built for the demands of beach life. The dedicated wet/dry separation pockets mean your soggy wetsuit stays away from your laptop and valuables. A padded 15\" laptop compartment, ergonomic back panel, and adjustable chest strap make this pack as comfortable on a bike commute as it is on a beach trek. Crafted from military-grade waterproof TPU-coated fabric, it's built to handle salt, sand, and sun season after season.",
    shortDescription: "Waterproof 28L backpack with roll-top closure, laptop compartment, and wet/dry separation. Built for surfers.",
    features: [
      "Roll-top waterproof closure rated IPX6",
      "Padded 15\" laptop compartment",
      "Wet/dry separation pockets",
      "28L capacity with expandable roll-top",
      "Ergonomic padded back panel with airflow channels",
      "Adjustable sternum strap and padded shoulder straps",
      "External board carry straps",
      "Hidden anti-theft pocket"
    ],
    materials: "Military-grade 500D TPU-coated polyester, YKK aqua-guard zippers, recycled nylon webbing",
    variants: [
      { type: "Color", options: ["Black", "Navy", "Sand"] }
    ],
    benefits: [
      "Keep electronics and valuables completely dry",
      "Separate wet gear from dry items",
      "Comfortable all-day carry",
      "Durable enough for daily use",
      "Versatile for surf trips, commuting, and travel"
    ],
    shippingWeight: "1.8 lbs",
    sku: "TR-BG-OWB-003",
    inventoryQty: 85,
    seoTitle: "OceanCore Waterproof Surf Backpack | 28L Dry Bag Pack | TideRush Surf Co.",
    seoDescription: "Shop the OceanCore Waterproof Surf Backpack — 28L roll-top waterproof pack with laptop compartment and wet/dry pockets. Perfect for surfers. Free shipping.",
    tags: ["backpack", "waterproof", "surf bag", "travel", "accessories", "summer 2026"],
    careInstructions: [
      "Rinse with fresh water after beach use",
      "Wipe clean with damp cloth",
      "Air dry completely before storage",
      "Do not machine wash",
      "Store unrolled to maintain waterproof seal integrity"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653823896/JJkEDSAB6ZodpZyNL79Lgv/product-backpack-GymxWG6uHWPhtE6HT4yT9R.webp",
    rating: 4.7,
    reviewCount: 89,
    reviews: [
      { author: "Tom H.", rating: 5, text: "Took this on a surf trip to Bali. Everything stayed dry even in tropical downpours. Amazing quality.", date: "2026-04-18" },
      { author: "Nina S.", rating: 5, text: "The wet/dry pocket is a game changer. No more soggy laptop bags after surf sessions!", date: "2026-04-05" },
      { author: "Dave P.", rating: 4, text: "Great pack, solid construction. Wish it had a water bottle pocket on the outside, but otherwise perfect.", date: "2026-03-22" }
    ],
    crossSells: ["2", "5"],
    category: "Accessories"
  },
  {
    id: "4",
    slug: "driftflex-surf-leash",
    name: "DriftFlex Surf Leash",
    price: 34.00,
    compareAtPrice: 45.00,
    description: "Never lose your board with the DriftFlex Surf Leash — engineered for maximum strength with zero drag. The tangle-resistant urethane cord stays smooth and kink-free session after session, while the reinforced double-swivel system eliminates annoying tangles during duck dives and wipeouts. The padded neoprene ankle strap features a quick-release pull tab and hidden key pocket, keeping you secure and prepared. Triple-wrapped rail saver protects your board from leash wear. Available in three lengths to match your board size, the DriftFlex is the last leash you'll ever need.",
    shortDescription: "Heavy-duty surfboard leash with reinforced ankle strap and tangle-resistant cord.",
    features: [
      "7mm tangle-resistant urethane cord",
      "Double stainless steel swivel system",
      "Padded neoprene ankle cuff with quick-release",
      "Hidden key pocket in ankle strap",
      "Triple-wrapped rail saver",
      "Molded connection points for durability"
    ],
    materials: "Premium urethane cord, neoprene ankle cuff, stainless steel swivels, reinforced nylon rail saver",
    variants: [
      { type: "Size", options: ["6ft", "7ft", "8ft"] },
      { type: "Color", options: ["Black", "Blue"] }
    ],
    benefits: [
      "Zero-tangle design saves frustration",
      "Secure ankle strap won't slip during wipeouts",
      "Quick-release for safety in emergencies",
      "Protects board rails from leash damage",
      "Built to handle powerful waves"
    ],
    shippingWeight: "0.5 lbs",
    sku: "TR-AC-DFL-004",
    inventoryQty: 310,
    seoTitle: "DriftFlex Surf Leash | Heavy-Duty Tangle-Free Board Leash | TideRush Surf Co.",
    seoDescription: "Shop the DriftFlex Surf Leash — heavy-duty tangle-resistant surfboard leash with reinforced ankle strap. Available in 6ft, 7ft, and 8ft. Free shipping over $100.",
    tags: ["leash", "surf leash", "accessories", "safety", "summer 2026"],
    careInstructions: [
      "Rinse with fresh water after every session",
      "Stretch cord gently to remove kinks",
      "Store loosely coiled — never tightly wound",
      "Replace if cord shows signs of wear or stretching",
      "Keep out of prolonged direct sunlight when not in use"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653823896/JJkEDSAB6ZodpZyNL79Lgv/product-leash-d9kGXMzkrSpi6Ck6rRSs7q.webp",
    rating: 4.6,
    reviewCount: 156,
    reviews: [
      { author: "Ryan B.", rating: 5, text: "Best leash I've used. Zero tangles even in heavy surf. The key pocket is clutch.", date: "2026-04-12" },
      { author: "Kai L.", rating: 5, text: "Solid build quality. Survived some heavy wipeouts at Pipeline without any issues.", date: "2026-04-01" },
      { author: "Alex J.", rating: 4, text: "Great leash for the price. The ankle strap is super comfortable. Would love more color options.", date: "2026-03-25" }
    ],
    crossSells: ["1", "3"],
    category: "Accessories",
    badge: "Essential"
  },
  {
    id: "5",
    slug: "saltwave-polarized-sunglasses",
    name: "SaltWave Polarized Sunglasses",
    price: 89.00,
    compareAtPrice: 120.00,
    description: "See the ocean like never before with SaltWave Polarized Sunglasses. These premium surf-style shades feature UV400 polarized lenses that cut through harsh glare and reveal the true colors of the coastline. The lightweight yet durable frame is finished with our proprietary saltwater-resistant coating, so they won't corrode or degrade even after daily beach exposure. Spring-loaded hinges provide a secure, comfortable fit for any face shape, while the hydrophobic lens coating repels water, sweat, and fingerprints. Whether you're watching sets from the shore or cruising the coastal highway, SaltWave delivers crystal-clear vision with effortless style.",
    shortDescription: "Premium UV400 polarized sunglasses with saltwater-resistant finish. Lightweight, durable, stylish.",
    features: [
      "UV400 polarized lenses block 100% of UVA/UVB rays",
      "Proprietary saltwater-resistant frame coating",
      "Lightweight TR90 frame material",
      "Spring-loaded stainless steel hinges",
      "Hydrophobic anti-smudge lens coating",
      "Includes microfiber pouch and hard case"
    ],
    materials: "TR90 thermoplastic frame, polarized TAC lenses, stainless steel spring hinges, saltwater-resistant nano-coating",
    variants: [
      { type: "Color", options: ["Matte Black", "Transparent Blue"] }
    ],
    benefits: [
      "Eliminate ocean glare for clearer wave reading",
      "All-day comfort with lightweight design",
      "Won't corrode from salt exposure",
      "Scratch-resistant lens coating",
      "Versatile style for beach and everyday wear"
    ],
    shippingWeight: "0.3 lbs",
    sku: "TR-EW-SWP-005",
    inventoryQty: 175,
    seoTitle: "SaltWave Polarized Sunglasses | UV400 Surf Shades | TideRush Surf Co.",
    seoDescription: "Shop SaltWave Polarized Sunglasses — UV400 polarized lenses with saltwater-resistant finish. Lightweight, durable surf-style shades. Free shipping over $100.",
    tags: ["sunglasses", "polarized", "eyewear", "UV protection", "accessories", "summer 2026"],
    careInstructions: [
      "Rinse with fresh water after beach exposure",
      "Clean lenses with included microfiber cloth",
      "Store in hard case when not in use",
      "Avoid placing lenses face-down on surfaces",
      "Do not use paper towels or rough cloths on lenses"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653823896/JJkEDSAB6ZodpZyNL79Lgv/product-sunglasses-4BdkjAii9KL3Jvm4NSmy6M.webp",
    rating: 4.7,
    reviewCount: 94,
    reviews: [
      { author: "Chris W.", rating: 5, text: "The polarization is incredible — I can actually see fish in the water now. Super lightweight too.", date: "2026-04-22" },
      { author: "Mia F.", rating: 5, text: "Love the Transparent Blue color. They look amazing and the salt resistance is real — no corrosion after months of beach use.", date: "2026-04-08" },
      { author: "Jordan R.", rating: 4, text: "Great sunglasses for the price. Wish they came with a strap option, but the quality is top notch.", date: "2026-03-20" }
    ],
    crossSells: ["2", "3"],
    category: "Eyewear"
  }
];

export const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663653823896/JJkEDSAB6ZodpZyNL79Lgv/hero-banner-HrcxaYbzrchnV9HYPkLxCM.webp";
export const LIFESTYLE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663653823896/JJkEDSAB6ZodpZyNL79Lgv/lifestyle-beach-HgjrdQwmC7mLeYSP4YBBNe.webp";

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getCrossSells(product: Product): Product[] {
  return product.crossSells.map(id => getProductById(id)).filter(Boolean) as Product[];
}

export const TESTIMONIALS = [
  {
    author: "Jessica M.",
    location: "San Diego, CA",
    text: "TideRush gear has completely elevated my surf sessions. The quality is unmatched and everything looks incredible. My go-to brand now.",
    rating: 5,
  },
  {
    author: "Brandon K.",
    location: "Huntington Beach, CA",
    text: "From the surfboard to the backpack, every product feels premium. Fast shipping and the packaging was beautiful. Will definitely be back.",
    rating: 5,
  },
  {
    author: "Alana T.",
    location: "Maui, HI",
    text: "Finally a surf brand that combines performance with style. The UV shirt is my daily driver and the sunglasses are perfect for beach days.",
    rating: 5,
  },
];

export const FAQ_DATA = [
  {
    question: "What is your shipping policy?",
    answer: "We offer free standard shipping on all orders over $100 within the continental US. Standard shipping takes 5-7 business days. Expedited shipping (2-3 business days) is available for $12.99. Express overnight shipping is available for $24.99. All orders are processed within 1-2 business days."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day hassle-free return policy on all unused items in their original packaging. Surfboards can be returned within 14 days if unused and in original condition. To initiate a return, contact our support team with your order number. Return shipping is free for defective items."
  },
  {
    question: "How do I choose the right surfboard size?",
    answer: "Surfboard size depends on your height, weight, and skill level. As a general guide: 5'8\" boards are ideal for surfers under 150 lbs, 6'0\" for 150-180 lbs, and 6'2\" for 180+ lbs. For more personalized recommendations, contact our surf experts."
  },
  {
    question: "Are your products eco-friendly?",
    answer: "Sustainability is important to us. Our UV Surf Shirts are made from 85% recycled polyester. Our backpacks use recycled nylon webbing. We're committed to reducing our environmental footprint and are working toward more sustainable materials across all product lines."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship to the US, Canada, Australia, and select European countries. International shipping rates and delivery times vary by destination. Contact us for specific international shipping quotes."
  },
  {
    question: "How do I care for my surfboard?",
    answer: "Rinse your board with fresh water after every session. Store it out of direct sunlight and extreme heat. Use a quality board bag for transport. Repair any dings or cracks promptly to prevent water damage. Apply appropriate temperature wax before each session."
  },
  {
    question: "What UPF rating does the surf shirt have?",
    answer: "Our TideRush UV Surf Shirt has a UPF 50+ rating, which blocks 98% of harmful UV rays. This is the highest sun protection rating available for clothing, providing excellent protection for long days in the water."
  },
  {
    question: "Can I track my order?",
    answer: "Yes! Once your order ships, you'll receive a confirmation email with a tracking number and link. You can track your package in real-time through our shipping partner's website."
  }
];
