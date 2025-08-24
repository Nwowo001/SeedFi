import { NavItem } from "@/types";


export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Company',
    href: '#',
    icon: '/assets/icons/chevron-down.svg',
    dropdown: [
      {
        label: 'About Us',
        href: '/about',
        desc: 'Learn Who we are, What we do, What we stand for',
        icon: '/assets/icons/about.svg'
      },
      {
        label: 'Career',
        href: '/career',
        desc: 'Join our team and grow your career in fintech',
        icon: '/assets/icons/career.svg'
      },
    ],
  },
  {
    label: 'Product',
    href: '#',
    icon: '/assets/icons/chevron-down.svg',
    dropdown: [
      {
        label: 'Personal Loans',
        href: '/product/personal-loan',
        desc: 'Get instant access to loans in minutes',
        icon: '/assets/icons/personal-loan.svg'
      },
      {
        label: 'Merchant Application',
        href: '/product/merchant',
        desc: 'Get instant access to loan in minutes',
        icon: '/assets/icons/merchant.svg'
      },
      {
        label: 'Loan Calculator',
        href: '/product/loan-calculator',
        desc: 'Use the calculator and see how much you can borrow',
        icon: '/assets/icons/calculator.svg'
      },
      {
        label: 'SeedScore',
        href: '/product/seedscore',
        desc: 'Your key to financial confidence',
        icon: '/assets/icons/seedscore.svg'
      },
    ],
  },
  {
    label: 'Resources',
    href: '#',
    icon: '/assets/icons/chevron-down.svg',
    dropdown: [
      {
        label: 'Contacts',
        href: '/contacts',
        desc: 'Get in touch with our support team for help or inquiries.',
        icon: '/assets/icons/contact.svg'
      },
      {
        label: 'Blog',
        href: '/blog',
        desc: 'Read expert tips, updates, and stories on loans and finance',
        icon: '/assets/icons/blog.svg'
      },
      {
        label: 'FAQ',
        href: '/faq',
        desc: 'Find quick answers to common questions about our services',
        icon: '/assets/icons/faq.svg'
      },
    ],
  },
];
