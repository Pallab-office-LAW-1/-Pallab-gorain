// FIX: Removed unused React import and an import for icons that were either non-existent or unused in this file.
// FIX: Added a navigation link for the Skills section.
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const heroData = {
  name: "Advocate Pallab Kumar Gorain",
  title: "Driven by passion, purpose, and professionalism in India's justice system.",
  quote: "“Justice is not a service—it's a duty. And I'm here to serve.”",
  cta1: "Schedule Consultation",
  cta2: "My Resume",
  heroImage: "https://raw.githubusercontent.com/Pallab-office-LAW-1/Pallab-office-LAW-11-1/bea4c2a070f175670a09fd6d43370154f9d5a2b8/seedream-image%20(1).jpeg",
  badgeImage: "https://raw.githubusercontent.com/Pallab-office-LAW-1/Pallab-office-LAW-11-1/bea4c2a070f175670a09fd6d43370154f9d5a2b8/seedream-image%20(1).jpeg"
};

export const aboutData = {
  title: "About Me",
  subtitle: "A Dedicated Legal Professional",
  description: "I'm Pallab Kumar Gorain, a committed and enthusiastic law student currently pursuing my B.A.LL.B. degree from Imamul Hai Khan Law College, Bokaro. Alongside my academic journey, I am gaining real-time legal experience by practising at the Purulia District Court, West Bengal. Driven by passion, purpose, and professionalism, I've committed myself to learning and contributing to India's justice system with integrity, empathy, and deep-rooted constitutional values.",
  aboutImage: "https://raw.githubusercontent.com/Pallab-office-LAW-1/Pallab-office-LAW-11-1/bea4c2a070f175670a09fd6d43370154f9d5a2b8/1759595170023-0199b00b-52db-76a7-bc41-efd8759f8a1f.png",
};

export const servicesData = [
  {
    title: "Criminal Law",
    description: "Understanding FIRs, bail applications, IPC offences and criminal procedures.",
  },
  {
    title: "Family Law",
    description: "Divorce, maintenance, domestic violence, and guardianship matters.",
  },
  {
    title: "Constitutional Law",
    description: "Rights-based jurisprudence, Article 21, PILs and constitutional matters.",
  },
  {
    title: "Property Law",
    description: "Land disputes, registration, mutation and property documentation.",
  },
  {
    title: "Legal Drafting",
    description: "Structured pleadings, legal notices and professional documentation.",
  },
  {
    title: "Legal Research",
    description: "Case law research using SCC Online, Indian Kanoon and legal databases.",
  },
];

export const experienceData = [
    { year: "2021", title: "Enrolled in B.A.LL.B. Course", description: "Started integrated law degree at Imamul Hai Khan Law College, Bokaro." },
    { year: "2021", title: "Beginning Court Practice", description: "Started gaining practical experience at Purulia District Court." },
    { year: "2023", title: "Legal Research & Documentation", description: "Enhanced skills in case law research using SCC Online and Indian Kanoon." },
    { year: "2024", title: "Advanced Legal Training", description: "Focusing on constitutional law, criminal procedures, and family law." },
    { year: "2025", title: "Preparing for Legal Career", description: "Building foundation for future legal practice and judicial service." },
    { year: "Future", title: "Future Legal Practice", description: "Establishing independent legal practice and contributing to justice system." },
];

// FIX: Added skillsData to be used by the Skills component. This resolves the import error in components/Skills.tsx.
export const skillsData = [
    { skill: 'Legal Research & Analysis', level: '90%' },
    { skill: 'Legal Drafting & Documentation', level: '85%' },
    { skill: 'Criminal Law Practice', level: '80%' },
    { skill: 'Family Law Matters', level: '75%' },
    { skill: 'Constitutional Law', level: '70%' },
    { skill: 'Property Law', level: '70%' },
];

export const testimonialsData = [
    { quote: "Pallab's dedication to understanding legal concepts and practical application is impressive. A promising future lawyer.", name: "Senior Advocate M. Sharma", title: "Mentor at Purulia Court" },
    { quote: "His research skills and attention to detail in legal documentation are exceptional for a student.", name: "Prof. R. Das", title: "Faculty, Imamul Hai Khan Law College" },
    { quote: "Pallab combines academic knowledge with practical insight. His commitment to justice is evident.", name: "A. Sengupta", title: "Court Clerk, Purulia District Court" },
];

export const contactInfo = {
    address: "Purulia, West Bengal",
    office: "Working Office: Purulia Court",
    phone: "+91-8145760110",
    email: "pallabgorain50@gmail.com",
    whatsapp: "https://wa.me/918145760110"
};

export const footerData = {
    brand: "PKG",
    tagline: "Committed law student and legal intern, building a foundation for future legal practice with integrity and dedication.",
    copyright: `© ${new Date().getFullYear()} Pallab Kumar Gorain. All rights reserved.`
}