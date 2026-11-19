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
import stayflowImg from '../assets/thumbnails/stayflow.webp';
import selloraImg from '../assets/thumbnails/sellora.webp';
import unifiedInboxImg from '../assets/thumbnails/unified-inbox.webp';
import meloImg from '../assets/thumbnails/melo.webp';
import scoutImg from '../assets/thumbnails/scout.webp';
import codeleImg from '../assets/thumbnails/codele.webp';
import bellyvelImg from '../assets/thumbnails/bellyvel.webp';
import sidehuntImg from '../assets/thumbnails/sidehunt.webp';
import axiomImg from '../assets/thumbnails/axiom.webp';
import tfamImg from '../assets/thumbnails/tfam.webp';
import codeforgeImg from '../assets/thumbnails/codeforge.webp';
import gmcImg from '../assets/thumbnails/gmc.webp';
import bellyvelLiteImg from '../assets/thumbnails/bellyvel-lite.webp';
import clipforgeImg from '../assets/thumbnails/clipforge.webp';
import affiliateImg from '../assets/thumbnails/affiliate.webp';
import kidsbooksImg from '../assets/thumbnails/kidsbooks.webp';
import digitalKitsImg from '../assets/thumbnails/digital-kits.webp';
import codekinImg from '../assets/thumbnails/codekin.webp';
import growthImg from '../assets/thumbnails/growth.webp';
import contentImg from '../assets/thumbnails/content.webp';
import portraitImg from '../assets/thumbnails/portrait.webp';
import slidesImg from '../assets/thumbnails/slides.webp';
import lastOnlineImg from '../assets/thumbnails/last-online.webp';
import labsImg from '../assets/thumbnails/labs.webp';
import educationImg from '../assets/thumbnails/education.webp';
import parallelImg from '../assets/thumbnails/parallel.webp';
import signbridgeImg from '../assets/thumbnails/signbridge.webp';
import interviewCopilotImg from '../assets/thumbnails/interview-copilot.webp';
import workmateImg from '../assets/thumbnails/workmate.webp';

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

// `status` marks projects still being built; it shows as a badge on the card.
// Only verified public demos have a `url`; private and local projects show their availability.
export type Project = {
  name: string;
  url?: string;
  status?: 'In development';
  description: string;
  tags: string[];
  image: ImageMetadata;
  alt: string;
  availability?: string;
  demoLabel?: string;
};

