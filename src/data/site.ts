// All portfolio content lives here. Edit this file to update the site.
// Portfolio thumbnails (real product UI). Gumroad covers live separately in /covers.
import verifactImg from '../assets/thumbnails/verifact.webp';
import supportdeskImg from '../assets/thumbnails/supportdesk.webp';
import receptionistImg from '../assets/thumbnails/ai-receptionist.webp';
import quoteflowImg from '../assets/thumbnails/quoteflow.webp';
import invoiceflowImg from '../assets/thumbnails/invoiceflow.webp';
import leadflowImg from '../assets/thumbnails/leadflow.webp';
import reviewflowImg from '../assets/thumbnails/reviewflow.webp';
import webinaboxImg from '../assets/thumbnails/webinabox.webp';
import followupImg from '../assets/thumbnails/followup.webp';

export const person = {
  name: 'Jasmere Paul Calagui',
  role: 'Software Developer & AI Builder',
  tagline: 'I build practical websites, software, AI tools, and automation systems that solve real problems.',
  focus: ['Web Development', 'AI', 'Automation', 'Digital Products'],
  location: 'Pampanga, Philippines',
  email: 'jasmerecalagui@gmail.com',
};

export const seo = {
  title: 'Jasmere Paul Calagui — Software Developer & AI Builder',
  description:
    'Personal portfolio of Jasmere Paul Calagui, a software developer and AI builder creating web applications, AI tools, automation systems, and digital products.',
};

export const links = {
  gumroad: 'https://jealabs.gumroad.com/',
  github: 'https://github.com/jasmere27',
  // Add your LinkedIn profile URL here to show it in the contact section.
  linkedin: '',
  youtube: 'https://www.youtube.com/@JeaAILabs',
  tiktok: 'https://www.tiktok.com/@verifact917',
};

export const featured = {
  name: 'VeriFact',
  url: 'https://verifact-ai.pages.dev/check',
  displayUrl: 'verifact-ai.pages.dev/check',
  summary: 'AI-powered fact-checking and information verification platform.',
  description:
    'Paste a claim, an article or a link, or upload a screenshot or a short voice clip. VeriFact picks out the checkable claims, searches the web for evidence, and judges each claim only against the sources it retrieved.',
  highlights: [
    'Text, link, image (OCR) and audio input',
    'A verdict per claim, from Supported to Not enough evidence, with dated sources',
    'Citations checked in code against what was actually retrieved',
    'Shareable reports, plus NewsFact, LegalFact and ResearchFact modes',
  ],
  note: 'Started as my IT capstone and rebuilt as a live product. It is an aid for checking information, not a final authority.',
  tags: ['Java', 'Spring Boot', 'Spring AI', 'React', 'PostgreSQL', 'LLM + Web Search'],
  image: verifactImg,
  alt: 'VeriFact check page with text, image and audio input tabs, next to an example report marking the claim "The Eiffel Tower is located in Rome" as Contradicted with a reference source and a fact-checker source',
};

export const projects = [
  {
    name: 'SupportDesk AI',
    url: 'https://supportdesk-ai-app.netlify.app',
    description:
      'Customer support helpdesk with an inbox, tickets, customers, a knowledge base and analytics, using Claude to draft replies, summarize tickets and suggest category, priority and tags.',
    tags: ['JavaScript', 'Node.js', 'Claude API', 'Helpdesk'],
    image: supportdeskImg,
    alt: 'SupportDesk AI inbox with a ticket list and an open ticket showing an AI summary with customer mood and suggested next steps',
  },
  {
    name: 'AI Receptionist',
    url: 'https://ai-receptionist-booking-demo.netlify.app/',
    description:
      'Business website with a chat receptionist that answers from business data and offers open time slots, a five-step booking flow and an admin dashboard.',
    tags: ['Astro', 'TypeScript', 'Booking', 'Chat assistant'],
    image: receptionistImg,
    alt: 'Demo dental clinic website with the Luma AI chat assistant answering a pricing question and offering open appointment times',
  },
  {
    name: 'QuoteFlow AI',
    url: 'https://quoteflow-ai-jealabs.netlify.app',
    description:
      'Quotation tool that turns a plain-language customer request into a line-item quote, with a quote pipeline dashboard and print-ready PDF output.',
    tags: ['React', 'TypeScript', 'Business software'],
    image: quoteflowImg,
    alt: 'QuoteFlow AI new-quote screen with the AI assistant turning a customer request into suggested services and line items, and a running quote total',
  },
  {
    name: 'InvoiceFlow AI',
    url: 'https://invoiceflow-ai.netlify.app',
    description:
      'Invoicing app for freelancers and small businesses with a revenue dashboard, payment tracking, print-ready PDF invoices, and AI-written line items and payment reminders.',
    tags: ['JavaScript', 'Node.js', 'Invoicing'],
    image: invoiceflowImg,
    alt: 'InvoiceFlow AI dashboard with revenue, paid, pending and overdue totals, a monthly revenue chart and invoice status breakdown',
  },
  {
    name: 'LeadFlow AI',
    url: 'https://leadflow-ai-jealabs.netlify.app/demo/',
    description:
      'Lead capture assistant that collects contact details, tags each enquiry by intent and drafts follow-up email and SMS messages for a lead dashboard.',
    tags: ['Astro', 'TypeScript', 'Lead capture', 'Automation'],
    image: leadflowImg,
    alt: 'LeadFlow AI lead dashboard with a lead detail panel showing an AI summary, contact details and buttons to generate a follow-up email or SMS',
  },
  {
    name: 'ReviewFlow AI',
    url: 'https://reviewflow-ai-jealabs.netlify.app',
    description:
      'Review management dashboard with rating trends, sentiment breakdown, drafted replies to customer reviews and review-request messages.',
    tags: ['React', 'TypeScript', 'Reputation'],
    image: reviewflowImg,
    alt: 'ReviewFlow AI dashboard with average rating, review counts, a six-month rating trend chart and a sentiment breakdown',
  },
  {
    name: 'WebInABox',
    url: 'https://webinabox-hotel-demo.netlify.app/',
    description:
      'Hotel website template with a working demo booking flow covering availability, pricing, taxes and guest details, plus a demo admin dashboard.',
    tags: ['Astro', 'TypeScript', 'Hospitality'],
    image: webinaboxImg,
    alt: 'Demo seaside hotel website with an illustrated hero and a check-in, check-out and guests search bar',
  },
  {
    name: 'FollowUp AI',
    url: 'https://followup-ai-jealabs.netlify.app',
    description:
      'Lead follow-up tracker with a pipeline dashboard, a daily list of who to contact, and AI-drafted email, SMS and call scripts for each lead.',
    tags: ['React', 'TypeScript', 'Sales', 'Automation'],
    image: followupImg,
    alt: 'FollowUp AI leads list with a lead drawer showing deal details and an AI-drafted follow-up email',
  },
];

