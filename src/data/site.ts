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
import connectImg from '../assets/thumbnails/connect.webp';
import gymflowImg from '../assets/thumbnails/gymflow.webp';
import studioImg from '../assets/thumbnails/studio.webp';

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
  payhip: 'https://payhip.com/JeaLabs',
  shopify: 'https://jealabs.myshopify.com/',
  github: 'https://github.com/jasmere27',
  // Add your LinkedIn profile URL here to show it in the contact section.
  linkedin: '',
  youtube: 'https://www.youtube.com/@JeaAILabs',
  tiktok: 'https://www.tiktok.com/@aijealabs',
  facebook: 'https://www.facebook.com/profile.php?id=61595052848380',
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
  alt: 'VeriFact homepage with an example report marking a claim as Contradicted with its sources, beside the VeriFact check page on a phone',
};

export const projects = [
  {
    name: 'Jea Labs Connect',
    url: 'https://jea-labs-connect.netlify.app',
    description:
      'Customer conversation workspace with a shared inbox for Messenger, Instagram, WhatsApp and website chat, an opportunity queue, and quotes customers accept on their phone, tracked through to payment.',
    tags: ['React', 'TypeScript', 'Hono', 'PostgreSQL', 'Claude API'],
    image: connectImg,
    alt: 'Jea Labs Connect demo inbox with a customer conversation and a sent quotation on desktop, beside the daily business briefing on a phone',
  },
  {
    name: 'GymFlow',
    url: 'https://gymflow-app-629.netlify.app',
    description:
      'Mobile-first strength-training app that plans each session, coaches every exercise with an animated demo, and sets "beat last time" targets from your logged sets. Works offline, with optional Supabase sync.',
    tags: ['React', 'TypeScript', 'Supabase', 'PWA'],
    image: gymflowImg,
    alt: 'GymFlow workout in progress with sets to log on desktop, beside today\'s Full Body A plan on a phone',
  },
  {
    name: 'Jea Labs Studio',
    url: 'https://studio-jealabs.netlify.app',
    description:
      'In development: an AI software studio where a Master Agent plans an app as a task graph, specialist agents design, code and test it, and the generated app runs in a sandboxed live preview.',
    tags: ['React', 'TypeScript', 'Node.js', 'Claude API', 'AI Agents'],
    image: studioImg,
    alt: 'Jea Labs Studio workspace with a generated fitness app in the live preview and the AI team panel, beside the studio on a phone',
  },
  {
    name: 'SupportDesk AI',
    url: 'https://supportdesk-ai-app.netlify.app',
    description:
      'Customer support helpdesk with an inbox, tickets, customers, a knowledge base and analytics, using Claude to draft replies, summarize tickets and suggest category, priority and tags.',
    tags: ['JavaScript', 'Node.js', 'Claude API', 'Helpdesk'],
    image: supportdeskImg,
    alt: 'SupportDesk AI inbox with an AI ticket summary on desktop, beside the helpdesk dashboard on a phone',
  },
  {
    name: 'AI Receptionist',
    url: 'https://ai-receptionist-booking-demo.netlify.app/',
    description:
      'Business website with a chat receptionist that answers from business data and offers open time slots, a five-step booking flow and an admin dashboard.',
    tags: ['Astro', 'TypeScript', 'Booking', 'Chat assistant'],
    image: receptionistImg,
    alt: 'AI Receptionist demo dental clinic site with the Luma AI chat offering open appointment times, beside the mobile site on a phone',
  },
  {
    name: 'QuoteFlow AI',
    url: 'https://quoteflow-ai-jealabs.netlify.app',
    description:
      'Quotation tool that turns a plain-language customer request into a line-item quote, with a quote pipeline dashboard and print-ready PDF output.',
    tags: ['React', 'TypeScript', 'Business software'],
    image: quoteflowImg,
    alt: 'QuoteFlow AI new-quote screen with the AI assistant drafting line items, beside the quote dashboard on a phone',
  },
  {
    name: 'InvoiceFlow AI',
    url: 'https://invoiceflow-ai.netlify.app',
    description:
      'Invoicing app for freelancers and small businesses with a revenue dashboard, payment tracking, print-ready PDF invoices, and AI-written line items and payment reminders.',
    tags: ['JavaScript', 'Node.js', 'Invoicing'],
    image: invoiceflowImg,
    alt: 'InvoiceFlow AI revenue dashboard with totals, a monthly chart and invoice status, on desktop and on a phone',
  },
  {
    name: 'LeadFlow AI',
    url: 'https://leadflow-ai-jealabs.netlify.app/demo/',
    description:
      'Lead capture assistant that collects contact details, tags each enquiry by intent and drafts follow-up email and SMS messages for a lead dashboard.',
    tags: ['Astro', 'TypeScript', 'Lead capture', 'Automation'],
    image: leadflowImg,
    alt: 'LeadFlow AI lead dashboard with an AI summary and follow-up buttons, beside the demo clinic site with its lead capture chat on a phone',
  },
  {
    name: 'ReviewFlow AI',
    url: 'https://reviewflow-ai-jealabs.netlify.app',
    description:
      'Review management dashboard with rating trends, sentiment breakdown, drafted replies to customer reviews and review-request messages.',
    tags: ['React', 'TypeScript', 'Reputation'],
    image: reviewflowImg,
    alt: 'ReviewFlow AI dashboard with average rating, rating trend and sentiment breakdown, on desktop and on a phone',
  },
  {
    name: 'WebInABox',
    url: 'https://webinabox-hotel-demo.netlify.app/',
    description:
      'Hotel website template with a working demo booking flow covering availability, pricing, taxes and guest details, plus a demo admin dashboard.',
    tags: ['Astro', 'TypeScript', 'Hospitality'],
    image: webinaboxImg,
    alt: 'WebInABox demo hotel booking page with dates, guests and room choices, beside the hotel homepage on a phone',
  },
  {
    name: 'FollowUp AI',
    url: 'https://followup-ai-jealabs.netlify.app',
    description:
      'Lead follow-up tracker with a pipeline dashboard, a daily list of who to contact, and AI-drafted email, SMS and call scripts for each lead.',
    tags: ['React', 'TypeScript', 'Sales', 'Automation'],
    image: followupImg,
    alt: 'FollowUp AI leads list with an AI-drafted follow-up email on desktop, beside the follow-up dashboard on a phone',
  },
];

