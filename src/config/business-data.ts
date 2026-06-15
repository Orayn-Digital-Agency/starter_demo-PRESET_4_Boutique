// ============================================================
// ORAYN DEMO TEMPLATE — STARTER
// PRESET: Boutique / Retail & Fashion
// ============================================================

export type Service = {
  name: string;
  description: string;
  icon?: string;
};

export type BusinessData = {
  businessName: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  email: string | null;
  address: string;
  city: string;
  category: string;
  industry: string;
  logoText: string;
  primaryColor?: string;
  accentColor?: string;
  ctaLabel: string;
  about: string;
  services: Service[];
  whyUs: string[];
  mapEmbedUrl: string;
  openingHours?: { day: string; hours: string }[];
  gallery?: { src: string; alt: string }[];
};

const businessData: BusinessData = {
  businessName: "Eclat Fashion House",
  tagline:
    "Curated women's fashion, African prints, and contemporary styles. Dress with intention.",
  phone: "+234 809 012 3456",
  whatsappNumber: "2348090123456",
  email: "shop@eclatfashion.ng",
  address: "18 Balogun Market Road, Lagos Island",
  city: "Lagos",
  category: "Boutique",
  industry: "Retail & Fashion",
  logoText: "Eclat",
  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",
  ctaLabel: "Shop Our Collection",

  about:
    "Eclat Fashion House is a premium Lagos boutique specialising in contemporary women's wear, Ankara and Adire designs, and occasion outfits. We have been dressing Lagos women for corporate, social, and traditional events for over 6 years. Every piece in our store is personally curated — no low-quality imports, no mass-produced catalogue items. We also offer bespoke tailoring for clients who want something entirely their own.",

  services: [
    {
      name: "Ready-to-Wear Collection",
      description:
        "Curated selection of dresses, blouses, co-ords, and trousers for the professional and social woman. New arrivals weekly.",
      icon: "ShoppingBag",
    },
    {
      name: "Ankara & Adire Designs",
      description:
        "African print outfits made with quality fabrics. Aso-ebi sets, modern Ankara blends, and festival looks.",
      icon: "Palette",
    },
    {
      name: "Bespoke Tailoring",
      description:
        "Custom-made outfits from your own fabric or ours. Formal gowns, wedding guest looks, and corporate wear.",
      icon: "Scissors",
    },
    {
      name: "Occasion Styling",
      description:
        "Personal styling service for events — birthdays, weddings, graduations, and corporate functions. We dress you head to toe.",
      icon: "Star",
    },
    {
      name: "Accessories",
      description:
        "Handbags, belts, scarves, and jewellery that complete the look. Locally made and imported pieces carefully selected.",
      icon: "Gem",
    },
    {
      name: "Online Orders & Delivery",
      description:
        "Order via Instagram or WhatsApp. We deliver across Lagos within 24–48 hours and ship nationwide within 3–5 days.",
      icon: "Truck",
    },
  ],

  whyUs: [
    "6 years dressing Lagos women with style and confidence",
    "Only quality fabrics and materials — no cheap imports",
    "In-house tailoring for fully custom and aso-ebi orders",
    "Nationwide delivery and responsive WhatsApp customer service",
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 8:00 PM" },
    { day: "Sunday", hours: "12:00 PM – 5:00 PM" },
  ],

  gallery: [
    {
      src: "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym91dGlxdWV8ZW58MHx8MHx8fDA%3D",
      alt: "Curated women's fashion display at Eclat",
    },
    {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=85&auto=format&fit=crop",
      alt: "Ankara and African print collections",
    },
    {
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=85&auto=format&fit=crop",
      alt: "Boutique interior with curated fashion pieces",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9!2d3.3853!3d6.4526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ae000000001%3A0x0!2sBalogun%2C%20Lagos%20Island!5e0!3m2!1sen!2sng!4v1716000000005",
};

export default businessData;