export const experience = [
  {
    role: 'Freelance Web Developer',
    org: 'Alba Creative Lab',
    date: '2026 — Present',
    points: [
      'Maintain and improve the VDP business website and backend system with Laravel, PHP, MySQL, JavaScript and Blade.',
      'Built server-side pagination, filtering, search and exports, and reduced unnecessary queries in list and reporting workflows.',
      'Develop and test order-processing features, including StoreHub request reprocessing and backend integrations.',
    ],
  },
  {
    role: 'Software & AI Product Developer',
    org: 'Independent · Jea Labs',
    date: '2025 — Present',
    points: [
      'Took VeriFact from capstone to a live product: Spring Boot and Spring AI backend, React frontend, Postgres, deployed on Cloudflare Pages and Render.',
      'Built and shipped eight business products (customer support, quoting, invoicing, reviews, booking, hotel, lead capture and follow-ups) as live demos and digital products.',
    ],
  },
  {
    role: 'Freelance Software Developer',
    org: 'KZDB',
    date: '2025 — 2026',
    points: [
      'Built web and application solutions for business clients across frontend, backend, database, API and integration work.',
      'KZ Brewhaus POS system: business workflows, application features and database functionality.',
      'AzureNorth Pampanga booking system: frontend, backend, database and booking workflow, refined from client requirements.',
    ],
  },
  {
    role: 'BS Information Technology',
    org: 'Graduated',
    date: '2026',
    points: [
      'Projects include VeriFact (capstone), MindsHive (Android + Firebase mobile app) and BlogMatatag (PHP + MySQL blogging platform).',
      'Certifications: NDG Linux Essentials, Python Essentials, Networking.',
    ],
  },
];

export const skills = [
  { group: 'Languages', items: ['Java', 'PHP', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['Laravel', 'Spring Boot', 'Spring AI', 'React', 'Astro', 'Android'] },
  { group: 'Backend & Data', items: ['MySQL', 'PostgreSQL', 'Supabase', 'SQLite', 'Firebase', 'REST APIs'] },
  { group: 'AI & Automation', items: ['AI Agents', 'Prompt Engineering', 'Claude Code', 'OpenAI API', 'OCR', 'Speech-to-Text'] },
  { group: 'Tools & Infrastructure', items: ['Git', 'GitHub', 'Docker', 'Cloudflare', 'Netlify', 'Render'] },
  { group: 'Content & Product', items: ['Product Demos', 'Short-form Video', 'YouTube', 'TikTok'] },
];

export const channels = [
  {
    platform: 'YouTube',
    handle: 'Jea AI Labs',
    description: 'Product demos · AI · Software · Development',
    url: links.youtube,
    cta: 'Visit YouTube',
  },
  {
    platform: 'TikTok',
    handle: '@verifact917',
    description: 'Short-form AI and software content and product demos',
    url: links.tiktok,
    cta: 'Visit TikTok',
  },
];

export const about = [
  "I'm an IT graduate and software developer focused on building practical web applications, AI-powered tools and automation systems. I enjoy turning ideas into working products and finding ways to bring those products to real users.",
  'My work spans client systems (POS, booking and business websites), Laravel backends, and my own products, from a live AI fact-checker to business tools I publish as digital products.',
];
