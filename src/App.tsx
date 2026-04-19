/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  PiggyBank, 
  Wallet, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  Share2,
  Plus,
  Star
} from 'lucide-react';
import { useState } from 'react';

const TopNavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-full font-headline tracking-tight">
        <div className="text-2xl font-bold tracking-tighter text-primary">
          Akure Rehoboth CMS
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a className="text-primary font-bold border-b-2 border-secondary transition-colors" href="#">Home</a>
          <a className="text-outline font-medium hover:text-primary transition-colors" href="#">About</a>
          <a className="text-outline font-medium hover:text-primary transition-colors" href="#">Services</a>
          <a className="text-outline font-medium hover:text-primary transition-colors" href="#">Membership</a>
          <a className="text-outline font-medium hover:text-primary transition-colors" href="#">Loans</a>
          <a className="text-outline font-medium hover:text-primary transition-colors" href="#">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-5 py-2 rounded-full font-bold text-primary border border-primary hover:bg-surface-container-low transition-colors">
            Admin Login
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden hero-gradient text-on-primary px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
            Empowering Our Community, <span className="text-secondary-fixed">Securing Your Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container font-light leading-relaxed mb-10 max-w-xl">
            Experience a new standard of financial growth through ethical cooperative management, community-driven support, and sustainable wealth creation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-secondary text-on-secondary rounded-full font-bold text-lg shadow-lg hover:brightness-110 transition-all">
              Join the Cooperative
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-on-primary/30 hover:border-on-primary text-on-primary rounded-full font-bold text-lg transition-all">
              Apply for Loan
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-fixed/10 rounded-full blur-3xl"></div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-700 border-8 border-white/10">
            <img 
              className="w-full h-[600px] object-cover" 
              src="https://picsum.photos/seed/community/800/1200" 
              alt="Community leaders"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustIndicators = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-8 bg-surface-container-low rounded-3xl flex flex-col justify-center"
        >
          <span className="text-5xl font-extrabold text-primary mb-2">15+</span>
          <span className="text-on-surface-variant font-medium">Years of Dedicated Service</span>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 p-8 bg-primary text-on-primary rounded-3xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <span className="text-5xl font-extrabold mb-2 block">2,500+</span>
            <span className="text-primary-fixed-dim font-medium text-lg">Active Members Trusting Us Daily</span>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
            <Users size={120} />
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-8 bg-secondary-container text-on-secondary-container rounded-3xl flex flex-col justify-center"
        >
          <ShieldCheck size={40} className="mb-4" />
          <span className="text-xl font-bold">Reliable & Secure</span>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Savings Plans",
      description: "Flexible daily, weekly, or monthly savings options with competitive interest rates to help you reach your goals faster.",
      icon: <PiggyBank className="text-primary" size={32} />
    },
    {
      title: "Low-Interest Loans",
      description: "Access quick and affordable credit for business expansion, personal needs, or emergency situations without heavy collateral.",
      icon: <Wallet className="text-primary" size={32} />
    },
    {
      title: "Investment Opportunities",
      description: "Participate in high-yield community projects and cooperative investments that guarantee steady returns and long-term security.",
      icon: <TrendingUp className="text-primary" size={32} />
    }
  ];

  return (
    <section className="py-24 bg-surface-container-lowest px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">Financial Solutions Tailored for You</h2>
            <p className="text-on-surface-variant text-lg">Comprehensive cooperative services designed to support every stage of your financial journey.</p>
          </div>
          <a className="mt-8 md:mt-0 text-primary font-bold flex items-center gap-2 group" href="#">
            View All Services <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group p-10 bg-surface-container rounded-[2rem] hover:bg-primary transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary group-hover:text-white mb-4">{service.title}</h3>
              <p className="text-on-surface-variant group-hover:text-primary-fixed-dim leading-relaxed mb-8">{service.description}</p>
              <div className="h-1 w-12 bg-secondary rounded-full group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -left-12 -top-12 w-64 h-64 bg-surface-variant rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <img 
              className="rounded-[3rem] shadow-2xl w-full aspect-square object-cover" 
              src="https://picsum.photos/seed/akure/800/800" 
              alt="Akure city view"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl z-20 max-w-xs">
              <p className="text-primary font-bold text-xl mb-2 italic">"Rooted in Akure, Growing for the World."</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary"></div>
                <span className="font-bold text-sm text-on-surface">Community First</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div>
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Legacy</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">Driving Community Impact in Akure</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
            Akure Rehoboth Cooperative Multipurpose Society Ltd was founded on the principle of mutual aid. We believe that by pooling our resources, we create an unstoppable force for individual and collective prosperity.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
            Our mission is to provide members with qualitative financial services that improve their standard of living while fostering a culture of savings and investment in the heart of Ondo State.
          </p>
          <button className="px-8 py-4 bg-surface-container-high text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all">
            Learn More About Our Mission
          </button>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { number: "01", title: "Join the Family", description: "Register as a member and complete your profile to become part of our growing community." },
    { number: "02", title: "Save Consistently", description: "Choose a savings plan that works for you and start building your financial cushion today." },
    { number: "03", title: "Access Benefits", description: "Apply for loans, earn dividends, and watch your investments grow with full transparency." }
  ];

  return (
    <section className="py-24 bg-surface-container-low px-8">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-4">Start Your Journey</h2>
        <p className="text-on-surface-variant text-lg">Three simple steps to secure your financial independence</p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div key={index} className="relative text-center px-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-md relative z-10">
              <span className="text-3xl font-black text-secondary">{step.number}</span>
            </div>
            {index < 2 && <div className="hidden md:block absolute top-10 left-2/3 w-full h-[2px] bg-outline-variant/30"></div>}
            <h4 className="text-2xl font-bold text-primary mb-4">{step.title}</h4>
            <p className="text-on-surface-variant">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const TestimonialsAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Who is eligible to join Akure Rehoboth CMS?", a: "Membership is open to all residents of Akure and Ondo State who are committed to cooperative growth." },
    { q: "What is the maximum loan amount I can access?", a: "Loan amounts are based on your savings history and business viability. Generally up to 2-3x your savings." },
    { q: "How long does loan approval typically take?", a: "Standard loans are processed within 3-5 working days after application." },
    { q: "Are there monthly membership fees?", a: "We have a minimal monthly administrative fee to keep our community operations running smoothly." }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <h2 className="font-headline text-4xl font-extrabold text-primary mb-8">What Our Members Say</h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-surface-container-high/50 border border-surface-container"
          >
            <div className="flex gap-1 text-secondary mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-xl text-primary font-medium italic mb-8 leading-relaxed">
              "Being a member of Rehoboth has completely changed my business outlook. The low-interest loans helped me restock during the most difficult economic times."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://picsum.photos/seed/person1/100/100" 
                  alt="Member"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h5 className="font-bold text-primary">Mrs. Adebayo Funmi</h5>
                <p className="text-sm text-on-surface-variant">SME Owner, Akure</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-3 space-y-6">
          <h2 className="font-headline text-4xl font-extrabold text-primary mb-8">Common Questions</h2>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="p-6 bg-surface rounded-2xl hover:bg-surface-container-low transition-colors group cursor-pointer"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-bold text-primary">{faq.q}</h4>
                <Plus className={`text-outline transition-transform ${openFaq === index ? 'rotate-45' : ''}`} />
              </div>
              {openFaq === index && (
                <motion.p 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="text-on-surface-variant"
                >
                  {faq.a}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 px-8 bg-surface-container-highest">
      <div className="max-w-7xl mx-auto rounded-[3rem] bg-primary overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-12 lg:p-20 text-on-primary">
          <h2 className="font-headline text-4xl font-extrabold mb-8">Connect With Us</h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-secondary-fixed" />
              </div>
              <div>
                <h6 className="font-bold text-lg mb-1">Our Office</h6>
                <p className="text-primary-fixed-dim leading-relaxed">
                  11, Fabunmi Street Off Sholagbade,<br/>
                  Obodulu Layout, Oshinle Quarter, Akure.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-secondary-fixed" />
              </div>
              <div>
                <h6 className="font-bold text-lg mb-1">Call Support</h6>
                <p className="text-primary-fixed-dim">+234 (0) 800-REHOBOTH</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-secondary-fixed" />
              </div>
              <div>
                <h6 className="font-bold text-lg mb-1">Email Us</h6>
                <p className="text-primary-fixed-dim">info@akurerehobothcms.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
          <img 
            className="w-full h-full object-cover grayscale opacity-80" 
            src="https://picsum.photos/seed/map/800/800" 
            alt="Akure Map"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary-fixed w-full py-12 px-8 font-body text-sm leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="col-span-1">
          <div className="text-xl font-bold text-white mb-6">Akure Rehoboth</div>
          <p className="text-primary-fixed-dim mb-6">Sustainable growth and financial empowerment for every member of our community since 2009.</p>
          <div className="flex space-x-4">
            <Globe className="text-white cursor-pointer hover:text-secondary-fixed" size={20} />
            <MessageSquare className="text-white cursor-pointer hover:text-secondary-fixed" size={20} />
            <Share2 className="text-white cursor-pointer hover:text-secondary-fixed" size={20} />
          </div>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-primary-fixed-dim">
            <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-primary-fixed-dim">
            <li><a className="hover:text-white transition-colors" href="#">Savings Management</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Loan Application</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Investment Portfolio</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Asset Acquisition</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-primary-fixed-dim mb-4">Stay updated with our community progress.</p>
          <div className="flex">
            <input className="bg-primary-container border-none rounded-l-lg p-3 text-white placeholder-on-primary-container/50 w-full focus:ring-1 focus:ring-secondary-fixed" placeholder="Email address" type="email"/>
            <button className="bg-secondary text-white px-4 rounded-r-lg font-bold">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-primary-fixed-dim">
        © 2024 Akure Rehoboth Cooperative Multipurpose Society Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary-container selection:text-on-secondary-container">
      <TopNavBar />
      <main className="pt-20">
        <Hero />
        <TrustIndicators />
        <Services />
        <About />
        <Process />
        <TestimonialsAndFAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
