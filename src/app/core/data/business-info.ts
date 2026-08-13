import { BusinessInfo } from '../models/business-info.model';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Schiaccia Pensieri',
  address: {
    street: 'Via Case Operaie 13',
    city: 'Soci - Bibbiena',
    province: 'AR',
    postalCode: '52011',
    country: 'Italia',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Via+Case+Operaie+13,+52011+Soci,+Bibbiena+AR&output=embed',
    mapsLinkUrl:
      'https://www.google.com/maps/search/?api=1&query=Via+Case+Operaie+13,+52011+Soci,+Bibbiena+AR',
  },
  phone: '+39 0575 1390068',
  phoneHref: 'tel:+3905751390068',
  email: 'schiacciapensieri13@gmail.com',
  social: {
    facebookUrl:
      'https://www.facebook.com/p/Schiaccia-Pensieri-di-Chiaramonte-Gabriele-61587302423545/',
    instagramUrl: 'https://www.instagram.com/schiaccia_pensieri/',
  },
  tripadvisor: {
    url: 'https://www.tripadvisor.it/Restaurant_Review-g1022306-d34419832-Reviews-Schiaccia_Pensieri-Bibbiena_Province_of_Arezzo_Tuscany.html',
    rating: 4.8,
    reviewCount: 5,
    widgetIframeUrl: 'https://70f3c56fee1b4a6ea1acc023165a74df.elf.site',
  },
  openingHours: [
    { dayOfWeek: 1, label: 'Lunedì', closed: false, periods: [{ open: '12:30', close: '14:30' }, { open: '17:30', close: '23:30' }] },
    { dayOfWeek: 2, label: 'Martedì', closed: true, periods: [] },
    { dayOfWeek: 3, label: 'Mercoledì', closed: false, periods: [{ open: '12:30', close: '14:30' }, { open: '17:30', close: '23:30' }] },
    { dayOfWeek: 4, label: 'Giovedì', closed: false, periods: [{ open: '12:30', close: '14:30' }, { open: '17:30', close: '23:30' }] },
    { dayOfWeek: 5, label: 'Venerdì', closed: false, periods: [{ open: '12:30', close: '14:30' }, { open: '17:30', close: '23:30' }] },
    { dayOfWeek: 6, label: 'Sabato', closed: false, periods: [{ open: '12:30', close: '14:30' }, { open: '17:30', close: '23:30' }] },
    { dayOfWeek: 0, label: 'Domenica', closed: false, periods: [{ open: '17:30', close: '23:30' }] },
  ],
  features: [
    'Accesso disabili',
    'Pagamenti con carta e contactless',
    'Wi-Fi gratuito',
    'Cane ammesso',
    'Da asporto',
    'Prenotazioni',
    'Seggioloni per bambini',
    'Servizio al tavolo',
    'Vino e birra',
  ],
};
