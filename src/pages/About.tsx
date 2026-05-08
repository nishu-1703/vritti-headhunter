import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const mentors = [
  {
    name: "Capt. Venkat",
    role: "Mentor & Advisor",
    bio: "Capt. Venkat is a former Army Officer and IIM Lucknow alumnus with extensive leadership experience. A visiting faculty at leading institutes, he has driven impactful talent transition initiatives with the Ministry of Defence and NASSCOM. He mentors Vritti HeadHunters with a strong focus on strategy and governance.",
    image: `${import.meta.env.BASE_URL}venkat.jfif`,
  },
  {
    name: "Dr. (Lt Col) John Chenetra",
    role: "Strategic Mentor",
    bio: "Leadership experience across the Indian Army, HR, BGV, and risk intelligence sectors. Brings discipline, governance, and execution excellence to Vritti HeadHunters.",
    image: `${import.meta.env.BASE_URL}john.jfif`,
  },
];

export default function About() {
  return (
    <div className="site-shell pt-20">
      <Navigation />

      <section className="page-section overflow-hidden pt-16 md:pt-24">
        <div className="content-frame">
          <div className="hero-halo hero-halo--one left-[-6%] top-20 h-52 w-52" />
          <div className="hero-halo hero-halo--two right-0 top-10 h-44 w-44" />
          <div className="ambient-beam right-[6%] top-[-24%] hidden lg:block" />

          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-heading text-5xl font-bold leading-[0.92] tracking-[-0.05em] text-slate-900 md:text-7xl">
                BUILDING LEADERS
                <span className="block text-gradient">STRENGTHENING ENTERPRISES</span>
              </h1>

              <div className="stage-panel mt-8 max-w-md rounded-[1.9rem] p-8">
                <div className="grain-overlay" />
                <p className="relative z-10 font-heading text-xl font-bold leading-relaxed italic text-slate-700 md:text-2xl">
                  LEADING EXECUTIVE SEARCH AND
                  <br />
                  TALENT ADVISORY FIRM SHAPING
                  <br />
                  SUCCESS WITH VISIONARY
                  <br />
                  LEADERSHIP & TRANSFORMATIVE
                  <br />
                  HR SOLUTIONS, SINCE 2020
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="stage-panel relative rounded-[2.3rem] p-4 md:p-5">
                <div className="grain-overlay" />
                <div className="soft-outline" />
                <div className="orbital-ring spin-soft left-[8%] top-[10%] h-[80%] w-[80%]" />
                <div className="orbital-ring spin-soft right-[8%] top-[18%] h-[52%] w-[52%] [animation-direction:reverse]" />

                <motion.div
                  animate={{ scale: [1, 1.025, 1], rotate: [0, -0.35, 0] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                  className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/70 md:min-h-[540px]"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}about%20page.jfif`}
                    alt="Vritti Headhunters"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,31,41,0.02),rgba(17,31,41,0.38)),linear-gradient(120deg,rgba(92,137,134,0.22),transparent_42%,rgba(206,184,141,0.18))]" />
                  <div className="kinetic-stripe bottom-[18%]" />
                  <div className="image-sheen" />

                  <motion.div
                    animate={{ y: [0, -14, 0], rotate: [-2, 1, -2] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-6 top-6 rounded-[1.6rem] border border-white/55 bg-white/20 px-5 py-4 text-white shadow-[0_20px_60px_rgba(17,49,59,0.2)] backdrop-blur-xl"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/78">
                      Since
                    </p>
                    <p className="font-heading text-4xl font-bold leading-none tracking-[-0.06em]">
                      2020
                    </p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 12, 0], rotate: [2, -1, 2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 right-6 max-w-[18rem] rounded-[1.7rem] border border-white/55 bg-[#17313b]/56 p-5 text-white shadow-[0_24px_70px_rgba(17,49,59,0.25)] backdrop-blur-xl"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/70">
                      Talent Advisory
                    </p>
                    <p className="mt-2 font-heading text-2xl font-bold leading-tight tracking-[-0.04em]">
                      Calm strategy. Strong execution.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="page-section pt-8">
        <div className="content-frame">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="stage-panel rounded-[1.9rem] p-8"
            >
              <div className="ambient-beam left-[48%] top-[-46%] opacity-35" />
              <h3 className="font-heading text-3xl font-bold tracking-[-0.04em] text-slate-900">
                Our Belief
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
                We believe exceptional individuals are the cornerstone of outstanding organizations. Our expert team secures top-tier talent across industries, creating empowering connections.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="stage-panel rounded-[1.9rem] p-8 md:translate-y-8"
            >
              <div className="ambient-beam left-[48%] top-[-46%] opacity-35" />
              <h3 className="font-heading text-3xl font-bold tracking-[-0.04em] text-slate-900">
                Our Mission
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
                Exceptional talent builds extraordinary organizations. Our Expertise connects top professionals with thriving businesses for lasting success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-frame">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="section-title mb-12 text-center"
          >
            Strategic Mentorship
          </motion.h2>

          <div className="space-y-6">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="stage-panel card-hover rounded-[2rem] p-6 md:p-8"
              >
                <div className="grid gap-6 sm:grid-cols-[220px_1fr] sm:items-center">
                  <div className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/70">
                    <img src={mentor.image} alt={mentor.name} className="h-[230px] w-full object-cover sm:h-[250px]" />
                    <div className="image-sheen" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      <Sparkles size={14} className="text-[#5c8986]" />
                      {mentor.role}
                    </div>
                    <h3 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-slate-900">
                      {mentor.name}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {mentor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            className="stage-panel relative overflow-hidden rounded-[2.3rem] px-8 py-10 text-center md:px-14 md:py-14"
          >
            <div className="hero-halo hero-halo--one left-[10%] top-[30%] h-28 w-28" />
            <div className="hero-halo hero-halo--two right-[12%] top-8 h-24 w-24" />
            <div className="orbital-ring spin-soft left-[18%] top-[16%] h-52 w-52" />
            <div className="orbital-ring spin-soft right-[16%] bottom-[12%] h-44 w-44 [animation-direction:reverse]" />
            <Quote className="mx-auto h-12 w-12 text-[#5c8986]" />
            <blockquote className="relative z-10 mx-auto mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-slate-900 md:text-6xl">
              YOUR Success Is OUR Success
            </blockquote>
            <div className="relative z-10 mt-8 flex flex-col items-center">
              <div className="h-1 w-20 rounded-full bg-[linear-gradient(90deg,#5c8986,#ceb88d)]" />
              <cite className="mt-6 not-italic text-xl font-semibold text-slate-900">
                Chandrakala Katta
              </cite>
              <span className="mt-1 text-sm uppercase tracking-[0.26em] text-slate-500">
                CEO, Vritti Headhunters
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