export const projects: Project[] = [
  {
    name: 'Interview Copilot',
    image: interviewCopilotImg,
    alt: 'Interview Copilot browser workspace for interview practice and source-grounded coding answers',
    url: 'https://bellyvel-interview-copilot.netlify.app',
    status: 'In development',
    description: 'Windows and browser workspace for interview practice and assessments that permit AI assistance, with English, Tagalog and Taglish transcription, source-grounded project answers, screen-code analysis, mock interviews and learning exercises. AI features require a configured provider.',
    tags: ['Python', 'PySide6', 'Whisper', 'JavaScript', 'OpenAI API'],
    demoLabel: 'View the web app',
  },
  {
    name: 'SignBridge AI',
    image: signbridgeImg,
    alt: 'SignBridge AI web app with camera controls and manual session notes',
    url: 'https://signbridge-ai-jas.netlify.app',
    status: 'In development',
    description: 'Android sign-language research prototype with landmark capture and a model-training workflow, plus an installable web app for camera preview, manual notes and text export. No trained ASL classifier is bundled; this release does not translate signs.',
    tags: ['Kotlin', 'Jetpack Compose', 'MediaPipe', 'JavaScript', 'PWA'],
    demoLabel: 'View the development app',
  },
  {
    name: 'PARALLEL',
    image: parallelImg,
    alt: 'PARALLEL Android download page introducing its music-reactive camera and eight visual effects',
    url: 'https://parallel-reality-a0b7c602.netlify.app',
    status: 'In development',
    description: 'Native offline Android camera with eight music-reactive visual effects, on-device microphone or consented device-audio analysis, and photo and video export. An installable debug APK is available; physical-device verification remains pending.',
    tags: ['Kotlin', 'Jetpack Compose', 'CameraX', 'OpenGL ES', 'Android'],
    demoLabel: 'View Android download page',
  },
  {
    name: "T Fam Ice",
    image: tfamImg,
    alt: "T Fam Ice sales and stock interface framed on a blue project thumbnail",
    description: "Mobile-first sales and inventory PWA for a family ice business, with a two-tap cashier, production and stock counts, a cash ledger, spreadsheet imports, reports and optional Google Sheets sync.",
    tags: ["Next.js", "TypeScript", "Supabase", "PWA"],
    availability: "Business workspace · sign-in required",
  },
  {
    name: "CODELE",
    image: codeleImg,
    alt: 'CODELE dashboard showing the daily coding trio, JavaScript learning journey and locally saved progress',
    url: "https://codele-learn.netlify.app",
    description: "Offline coding puzzle game with a daily trio, seven arcade modes, a seven-day learning journey, XP, badges and a timed Interview Arena. Progress stays on the device without an account.",
    tags: ["React", "TypeScript", "IndexedDB", "PWA"],
  },
  {
    name: "CodeForge: Developer Quest",
    image: codeforgeImg,
    alt: "CodeForge JavaScript Forest game and coding workspace",
    status: "In development",
    description: "Coding RPG set in JavaScript Forest, combining a playable Phaser world with a Monaco editor, implementation quests, debugging bosses and real automated checks of player code.",
    tags: ["React", "TypeScript", "Phaser", "Monaco", "IndexedDB"],
  },
  {
    name: "GMC Scholars Hub",
    image: gmcImg,
    alt: "GMC Scholars Hub dashboard with aggregate course progress and grade review tools",
    description: "Scholar administration dashboard with course equivalencies, grade submissions, document uploads, adviser review, completion tracking and retained submission history.",
    tags: ["React", "TypeScript", "Netlify Functions", "PostgreSQL"],
    availability: "Private workspace · authorized access only",
  },
  {
    name: "BellyVel",
    image: bellyvelImg,
    alt: 'BellyVel reviewer demo showing the simulated fifteen-workout commitment and mobile navigation',
    url: "https://bellyvel-commitment.netlify.app/?demo=1",
    status: "In development",
    description: "Fitness commitment app with guided workouts, readiness check-ins, progress and a companion. An isolated reviewer demo uses simulated workout stakes and rewards; Android and iOS projects share the web codebase.",
    tags: ["React", "TypeScript", "Cloudflare D1", "Capacitor"],
    demoLabel: "Try the simulated demo",
  },
  {
    name: "BellyVel Lite",
    image: bellyvelLiteImg,
    alt: "BellyVel Lite landing page with fitness photography and its virtual commitment features",
    url: "https://bellyvel-lite.netlify.app",
    status: "In development",
    description: "Separate fitness prototype pairing optional, consent-based AI goal illustrations with guided workout sessions and virtual commitments. Includes a signed Android build; all stakes and rewards are simulated.",
    tags: ["React", "TypeScript", "IndexedDB", "Android"],
    demoLabel: "View the prototype",
  },
  {
    name: "SideHunt AI",
    image: sidehuntImg,
    alt: 'SideHunt AI landing page introducing job discovery, proposals and an application workspace',
    url: "https://sidehunt-ai-jas.netlify.app",
    description: "Freelancer workspace with live Himalayas job discovery, profile-based matching, proposal drafts, business lead imports and an application tracker in an account-isolated workspace.",
    tags: ["Next.js", "TypeScript", "Netlify Functions", "Netlify Blobs"],
  },
  {
    name: "Axiom — AI Trading Research",
    image: axiomImg,
    alt: 'Axiom trading research dashboard preview with backend connection status',
    url: "https://axiom-ai-trader-jas.netlify.app",
    status: "In development",
    description: "Paper-trading research app with public Kraken data, technical charts, strategy backtesting and a persistent virtual account. The hosted frontend needs a connected backend for market data and trading research.",
    tags: ["React", "TypeScript", "FastAPI", "SQLite"],
    demoLabel: "View frontend preview",
  },
  {
    name: "ClipForge AI",
    image: clipforgeImg,
    alt: "ClipForge AI video clipping workspace with its video-to-clips illustration",
    status: "In development",
    description: "Local video clipping studio using speech transcription, scene detection and FFmpeg to create editable vertical clips with captions, previews and final exports from uploaded video.",
    tags: ["Next.js", "FastAPI", "Whisper", "FFmpeg", "Celery"],
  },
  {
    name: "Jea Labs AI Affiliate",
    image: affiliateImg,
    alt: "Jea Labs AI Affiliate operations dashboard showing its research and content workflow",
    status: "In development",
    description: "Local affiliate operations workspace for product research, content preparation, approval and publishing workflows, with persistent records, optional local AI and FFmpeg video tools.",
    tags: ["React", "TypeScript", "FastAPI", "SQLite", "Ollama"],
  },
  {
    name: "Digital Kids Books",
    image: kidsbooksImg,
    alt: "Digital Kids Books catalog with original story, coloring and sticker artwork",
    description: "A collection of 600 digital products: 200 story ebooks, 200 coloring books and 200 sticker packs, with editable artwork, printable downloads, listing drafts and a searchable offline catalog.",
    tags: ["Python", "SVG", "PDF", "EPUB", "Digital products"],
    availability: "Local collection · no public catalog yet",
  },
  {
    name: "Jea Labs Digital Kits",
    image: digitalKitsImg,
    alt: "Online Seller Kit workbook preview from the Jea Labs Digital Kits collection",
    status: 'In development',
    description: 'Three downloadable productivity kits for online sellers, payday budgeting and virtual assistants, combining spreadsheet workbooks, editable documents, PDFs and quick-start guides. Native application compatibility checks remain pending.',
    tags: ['Spreadsheets', 'DOCX', 'PDF', 'Digital products'],
    availability: 'Local release candidate · no public listing yet',
  },
  {
    name: "Codekin",
    image: codekinImg,
    alt: "Codekin interactive web demo with its illustrated AI teammate world",
    url: "https://codekin-demo.netlify.app",
    status: "In development",
    description: "Desktop development workspace with a small game world for AI teammates. The web and mobile demo simulates tasks and team activity; real project access and coding belong to the local desktop app.",
    tags: ["Godot", "Python", "FastAPI", "SQLite"],
    demoLabel: "Try the simulated demo",
  },
  {
    name: "BellyVel Growth Studio",
    image: growthImg,
    alt: "BellyVel Growth Studio interface preview with empty analytics and no business records",
    status: "In development",
    description: "Internal growth workspace for event tracking, attribution, funnel analytics, research CRM, a content workflow and a daily growth journal, calculated from stored events.",
    tags: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "SQLite"],
    availability: "Internal tool · no public demo",
  },
  {
    name: "Jea Labs Content Studio",
    image: contentImg,
    alt: "Jea Labs Content Studio overview in a fresh local workspace",
    status: "In development",
    description: "Local product marketing workspace that organizes product facts, content ideas, scripts, video preparation, captions, review and approval, with a worker and publication calendar.",
    tags: ["Next.js", "TypeScript", "SQLite", "AI APIs", "Playwright"],
  },
  {
    name: "Pet Portrait Studio",
    image: portraitImg,
    alt: "Finished dog portrait artwork presented as a Pet Portrait Studio project cover",
    description: "Local Jira order workspace for a pet-portrait production workflow: inspect orders, hand off reference images for editing, compose names and backgrounds, review results and upload approved artwork.",
    tags: ["React", "Node.js", "Sharp", "Jira API"],
    availability: "Local studio · Jira access required",
  },
  {
    name: "Church Slide Maker",
    image: slidesImg,
    alt: "Church Slide Maker editor with slides generated locally from the included sample sermon",
    description: "Sermon slide editor that groups notes without rewriting them, supports slide and photo editing, stores drafts on the device and exports PowerPoint and PDF. Optional AI falls back to local generation.",
    tags: ["React", "TypeScript", "IndexedDB", "PptxGenJS", "jsPDF"],
    availability: "No verified public demo link",
  },
  {
    name: "LAST ONLINE",
    image: lastOnlineImg,
    alt: "Original LAST ONLINE animated short cover artwork featuring a character with headphones",
    status: "In development",
    description: "Original animated short workflow with locally drawn 2D artwork, articulated movement, cinematic framing, an original soundtrack and dialogue captions. The current visual draft has character voices pending.",
    tags: ["Python", "2D animation", "Video", "Original artwork"],
    availability: "Local animation draft",
  },
  {
    name: "Jea AI Labs Website",
    image: labsImg,
    alt: "Jea AI Labs brand website with its software projects and digital products",
    description: "Brand website presenting practical AI software, websites and digital products, with dedicated privacy and terms pages.",
    tags: ["HTML", "CSS", "Brand website"],
    availability: "No verified public demo link",
  },
  {
    name: "Assessment of Learning E-Portfolio",
    image: educationImg,
    alt: "Assessment of Learning education website with its assessment philosophy and artifact navigation",
    description: "Education portfolio website presenting an assessment philosophy, learning artifacts, reflections and a final synthesis across linked pages.",
    tags: ["HTML", "CSS", "JavaScript", "Education"],
    availability: "No verified public demo link",
  },
  {
    name: 'StayFlow AI',
    url: 'https://stayflow-ai-230.netlify.app',
    status: 'In development',
    description:
      'Operations workspace for Philippine Airbnb hosts and staycation owners: reservations with database-level double-booking prevention, calendar, guests, payments and receipts, direct-booking pages, housekeeping tasks and AI reply drafts.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Claude API'],
    image: stayflowImg,
    alt: 'StayFlow AI demo workspace availability calendar with bookings across four units, beside the host overview on a phone',
  },
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
    name: 'Unified Inbox',
    url: 'https://unified-inbox-1ce657.netlify.app',
    description:
      'One inbox for Facebook Messenger, Instagram DMs, WhatsApp Business and website chat, with unread and delivery status, team roles and encrypted provider tokens. Try it with sample data.',
    tags: ['React', 'TypeScript', 'Hono', 'PostgreSQL', 'Meta APIs'],
    image: unifiedInboxImg,
    alt: 'Unified Inbox sample workspace with an Instagram conversation open on desktop, beside the all-inboxes list on a phone',
  },
  {
    name: 'Sellora',
    url: 'https://sellora-ph.netlify.app',
    status: 'In development',
    description:
      'Marketplace where students buy and sell study notes, templates, design assets and tools, or book tutoring and services. Accounts and listings are built; checkout and payouts are next.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle'],
    image: selloraImg,
    alt: 'Sellora student marketplace homepage with search and categories, on desktop and on a phone',
  },
  {
    name: 'Melo',
    url: 'https://melo-music-6548.netlify.app',
    description:
      'Music player with AI playlists: describe a mood and Melo, a small animated companion, builds a playlist of real tracks from Audius and YouTube.',
    tags: ['React', 'TypeScript', 'Express', 'Claude API'],
    image: meloImg,
    alt: 'Melo music player with the Make a playlist prompt and trending tracks, on desktop and on a phone',
  },
  {
    name: 'GymFlow',
    url: 'https://gymflow-app-629.netlify.app/#/home',
    description:
      'Mobile-first strength-training app that plans each session, coaches every exercise with an animated demo, and sets "beat last time" targets from your logged sets. Works offline, with optional Supabase sync.',
    tags: ['React', 'TypeScript', 'Supabase', 'PWA'],
    image: gymflowImg,
    alt: 'GymFlow workout in progress with sets to log on desktop, beside today\'s Full Body A plan on a phone',
  },
  {
    name: 'Jea Labs Studio',
    url: 'https://studio-jealabs.netlify.app',
    status: 'In development',
    description:
      'AI software studio where a Master Agent plans an app as a task graph, specialist agents design, code and test it, and the generated app runs in a sandboxed live preview.',
    tags: ['React', 'TypeScript', 'Node.js', 'Claude API', 'AI Agents'],
    image: studioImg,
    alt: 'Jea Labs Studio workspace with a generated fitness app in the live preview and the AI team panel, beside the studio on a phone',
  },
  {
    name: 'Jea Labs Scout',
    status: 'In development',
    description:
      'Lead research tool that finds businesses that may need a website, verifies their web presence with evidence, scores them with transparent rules and drafts short offers that are only sent after approval.',
    tags: ['Next.js', 'TypeScript', 'SQLite', 'Playwright', 'Claude API'],
    image: scoutImg,
    alt: 'Jea Labs Scout leads table with fictional demo businesses, website results and scores, beside the overview on a phone',
  },
  {
    name: 'AI Workmate PH',
    url: 'https://ai-workmate-ph.netlify.app',
    status: 'In development',
    description:
      '120 ready-to-fill AI prompts in four packs for Filipino virtual assistants, online sellers, real estate agents and teachers, in English, Filipino or Taglish. Free preview available; checkout opens soon.',
    tags: ['Digital product', 'Prompt engineering', 'PDF'],
    image: workmateImg,
    alt: 'AI Workmate PH landing page for the complete prompt bundle, on desktop and on a phone',
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

// Shop products. `gumroad` is the Gumroad product permalink (Buy Now opens its checkout on the page),
// `shopify` the product handle on the Shopify store and `payhip` the Payhip product code.
// `price` follows the Gumroad listing (a trailing + means pay what you want from that amount).
// Products without an image show a text cover on the shop page.
export const shopCategories = ['Source Code', 'Templates', 'Guides & Kits'] as const;

export const products: {
  name: string;
  category: (typeof shopCategories)[number];
  description: string;
  tags: string[];
  gumroad: string;
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
    gumroad: 'ncdszm',
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
    gumroad: 'cdhlx',
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
    gumroad: 'tglwdt',
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
    gumroad: 'lzctgq',
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
    gumroad: 'qnmosc',
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
    gumroad: 'qlonpr',
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
    gumroad: 'nyzrj',
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
    gumroad: 'idiiwt',
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
    gumroad: 'nioic',
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
    gumroad: 'starter',
    payhip: 'nSQlm',
    price: '₱999',
  },
  {
    name: 'From AI Beginner to App Builder',
    category: 'Guides & Kits',
    description: 'A 67-page handbook on AI, AI agents and coding with AI, with 20 practical prompts and a task-tracker app you build in four stages.',
    tags: ['PDF Guide', 'AI', 'Beginners'],
    shopify: 'from-ai-beginner-to-app-builder-understanding-ai-ai-agents-and-coding-with-ai',
    gumroad: 'handbook',
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
      'Built and shipped ten business products (customer conversations, a unified inbox, customer support, quoting, invoicing, reviews, booking, hotel, lead capture and follow-ups) as live demos and digital products, plus GymFlow, a strength-training app, and Melo, an AI music player.',
      'Building StayFlow AI (property operations for Airbnb hosts), Sellora (a student marketplace), Jea Labs Scout (lead research) and Jea Labs Studio, a multi-agent AI system that plans, codes and tests software in a live preview.',
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
