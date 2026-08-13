export interface OpeningPeriod {
  open: string; // formato "HH:mm"
  close: string; // formato "HH:mm"
}

export interface DayHours {
  /** 0 = Domenica ... 6 = Sabato, come Date.getDay() */
  dayOfWeek: number;
  label: string;
  closed: boolean;
  periods: OpeningPeriod[];
}

export interface Review {
  author?: string;
  text: string;
  rating: number; // 1-5
}

export interface BusinessInfo {
  name: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    mapsEmbedUrl: string;
    mapsLinkUrl: string;
  };
  phone: string;
  phoneHref: string;
  email: string;
  social: {
    facebookUrl: string;
    instagramUrl: string;
  };
  tripadvisor: {
    url: string;
    rating: number;
    reviewCount: number;
    widgetIframeUrl: string | null;
  };
  openingHours: DayHours[];
  features: string[];
}
