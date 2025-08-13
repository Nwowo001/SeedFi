export interface NavDropdownItem {
  label: string;
  href: string;
  desc?:string;
  icon?: any
}

export interface NavItem {
  label: string;
  href: string;
  desc?:string;
  icon?: any
  dropdown?: NavDropdownItem[];
}

export interface Product {
  category: string;
  title:string;
  href: string;
  desc?:string;
  image?: any;
}