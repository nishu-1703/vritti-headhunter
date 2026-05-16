import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "./sanity";

export type Highlight = {
  title: string;
  subtitle: string;
  icon: "target" | "shield" | "file" | "clock";
};

export type Mentor = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type Service = {
  title: string;
  desc: string;
  tags: string[];
  icon: "briefcase" | "users" | "shield" | "compass" | "award" | "sparkles";
};

export type Partner = {
  name: string;
  logo: string;
};

export type SiteContent = {
  home: {
    eyebrow: string;
    headline: string;
    accent: string;
    subheadline: string;
    ctaLabel: string;
    visualChip: string;
    visualTitle: string;
    highlights: Highlight[];
    expertise: string[];
  };
  about: {
    headline: string;
    accent: string;
    introQuote: string;
    beliefTitle: string;
    beliefText: string;
    missionTitle: string;
    missionText: string;
    mentorsTitle: string;
    mentors: Mentor[];
    quote: string;
    quoteAuthor: string;
    quoteRole: string;
  };
  services: {
    headline: string;
    services: Service[];
    partnersTitle: string;
    partners: Partner[];
  };
  contact: {
    headline: string;
    cardTitle: string;
    phone: string;
    email: string;
    location: string;
    whatsapp: string;
  };
};

export const fallbackSiteContent: SiteContent = {
  home: {
    eyebrow: "",
    headline: "Lateral & Diversity",
    accent: "Hiring Expert",
    subheadline: "Background Verification, Contract Staffing & Payroll Services",
    ctaLabel: "Explore",
    visualChip: "",
    visualTitle: "Delivering the right talent with speed, precision, and business alignment",
    highlights: [
      { title: "Fortune 500 Clientele", subtitle: "IMMENSE NETWORK", icon: "target" },
      { title: "No Further\nOut-sourcing", subtitle: "REAL-TIME EXPERIENCE", icon: "shield" },
      { title: "Direct Assessments", subtitle: "ART OF READING RESUME", icon: "file" },
      { title: "On-Time Service", subtitle: "STRONG MARKETING ABILITY", icon: "clock" },
    ],
    expertise: [
      "Leadership Hiring",
      "Talent Acquisition",
      "Background Verification",
      "Contract Staffing",
      "Payroll Management",
      "Process Optimization",
    ],
  },
  about: {
    headline: "BUILDING LEADERS",
    accent: "STRENGTHENING ENTERPRISES",
    introQuote:
      "LEADING EXECUTIVE SEARCH AND\nTALENT ADVISORY FIRM SHAPING SUCCESS,\nVISIONARY LEADERSHIP AND TRANSFORMATIVE\nHR SOLUTIONS, \nSince 2020",
    beliefTitle: "Our Belief",
    beliefText:
      "We believe exceptional individuals are the cornerstone of outstanding organizations. Our expert team secures top-tier talent across industries, creating empowering connections.",
    missionTitle: "Our Mission",
    missionText:
      "Exceptional talent builds extraordinary organizations. Our Expertise connects top professionals with thriving businesses for lasting success.",
    mentorsTitle: "Strategic Mentorship",
    mentors: [
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
    ],
    quote: "YOUR Success Is OUR Success",
    quoteAuthor: "Chandrakala Katta",
    quoteRole: "CEO, Vritti Headhunters",
  },
  services: {
    headline: "Our Services",
    services: [
      {
        title: "Leadership Hiring",
        desc: "CXO, VP and Director Level confidential search, cultural assessment, leadership alignment to your strategic goals.",
        tags: ["Confidential Search", "Cultural Fit", "Global Reach"],
        icon: "briefcase",
      },
      {
        title: "Defense Hiring & Internships",
        desc: "Transition of Defense professionals into Corporate roles with tailored skill-mapping, mentorship and internship-to-hire pathways.",
        tags: ["Skill Mapping", "Mentorship", "Intern-to-Hire"],
        icon: "compass",
      },
      {
        title: "Contract Staffing",
        desc: "Flexible workforce solutions for immediate needs compliance-managed, skilled contractors ready to deploy.",
        tags: ["Rapid Deployment", "Compliance", "Managed Payroll"],
        icon: "shield",
      },
      {
        title: "Payroll Services",
        desc: "Efficient payroll services tailored to support growing businesses with seamless salary administration..",
        tags: ["Error-Free Payroll Processing", "Compliance-Driven Payroll Support", "Secure Employee Salary Management", "Seamless Payroll Operations"],
        icon: "users",
      },

      {
        title: "HR Process Optimization",
        desc: "Simplifying complex HR processes for seamless workforce management and business growth",
        tags: ["Faster Hiring Workflows", "Efficient HR Operations", "Structured Employee Processes","Scalable HR Solutions"],
        icon: "award",
      },
      {
        title: "Background Verification Services",
        desc: "Trusted BGV services ensuring safe, reliable, and confident hiring decisions",
        tags: ["Employment and Education", "Identity and Address", "Criminal record", "Customized packages"],
        icon: "sparkles",
      },
    ],
    partnersTitle: "Our Trusted Partners",
    partners: [
      { name: "LeverageEdu", logo: "https://publicassets.leverageedu.com/landing-pages-new/logo-dark.svg" },
      { name: "HDFC Life", logo: "https://upload.wikimedia.org/wikipedia/en/2/28/HDFC_Life_Logo.svg" },
      { name: "Whitehat Jr", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/WhiteHat_Jr.webp" },
      { name: "AgNext", logo: "https://www.agnext.com/wp-content/uploads/2024/08/img-logo-1-2.png" },
      { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/The_Flipkart_Logo_-_from_Official_Website.png" },
      { name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg" },
      { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
      { name: "Morgan Stanley", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Morgan_Stanley_Logo_1.svg" },
      { name: "TE Connectivity", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/TE_Connectivity_logo.svg" },
      { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
      { name: "Ashok Leyland", logo: "https://upload.wikimedia.org/wikipedia/en/e/e4/Ashok_Leyland_logo.svg" },
      { name: "GE", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg" },
      { name: "HCL", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/HCL_Technologies_logo.svg" },
      { name: "GMR", logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/GMR_Group_logo.svg" },
      { name: "Vodafone", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Vodafone_icon.svg" },
      { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      { name: "EPAM", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/EPAM_logo.svg" },
      { name: "Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Mahindra_logo.svg" },
      { name: "Broadridge", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Broadridge_Financial_Solutions_logo.svg" },
    ],
  },
  contact: {
    headline: "Let's Connect",
    cardTitle: "",
    phone: "",
    whatsapp: "+91-70374-00096",
    email: "ceo@vheadhunt.com",
    location: "Hyderabad, India",
  },
};

const siteContentQuery = `*[_type == "siteContent"][0]{
  home,
  about,
  services,
  contact
}`;

function mergeContent(content?: Partial<SiteContent> | null): SiteContent {
  return {
    home: { ...fallbackSiteContent.home, ...content?.home },
    about: { ...fallbackSiteContent.about, ...content?.about },
    services: { ...fallbackSiteContent.services, ...content?.services, partners: fallbackSiteContent.services.partners },
    contact: { ...fallbackSiteContent.contact, ...content?.contact },
  };
}

export function useSiteContent() {
  return useQuery({
    queryKey: ["siteContent"],
    queryFn: async () => mergeContent(await sanityClient.fetch<Partial<SiteContent> | null>(siteContentQuery)),
    staleTime: 60_000,
    placeholderData: fallbackSiteContent,
  });
}
