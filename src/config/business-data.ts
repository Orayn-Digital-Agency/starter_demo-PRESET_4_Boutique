// ============================================================
// ORAYN DEMO TEMPLATE — STARTER
// PRESET: Pharmacy / Healthcare
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
  businessName: "Medcare Pharmacy",
  tagline:
    "Licensed pharmaceutical care you can trust. Genuine medications, professional advice, fast dispensing.",
  phone: "+234 807 890 1234",
  whatsappNumber: "2348078901234",
  email: "medcarepharmacy@gmail.com",
  address: "3 Hospital Road, Surulere",
  city: "Lagos",
  category: "Pharmacy",
  industry: "Healthcare",
  logoText: "Medcare",
  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",
  ctaLabel: "Send Us a Prescription",

  about:
    "Medcare Pharmacy is a PCN-registered retail pharmacy serving the Surulere community and beyond for over 12 years. We stock a comprehensive range of prescription medicines, OTC drugs, supplements, and medical devices. Our licensed pharmacists are always available to counsel patients, verify prescriptions, and provide health guidance. We do not sell expired, fake, or substandard medications — ever.",

  services: [
    {
      name: "Prescription Dispensing",
      description:
        "Fast, accurate dispensing of all prescription medications. Our pharmacists verify every prescription before filling.",
      icon: "ClipboardCheck",
    },
    {
      name: "OTC Medications",
      description:
        "Wide range of over-the-counter drugs for malaria, pain, fever, infections, allergies, and common conditions.",
      icon: "Package",
    },
    {
      name: "Supplements & Vitamins",
      description:
        "Multivitamins, prenatal supplements, immune boosters, and sports nutrition from verified manufacturers.",
      icon: "Leaf",
    },
    {
      name: "Blood Pressure & Sugar Monitoring",
      description:
        "Free blood pressure checks and blood glucose monitoring available in-store. Know your numbers.",
      icon: "Activity",
    },
    {
      name: "Home Delivery",
      description:
        "Order medications via WhatsApp and receive delivery within 2–4 hours within Lagos. Same-day for urgent prescriptions.",
      icon: "Truck",
    },
    {
      name: "Pharmacist Consultation",
      description:
        "Speak directly with a licensed pharmacist about drug interactions, dosage guidance, and general health queries.",
      icon: "MessageCircle",
    },
  ],

  whyUs: [
    "PCN-registered — 100% genuine, verified medications",
    "12 years trusted service in Surulere and beyond",
    "Licensed pharmacist always on duty, 7 days a week",
    "WhatsApp orders with same-day delivery available",
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "8:00 AM – 9:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 6:00 PM" },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=85&auto=format&fit=crop",
      alt: "Pharmacist consulting with a patient",
    },
    {
      src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=85&auto=format&fit=crop",
      alt: "Well-stocked pharmacy shelves with medications",
    },
    {
      src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=85&auto=format&fit=crop",
      alt: "Pharmacist dispensing prescription medication",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1!2d3.3539!3d6.4969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8da000000001%3A0x0!2sSurulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000004",
};

export default businessData;
