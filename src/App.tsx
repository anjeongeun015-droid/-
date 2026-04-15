/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Mail, Instagram, Linkedin, Twitter, Globe, Star, Quote } from "lucide-react";
import { useRef } from "react";

const SERVICES = [
  { id: "01", title: "Administrative Management", description: "체계적인 행정 관리 및 문서 자동화" },
  { id: "02", title: "Data Handling & Analysis", description: "엑셀 및 ERP를 활용한 정확한 데이터 분석" },
  { id: "03", title: "Procurement & Logistics", description: "신조선 기자재 발주 및 공급망 관리" },
  { id: "04", title: "Business Communication", description: "협력사 및 유관 부서 간 원활한 소통 조율" }
];

const PROJECTS = [
  {
    title: "신조 사무·구매 관리",
    category: "Office & Procurement",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "데이터 시각화 대시보드",
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "ERP 시스템 최적화",
    category: "System Management",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "협력사 관리 프로세스",
    category: "Communication",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  }
];

const AWARDS = [
  { year: "2025", title: "전산세무 2급", desc: "한국세무사회 주관 국가공인 자격 취득" },
  { year: "2024", title: "전산회계 1급", desc: "회계 실무 능력 및 이론 검증 완료" },
  { year: "2025", title: "ERP 정보관리사 MASTER", desc: "회계, 인사, 물류, 생산 전 모듈 마스터" },
  { year: "2025", title: "컴퓨터활용능력 2급", desc: "데이터 활용 및 스프레드시트 전문성" }
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <div className="bg-brutal-black text-white min-h-screen selection:bg-lime-accent selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <div className="text-xl font-display tracking-tighter uppercase">AhnJeongEun®</div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest">
          <a href="#about" className="hover:text-lime-accent transition-colors">About</a>
          <a href="#services" className="hover:text-lime-accent transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-lime-accent transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-lime-accent transition-colors">Contact</a>
        </div>
        <button className="bg-lime-accent text-black px-6 py-2 text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
          Let's Talk ↗
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-lime-accent/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Hey There! Ahn Jeong Eun Here</span>
            <div className="h-[1px] w-20 bg-gray-800" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12vw] md:text-[10vw] font-display leading-[0.85] uppercase tracking-tighter"
          >
            OFFICE <br />
            <span className="text-lime-accent flex items-center gap-4">
              PARTNER <Star className="w-[8vw] h-[8vw] fill-lime-accent animate-pulse" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 max-w-xl text-lg text-gray-400 leading-relaxed"
          >
            정확한 업무 조율로 조직의 흐름을 잇는 사무 전문가입니다. 
            체계적인 행정 관리와 데이터 핸들링을 통해 비즈니스의 효율을 극대화합니다.
          </motion.p>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-20 border-y border-white/10 overflow-hidden whitespace-nowrap">
        <motion.div style={{ x }} className="flex gap-20 text-[8vw] font-display uppercase leading-none opacity-20">
          <span>Office Specialist + Data Handling + Creative Admin + Efficiency Expert +</span>
          <span>Office Specialist + Data Handling + Creative Admin + Efficiency Expert +</span>
        </motion.div>
      </div>

      {/* About Section */}
      <section id="about" className="py-40 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-lime-accent/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
              alt="Ahn Jeong Eun"
              className="relative w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-lime-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-lime-accent">About Me</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display uppercase leading-none mb-12">
              Passion for <br /> Administrative <br /> Innovation
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              단순한 사무 보조를 넘어, 조직의 프로세스를 이해하고 최적화하는 전문가를 지향합니다. 
              유아교육학 전공을 통해 얻은 세심함과 소통 능력에, 전문 자격증을 더해 데이터 기반의 정확한 행정 서비스를 제공합니다.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              <div>
                <div className="text-3xl font-display text-lime-accent">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-2">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-display text-lime-accent">5+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-2">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-display text-lime-accent">MASTER</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-2">ERP Level</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 px-6 bg-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-lime-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-lime-accent">Expertise</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display uppercase leading-none">Expertise Solutions</h2>
            </div>
            <p className="max-w-xs text-sm text-gray-500 uppercase tracking-widest leading-loose">
              Providing high-level administrative support and data management for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-brutal-black p-12 hover:bg-lime-accent hover:text-black transition-all duration-500 group cursor-default">
                <div className="text-xs font-bold mb-8 group-hover:text-black/50">{service.id}.</div>
                <h3 className="text-3xl font-display uppercase mb-4">{service.title}</h3>
                <p className="text-gray-500 group-hover:text-black/70">{service.description}</p>
                <div className="mt-12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-40 px-6 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-6xl md:text-8xl font-display uppercase flex items-center gap-6">
            Portfolio <Star className="w-12 h-12 fill-lime-accent" />
          </h2>
          <button className="hidden md:block text-[11px] font-bold uppercase tracking-widest border-b border-lime-accent pb-1 hover:text-lime-accent transition-colors">
            View All Projects ↗
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-lime-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <ArrowUpRight className="text-lime-accent" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display uppercase group-hover:text-lime-accent transition-colors">{project.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-40 px-6 bg-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-lime-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-lime-accent">Certifications</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-20">Awards & Recognitions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {AWARDS.map((award, i) => (
              <div key={i} className="flex gap-8 items-start border-b border-white/10 pb-12 group">
                <div className="text-4xl font-display text-gray-700 group-hover:text-lime-accent transition-colors rotate-90 md:rotate-0">
                  {award.year}
                </div>
                <div>
                  <h3 className="text-2xl font-display uppercase mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10vw] font-display uppercase leading-none mb-8">LET'S TALK</h2>
          <a 
            href="mailto:anjeongeun015@gmail.com" 
            className="text-3xl md:text-6xl font-display text-lime-accent hover:text-white transition-colors break-all"
          >
            anjeongeun015@gmail.com
          </a>
          <div className="mt-20 flex justify-center gap-12">
            <button className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center group hover:border-lime-accent transition-colors">
              <div className="text-[10px] font-bold uppercase tracking-widest group-hover:text-lime-accent transition-colors">Contact ↗</div>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-display uppercase mb-8">AhnJeongEun®</div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              정확한 업무 조율로 조직의 흐름을 잇는 사무 전문가입니다. 
              비즈니스의 효율을 극대화하는 파트너가 되어 드립니다.
            </p>
            <div className="flex gap-6 mt-8">
              <Instagram size={18} className="text-gray-500 hover:text-lime-accent cursor-pointer" />
              <Linkedin size={18} className="text-gray-500 hover:text-lime-accent cursor-pointer" />
              <Twitter size={18} className="text-gray-500 hover:text-lime-accent cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-lime-accent">Home</a></li>
              <li><a href="#about" className="hover:text-lime-accent">About</a></li>
              <li><a href="#services" className="hover:text-lime-accent">Services</a></li>
              <li><a href="#portfolio" className="hover:text-lime-accent">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-lime-accent"
              />
              <button className="bg-lime-accent text-black px-4 py-2 text-[10px] font-bold uppercase">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          <p>© 2025 AhnJeongEun. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
        
        <div className="mt-20 overflow-hidden">
          <h2 className="text-[20vw] font-display uppercase leading-none text-white/5 whitespace-nowrap -mb-[4vw]">
            AhnJeongEun
          </h2>
        </div>
      </footer>
    </div>
  );
}
