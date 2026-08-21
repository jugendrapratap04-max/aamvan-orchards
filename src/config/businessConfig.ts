export interface JourneyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Orchard' | 'Harvest' | 'Packaging' | 'Logistics';
  image: string;
  aspect: 'standard' | 'tall' | 'wide';
  caption: string;
}

export interface B2BAudience {
  id: string;
  role: string;
  tagline: string;
  description: string;
  iconName: string;
  recommendedLabel: string;
}

export const BUSINESS_CONFIG = {
  brandName: "Aamvan Orchards",
  tagline: "Direct From Orchard. Built for Bulk.",
  shortDescriptor: "Premium Mango Supply",
  location: "Kasganj, Uttar Pradesh",
  fullLocation: "Kasganj, Uttar Pradesh, India — 207123",
  
  contactPlaceholder: {
    phone: "Contact details coming soon",
    whatsapp: "Contact details coming soon",
    email: "Contact details coming soon",
    address: "Kasganj, Uttar Pradesh — 207123",
    operatingHours: "Business hours available on request",
  },

  hero: {
    badge: "Direct Orchard Bulk Supply",
    headline: "From Our Orchard to Your Business.",
    subheadline: "Premium mangoes supplied in bulk, directly from our orchards in Kasganj, Uttar Pradesh to commercial buyers and fruit traders.",
    primaryCta: "Discuss Bulk Supply",
    secondaryCta: "Explore Our Orchard",
  },

  intro: {
    badge: "Direct Orchard Sourcing",
    title: "Built for Bulk. Grown with Care.",
    description: "Aamvan Orchards grows and sources mangoes across our orchards in the Kasganj region of Uttar Pradesh. We focus exclusively on large-volume commercial supply for wholesalers, fruit traders, and distributors.",
    highlights: [
      { label: "Bulk Sourcing", value: "Truck-Load Supply", desc: "Arranged for commercial buyers" },
      { label: "Direct Sourcing", value: "Orchard Direct", desc: "Sourced directly from our Kasganj orchards" },
      { label: "Fruit Quality", value: "Handpicked Selection", desc: "Graded for bulk commercial delivery" },
      { label: "Transport Logistics", value: "Delivery Available", desc: "Arranged based on buyer destination" },
    ]
  },

  bulkSupply: {
    title: "Mango Supply at Business Scale.",
    description: "Whether you require truck-load quantities for wholesale mandis, regional fruit distribution, or commercial business requirements, Aamvan Orchards provides reliable bulk procurement.",
    calculatorPresets: [
      { label: "Truck-Load Procurement", scale: "Truck-Load Quantities", idealFor: "Wholesalers & Fruit Mandis" },
      { label: "Commercial Batch Supply", scale: "Large Commercial Batches", idealFor: "Regional Distributors" },
      { label: "Large-Volume Supply", scale: "Bulk Crate Batches", idealFor: "Fruit Traders & Resellers" },
      { label: "Enterprise Procurement", scale: "Custom Bulk Scale", idealFor: "Bulk Commercial Buyers" }
    ]
  },

  pricingNotice: {
    badge: "Commercial Terms Policy",
    title: "Every Bulk Requirement Is Different.",
    description: "Market conditions, seasonal progression, fruit variety, quality grade, quantity scale, and delivery destination influence commercial terms. Connect with us directly to discuss your requirement and receive a current custom quote.",
    ctaText: "Request Current Quote"
  },

  orchardExperience: {
    badge: "Source Verification",
    title: "See Where Your Mangoes Come From.",
    description: "Serious bulk buyers are welcome to visit our mango orchards in Kasganj, Uttar Pradesh, see the fruit at source, and discuss their requirements directly with us.",
    floatingCardTitle: "ORCHARD VISITS WELCOME",
    floatingCardText: "See the source. Understand the quality. Meet the supplier directly.",
    locationPlaceholder: "Kasganj, Uttar Pradesh"
  },

  journeySteps: [
    {
      number: "01",
      title: "Orchard",
      subtitle: "Kasganj Groves",
      description: "Our mangoes are cultivated across our orchards in the Kasganj region of Uttar Pradesh.",
      image: "/images/hero_orchard.jpg",
      details: ["Cultivated in Kasganj, UP", "Multiple orchard groves", "Monitored fruit growth"]
    },
    {
      number: "02",
      title: "Fruit Selection",
      subtitle: "Maturity Evaluation",
      description: "Mangoes are evaluated at peak maturity before harvesting begins.",
      image: "/images/fruit_selection.jpg",
      details: ["Uniform size grading", "Firmness inspection", "Commercial suitability check"]
    },
    {
      number: "03",
      title: "Harvest",
      subtitle: "Handpicked Collection",
      description: "Fruit is handpicked carefully from trees to preserve outer skin quality.",
      image: "/images/harvest_process.jpg",
      details: ["Handpicked from trees", "Stem-intact picking", "Careful handling"]
    },
    {
      number: "04",
      title: "Preparation & Packing",
      subtitle: "Commercial Crating",
      description: "Mangoes are sorted and packed into commercial crates for bulk transport.",
      image: "/images/bulk_crates.jpg",
      details: ["Ventilated bulk crates", "Protected batch stacking", "Prepared for loading"]
    },
    {
      number: "05",
      title: "Bulk Loading",
      subtitle: "Freight Dispatch",
      description: "Crates are systematically loaded into transport trucks for safe dispatch.",
      image: "/images/logistics_truck.jpg",
      details: ["Truck-load loading", "Secure crate arrangement", "Immediate dispatch prep"]
    },
    {
      number: "06",
      title: "Delivery",
      subtitle: "Destination Arrival",
      description: "Delivery can be arranged for bulk buyers based on quantity, destination and requirement.",
      image: "/images/delivery_destination.jpg",
      details: ["Arranged for bulk buyers", "Destination delivery", "Coordinated dispatch"]
    }
  ] as JourneyStep[],

  audiences: [
    {
      id: "wholesalers",
      role: "Wholesalers",
      tagline: "Fruit mandi & market procurement",
      description: "Truck-load supply for wholesale market hubs and fruit mandis.",
      iconName: "Building2",
      recommendedLabel: "TRUCK-LOAD SUPPLY"
    },
    {
      id: "fruit-traders",
      role: "Fruit Traders",
      tagline: "Commercial fruit trading partners",
      description: "Direct orchard sourcing for fruit traders seeking dependable bulk supply.",
      iconName: "TrendingUp",
      recommendedLabel: "BULK PROCUREMENT"
    },
    {
      id: "distributors",
      role: "Distributors",
      tagline: "Regional distribution fulfillment",
      description: "Bulk supply for regional fruit distribution channels.",
      iconName: "Truck",
      recommendedLabel: "COMMERCIAL BUYERS"
    },
    {
      id: "bulk-buyers",
      role: "Bulk Fruit Buyers",
      tagline: "Large-volume fruit buyers",
      description: "Direct sourcing for commercial buyers requiring bulk mango quantities.",
      iconName: "Factory",
      recommendedLabel: "LARGE-VOLUME REQUIREMENTS"
    },
    {
      id: "retailers",
      role: "Retail Businesses",
      tagline: "Retail chain & business buyers",
      description: "Bulk crates tailored for retail business procurement.",
      iconName: "Store",
      recommendedLabel: "BULK MANGO SUPPLY"
    },
    {
      id: "commercial",
      role: "Commercial Buyers",
      tagline: "Commercial & processing requirements",
      description: "Large-volume bulk supply for commercial buyers and processing requirements.",
      iconName: "Building2",
      recommendedLabel: "TRUCK-LOAD SUPPLY"
    }
  ] as B2BAudience[],

  gallery: [
    {
      id: "g1",
      title: "Mature Mango Groves",
      category: "Orchard",
      image: "/images/hero_orchard.jpg",
      aspect: "wide",
      caption: "Visual representation of mature mango orchard groves."
    },
    {
      id: "g2",
      title: "Bulk Crate Packing",
      category: "Packaging",
      image: "/images/bulk_crates.jpg",
      aspect: "standard",
      caption: "Crated mangoes prepared for commercial bulk supply."
    },
    {
      id: "g3",
      title: "Orchard Pathway View",
      category: "Orchard",
      image: "/images/orchard_visit.jpg",
      aspect: "tall",
      caption: "Visual preview of orchard grove walking paths."
    },
    {
      id: "g4",
      title: "Harvest Selection",
      category: "Harvest",
      image: "/images/harvest_process.jpg",
      aspect: "standard",
      caption: "Handpicking fruit selection at peak maturity."
    },
    {
      id: "g5",
      title: "Bulk Transport Dispatch",
      category: "Logistics",
      image: "/images/logistics_truck.jpg",
      aspect: "wide",
      caption: "Truck loading bay for bulk commercial delivery."
    }
  ] as GalleryItem[]
};
