import { MenuCategory } from '../models/menu.model';

// TODO: sostituire tutti i prezzi/piatti con il menu reale fornito dal titolare.
// I dati sotto sono segnaposto plausibili per una pizzeria italiana, chiaramente
// marcati come "da confermare".
export const MENU_DATA: MenuCategory[] = [
  {
    id: 'antipasti',
    name: 'Antipasti',
    items: [
      { name: 'Bruschette al pomodoro', price: '€5,00 (da confermare)' },
      { name: 'Tagliere di affettati e formaggi locali', price: '€12,00 (da confermare)' },
      { name: 'Crostini misti toscani', price: '€6,50 (da confermare)' },
    ],
  },
  {
    id: 'pizze-classiche',
    name: 'Pizze classiche',
    items: [
      { name: 'Margherita', description: 'Pomodoro, mozzarella, basilico', price: '€6,00 (da confermare)', featured: true, tags: ['vegetariana'] },
      { name: 'Marinara', description: 'Pomodoro, aglio, origano', price: '€5,50 (da confermare)', tags: ['vegetariana', 'vegana'] },
      { name: 'Napoli', description: 'Pomodoro, mozzarella, acciughe, origano', price: '€7,00 (da confermare)' },
      { name: 'Prosciutto e funghi', description: 'Pomodoro, mozzarella, prosciutto cotto, funghi', price: '€8,00 (da confermare)' },
    ],
  },
  {
    id: 'pizze-speciali',
    name: 'Pizze speciali',
    items: [
      { name: 'Schiaccia Pensieri', description: 'La nostra pizza della casa con ingredienti del Casentino', price: '€10,00 (da confermare)', featured: true },
      { name: 'Tartufo e porcini', description: 'Crema di tartufo, porcini, mozzarella, grana', price: '€11,00 (da confermare)', featured: true },
      { name: 'Piccante', description: 'Salame piccante, mozzarella, peperoncino fresco', price: '€9,00 (da confermare)', tags: ['piccante'] },
    ],
  },
  {
    id: 'bevande',
    name: 'Bevande',
    items: [
      { name: 'Acqua minerale 0.5L', price: '€1,50 (da confermare)' },
      { name: 'Birra artigianale locale', price: '€5,00 (da confermare)' },
      { name: 'Vino della casa (calice)', price: '€4,00 (da confermare)' },
      { name: 'Bibite in lattina', price: '€3,00 (da confermare)' },
    ],
  },
  {
    id: 'dolci',
    name: 'Dolci',
    items: [
      { name: 'Tiramisù della casa', price: '€5,00 (da confermare)' },
      { name: 'Torta della nonna', price: '€4,50 (da confermare)' },
    ],
  },
];
