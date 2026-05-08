import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Clock3,
  FileCheck2,
  ShieldCheck,
  Target,
} from "lucide-react";
import { type MouseEvent, useRef } from "react";
import { Link } from "wouter";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { fallbackSiteContent, useSiteContent } from "@/lib/siteContent";

const heroImage = "https://cdn.pixabay.com/photo/2020/07/11/22/57/meeting-5395567_1280.jpg";
const strategyImage = "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg";
const handshakeImage = "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg";

const highlightIcons = {
  target: Target,
  shield: ShieldCheck,
  file: FileCheck2,
  clock: Clock3,
};

export default function Home() {
  const { data: siteContent } = useSiteContent();
  const content = (siteContent || fallbackSiteContent).home;
  const containerRef = useRef(null);
  const heroCardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.6 });

  const rotateY = useTransform(smoothX, [-18, 18], [-7, 7]);
  const rotateX = useTransform(smoothY, [-18, 18], [7, -7]);
  const floatX = useTransform(smoothX, [-18, 18], [-10, 10]);
  const floatY = useTransform(smoothY, [-18, 18], [-8, 8]);

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1, 0.52]);
  const ribbonY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const handleHeroMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = heroCardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 36;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 36;

    pointerX.set(x);
    pointerY.set(y);
  };

  const handleHeroLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div ref={containerRef} className="site-shell">
      <div className="mesh-overlay" />
      <Navigation />

      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="content-frame">
          <motion.div style={{ y: ribbonY }} className="aurora-ribbon left-[-12%] top-20" />
          <motion.div style={{ y: ribbonY }} className="aurora-ribbon right-[-18%] top-[42%] [animation-delay:2s]" />
          <div className="hero-halo hero-halo--one pulse-soft left-[-8%] top-24 h-56 w-56" />
          <div className="hero-halo hero-halo--two right-[2%] top-10 h-52 w-52" />
          <div className="ambient-beam left-[46%] top-[-18%] hidden lg:block" />

          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <span className="section-chip">{content.eyebrow}</span>
              <h1 className="mt-6 font-heading text-5xl font-bold leading-[0.9] tracking-[-0.05em] text-slate-900 md:text-7xl">
                {content.headline}
                <span className="text-gradient"> {content.accent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                {content.subheadline}
              </p>

              <div className="mt-8">
                <Link href="/services">
                  <Button size="lg">
                    {content.ctaLabel}
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              style={{ y: heroY, opacity: heroOpacity }}
              className="relative"
            >
              <motion.div
                ref={heroCardRef}
                onMouseMove={handleHeroMove}
                onMouseLeave={handleHeroLeave}
                style={{ rotateX, rotateY, x: floatX, y: floatY }}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="parallax-card cinematic-card hero-showcase relative rounded-[2.6rem] p-4 md:p-5"
              >
                <div className="grain-overlay" />
                <div className="soft-outline" />
                <div className="orbital-ring spin-soft left-[8%] top-[9%] h-[84%] w-[84%]" />
                <div className="orbital-ring spin-soft right-[9%] top-[14%] h-[58%] w-[58%] [animation-direction:reverse]" />
                <div className="glow-dot left-[14%] top-[18%]" />
                <div className="glow-dot right-[14%] top-[28%]" />
                <div className="glow-dot left-[18%] bottom-[16%]" />

                <motion.div
                  animate={{ scale: [1, 1.035, 1], rotate: [0, -0.55, 0] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                  className="image-cutout relative overflow-hidden rounded-[2.1rem] border border-white/70"
                >
                  <img
                    src={heroImage}
                    alt="Vritti Headhunters"
                    className="h-[410px] w-full object-cover object-center saturate-[0.92] md:h-[580px]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,31,41,0.05),rgba(17,31,41,0.28)),linear-gradient(120deg,rgba(92,137,134,0.22),transparent_42%,rgba(206,184,141,0.18))]" />
                  <div className="image-sheen" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="page-section pt-6">
        <div className="content-frame">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="talent-collage"
          >
            <div className="grain-overlay" />
            <div className="kinetic-stripe bottom-[22%]" />
            <div className="orbital-ring spin-soft left-[10%] top-[14%] h-[22rem] w-[22rem] opacity-45" />
            <div className="orbital-ring spin-soft right-[12%] top-[18%] h-[15rem] w-[15rem] opacity-45 [animation-direction:reverse]" />

            <motion.img
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              src={strategyImage}
              alt="Hiring strategy discussion"
              className="talent-collage-main"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,49,59,0.62),rgba(17,49,59,0.08)_48%,rgba(206,184,141,0.16)),linear-gradient(180deg,rgba(17,49,59,0.06),rgba(17,49,59,0.34))]" />
            <div className="image-sheen" />

            <div className="relative z-10 max-w-xl p-7 md:p-12">
              <span className="rounded-full border border-white/45 bg-white/16 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/82 backdrop-blur">
                {content.visualChip}
              </span>
              <h2 className="mt-5 font-heading text-4xl font-bold leading-[0.92] tracking-[-0.06em] text-white md:text-6xl">
                {content.visualTitle}
              </h2>
            </div>

            <motion.div
              animate={{ y: [0, -16, 0], rotate: [-4, -1, -4] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="collage-float collage-float--top"
            >
              <img src={handshakeImage} alt="Recruitment handshake" className="h-full w-full object-cover" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0], rotate: [4, 1, 4] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              className="collage-float collage-float--bottom"
            >
              <img src={heroImage} alt="Executive hiring meeting" className="h-full w-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="page-section pt-6">
        <div className="content-frame">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="section-title">
              What Sets
              <br />
              Us Apart
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.highlights.map((item, index) => {
              const Icon = highlightIcons[item.icon] || Target;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="stage-panel card-hover group rounded-[1.9rem] p-6"
                >
                  <div className="ambient-beam left-[52%] top-[-46%] opacity-35 transition-opacity duration-500 group-hover:opacity-70" />
                  <div className="icon-shell">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-bold tracking-[-0.03em] text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {item.subtitle}
                  </p>
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
            className="mb-12 text-center"
          >
            <h2 className="section-title">Our Core Expertise</h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="stage-panel group flex min-h-[200px] items-center justify-center rounded-[2rem] p-8 text-center"
              >
                <div className="ambient-beam left-[26%] top-[-60%] opacity-30 transition-opacity duration-500 group-hover:opacity-75" />
                <div className="orbital-ring left-[14%] top-[18%] h-[64%] w-[64%] opacity-50" />
                <div className="orbital-ring right-[12%] top-[22%] h-[48%] w-[48%] opacity-40" />
                <h3 className="relative z-10 font-heading text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-900 md:text-[2rem]">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
