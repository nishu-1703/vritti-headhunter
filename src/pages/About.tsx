import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen font-sans pt-20" style={{ backgroundColor: '#F7F9FC' }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 overflow-hidden relative" style={{ backgroundColor: '#F7F9FC' }}>
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute top-0 right-0 w-1/2 h-full -skew-x-12 transform origin-top-right z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}about%20page.jfif)` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg pr-20"
          >
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: '#0B3C5D' }}>
              <span className="whitespace-nowrap">BUILDING LEADERS</span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-red-500 block"
              >
                STRENGTHENING ENTERPRISES
              </motion.span>
            </h1>
            <div className="bg-white border border-gray-200 p-10 rounded-3xl shadow-lg" style={{ maxWidth: '400px' }}>
              <p className="text-xl font-bold leading-relaxed italic" style={{ color: '#333333', wordWrap: 'break-word', fontFamily: 'League Spartan', textAlign: 'justify' }}>
                LEADING EXECUTIVE SEARCH AND<br />
                TALENT ADVISORY FIRM SHAPING<br />
                SUCCESS WITH VISIONARY<br />
                LEADERSHIP & TRANSFORMATIVE<br />
                HR SOLUTIONS, SINCE 2020
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Belief & Mission */}
      <section className="py-24" style={{ backgroundColor: '#F0F4F8' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-10 rounded-3xl shadow-lg"
            >
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: '#0B3C5D' }}>Our Belief</h3>
              <p className="text-lg leading-relaxed" style={{ color: '#333333', textAlign: 'justify' }}>
                We believe exceptional individuals are the cornerstone of outstanding organizations. Our expert team secures top-tier talent across industries, creating empowering connections.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-10 rounded-3xl transform md:translate-y-12 shadow-lg"
            >
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: '#0B3C5D' }}>Our Mission</h3>
              <p className="text-lg leading-relaxed" style={{ color: '#333333', textAlign: 'justify' }}>
                Exceptional talent builds extraordinary organizations. Our Expertise connects top professionals with thriving businesses for lasting success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-24" style={{ backgroundColor: '#F0F4F8' }}>
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-4xl text-center mb-16" style={{ color: '#333333' }}
          >
            Strategic Mentorship
          </motion.h2>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              { name: "Capt. Venkat", role: "Mentor & Advisor", bio: "Capt. Venkat is a former Army Officer and IIM Lucknow alumnus with extensive leadership experience. A visiting faculty at leading institutes, he has driven impactful talent transition initiatives with the Ministry of Defence and NASSCOM. He mentors Vritti HeadHunters with a strong focus on strategy and governance.", image: `${import.meta.env.BASE_URL}venkat.jfif` },
              { name: "Dr. (Lt Col) John Chenetra", role: "Strategic Mentor", bio: "Leadership experience across the Indian Army, HR, BGV, and risk intelligence sectors. Brings discipline, governance, and execution excellence to Vritti HeadHunters.", image: `${import.meta.env.BASE_URL}john.jfif` }
            ].map((mentor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="transition-all flex gap-8 items-start"
              >
                <div className="flex-shrink-0 flex justify-center">
                  <div className="w-48 h-48 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-full shadow-lg">
                    {mentor.image ? (
                      <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-400 mb-2">{mentor.name[0]}</div>
                        <p className="text-gray-600 text-sm">{mentor.name}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-gray-900 font-bold text-2xl mb-2">{mentor.name}</h3>
                  <p className="text-red-600 text-sm font-medium mb-4">{mentor.role}</p>
                  <p className="leading-relaxed text-base" style={{ color: '#333333', textAlign: 'justify' }}>
                    {mentor.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 overflow-hidden relative" style={{ backgroundColor: '#F0F4F8' }}>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Quote size={400} className="text-gray-300" />
        </motion.div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Quote className="h-12 w-12 text-gray-400 mx-auto mb-8 opacity-50" />
            <blockquote className="font-heading font-bold text-3xl md:text-5xl leading-relaxed mb-10 italic" style={{ color: '#333333', fontFamily: 'League Spartan' }}>
              "YOUR Success Is OUR
              
              
              
              
              
              
              
              
              
              
              
              
              
               Success"
            </blockquote>
            <div className="flex flex-col items-center">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: 80 }}
                 className="h-1 bg-gray-400 mb-6 rounded-full" 
               />
               <cite className="not-italic font-bold text-xl tracking-wide" style={{ color: '#333333' }}>Chandrakala Katta</cite>
               <span className="text-sm uppercase tracking-widest mt-1" style={{ color: '#666666' }}>CEO, Vritti Headhunters</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
