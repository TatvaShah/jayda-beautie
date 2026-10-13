import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Jayda Beautie",
  tagline: "North York nail artist. Acrylic, custom art and press ons with pretty sets and creative experiments.",
  category: "Nail artist",
  schemaType: "BeautySalon",
  area: "North York, ON",
  siteUrl: "https://jayda-beautie.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#6B3A2E" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "North York nail artist",
    headline: "Pretty sets and creative experiments",
    subhead: "Acrylic, custom hand painted art and press ons. Halloween bookings are open. Secure your spot online or by Instagram DM.",
    images: [
      { src: "/images/post-2.jpg", alt: "Coraline inspired Halloween nail art by Jayda Beautie" },
      { src: "/images/post-5.jpg", alt: "Hand painted Eeyore and Tigger nail art" },
      { src: "/images/post-6.jpg", alt: "Detailed custom nail art set" },
    ],
    secondaryCta: { label: "See the art", href: "#gallery" },
  },

  highlights: [
    "North York nail artist",
    "Acrylic, custom art, press ons",
    "Hand painted character art",
    "Book online or by DM",
  ],

  about: {
    title: "Art on every set",
    body: [
      "Jayda Beautie is a North York nail artist creating acrylic sets, custom hand painted art and press ons. Pretty everyday looks and creative experiments welcome.",
      "Halloween bookings are open. Secure your spot through the booking link, or reach out on Instagram.",
    ],
    image: { src: "/images/post-8.jpg", alt: "Joker inspired press on nails" },
  },

  menu: {
    label: "Services",
    title: "What I create",
    intro: "Service details and pricing are confirmed when you book. Halloween sets are open now.",
    variant: "list",
    showPrices: false,
    priceNote: "Pricing is confirmed when you book.",
    groups: [
      {
        title: "Nail services",
        items: [
          { name: "Acrylic sets", description: "Full acrylic enhancements" },
          { name: "Custom nail art", description: "Hand painted designs and character art" },
          { name: "Press on nails", description: "Custom press on sets" },
          { name: "Halloween sets", description: "Seasonal spooky and character looks. Bookings open." },
        ],
      },
    ],
    footnote: "Book online to secure your spot.",
  },

  gallery: {
    title: "Recent art",
    items: [
      { src: "/images/post-2.jpg", width: 1080, height: 1440, alt: "Coraline Halloween nails", caption: "Coraline Halloween set", href: "https://www.instagram.com/p/DeXCfF4lsGZ/" },
      { src: "/images/post-1.jpg", width: 960, height: 1707, alt: "Other Mother nail art", caption: "Other Mother vibes", href: "https://www.instagram.com/p/DeXLjGhKGth/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "Eeyore and Tigger nail art", caption: "Team Eeyore or Tigger", href: "https://www.instagram.com/p/DeKMw2Nlr-S/" },
      { src: "/images/post-3.jpg", width: 720, height: 1280, alt: "Winnie the Pooh artistic nails", caption: "Artistic nails", href: "https://www.instagram.com/p/DeM5FWzqq07/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1440, alt: "Sparkling custom nail set", caption: "Custom sparkle", href: "https://www.instagram.com/p/DdcJVD-F2Cv/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1440, alt: "Joker press on nails", caption: "Joker press ons", href: "https://www.instagram.com/p/DdWrsCVltgN/" },
      { src: "/images/post-4.jpg", width: 720, height: 1280, alt: "Hand painting Eeyore", caption: "Hand painted Eeyore", href: "https://www.instagram.com/p/DeKk4wIKwuC/" },
      { src: "/images/post-7.jpg", width: 720, height: 1280, alt: "Nail art growth comparison", caption: "Show me your growth", href: "https://www.instagram.com/p/DdWu-gVqi4f/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "jaydabeautie",
    embeds: [
      "https://www.instagram.com/p/DeXCfF4lsGZ/",
      "https://www.instagram.com/p/DeKMw2Nlr-S/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "Book now",
    title: "Secure your spot",
    intro: "Book online through Square, or tap the button to copy a starter DM for Instagram.",
    dmMessage: "Hi Jayda Beautie! I would like to book a nail set.\nPreferred date:\nService (acrylic / custom art / press ons):\nDesign idea (I can send inspo):\nNail shape / length:",
    links: [
      { label: "Book online (Square)", href: "https://squareup.com/appointments/book/LNHJNRJ9CXZ3F" },
    ],
    note: "Halloween bookings are open.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the Square booking link to secure your spot, or send a DM on Instagram with your preferred date and design idea." },
    { q: "Where are you located?", a: "Jayda Beautie is based in North York, Ontario. Details are shared when you book." },
    { q: "What services do you offer?", a: "Acrylic sets, custom hand painted nail art and press ons, including seasonal Halloween looks." },
    { q: "Do you do character art?", a: "Yes. Recent work includes hand painted character sets and creative experiments." },
  ],

  contact: {
    title: "Contact and booking",
    area: "North York, Ontario",
  },

  seo: {
    title: "Jayda Beautie | Nail artist in North York",
    description: "North York nail artist for acrylic, custom hand painted art and press ons. Halloween bookings open. Book online or by Instagram DM.",
    keywords: ["North York nails", "Toronto nail artist", "custom nail art Toronto", "Halloween nails North York"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
