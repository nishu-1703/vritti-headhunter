import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, Compass, ShieldCheck, Sparkles, Users2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Leadership Hiring",
    desc: "CXO, VP and Director Level confidential search, cultural assessment, leadership alignment to your strategic goals.",
    tags: ["Confidential Search", "Cultural Fit", "Global Reach"],
    icon: BriefcaseBusiness,
  },
  {
    title: "Returnships & Inclusive Hiring",
    desc: "Programs to reintegrate experienced professionals and specialized support for hiring differently-abled talent.",
    tags: ["Return-to-Work", "Accessibility", "Training"],
    icon: Users2,
  },
  {
    title: "Contract Staffing",
    desc: "Flexible workforce solutions for immediate needs compliance-managed, skilled contractors ready to deploy.",
    tags: ["Rapid Deployment", "Compliance", "Managed Payroll"],
    icon: ShieldCheck,
  },
  {
    title: "Defense Hiring & Internships",
    desc: "Transition of Defense professionals into Corporate roles with tailored skill-mapping, mentorship and internship-to-hire pathways.",
    tags: ["Skill Mapping", "Mentorship", "Intern-to-Hire"],
    icon: Compass,
  },
  {
    title: "Executive Search",
    desc: "Confidential, research-led executive search and mapping to source transformational leaders who drive business outcomes.",
    tags: ["Confidential", "Market Mapping", "Stakeholder Alignment"],
    icon: Award,
  },
  {
    title: "Resume & Career Services",
    desc: "Personalized Resume Building, Assessments and Career Coaching to position candidates for faster, higher-quality hiring solutions.",
    tags: ["Resume Revamp", "Interview Prep", "Career Coaching"],
    icon: Sparkles,
  },
];

const partners = [
  {
    name: "Flipkart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/The_Flipkart_Logo_-_from_Official_Website.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Mahindra",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Mahindra_logo.svg",
  },
  {
    name: "Whitehat Jr",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/WhiteHat_Jr.webp",
  },
  {
    name: "LeverageEdu",
    logo: "https://publicassets.leverageedu.com/landing-pages-new/logo-dark.svg",
  },
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  },
];

export default function Services() {
  return (
    <div className="site-shell pt-20">
      <Navigation />

      <section className="page-section pt-16 md:pt-24">
        <div className="content-frame">
          <div className="hero-halo hero-halo--one left-[-6%] top-16 h-52 w-52" />
          <div className="hero-halo hero-halo--two right-0 top-10 h-44 w-44" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-[2.3rem] px-8 py-10 text-center md:px-12 md:py-14"
          >
            <h1 className="font-heading text-5xl font-bold leading-[0.92] tracking-[-0.05em] text-slate-900 md:text-7xl">
              Our Services
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="page-section pt-8">
        <div className="content-frame">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.06 }}
                  className="glass-panel card-hover rounded-[2rem] p-6 md:p-7"
                >
                  <div className="icon-shell">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-bold tracking-[-0.03em] text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {service.desc}
                  </p>

                  <div className="mt-6 space-y-3">
                    {service.tags.map((tag) => (
                      <div key={tag} className="flex items-start gap-3 text-sm text-slate-600">
                        <Sparkles size={16} className="mt-0.5 shrink-0 text-[#5c8986]" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="mt-8 w-full justify-center">
                    Learn More
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="content-frame">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-[2.2rem] p-8 md:p-10"
          >
            <h2 className="section-title text-center">Our Trusted Partners</h2>

            <div className="logo-marquee mt-10">
              <div className="logo-track">
                {[...partners, ...partners].map((partner, index) => (
                  <div key={`${partner.name}-${index}`} className="logo-tile logo-tile--original">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className={partner.name === "Whitehat Jr" ? "partner-logo partner-logo--whitehat" : "partner-logo"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