// Shop products. `shopify` is the product handle on the Shopify store, `payhip` the Payhip product code.
// `price` follows the Gumroad listing (a trailing + means pay what you want from that amount).
// Products without an image show a text cover on the shop page.
export const shopCategories = ['Source Code', 'Templates', 'Guides & Kits'] as const;

export const products: {
  name: string;
  category: (typeof shopCategories)[number];
  description: string;
  tags: string[];
  shopify: string;
  payhip: string;
  price: string;
  demo?: string;
  image?: ImageMetadata;
  alt?: string;
}[] = [
  {
    name: 'VeriFact: AI Fact-Checking Platform',
    category: 'Source Code',
    description: 'Full source code of VeriFact: claim extraction, web evidence search, per-claim verdicts with sources, and text, link, image and audio input.',
    tags: ['Spring Boot', 'Spring AI', 'React', 'PostgreSQL'],
    shopify: 'verifact-ai-fact-checking-platform-full-source-code',
    payhip: 'oy5rm',
    price: '₱5,000',
    demo: featured.url,
    image: verifactImg,
    alt: featured.alt,
  },
  {
    name: 'SupportDesk AI: Helpdesk & Customer Support App',
    category: 'Source Code',
    description: 'Inbox, tickets, customers, knowledge base and analytics, with Claude drafting replies and summarizing and tagging tickets.',
    tags: ['JavaScript', 'Node.js', 'Claude API'],
    shopify: 'supportdesk-ai-ai-helpdesk-customer-support-app-source-code',
    payhip: 'MO14o',
    price: '₱1,500',
    demo: 'https://supportdesk-ai-app.netlify.app',
    image: supportdeskImg,
    alt: 'SupportDesk AI inbox with an AI ticket summary on desktop, beside the helpdesk dashboard on a phone',
  },
  {
    name: 'QuoteFlow AI: Quote & Proposal Generator',
    category: 'Source Code',
    description: 'Turns a plain-language customer request into a line-item quote, with a quote pipeline dashboard and print-ready PDFs.',
    tags: ['React', 'TypeScript'],
    shopify: 'quoteflow-ai-ai-quote-proposal-generator-react-typescript-source-code',
    payhip: 'ngvd6',
    price: '₱1,500',
    demo: 'https://quoteflow-ai-jealabs.netlify.app',
    image: quoteflowImg,
    alt: 'QuoteFlow AI new-quote screen with the AI assistant drafting line items, beside the quote dashboard on a phone',
  },
  {
    name: 'InvoiceFlow AI: Invoicing App for Freelancers',
    category: 'Source Code',
    description: 'Revenue dashboard, payment tracking, print-ready invoices and AI-written payment reminders. Plain HTML and JavaScript, no dependencies.',
    tags: ['HTML', 'JavaScript'],
    shopify: 'invoiceflow-ai-invoicing-app-source-code-for-freelancers-html-js-no-dependencies',
    payhip: 'AzmJd',
    price: '₱1,500',
    demo: 'https://invoiceflow-ai.netlify.app',
    image: invoiceflowImg,
    alt: 'InvoiceFlow AI revenue dashboard with totals, a monthly chart and invoice status, on desktop and on a phone',
  },
  {
    name: 'FollowUp AI: Lead Follow-Up Tracker',
    category: 'Source Code',
    description: 'Pipeline dashboard, a daily list of who to contact, and AI-drafted email, SMS and call scripts for each lead.',
    tags: ['React', 'TypeScript'],
    shopify: 'followup-ai-lead-follow-up-tracker-with-ai-message-drafts-react-source-code',
    payhip: 'QMRrB',
    price: '₱1,500',
    demo: 'https://followup-ai-jealabs.netlify.app',
    image: followupImg,
    alt: 'FollowUp AI leads list with an AI-drafted follow-up email on desktop, beside the follow-up dashboard on a phone',
  },
  {
    name: 'ReviewFlow AI: Review & Reputation SaaS Template',
    category: 'Templates',
    description: 'Rating trends, sentiment breakdown, drafted replies to reviews and review-request messages, ready to brand as your own.',
    tags: ['React', 'TypeScript', 'SaaS'],
    shopify: 'reviewflow-ai-ai-review-reputation-management-saas-template',
    payhip: 'gdBbK',
    price: '₱1,500+',
    demo: 'https://reviewflow-ai-jealabs.netlify.app',
    image: reviewflowImg,
    alt: 'ReviewFlow AI dashboard with average rating, rating trend and sentiment breakdown, on desktop and on a phone',
  },
  {
    name: 'AI Receptionist + Booking Website',
    category: 'Templates',
    description: 'Business website with a chat receptionist that answers from business data, a five-step booking flow and an admin dashboard.',
    tags: ['Astro', 'TypeScript', 'Booking'],
    shopify: 'ai-receptionist-booking-website-astro-template',
    payhip: 'PeQw1',
    price: '₱2,000',
    demo: 'https://ai-receptionist-booking-demo.netlify.app/',
    image: receptionistImg,
    alt: 'AI Receptionist demo dental clinic site with the Luma AI chat offering open appointment times, beside the mobile site on a phone',
  },
  {
    name: 'LeadFlow AI: Lead Capture Website Template',
    category: 'Templates',
    description: 'Small-business website with a lead capture assistant that tags each enquiry by intent and drafts follow-up messages.',
    tags: ['Astro', 'TypeScript', 'Lead capture'],
    shopify: 'leadflow-ai-ai-lead-capture-website-template-for-small-businesses',
    payhip: 'L9QNf',
    price: '₱1,500',
    demo: 'https://leadflow-ai-jealabs.netlify.app/demo/',
    image: leadflowImg,
    alt: 'LeadFlow AI lead dashboard with an AI summary and follow-up buttons, beside the demo clinic site with its lead capture chat on a phone',
  },
  {
    name: 'WebInABox: Hotel Website + Booking System',
    category: 'Templates',
    description: 'Hotel website with a booking flow covering availability, pricing, taxes and guest details, plus an admin dashboard.',
    tags: ['Astro', 'TypeScript', 'Hospitality'],
    shopify: 'webinabox-hotel-website-booking-system-template-astro',
    payhip: 'Oq0Qz',
    price: '₱1,000',
    demo: 'https://webinabox-hotel-demo.netlify.app/',
    image: webinaboxImg,
    alt: 'WebInABox demo hotel booking page with dates, guests and room choices, beside the hotel homepage on a phone',
  },
  {
    name: 'JEA LABS: AI Coding Agent Starter Kit',
    category: 'Guides & Kits',
    description: 'Reusable instruction files, eight specialist roles, seven workflows and copy-ready prompts for guiding AI coding assistants, with Claude Code and Codex CLI guides and a practice app.',
    tags: ['AI Agents', 'Claude Code', 'Codex CLI'],
    shopify: 'jea-labs-ai-coding-agent-starter-kit',
    payhip: 'nSQlm',
    price: '₱999',
  },
  {
    name: 'From AI Beginner to App Builder',
    category: 'Guides & Kits',
    description: 'A 67-page handbook on AI, AI agents and coding with AI, with 20 practical prompts and a task-tracker app you build in four stages.',
    tags: ['PDF Guide', 'AI', 'Beginners'],
    shopify: 'from-ai-beginner-to-app-builder-understanding-ai-ai-agents-and-coding-with-ai',
    payhip: '97pZn',
    price: '₱499',
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
      'Built and shipped nine business products (customer conversations, customer support, quoting, invoicing, reviews, booking, hotel, lead capture and follow-ups) as live demos and digital products, plus GymFlow, a strength-training app.',
      'Building Jea Labs Studio, a multi-agent AI system that plans, codes and tests software in a live preview.',
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
    handle: '@aijealabs',
    description: 'Short-form AI and software content and product demos',
    url: links.tiktok,
    cta: 'Visit TikTok',
  },
];

export const about = [
  "I'm an IT graduate and software developer focused on building practical web applications, AI-powered tools and automation systems. I enjoy turning ideas into working products and finding ways to bring those products to real users.",
  'My work spans client systems (POS, booking and business websites), Laravel backends, and my own products, from a live AI fact-checker to business tools I publish as digital products.',
];
