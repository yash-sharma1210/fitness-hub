import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Flame, 
  Clock, 
  Apple, 
  Trophy, 
  Users, 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  Youtube, 
  ChevronDown, 
  Menu, 
  X, 
  Play, 
  Star,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-3 shadow-lg border-b border-secondary' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-3xl font-display font-black text-accent tracking-tighter hover:text-black transition-colors uppercase">
          FITNESS <span className={scrolled ? 'text-black' : 'text-white'}>HUB</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs uppercase tracking-[0.2em] font-black transition-colors border-b-2 border-transparent hover:border-accent pb-1 ${scrolled ? 'text-black/60 hover:text-black' : 'text-white/70 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-b border-accent/20 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6 italic font-display">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl uppercase tracking-widest hover:text-accent transition-colors text-black"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-dots opacity-20 pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl relative"
        >
          <span className="text-highlight text-sm font-black tracking-[0.4em] uppercase mb-6 block border-l-4 border-accent pl-4">
            Est. 2014 — Premium Athletic Facility
          </span>
          <h1 className="text-7xl md:text-[9.5rem] leading-[0.8] mb-8 font-black">
            FORGE YOUR <span className="text-stroke-black italic">BODY.</span><br />
            <span className="text-accent">FUEL YOUR</span> MIND.
          </h1>
          <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-xl font-medium tracking-wide uppercase italic">
            Industrial grade equipment. Elite performance coaching. No excuses, only elite results.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="border-2 border-secondary hover:bg-secondary text-black px-12 py-5 font-black uppercase tracking-widest transition-all text-sm flex items-center gap-3">
              <Play size={18} fill="currentColor" /> Watch Story
            </button>
          </div>
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const features = [
    { title: 'Modern Equipment', icon: Dumbbell, desc: 'Top-tier machines for peak performance.' },
    { title: 'Expert Trainers', icon: Trophy, desc: 'Elite coaching from industry professionals.' },
    { title: 'Flexible Timings', icon: Clock, desc: 'Open 24/7 to fit your busy schedule.' },
    { title: 'Nutrition Plans', icon: Apple, desc: 'Custom diets for sustainable results.' },
  ];

  return (
    <section id="about" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group w-full lg:w-1/2"
        >
          <div className="absolute -inset-4 border-2 border-accent/20 group-hover:border-accent/40 transition-colors pointer-events-none"></div>
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Interior"
            className="w-full aspect-video md:aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm"
          />
          <div className="absolute bottom-6 left-6 bg-accent p-4 text-white font-display text-2xl rotate-3 shadow-xl">
            SINCE 2016
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 text-black">
          <h2 className="text-4xl md:text-5xl mb-6 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-accent"></span> WHY CHOOSE FITNESS HUB?
          </h2>
          <p className="text-xl text-black/60 mb-12 leading-relaxed">
            At Fitness Hub, we don't just provide space to work out. We build a discipline. Our community is focused on pushing boundaries and achieving what you thought was impossible.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 hover:bg-secondary transition-colors rounded-sm"
              >
                <feature.icon className="text-accent shrink-0" size={32} />
                <div>
                  <h3 className="text-xl mb-1 text-highlight font-black italic">{feature.title}</h3>
                  <p className="text-sm text-black/40 uppercase font-bold tracking-tight">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const progs = [
    { 
      title: 'Strength Training', 
      icon: Dumbbell, 
      desc: 'Build lean muscle and pure power with heavy lifting.',
    },
    { 
      title: 'Cardio Blast', 
      icon: Flame, 
      desc: 'High-intensity endurance sessions to burn calories fast.',
    },
    { 
      title: 'HIIT', 
      icon: Clock, 
      desc: 'Quick, explosive workouts for maximum efficiency.',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4 italic text-highlight">PREMIUM PROGRAMS</h2>
          <p className="text-black/40 uppercase tracking-[0.3em] font-black">Unlock your full potential</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white">
          {progs.map((p, i) => (
            <div
              key={i}
              className="p-10 bg-primary border-r border-b border-secondary hover:bg-white hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-opacity">
                <p.icon size={120} className="text-accent" />
              </div>
              <div className="flex items-center gap-4 mb-8 text-black">
                <span className="text-xs font-black text-black/10 group-hover:text-accent transition-colors font-display">0{i+1}.</span>
                <p.icon className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl mb-4 italic font-black uppercase tracking-tighter text-highlight group-hover:text-accent transition-colors leading-none">{p.title}</h3>
              <p className="text-black/40 mb-8 text-sm uppercase font-bold tracking-wider leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  const trainers = [
    { name: 'Alex "The Rock" Carter', role: 'Strength Specialist', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Sarah "Swift" Jenkins', role: 'Cardio Expert', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Marcus "Heavy" Miller', role: 'Boxing Coach', img: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d3?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section id="trainers" className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-5xl md:text-6xl italic leading-none">MEET THE<br /><span className="text-accent">ELITE COMMANDOS</span></h2>
          </div>
          <button className="border-2 border-accent text-accent px-8 py-3 font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-all italic">
            See All Trainers
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {trainers.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                
                {/* Social Overlay */}
                <div className="absolute bottom-1/2 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:bottom-20 transition-all duration-300">
                  <a href="#" className="bg-accent p-3 hover:bg-white hover:text-accent transition-colors"><Instagram size={20} /></a>
                </div>
              </div>
              <div className="mt-6 border-l-4 border-accent pl-4 group-hover:translate-x-2 transition-transform">
                <h3 className="text-3xl italic">{t.name}</h3>
                <p className="text-highlight font-semibold tracking-wider uppercase text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const commonFeatures = [
    'Full Gym Access',
    'All Group Classes',
    'Private Coaching (2/mo) additional charges(3000)',
    'Locker Room',
    'Supplement Plan',
    'Nutrition Plan'
  ];

  const plans = [
    { title: '1 Month', price: '1,200', features: commonFeatures },
    { title: '3 Months', price: '3,000', features: commonFeatures, popular: true },
    { title: '1 Year', price: '10,000', features: commonFeatures },
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4 italic text-highlight">MEMBERSHIP PLANS</h2>
          <p className="text-black/40 tracking-widest uppercase font-black">Select your path to greatness</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`p-12 relative flex flex-col justify-between transition-all ${p.popular ? 'bg-accent text-black scale-[1.02] z-10 shadow-[0_20px_50px_rgba(255,45,45,0.3)]' : 'bg-primary border border-secondary hover:border-accent/40'}`}
            >
              {p.popular && (
                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 font-black uppercase tracking-widest text-[10px]">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className={`text-2xl uppercase tracking-[0.2em] mb-4 font-black italic ${p.popular ? 'text-black' : 'text-accent'}`}>{p.title}</h3>
                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-6xl font-black tracking-tighter">₹{p.price}</span>
                  <span className={`text-sm font-black uppercase ${p.popular ? 'text-black/60' : 'text-black/30'}`}>/MO</span>
                </div>
                <div className="space-y-4">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className={`${p.popular ? 'text-black' : 'text-accent'} shrink-0`} size={16} strokeWidth={3} />
                      <span className={`text-[11px] uppercase font-black tracking-wide ${p.popular ? 'text-black' : 'text-black/70'}`}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "John Doe", role: "Member for 2 years", text: "Fitness Hub changed my life. The intensity is exactly what I needed to break through my plateaus.", rating: 5 },
    { name: "Sanya Malhotra", role: "Cardio Addict", text: "Best HIIT sessions in the city. The trainers really know how to push you safely.", rating: 5 },
    { name: "Rohan V.", role: "Powerlifter", text: "The equipment here is world-class. No other gym in the area comes close to this setup.", rating: 4 },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-dots opacity-10 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl mb-16 italic font-black uppercase tracking-tighter">VOICES OF THE HUB</h2>
        <div className="grid gap-12">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-primary border border-secondary p-10 relative group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex bg-primary px-4 py-1 border border-secondary shadow-lg">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className={j < r.rating ? "text-accent fill-accent" : "text-black/5"} />
                ))}
              </div>
              <p className="text-xl md:text-2xl italic leading-relaxed text-black/60 mb-8 font-medium italic uppercase tracking-tight">"{r.text}"</p>
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-black italic text-highlight uppercase tracking-wider">{r.name}</h4>
                <p className="text-[10px] tracking-[0.3em] uppercase text-black/20 font-black mt-1">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16">
          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <div className="text-center">
               <h2 className="text-5xl italic mb-10 font-black">THE <span className="text-accent">FACILITY</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center gap-4">
                <MapPin className="text-accent" size={32} />
                <div>
                  <h4 className="font-display text-xl bg-accent text-black px-2 inline-block italic mb-2">LOCATION</h4>
                  <p className="text-sm text-black/60 font-bold uppercase">Fitness Hub, Premium Gym Facility</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <Phone className="text-accent" size={32} />
                <div>
                  <h4 className="font-display text-xl bg-accent text-black px-2 inline-block italic mb-2">PHONE</h4>
                  <p className="text-sm text-black/60 font-bold tracking-widest">98919 15887</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <Mail className="text-accent" size={32} />
                <div>
                  <h4 className="font-display text-xl bg-accent text-black px-2 inline-block italic mb-2">EMAIL</h4>
                  <p className="text-sm text-black/60 font-bold tracking-tight">fitnesshub@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <Clock className="text-accent" size={32} />
                <div>
                  <h4 className="font-display text-xl bg-accent text-black px-2 inline-block italic mb-2">HOURS</h4>
                  <p className="text-sm text-black/60 font-bold tracking-widest">5:00AM - 10:00PM</p>
                </div>
              </div>
            </div>
            {/* Map iframe */}
            <div className="w-full h-[450px] bg-primary relative grayscale rounded-sm overflow-hidden border border-secondary shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.123456789!2d77.123456789!3d28.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1c63240d067%3A0x6b9865d7ee0e28fe!2sFitness%20Hub!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center mt-4">
               <a 
                 href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwjgrOzAmcOUAxUAAAAAHQAAAAAQBg..i&pvq=Cg0vZy8xMWdnbmNjcGxmIhUKD2ZpdG5lc3MgaHViIGd5bRACGAM&lqi=Cg9maXRuZXNzIGh1YiBneW1IzazXxbqugIAIWh0QABABEAIYABgBGAIiD2ZpdG5lc3MgaHViIGd5bZIBA2d5bQ&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x390cf1c63240d067:0x6b9865d7ee0e28fe" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-xs font-black uppercase tracking-[0.3em] text-accent hover:text-highlight transition-colors flex items-center justify-center gap-2"
               >
                 View Larger Map <ArrowRight size={14} />
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h2 className="text-3xl text-accent font-black tracking-tighter uppercase">FITNESS <span className="text-black">HUB</span></h2>
            <p className="text-black/30 text-[11px] uppercase font-black tracking-wider leading-relaxed font-body">
              Industrial grade facility. High-performance mindset. Forge your body into a weapon of physical excellence.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/fitnesshubgzb_official/?hl=en" },
                { Icon: Youtube, href: "https://www.youtube.com/@fitnesshubgymgzb" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="p-3 border border-secondary hover:border-accent hover:text-accent transition-all"
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black tracking-[0.3em] uppercase mb-8 text-accent">Navigation</h4>
            <div className="flex flex-col gap-4 text-[10px] text-black/40 font-black tracking-[0.2em] uppercase transition-colors">
              <a href="#home" className="hover:text-accent transition-colors text-black/40">Home Base</a>
              <a href="#about" className="hover:text-accent transition-colors text-black/40">The Facility</a>
              <a href="#programs" className="hover:text-accent transition-colors text-black/40">Disciplines</a>
              <a href="#pricing" className="hover:text-accent transition-colors text-black/40">Memberships</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary text-center">
          <p className="text-[9px] text-black/20 tracking-[0.5em] uppercase font-black italic">
            © 2026 Fitness Hub Operational Facility. Built for Results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
