// HPI 1.7-V
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Heart, Brain, Stethoscope, Clock, Activity, ShieldCheck, UserPlus } from 'lucide-react';

// --- Canonical Data Sources ---
const SERVICES_DATA = [
  {
    id: '1',
    icon: Heart,
    name: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
    detail: 'Our cardiology department utilizes state-of-the-art imaging and minimally invasive techniques.'
  },
  {
    id: '2',
    icon: Brain,
    name: 'Neurology',
    description: 'Expert neurological care for brain and nervous system conditions.',
    detail: 'Specialized treatment plans for stroke, epilepsy, and neurodegenerative disorders.'
  },
  {
    id: '3',
    icon: Stethoscope,
    name: 'General Medicine',
    description: 'Primary care services for all your health and wellness needs.',
    detail: 'Holistic preventative care and chronic disease management for the whole family.'
  },
  {
    id: '4',
    icon: Clock,
    name: 'Emergency Care',
    description: '24/7 emergency services with rapid response teams.',
    detail: 'Immediate access to trauma specialists and life-saving technology around the clock.'
  }
];

const FEATURES_DATA = [
  {
    title: "Board-Certified Specialists",
    description: "Our team consists of industry-leading experts dedicated to the highest standards of medical practice.",
    icon: UserPlus
  },
  {
    title: "Advanced Technology",
    description: "We invest in the latest diagnostic and surgical equipment to ensure precise and effective treatments.",
    icon: Activity
  },
  {
    title: "Patient-First Approach",
    description: "Your comfort and recovery are our priorities. We tailor every aspect of care to your unique needs.",
    icon: ShieldCheck
  }
];

