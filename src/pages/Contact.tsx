import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function Contact() {
  return (
    <div className="site-shell pt-20">
      <Navigation />

      <section className="page-section pt-16 md:pt-24">
        <div className="content-frame">
          <div className="hero-halo hero-halo--one left-[-6%] top-16 h-52 w-52" />
          <div className="hero-halo hero-halo--two right-0 top-8 h-44 w-44" />

          <div className="mb-12 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl font-bold leading-[0.92] tracking-[-0.05em] text-slate-900 md:text-7xl"
            >
              Let's Connect
            </motion.h1>
          </div>

          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass-panel rounded-[2rem] p-8 md:p-10"
            >
              <h2 className="text-center font-heading text-3xl font-bold tracking-[-0.04em] text-slate-900 md:text-4xl">
                Get In Touch
              </h2>

              <div className="mt-8 space-y-5">
                <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5">
                  <div className="flex items-start gap-4">
                    <div className="icon-shell h-11 w-11 rounded-xl">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Phone</p>
                      <p className="mt-2 text-base text-slate-700">+91-70374-00096</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5">
                  <div className="flex items-start gap-4">
                    <div className="icon-shell h-11 w-11 rounded-xl">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
                      <p className="mt-2 text-base text-slate-700">ceo@vheadhunt.com</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5">
                  <div className="flex items-start gap-4">
                    <div className="icon-shell h-11 w-11 rounded-xl">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Location</p>
                      <p className="mt-2 text-base text-slate-700">Hyderabad, India</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/917037400096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[1.5rem] border border-white/70 bg-white/70 p-5 transition-all hover:border-green-400 hover:bg-green-50"
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-shell h-11 w-11 rounded-xl">
                      <MessageCircle size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">WhatsApp</p>
                      <p className="mt-2 text-base text-slate-700">+91-70374-00096</p>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
