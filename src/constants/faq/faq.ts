import { FAQCategory } from "@/types/faq";

export const faqData: FAQCategory[] = [
  {
    id: "about-seedfi",
    name: "About SeedFi",
    questions: [
      {
        id: "about-1",
        question: "What types of loans does SeedFi offer?",
        answer: "SeedFi offers personal loans, business loans, and emergency loans designed to meet various financial needs. Our loans are tailored to help individuals and small businesses access quick, affordable financing.",
        category: "about-seedfi"
      },
      {
        id: "about-2", 
        question: "How does SeedFi work?",
        answer: "SeedFi uses advanced technology to assess your creditworthiness and provide instant loan decisions. Simply apply online, get approved within minutes, and receive funds directly to your account.",
        category: "about-seedfi"
      },
      {
        id: "about-3",
        question: "Is SeedFi regulated?",
        answer: "Yes, SeedFi is fully licensed and regulated by the appropriate financial authorities. We comply with all regulatory requirements to ensure your financial security.",
        category: "about-seedfi"
      }
    ]
  },
  {
    id: "loan-eligibility",
    name: "Loan Eligibility & Application",
    questions: [
      {
        id: "eligibility-1",
        question: "What are the requirements to apply for a loan?",
        answer: "To apply for a SeedFi loan, you must be at least 18 years old, have a valid ID, proof of income, and a bank account. Additional requirements may vary based on loan type.",
        category: "loan-eligibility"
      },
      {
        id: "eligibility-2",
        question: "How long does the application process take?",
        answer: "Our application process is designed to be quick and efficient. Most applications are processed within 5-10 minutes, with instant decisions in many cases.",
        category: "loan-eligibility"
      }
    ]
  },
  {
    id: "loan-interests",
    name: "Loan Interests & Timing",
    questions: [
      {
        id: "interest-1",
        question: "What are the interest rates for SeedFi loans?",
        answer: "Our interest rates start from 1.2% per month and vary based on your credit profile, loan amount, and repayment term. We offer competitive rates to ensure affordability.",
        category: "loan-interests"
      },
      {
        id: "interest-2",
        question: "How is interest calculated?",
        answer: "Interest is calculated monthly on the outstanding loan balance. We use a transparent calculation method with no hidden fees or charges.",
        category: "loan-interests"
      }
    ]
  },
  {
    id: "loan-amount",
    name: "Loan Amount & Repayment",
    questions: [
      {
        id: "amount-1",
        question: "What is the minimum and maximum loan amount?",
        answer: "SeedFi offers loans ranging from ₦3,000 to ₦1,500,000, depending on your eligibility and creditworthiness.",
        category: "loan-amount"
      },
      {
        id: "amount-2",
        question: "What are the repayment options?",
        answer: "We offer flexible repayment terms from 2 to 12 months. You can choose monthly installments that fit your budget and financial situation.",
        category: "loan-amount"
      }
    ]
  },
  {
    id: "security",
    name: "Security",
    questions: [
      {
        id: "security-1",
        question: "How secure is my personal information?",
        answer: "SeedFi uses bank-level encryption and security measures to protect your personal and financial information. We never share your data with unauthorized third parties.",
        category: "security"
      },
      {
        id: "security-2",
        question: "Is my money safe with SeedFi?",
        answer: "Yes, all transactions are secured with industry-standard encryption. We are fully licensed and regulated, ensuring your funds are protected.",
        category: "security"
      }
    ]
  }
];