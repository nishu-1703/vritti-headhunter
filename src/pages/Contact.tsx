import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen font-sans pt-20" style={{ backgroundColor: '#F7F9FC' }}>
      <Navigation />

      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-200/30 via-purple-100/20 to-transparent opacity-60" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-extrabold text-4xl md:text-6xl mb-6" style={{ color: '#0B3C5D' }}
            >
              Let's Connect
            </motion.h1>
            <p className="text-xl" style={{ color: '#333333' }}></p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            {/* Contact Info */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-white backdrop-blur-md p-10 rounded-3xl border border-gray-200 shadow-lg"
            >
               <h3 className="font-heading font-bold text-2xl mb-8 text-gray-800">Get in Touch</h3>
               
               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
                     <Phone size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-lg text-gray-800">Phone</p>
                     <p className="text-gray-600">+91-70374-00096</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
                     <Mail size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-lg text-gray-800">Email</p>
                     <p className="text-gray-600">ceo@vheadhunt.com</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-lg text-gray-800">Location</p>
                     <p className="text-gray-600">Hyderabad, India</p>
                   </div>
                 </div>
               </div>

               
            </motion.div>

            {/* Form */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200"
            >
              <h3 className="font-heading font-bold text-2xl mb-6 text-gray-800">Send us a Message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-800">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-800">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-800">Interested Service</Label>
                  <Select>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-800">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leadership">Leadership Hiring</SelectItem>
                      <SelectItem value="contract">Contract Staffing</SelectItem>
                      <SelectItem value="defence">Defence Hiring</SelectItem>
                      <SelectItem value="diversity">Diversity & Inclusion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-800">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px] bg-white border-gray-300 text-gray-800 placeholder:text-gray-500" />
                </div>
                <Button className="w-full text-white text-lg py-6 rounded-xl shadow-lg transition-all hover:scale-105" style={{ backgroundColor: '#0B3C5D' }}>
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
