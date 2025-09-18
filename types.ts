
export enum Page {
  Home = 'Home',
  About = 'About',
  Products = 'Products',
  WorkWithUs = 'Work With Us',
  Downloads = 'Downloads',
  ContactUs = 'Contact Us',
}

export interface Product {
  id: number;
  name: string;
  packingSize: string;
  mrp: string;
  description: string;
  images: string[];
}
