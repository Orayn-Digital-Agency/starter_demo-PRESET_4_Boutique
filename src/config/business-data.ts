// ============================================================
// ORAYN DEMO TEMPLATE — STARTER
// PRESET: Plumbing Service / Trade & Services
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
  businessName: "ProFlow Plumbing",
  tagline:
    "Expert plumbing services for homes and commercial properties across Lagos. Fast response, clean workmanship.",
  phone: "+234 803 456 7891",
  whatsappNumber: "2348034567891",
  email: "info@proflow.ng",
  address: "22 Ogba Road, Ikeja",
  city: "Lagos",
  category: "Plumbing Services",
  industry: "Trade & Services",
  logoText: "ProFlow",
  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",
  ctaLabel: "Book a Plumber",

  about:
    "ProFlow Plumbing has been solving water and drainage problems across Lagos for over 9 years. Our licensed plumbers handle everything from blocked drains and burst pipes to full bathroom installations and borehole pump maintenance. We work clean, price fairly, and stand behind every job we do.",

  services: [
    {
      name: "Pipe Repair & Replacement",
      description:
        "Burst pipes, leaking joints, and corroded lines repaired or fully replaced with quality materials that last.",
      icon: "Wrench",
    },
    {
      name: "Drain Unblocking",
      description:
        "Fast clearance of blocked sinks, toilets, and sewage drains. High-pressure jetting available for stubborn blockages.",
      icon: "Zap",
    },
    {
      name: "Bathroom & Kitchen Fitting",
      description:
        "Complete bathroom installations — WCs, basins, showers, bathtubs, and kitchen sink fittings done neatly.",
      icon: "Home",
    },
    {
      name: "Borehole & Water Pump Service",
      description:
        "Submersible pump installation, servicing, and repair. Pressure tank fitting and overhead tank connections.",
      icon: "Settings",
    },
    {
      name: "Water Heater Installation",
      description:
        "Electric and gas water heater supply and installation. Solar water heating systems also available.",
      icon: "Sun",
    },
    {
      name: "Commercial Plumbing",
      description:
        "Plumbing works for offices, hotels, restaurants, and industrial facilities. Planned maintenance contracts available.",
      icon: "Factory",
    },
  ],

  whyUs: [
    "9 years of trusted plumbing work across Lagos",
    "Licensed and insured — all jobs fully covered",
    "Same-day emergency response, 7 days a week",
    "Upfront pricing before we start any work",
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
    { day: "Sunday", hours: "Emergency calls only" },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=85&auto=format&fit=crop",
      alt: "Plumber working on bathroom pipe installation",
    },
    {
      src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=85&auto=format&fit=crop",
      alt: "Clean finished bathroom plumbing installation",
    },
    {
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=85&auto=format&fit=crop",
      alt: "Water pump and borehole equipment",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5!2d3.3478!3d6.6050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923a8b3c1111%3A0x0!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000001",
};

export default businessData;
