export interface NavDropdownItem {
  label: string;
  href: string;
  desc?: string;
  icon?: any;
}

export interface NavItem {
  label: string;
  href: string;
  desc?: string;
  icon?: any;
  dropdown?: NavDropdownItem[];
}

export interface Product {
  category: string;
  title: string;
  desc?: string;
  href: string;
  image?: string;
  bgcolor: string;
  buttonText: string;
  cardHeightClass: string;
  cardHeight: string;
  imageConfig: {
    width: number;
    height: number;
    containerClass: string;
  };
}
export interface WhySeedfi {
  title: string;
  desc?: string;
  icon?: any;
  bgColor?: string;
}

export interface FuelingGrowth {
  title: string;
  category: string;
  desc: string;
  video: string;
  bgColor: string;
  imageConfig: {
    width: number;
    height: number;
  };
  icon?: {
    sphereFull?: string;
    topMoneyMistakes?: string;
    leftBesideImage?: string;
    bottomMoneyMistakes?: string;
    bottomRight?: string;
  };
}
export interface Reviews {
  review: string;
  author: string;
  location: string;
  icon?: any;
  bgColor?: string;
}
export interface Blog {
  image: string;
  title: string;
  author: string;
  date: string;
}
