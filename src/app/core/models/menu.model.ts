export interface MenuItem {
  name: string;
  description?: string;
  price: string; // stringa per poter scrivere "€7,00 (da confermare)"
  featured?: boolean;
  tags?: string[]; // es. ['vegetariana', 'piccante']
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}
