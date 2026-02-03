import { motion, useScroll, useTransform } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Target, Zap } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden font-sans" style={{ backgroundImage: 'url(/background.jfif)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 z-10">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-6 relative z-20 text-center"
        >
          
          
          <h1 className="font-heading font-black text-4xl md:text-6xl leading-[0.9] mb-8 tracking-tighter uppercase" style={{ color: '#FFFFFF' }}>
            Lateral & Diversity <br />
            <motion.span 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500"
            >
              Hiring Expert
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-lg mb-12 max-w-2xl mx-auto leading-tight font-medium"
            style={{ color: '#FFFFFF' }}
          >
            Background Verification, Contract Staffing & Payroll Services
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            
            <Link href="/services">
              <Button variant="ghost" size="lg" className="text-xl px-12 py-8 rounded-full border border-white text-white hover:bg-white/20 font-heading uppercase tracking-wider group">
                Explore <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-neutral-100 rounded-full blur-[120px] opacity-50"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-neutral-200 rounded-full blur-[100px] opacity-30"
          />
        </div>
      </section>

      {/* What Sets Us Apart Section - Highlights */}
      <section className="py-32 bg-gradient-to-b from-gray-100 to-gray-200 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading font-black text-5xl md:text-7xl uppercase leading-none tracking-tighter" style={{ color: '#0B3C5D' }}>
                What Sets <br /> Us Apart
              </h2>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Fortune 500 Clientele", 
                subtitle: "IMMENSE NETWORK",
                icon: "target"
              },
              { 
                title: "No Further Out-sourcing", 
                subtitle: "REAL-TIME EXPERIENCE",
                highlight: true
              },
              { 
                title: "Direct Assessments", 
                subtitle: "ART OF READING RESUME",
                icon: "file"
              },
              { 
                title: "On-Time Service", 
                subtitle: "STRONG MARKETING ABILITY",
                icon: "clock"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group p-8 rounded-2xl border transition-all duration-500 cursor-pointer bg-white border-gray-300 hover:bg-gray-50`}
              >
                <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 bg-gray-200`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700 group-hover:text-red-500 transition-colors">
                    {item.icon === "target" && <><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></>}
                    {item.icon === "file" && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></>}
                    {item.icon === "clock" && <><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></>}
                    {!item.icon && <><path d="M12 2v20M2 12h20"></path></>}
                  </svg>
                </div>
                <h3 className={`font-heading font-bold text-xl mb-2 leading-tight ${i === 1 ? 'text-red-600' : 'text-gray-800'}`}>
                  {item.title}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#333333' }}>
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.2), inset 0 0 10px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.2);
          }
        }
        
        .glow-box {
          transition: all 0.3s ease;
          border-radius: 50%;
          position: relative;
        }
        
        .glow-box:hover {
          animation: glow-pulse 1.5s ease-in-out forwards;
          background: rgba(219, 234, 254, 0.9) !important;
          border-color: rgba(59, 130, 246, 0.6) !important;
          border-radius: 50%;
        }
      `}</style>

      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="font-heading font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6" style={{ color: '#0B3C5D' }}>Our Core Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Leadership Hiring"
              },
              { 
                title: "Talent Acquisition"
              },
              { 
                title: "Background Verification"
              },
              { 
                title: "Contract Staffing"
              },
              { 
                title: "Payroll Management"
              },
              { 
                title: "Process Optimization"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`glow-box group p-10 rounded-lg border flex items-center justify-center min-h-[200px] bg-white border-gray-300`}
              >
                <h3 className="font-heading font-black text-2xl md:text-3xl uppercase mb-0 text-black text-center leading-tight tracking-tight">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}
