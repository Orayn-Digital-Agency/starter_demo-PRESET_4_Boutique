// ============================================================
// ORAYN DEMO TEMPLATE — STARTER
// PRESET: Barber Shop / Beauty & Wellness
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
  businessName: "Kings Barber Shop",
  tagline:
    "Sharp cuts. Clean fades. Premium grooming for the modern Nigerian man.",
  phone: "+234 806 789 0123",
  whatsappNumber: "2348067890123",
  email: "kingsbarber@gmail.com",
  address: "10 Allen Avenue, Ikeja",
  city: "Lagos",
  category: "Barber Shop",
  industry: "Beauty & Wellness",
  logoText: "Kings",
  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",
  ctaLabel: "Book a Cut",

  about:
    "Kings Barber Shop has been the go-to barbershop on Allen Avenue for over 8 years. We are known for precision fades, clean lineups, and consistently excellent finishes. Our barbers are trained, experienced, and committed to making every client look their best. Walk in or book ahead — we treat every cut like it matters, because it does.",

  services: [
    {
      name: "Classic Haircut",
      description:
        "Scissors or clippers — a clean, precise cut tailored to your head shape, hair texture, and style preference.",
      icon: "Scissors",
    },
    {
      name: "Skin Fade",
      description:
        "Low, mid, or high skin fades with immaculate blending. The house specialty — done with barber-level detail.",
      icon: "Sparkles",
    },
    {
      name: "Beard Trim & Shape",
      description:
        "Full beard sculpting, goatee shaping, or a clean shave. Precision lining on every edge.",
      icon: "Star",
    },
    {
      name: "Hot Towel Shave",
      description:
        "Traditional straight-razor shave with hot towel prep, premium shaving cream, and aftershave treatment.",
      icon: "Flame",
    },
    {
      name: "Kids' Haircut",
      description:
        "Patient and precise cuts for children. We take the time to make kids comfortable and leave them looking sharp.",
      icon: "Heart",
    },
    {
      name: "Hair & Scalp Treatment",
      description:
        "Scalp massages, moisturising treatments, and anti-dandruff care. Your scalp health matters.",
      icon: "Leaf",
    },
  ],

  whyUs: [
    "8 years on Allen Avenue — a Lagos institution",
    "Trained barbers, consistent quality on every visit",
    "Cashless and walk-in friendly — no long waits",
    "Clean tools, fresh capes, hygienic environment always",
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "8:00 AM – 8:00 PM" },
    { day: "Saturday", hours: "7:00 AM – 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 6:00 PM" },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=85&auto=format&fit=crop",
      alt: "Barber delivering a precision fade",
    },
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&q=85&auto=format&fit=crop",
      alt: "Clean lineup and beard shaping in progress",
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&q=85&auto=format&fit=crop",
      alt: "Interior of Kings Barber Shop",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.3495!3d6.6015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923f00000001%3A0x0!2sAllen%20Avenue%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000003",
};

export default businessData;
