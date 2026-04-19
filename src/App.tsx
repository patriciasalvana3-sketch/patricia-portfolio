import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CalendarDays,
  ChevronRight,
  Globe,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import profilePhoto from "./assets/profile.jpg";
import leadsShot from "./assets/leadgen.jpg";
export default function App() {
  const contact = {
    location: "Taguig City, Philippines",
    phone: "09605439678",
    internationalPhone: "+639605439678",
    email: "patriciasalvana3@gmail.com",
    facebook: "https://www.facebook.com/ishaaa11",
    onlinejobs: "https://www.onlinejobs.ph/jobseekers/info/4910570",
    googleMeet: "https://calendar.app.google/wysgVfxwg6Z8VDECA",
  };

  const stats = [
    { label: "Product Listings Managed", value: "100+" },
    { label: "Daily Customer Inquiries", value: "15-20" },
    { label: "Qualified Leads Generated", value: "100+" },
  ];

  const summaryCards = [
    {
      title: "Objective",
      text: "I am committed to providing high-quality virtual support that helps businesses operate efficiently and achieve their goals. With strong organizational abilities, attention to detail, and the capacity to manage multiple responsibilities effectively, I deliver reliable assistance across administrative, e-commerce, and customer support functions while maintaining professionalism, accuracy, and efficiency.",
    },
    {
      title: "Mission",
      text: "My mission is to provide dependable, detail-oriented, and results-driven virtual assistance that supports business growth and operational efficiency. I aim to streamline workflows, reduce operational challenges, and enhance productivity through strong communication, problem-solving, and proactive support while continuously adapting to new tools and industry trends.",
    },
    {
      title: "Goal",
      text: "My goal is to continuously develop my skills and expand my expertise as a Virtual Assistant while delivering high-quality support that contributes to business growth. I strive to strengthen my knowledge in administrative management, e-commerce operations, and digital tools so I can take on greater responsibilities and provide long-term value to every organization I support.",
    },
  ];

  const services = [
    {
      title: "Amazon Support",
      description: "Product listings, backend updates, keyword support, and account monitoring.",
      icon: ShoppingBag,
    },
    {
      title: "Shopify Operations",
      description: "Product uploads, inventory updates, collection setup, and store maintenance.",
      icon: LayoutDashboard,
    },
    {
      title: "Customer Service",
      description: "Order handling, inbox management, follow-ups, and professional responses.",
      icon: MessageCircle,
    },
    {
      title: "Admin Assistance",
      description: "Scheduling, file organization, research, documentation, and coordination.",
      icon: Briefcase,
    },
    {
      title: "Lead Generation",
      description: "Prospect research, data gathering, validation, and lead list organization.",
      icon: Search,
    },
    {
      title: "Remote Team Support",
      description: "Clear communication, workflow support, and reliable daily task execution.",
      icon: Users,
    },
  ];

  const experience = [
    {
      role: "Amazon Virtual Assistant",
      client: "Chloe Anderson",
      period: "July 2025 - December 2025",
      accent: "from-rose-100 to-pink-50",
      points: [
        "Supported the management and optimization of product listings by enhancing titles, descriptions, and keyword usage to improve visibility and listing quality.",
        "Ensured accuracy and consistency across product listings by organizing product information and conducting regular quality checks.",
        "Monitored account activity to identify and resolve listing issues promptly, helping maintain overall account health.",
        "Performed basic product and keyword research to support better product positioning and discoverability.",
        "Handled backend tasks such as updating product details and reviewing listing performance for continuous improvement.",
        "Responded to customer inquiries in a timely and professional manner while gaining hands-on experience using Amazon Seller Central.",
      ],
    },
    {
      role: "Shopify Virtual Assistant",
      client: "David Mitchell",
      period: "July 2025 - December 2025",
      accent: "from-pink-100 to-white",
      points: [
        "Supported daily e-commerce operations by managing over 100 product listings, updating store content, and maintaining overall store organization.",
        "Handled product uploads and edits including descriptions, images, and pricing with accuracy and consistency.",
        "Organized product collections and improved store navigation to enhance user experience.",
        "Monitored store activity and assisted in updating product details and inventory to support smooth fulfillment processes.",
        "Handled 15-20 customer inquiries daily related to products, orders, and general concerns with clear and professional communication.",
        "Contributed to product research and content updates to improve store presentation and strengthen understanding of Shopify operations and remote support.",
      ],
    },
    {
      role: "General Virtual Assistant",
      client: "Samantha Brooks",
      period: "January 2025 - June 2025",
      accent: "from-fuchsia-50 to-rose-50",
      points: [
        "Supported daily business operations by managing schedules, organizing tasks, and maintaining clear communication across internal and external stakeholders.",
        "Coordinated day-to-day activities to ensure timely completion of tasks and alignment with business priorities.",
        "Maintained organized documentation and file systems to support smooth operations and easy access to information.",
        "Assisted with content management, online research, and customer support in a fast-paced remote environment.",
        "Supported social media tasks and product research, demonstrating adaptability across multiple business functions.",
        "Developed strong communication, time management, and problem-solving skills through hands-on virtual assistance experience.",
      ],
    },
    {
      role: "Customer Support Virtual Assistant",
      client: "Grace Taylor",
      period: "July 2024 - December 2024",
      accent: "from-rose-50 to-orange-50",
      points: [
        "Provided remote customer service for a food and hospitality business by handling inquiries, processing orders, and resolving customer concerns in a timely and professional manner.",
        "Managed order coordination by receiving requests, confirming details, and ensuring accurate information was communicated to the team.",
        "Maintained organized tracking of orders and monitored incoming messages to ensure prompt responses and efficient workflow.",
        "Assisted with daily operational coordination, contributing to improved service efficiency and customer experience.",
        "Developed strong communication, multitasking, and organizational skills in a remote customer service environment.",
      ],
    },
    {
      role: "Lead Generation Virtual Assistant",
      client: "Soren Nielsen",
      period: "June 2024 - December 2024",
      accent: "from-pink-50 to-violet-50",
      points: [
        "Conducted targeted research using online directories, search tools, and social media platforms to identify and compile 100+ qualified gym leads across Denmark.",
        "Gathered key business information including company names, contact details, and decision-makers for outreach campaigns.",
        "Organized and maintained structured lead databases to support efficient prospecting and follow-up activities.",
        "Verified and updated lead information to improve data quality and outreach effectiveness.",
        "Strengthened research, data organization, and attention-to-detail skills while supporting lead generation efforts in a niche market.",
      ],
    },
  ];

  const tools = [
    "Amazon Seller Central",
    "Shopify",
    "DSers",
    "Oberlo",
    "Trello",
    "Zendesk",
    "Wix",
    "Helium 10",
    "Klaviyo",
    "Airtable",
    "Minea",
    "monday.com",
    "ClickUp",
    "Meta Business Suite",
    "Asana",
    "Canva",
    "Microsoft Teams",
    "Notion",
    "Zoom",
    "Slack",
    "ChatGPT",
    "Calendly",
    "CapCut",
    "Time Doctor",
    "HubSpot",
    "Microsoft Word",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Microsoft Outlook",
    "Google Meet",
    "WhatsApp",
    "Social Media Platforms",
  ];

  const projects = [
    {
      title: "Amazon Listing Optimization",
      category: "E-commerce Support",
      summary: "Focused on listing quality, keyword structure, and backend accuracy for better product discoverability.",
      image: "https://placehold.co/1200x800/FDF2F8/1F2937?text=Amazon+Project+Screenshot",
      points: ["Optimized titles and descriptions", "Reviewed listing health", "Updated backend product details"],
    },
    {
      title: "Shopify Store Management",
      category: "Store Operations",
      summary: "Managed large-volume product uploads and store organization while improving customer-facing presentation.",
      image: "https://placehold.co/1200x800/FFF1F2/1F2937?text=Shopify+Project+Screenshot",
      points: ["Handled 100+ listings", "Updated pricing and images", "Improved collection organization"],
    },
    {
      title: "Lead Generation Database",
      category: "Research & Outreach",
      summary: "Built and maintained structured lead databases for outreach campaigns with verified business details.",
      image: leadsShot,
      points: ["Researched Denmark gym leads", "Verified contact data", "Organized outreach-ready records"],
    },
  ];

  const trustPoints = [
    "Detail-oriented and dependable remote support",
    "Clear communication across teams and clients",
    "Hands-on Amazon, Shopify, customer support, and lead generation experience",
    "Strong commitment to workflow efficiency and service quality",
  ];

  return (
    <div className="min-h-screen bg-[#fffafb] text-gray-800">
      <section className="relative overflow-hidden px-6 pb-20 pt-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,192,204,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.14),_transparent_30%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="relative rounded-[2rem] border border-white/70 bg-white/85 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-6">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-gray-100 bg-white px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFC0CC] text-gray-900 shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Patricia S. Salvana</p>
                  <p className="text-sm text-gray-500">Premium Virtual Assistant Portfolio</p>
                </div>
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <a href="#projects" className="text-sm font-medium text-gray-600 transition hover:text-gray-900">Projects</a>
                <a href="#experience" className="text-sm font-medium text-gray-600 transition hover:text-gray-900">Experience</a>
                <a href="#tools" className="text-sm font-medium text-gray-600 transition hover:text-gray-900">Tools</a>
               <a
  href={`https://mail.google.com/mail/?view=cm&to=${contact.email}&su=Hiring Inquiry&body=Hi Patricia, I would like to work with you.`}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
>
  Contact Me
</a>
              </div>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr,0.85fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                  <BadgeCheck className="h-4 w-4 text-pink-500" />
                  General Virtual Assistant • Amazon Virtual Assistant
                </div>

                <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Reliable virtual support with a polished, client-ready presence.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  I help businesses grow through efficient virtual support, organized operations, optimized listings, and dependable communication.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${contact.email}&su=Hiring Inquiry&body=Hi Patricia, I would like to work with you.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-[#FFC0CC] px-6 py-3.5 font-semibold text-gray-900 shadow-lg shadow-pink-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Hire Me
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                  <a
                    href={contact.onlinejobs}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-800 transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg"
                  >
                    View OnlineJobs Profile
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 top-6 hidden h-24 w-24 rounded-full bg-pink-100 blur-2xl md:block" />
                <div className="absolute -bottom-8 right-6 hidden h-24 w-24 rounded-full bg-rose-100 blur-2xl md:block" />

                <div className="relative rounded-[2rem] border border-white bg-gradient-to-br from-white to-pink-50 p-5 shadow-[0_20px_60px_rgba(244,114,182,0.15)]">
                  <div className="overflow-hidden rounded-[1.75rem] border border-pink-100 bg-white shadow-inner">
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2 text-sm text-gray-500"><MapPin className="h-4 w-4 text-pink-500" /> Location</div>
                      <p className="mt-1 font-semibold text-gray-900">{contact.location}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2 text-sm text-gray-500"><Phone className="h-4 w-4 text-pink-500" /> Phone</div>
                      <p className="mt-1 font-semibold text-gray-900">{contact.phone}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm sm:col-span-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500"><Mail className="h-4 w-4 text-pink-500" /> Email</div>
                      <p className="mt-1 break-all font-semibold text-gray-900">{contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-pink-50 p-3 text-pink-500"><ShieldCheck className="h-5 w-5" /></div>
              <h2 className="text-2xl font-bold text-gray-900">Why clients can rely on me</h2>
            </div>
            <div className="mt-6 space-y-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-gray-100 p-4 transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-md">
                  <Star className="mt-0.5 h-5 w-5 flex-none text-pink-500" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
  label: "Gmail",
  value: contact.email,
  href: `https://mail.google.com/mail/?view=cm&to=${contact.email}&su=Hiring Inquiry&body=Hi Patricia, I would like to work with you.`,
  icon: Mail
}
                { label: "Mobile / WhatsApp", value: contact.internationalPhone, href: `tel:${contact.internationalPhone}`, icon: Phone },
                { label: "Facebook", value: "ishaaa11", href: contact.facebook, icon: Globe },
                { label: "OnlineJobs.PH", value: "Profile Link", href: contact.onlinejobs, icon: MonitorSmartphone },
                { label: "GoogleMeet / Scheduling", value: "calendar.app.google/wysgVfxwg6Z8VDECA", href: contact.googleMeet, icon: CalendarDays },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-pink-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#FFC0CC] p-2.5 text-gray-900 transition group-hover:scale-105">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="break-all font-semibold text-gray-900">{item.value}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm md:p-10">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-pink-50 p-3 text-pink-500"><Sparkles className="h-5 w-5" /></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Objective, Mission, and Goal</h2>
              <p className="mt-1 text-gray-500">A clear picture of how I approach client work and long-term support.</p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {summaryCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-[1.75rem] border border-gray-100 bg-gradient-to-br from-white to-pink-50 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-xl"
              >
                <h3 className="mb-4 text-xl font-bold text-[#d88d9a]">{card.title}</h3>
                <p className="leading-7 text-gray-700">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-2">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            I am committed to providing dependable, detail-oriented, and results-driven virtual assistance that supports business growth and operational efficiency. I bring strong organizational skills, clear communication, adaptability, and a proactive mindset to administrative support, e-commerce operations, customer service, and lead generation.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl bg-pink-50 p-3 text-pink-500"><Wrench className="h-5 w-5" /></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Services I Offer</h2>
              <p className="mt-1 text-gray-500">Flexible support across admin, e-commerce, customer service, and research.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFC0CC] text-gray-900 transition duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-gradient-to-b from-pink-50/60 to-transparent px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl bg-pink-100 p-3 text-pink-500"><MonitorSmartphone className="h-5 w-5" /></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Project Screenshots</h2>
              <p className="mt-1 text-gray-500">Replace these placeholders with real screenshots from your Amazon, Shopify, and lead generation work.</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-pink-500">
                    {project.category}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{project.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#FFC0CC]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl bg-pink-50 p-3 text-pink-500"><Briefcase className="h-5 w-5" /></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
              <p className="mt-1 text-gray-500">A results-focused view of my freelance support experience.</p>
            </div>
          </div>
          <div className="space-y-8">
            {experience.map((job) => (
              <div
                key={job.role}
                className={`rounded-[2rem] border border-gray-100 bg-gradient-to-br ${job.accent} p-1 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="rounded-[1.8rem] bg-white/90 p-7 backdrop-blur">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
                      <p className="text-gray-600">Freelance • {job.client}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-gray-700">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-3 text-gray-700">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-7">
                        <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-[#FFC0CC]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl bg-pink-50 p-3 text-pink-500"><Wrench className="h-5 w-5" /></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Tools I Use</h2>
              <p className="mt-1 text-gray-500">A broad working toolkit for store operations, support, communication, and productivity.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-medium text-gray-900 transition duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:bg-[#FFC0CC] hover:shadow-md"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gray-900 px-8 py-14 text-white shadow-[0_30px_80px_rgba(17,24,39,0.2)] md:px-12">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-pink-200">
              Available for freelance virtual assistant work
            </div>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Let’s work together</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
              Success is built on consistency, efficiency, and the willingness to go the extra mile.
            </p>
            <div className="mt-8 grid w-full max-w-2xl gap-4 md:grid-cols-2">
              <a
  href={`https://mail.google.com/mail/?view=cm&to=${contact.email}&su=Hiring Inquiry&body=Hi Patricia, I would like to work with you.`}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-2xl bg-[#FFC0CC] px-5 py-4 font-semibold text-gray-900 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
>
  {contact.email}
</a>
              <a
                href={`tel:${contact.internationalPhone}`}
                className="rounded-2xl border border-white/15 px-5 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:text-pink-100"
              >
                {contact.internationalPhone}
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">{contact.location}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