export default function HomePage() {
  // --- Scroll Hooks & Refs ---
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScroll = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScroll.scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(heroScroll.scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll.scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-primary font-paragraph selection:bg-secondary selection:text-secondary-foreground overflow-clip">
      <Header />

      {/* --- HERO SECTION: Replicating the Inspiration Structure --- */}
      {/* Structure: Massive Typography Header -> Full Bleed Image Split */}
      <section ref={heroRef} className="relative w-full flex flex-col pt-32 lg:pt-48">
        
        {/* Top Half: Typography & Brand Statement */}
        <div className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 pb-24 lg:pb-32 z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl text-primary tracking-tight leading-[0.9]"
            >
              VITALITY<span className="text-secondary-foreground/40">.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto space-y-8"
            >
              <p className="text-xl md:text-2xl text-primary/80 font-light leading-relaxed">
                Artisanal touches for your health journey. Experience excellence in healthcare with our dedicated team.
              </p>
              
              <div className="flex justify-center">
                <Link 
                  to="/appointment"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105"
                >
                  <span className="relative z-10 font-medium text-lg">Book Appointment</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Half: Full Bleed Parallax Image */}
        <div className="relative w-full h-[70vh] lg:h-[85vh] overflow-clip">
          <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 w-full h-full">
            <Image
              src="https://static.wixstatic.com/media/29acf2_70a7f697b54e401aae12485abe1aaebe~mv2.png?originWidth=2048&originHeight=704"
              alt="Serene medical environment with natural light"
              width={2400}
              className="w-full h-full object-cover"
            />
            {/* Subtle Overlay for depth */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </motion.div>
          
          {/* Decorative Divider */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </section>

      {/* --- NARRATIVE SECTION: Editorial Layout --- */}
      <section className="w-full py-32 bg-background relative">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left: Sticky Title */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="block text-sm font-bold tracking-widest uppercase text-primary/60 mb-4">Our Philosophy</span>
                <h2 className="font-heading text-5xl lg:text-6xl text-primary leading-tight">
                  The Art of <br/> <span className="italic text-secondary-foreground/70">Healing</span>
                </h2>
                <div className="w-12 h-1 bg-secondary mt-8" />
              </div>
            </div>

            {/* Right: Content Flow */}
            <div className="lg:col-span-8 space-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-heading text-3xl lg:text-4xl text-primary/90 leading-snug">
                  "We believe that true healthcare goes beyond prescriptions. It is a craft, a dedication to the restoration of the human spirit through science and compassion."
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-primary/10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="font-heading text-2xl text-primary">Holistic Approach</h3>
                  <p className="text-lg text-primary/70 leading-relaxed">
                    Our methodology integrates advanced medical technology with a deep understanding of lifestyle and wellness, ensuring a balanced path to recovery.
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="font-heading text-2xl text-primary">Enduring Care</h3>
                  <p className="text-lg text-primary/70 leading-relaxed">
                    From your first consultation to long-term wellness management, we build relationships that last, treating every patient like family.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION: Magazine Style Grid --- */}
      <section className="w-full bg-secondary/30 py-32 border-y border-primary/5">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="font-heading text-5xl lg:text-6xl text-primary mb-4">Medical Services</h2>
              <p className="text-xl text-primary/70 max-w-xl">Comprehensive solutions tailored to your unique needs.</p>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/70 transition-colors">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 border border-primary/10">
            {SERVICES_DATA.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-background p-10 lg:p-12 h-full hover:bg-primary hover:text-primary-foreground transition-colors duration-500 overflow-hidden"
                >
                  <div className="relative z-10 flex flex-col h-full justify-between space-y-12">
                    <div className="flex justify-between items-start">
                      <Icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-500" />
                      <span className="font-heading text-4xl text-primary/10 group-hover:text-secondary/20 transition-colors duration-500">0{index + 1}</span>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-heading text-2xl lg:text-3xl">{service.name}</h3>
                      <p className="text-base leading-relaxed opacity-80 group-hover:opacity-100">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="pt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-12 md:hidden flex justify-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/70 transition-colors">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US: Sticky Scroll Layout --- */}
      <section className="w-full py-32 bg-background overflow-clip">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Left: Sticky Image & Heading */}
            <div className="relative h-fit lg:h-[calc(100vh-8rem)] lg:sticky lg:top-32 flex flex-col justify-between">
              <div className="space-y-8 mb-12 lg:mb-0">
                <h2 className="font-heading text-5xl lg:text-7xl text-primary leading-none">
                  Excellence <br/> Since 1985
                </h2>
                <p className="text-xl text-primary/80 max-w-md leading-relaxed">
                  Combining decades of medical expertise with cutting-edge technology and compassionate service.
                </p>
                <div className="hidden lg:block">
                   <Link 
                    to="/about"
                    className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    About Our Clinic
                  </Link>
                </div>
              </div>
              
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:flex-1 rounded-2xl overflow-hidden mt-8 lg:mt-12">
                <Image
                  src="https://static.wixstatic.com/media/29acf2_20b1a6bb46894f1a821da21b842c04e6~mv2.png?originWidth=1152&originHeight=896"
                  alt="Doctor consulting with patient"
                  width={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Scrolling Feature Cards */}
            <div className="flex flex-col gap-12 lg:gap-24 lg:py-24">
              {FEATURES_DATA.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="group flex flex-col gap-6 p-8 lg:p-12 bg-secondary/10 rounded-3xl border border-transparent hover:border-primary/20 transition-colors duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-3xl lg:text-4xl text-primary">{feature.title}</h3>
                    <p className="text-lg lg:text-xl text-primary/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
              
              {/* Mobile Only Button */}
              <div className="lg:hidden pt-8">
                 <Link 
                  to="/about"
                  className="w-full inline-flex justify-center items-center gap-3 px-8 py-4 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  About Our Clinic
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- IMMERSIVE IMAGE BREAK --- */}
      <section className="w-full h-[80vh] relative overflow-clip">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/29acf2_1102b9aa35ea4438a16997ab7ed4e923~mv2.png?originWidth=2048&originHeight=640"
            alt="Advanced medical equipment"
            width={2400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background/90 backdrop-blur-sm p-12 lg:p-20 max-w-3xl text-center mx-6"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-primary mb-6">
              "Medicine cures diseases, but only doctors can cure patients."
            </h2>
            <p className="text-lg text-primary/60 italic">— Carl Jung</p>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION: Minimalist & Direct --- */}
      <section className="w-full py-32 lg:py-48 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-tight">
              Ready to prioritize <br/> your health?
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-light max-w-2xl mx-auto">
              Schedule your appointment today and experience healthcare that puts you first.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link
                to="/appointment"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-paragraph text-lg rounded-full hover:bg-background hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-10 py-5 border border-primary-foreground/30 text-primary-foreground font-paragraph text-lg rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}