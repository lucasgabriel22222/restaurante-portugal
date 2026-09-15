export interface MenuItem {
  id: string;
  name: string;
  category: 'executivo' | 'marmitex' | 'acompanhamentos' | 'bebidas';
  description: string;
  portion: string;
  badge?: string;
  image: string;
  priceNote?: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: 'CookingPot' | 'Truck' | 'Building2' | 'Clock' | 'ShieldCheck' | 'ThumbsUp';
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  verified: boolean;
  dateNote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyData {
  name: string;
  tagline: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  fullAddress: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  googleRating: number;
  googleReviewsCount: number;
  hoursSummary: string;
  openHour: number;
  closeHour: number;
  daysOpen: string;
  instagramUrl: string;
}
