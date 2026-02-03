import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Leadership Hiring",
    desc: "CXO, VP and Director Level confidential search, cultural assessment, leadership alignment to your strategic goals.",
    tags: ["Confidential Search", "Cultural Fit", "Global Reach"],
    color: "bg-sky-50 border-sky-100"
  },
  {
    title: "Returnships & Inclusive Hiring",
    desc: "Programs to reintegrate experienced professionals and specialized support for hiring differently-abled talent.",
    tags: ["Return-to-Work", "Accessibility", "Training"],
    color: "bg-teal-50 border-teal-100"
  },
  {
    title: "Contract Staffing",
    desc: "Flexible workforce solutions for immediate needs compliance-managed, skilled contractors ready to deploy.",
    tags: ["Rapid Deployment", "Compliance", "Managed Payroll"],
    color: "bg-amber-50 border-amber-100"
  },
  {
    title: "Defense Hiring & Internships",
    desc: "Transition of Defense professionals into Corporate roles with tailored skill-mapping, mentorship and internship-to-hire pathways.",
    tags: ["Skill Mapping", "Mentorship", "Intern-to-Hire"],
    color: "bg-indigo-50 border-indigo-100"
  },
  {
    title: "Executive Search",
    desc: "Confidential, research-led executive search and mapping to source transformational leaders who drive business outcomes.",
    tags: ["Confidential", "Market Mapping", "Stakeholder Alignment"],
    color: "bg-rose-50 border-rose-100"
  },
  {
    title: "Resume & Career Services",
    desc: "Personalized Resume Building, Assessments and Career Coaching to position candidates for faster, higher-quality hiring solutions.",
    tags: ["Resume Revamp", "Interview Prep", "Career Coaching"],
    color: "bg-emerald-50 border-emerald-100"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen font-sans pt-20" style={{ backgroundColor: '#F7F9FC' }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-800/30 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-3xl mx-auto"
          >
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl mb-6" style={{ color: '#0B3C5D' }}>
              Our Services
            </h1>
            <p className="text-xl mb-8" style={{ color: '#333333' }}>
              
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl border bg-opacity-80 hover:shadow-lg transition-all duration-300 flex flex-col h-full bg-white border-gray-200 hover:bg-gray-50`}
              >
                <h3 className="font-heading font-bold text-2xl mb-4 text-gray-800">{service.title}</h3>
                <p className="mb-8 flex-grow leading-relaxed text-gray-700">{service.desc}</p>
                
                <div className="space-y-3 mb-8">
                  {service.tags.map((tag, i) => (
                    <div key={i} className="flex items-center text-sm font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mr-2" />
                      {tag}
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full rounded-full group border-black text-black hover:bg-black hover:text-white transition-colors">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-16 text-center" style={{ color: '#0B3C5D' }}>
            Our Trusted Partners
          </h2>
          
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: [0, -2000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-12 whitespace-nowrap"
              >
               {[
                  { name: "Flipkart", logo: "data:image/png;base64,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" },
                  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                  { name: "Mahindra", logo: "https://th.bing.com/th/id/OIP.1msLJrqSgn9_0FI-tGtBUAHaEK?w=293&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3" },
                  { name: "Whitehat Jr", logo:"https://static.startuptalky.com/2022/02/WhiteHatJr-Logo-Success-Story-Startuptalky.jpg" },
                  { name: "LevarageEdu", logo: "https://www.bing.com/th/id/OIP.Z1USVV2oXZbop687h2dvjAHaFG?w=266&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2" },
                  { name: "Flipkart", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAABPlBMVEX///8Ae9j/5AD/2wD/0QH+1wD+6AD/3wD/zQD+5gD/0wAAedj/zwH960MAdtf+/PT84HsAcNb9/e/92WTO3/QKfdf6533+9dP93XIAbNX8wgP8qQP/nQCLlYX9qz7S5PXz9/z9sQT910ByqOE4j9j/3B2hqor/uAD/1B3m8PijweoAZdP8vAJcld6FtOT+4h241O7nyQD+89z6wz/6uUBZmt5MjNytyewrh9hsoOHBpgSJsOWTveZgndn+8MD94on+5539xlfwxAPRsgP973X861T89LD76GX8zD/93zv98I/875/w5J3x2FTn3afUuzLn1jDLxE6wtWWjrnCeqnjZzUF6mZAze7BbkrCNn4Rxnp0terxZhKcAbOpgmKeCppBVk8S9vFYAarfbxFh4n7PKvWaSrYe0tIZxh4/SyoVmIUD2AAANsElEQVR4nO2cC3faRhbHhV/YyB5WBIWSbldKgNYC83KKBQG7KSR2k7TrV5w4cR7O5tHd7/8FdmbuHWn0AmLTpKXzPyc5QpqRZn5z5947I4ymKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKf1Flb2Cvnab/yhlt/d++sdn66e97Xkkki3cv7Ma0nqcwoVW79zfmz8g2zduyRCWJigA5tb21279zLX98w9bHo2lTGa4lEmGMVyXeNzaul342q2fubZ//vY2h0H/LS1lRqMRdj0weeAUvTjkBsJOLt2+PZc4flhMi3mSGd67d2+YYShuyVrlrNbZRZwxq6uL6a1v5xDHjfRKelV4jcy9e6PhOiOwtbX1A4oeciRLI8TBeaRXVlZzX7v1s1buwcrKSlryocOhIHHbEyDZurU6HGaER2U4Vh7Oly/N7jXXAIfvMBgLiuDbgAAJmzQCG8ex0tyfo1ibe7zClV73YTAWDMA/g2JEblMgt1ax7Hoa6j6YH/9x0NzgenQH9Mvdu3d/pPpXnNiFH+/e/eUXLPxo4xGr2zyYmwlzM6yxaTlcjdS5OS84sg83ZqF5mS25tZWIYk4FLkevr80xjkyh0EyGsbG3/2jh74RjVcseJOM4yGa/SUfOzjGOZZqXJc+Xhzl6NXx5jqwjqlz28ULMadCBljuInr0qDnuWfZmBcs1I1xb2tL1EGmuPtb2NaBUZh5OPkeNfcbyCrWrVtSa3EarZs+56nHLNhYgeaIWN6FlQc0/bj55NSzjsnm5G1ae9sfv8sIQ88nXDMIrd/KQm2h16w1SqYf8xBAKKw7GQ054k4TjI5m7GnJZwWIYeFdmhDCyTsEO9xcs5O0aKinQmNbHFb0i6U9jRtRWL4yZ1pgk4CtpeTA3ZOlySiorUbdovkx3qaA9ukV/RdyY1caADNmdSwWnkUI25HIujua8VHsbS2NdijUPG0dDjcDAbGOAhH2a7YQCO8qQelDhfo2RfkwR7aGeHqpFcIBbHwqOCVjhIR88/0bRfY04HcOzG4iixfsEwg+8QOMiYxoHqvJoxC9/RKhIqI/lO8TgWftvWsvtroZNsZfLvdvhsGMcO4CBF6ic9EeYvejDMfWxajRfTJ3XBhhsa7jVRMO2yFuip5AIJOCqHBS2bvZkWppBOp+kM0rT7ozgaMg5sPdltWZKYQTh1wFHFggOdkMlTRbO6/IbogK8luzjJeSfgWGuPbrJN0L3HG02mB7+yJfz2w5Fcxicj4cibMJiDaL/Qbrxhtq1pvGPQAV9LYJDGWN+RjtVCe9R+UuDbwrj1lys8aY4qC8xemkdnxyenT5+eHh8tQHEfB7Q+zrZbHJTe9YbZjm2RY+UtmdPAlBxwfA0HTdCJv6MmgknJQPNMKJeMg/NoPtgvFLZzuVyhsPfkoEnPUBrNs5Nnz41ajXqEWvEceCz6OAboO6O2XYV+1bFfrWqjWq3yMbddeuSyNtp5d7drmuWS67U44IA1m2ayVP7daWpbKtMqZrfcKTWqbgvKWayUhYe9Tp5VdE28FX1ywtRLxMF4jNqV9MbDg4ODjWa60m6PKvT08YuLokFE9Hj9ci2EA8JinG03+BXSw/YSgyelnIzOjmkLrUbXYEkXMVIidw054LxZZNVMvOpUO7QugVSPxgyDmPz+dod58p7NSpSL9IhXxFbTYsWd+HmajIPaAQUyaoPYET11RGHIaZZeDFsHtN6zAUl94oVchgCysCI7rjIjJgOtVSfezQ0sZwccsD2A8GxAb1odEk76dIYV/BSpO5rVYyVIX1itKLUTP/fG4KC9r7RH97goFWoaa8evjODjzddnCwEcGD6EDUhyEBQ6Mkg7dGYddp/jcFtd+ebofawdqAafHLB3Xo0mtmZMBkyYXba6HIeWx9oDHAyvEMuSPxcHU6VCp0mFTZP02slF5PHFp2sBHHnMEvqRx1kAysQ4u0s8GwBQescMJHA6AQPoyg4YjaPoAo3YjI8NRBXGJI+ATRfdqFeoF0tjMg5fa++iNFLGm5UAjhbG2WrkSdgvE51YmXgmgKAAAvXPgnQe+sybD8ZtY5/4FBN9ZVUI+4d34LYH6CFl4VPDNcR9aRioGZ/tSiM0jmNopMjzII4BNqBb9oQh1/VaJnWsluf98kaZlPO2WAOSXb9jOPmAYarY4jaFWX4XZ9UuOnH2QbYF6mTrrLYFTzFc246YroejMiWNhbNXAXPjnpyQ12+DvkNMUbjKVQM3UoX1fB0+OTXAwT61iHdPvjBp4YOgY5IDdqGSwTkhNc9L4SKIJ1nop/g9U2anwYfAwgrjNgqmxpH+ThgbvyfpXlyen5+/OQlGFrsXM5/g+X3AgZMWAwtfPriGaHmVD5stXKrfMcLirIXmwKOs0wFj8CKmDaZTDE4/0u2L7gM/3RyPY3EqpQOOg5gvjyuQnsNlgcOJwQE5goMJCcZPGEpS1qSlvo6LVnEi5XeM+kIb038dsnw0KeJlvxh0il5gYWVJx89/cNqVx+53TIcj3ZaNg3RPBYfFIA4Mi7Lw+TiaJq5l5MBSQpfoBWeYVylT8/yK2XD7GEcIh4bIdNPriYPeiN3ERXPTS1LfO4H09no4ziTj0M2TdOi6wCGGhRi+7xjwMRf9Qpdu+qt2Yfb+7p+EAwILPSaYUxq7QBcmlLQcy8N41aQbpAJdx30TaM71cDRPJeMovohUEjhcaLPZkDbR4fEtsHQxc8Epcsu2cCnhrYFF6tmVOubZGu4ROjA6NX8uDMJ5XUqvyzScafZNpsRxdO43i3SPw8bh4aiiCUfDOjqyHYCDgYXn2nn0Al7b7ZK/qdwP4iAiuZZtAVSKTD/hp0C4bxKztvxsHOkj4ieAxsujJBxiWKIrAhxxvS73RudeFoOM5AUwRRv4fkXIu3MrjMOCE3yfRQSWwJ7LVPsmU1rHu5rfJOP3CA2BQ4TFesRdIShIragVwb4U87IIivj7YpbvFK0Omo5YqokphcHZx6Hr/uwJ+SlQA+qXx76fmBLHC9916ObHMI7lZcRhlTGHjDxH+Et0fbuYXNlsagRWupoIwilD6lij1UAPwxbtmvdawsMh0lApr9ODb2ZKSWvLII7lKVQ5922WPD+OFkAceYgDwUkLoIIzt+uvbBw4LnouDo2DBw3fAWOCJ9ySsA7s8UC4GOJfDL3BEfsm9lgcm1Ph+I/kOs6PEnFgbmRGN0rzGIARB96Krz1SgY6JEArJrOiYjYtUbx8IfQcEWnvgJ6HsIzr0wLY07puQ8a9rpsPRll3Hs0oiDhyzmMCC6xCc+hgm+daE5ClYq/M9yThEx9g4i50UmPyWmL30FlZfF6PFAwtGJn1XbgBuXOs7raQd1UQc6BD8zyFPCiejOET4iFkWiFeQ3QFPoqXJjeNMeo2q61b7aBv8pW6wY300AD6rMCWn9+j3637Y44EF/RQJ2KjYx9d3er3+9DgWl9tnZ+9Onn7/naRX0j6L/oqfenEYxeGUfNsOqYqjqfMtcfm1q5j2NHaYpo4901PcwETH+JQQryx4qmmLhETHoEO42+JLf5HXBWzUEcsHWqGWGF1CONrvPn24vOiaZorv7AoR08chrnxoR3FAYBHJhSyxgoXAX8KOMWylUN7JC4mdwUDHcLcjxTuTDyQkeg2WBzyvi13J29IeUy0x9wjhqLQP378/efHh0iwG85+IyMVxBIdofczOmyU28jiOjvTatRx9EBHr1HygY7jDATttdl9eU9JsH/baeJzFFbIdaIH0Kr0WvJKMgynDqDw6uhzPQ4/BkYdlVtxbaG/RzvfYd/ytCTtiHMTwUiWwKV10DDym0eEfnY6oqRtlm95HF6vnKqa8oRb4i+2alqTcZiYkhoPpQ9y+rNTo52dSJZwssAdsxmU69oBtoNEONfhIsS/08IQbVy8pk2+vsfclHemdUpl9k0ikstqA1Td1NB2awMN3aWB3sEGo6+GGY5kpViu8VqM3SxHmnPTkt5JRHJnM8ac3F0Zt0mR5tRzBodmO5SS/GhzsdnYH+GaMiZdDA+gOSp16vd5ruIHaNi/o30K8/gZZjd1Opy/o+ZecYK1A+V6jNSYvjcPBAm378LQ71jz0tzE4rqDBlF+J+jJCHEuZzObm8M6dw8Mz6kvfv/v48eN4HORCnivXwCFti/0JBDg2aa5x/O7k9NPbZy/fXD6nkdao1fwwG+AA57qny4zh9XEkfv/hqwito90+PHt//P4j08nJ6envTN+Dfn8pz5FLOP1xWf7b0mvgwH2gGXyZZRaiOFh3wsGF/7+8xIJMZvFU2ibV3/LknNZYmimOmXwt8PrKbSb/ATGwWVp8JuHonsAcCZW8Mg4LM4u/AA7salpasejd47g/wL46Dlja6WNffnxBTYGjfSHhuGjH4Vi/Mg78ftIsvjQ6C02B41Da+yGXy3Flro6jRdjX1FN/Ek+q5eJ/mUL6jYrMqfQ1CvIyE1dh9equtOW6butLfN18KuUiP8kRVuaFtLrXn2ZiC83Ln/dkJ9FYX/qvlJ2S90uxheYFh3ZjEo7hKykr1YexOG7Mze8SbG9OwHH43N8VK17EzpU7c2MclMf9G2P1v0bJ14ffvonq/rz8jTXXpF/DsmX9nX4uS0lJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJKVn/B/rRDZYnS4TqAAAAAElFTkSuQmCC" },
                  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                  { name: "Mahindra", logo: "https://th.bing.com/th/id/OIP.1msLJrqSgn9_0FI-tGtBUAHaEK?w=293&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3" },
                  { name: "Whitehat Jr", logo: "https://static.startuptalky.com/2022/02/WhiteHatJr-Logo-Success-Story-Startuptalky.jpg" },
                  { name: "Accenture", logo: "data:image/jpeg;base64,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vOPiz3KW8RdIfprYo7X27sWyobPzeTzM4a4YxuH63n4IIb7N3807n+/n/DYqq09VQW7ixBUV0rYIYrs/mSSHDWe+RknwHquguG+iv0HtNTQfiHbufUc7fyOVt90DGNx8lF9acFaG/wB4nultuTrdLUPMk0ToeYxzz3uHUEZPU9/UoJRxCq6a4cO9QuoKiGpayle1xhkDw0gAkHHjgg/VVD7O9zoqHUtwgrKmKB9TSgRcxwaHkOBIGfHHXHoVbmgdDRaT0zV2Oqqm3GGrmfJLuh2NLXsawtxk5GG/dQG58AI5K6R9svphpHOy2Kan3ujHluDhu/IINH7Q95oLlfrbS0NTHUPpIH84xODg0uIw3I8en3Uluf8ARsZ+7Q/5hq9LjwGt01FRU9vu76aSEOM88lNzHTuOOvxjaBjAHXvUuqtCc/hqNG/iW3EbGds5GfhkD87N3pjvQV77M/8AvGof2Kf/AOyKRe0TQS1Oi6aqiaS2krGul9Gua5uf7xaPqtxwz4d/oJJcH/ivb+2CMY7Nytm3d/adnO77KaVtJT19HNSVkLJqeZhZJG8ZDmnvCDnng7pPSOraCrgvJk/FYZstjbOWboiBggeODuzju6eazNV2zhRpe6m21VNd6qdrA6Q0c7XtjJ/quJcOvjj1C2954A0s1W+SzXp9NA45EFRDzC35OBHT5jPqVtNHcE7XZK+Kvu9a65zQuD4ouVy4gR3FwyS77D0KCyLDDBTWO3QUsMsNPFSxsiim+NjQ0ANd6gdCs5EQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==" }
                  


                ].map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-2xl px-8 py-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-center">
                      <img src={partner.logo} alt={partner.name} className="h-16 object-contain mb-3" />
                      <p className="text-gray-700 font-semibold text-sm">{partner.name}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

