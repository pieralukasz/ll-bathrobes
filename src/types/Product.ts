export interface RawProduct {
  $: { EAN: string };
  NazwaKategorii: string[];
  Nazwa: string[];
  Kolor: string[];
  Rozmiar: string[];
  Ilość: string[];
}

export interface ParsedProduct {
  ean: string;
  name: string;
  categoryName: string;
  color: string;
  size: string;
  quantity: number;
}
