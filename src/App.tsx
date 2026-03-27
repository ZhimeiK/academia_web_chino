import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Video, 
  Users, 
  PenTool, 
  CheckCircle, 
  ChevronDown, 
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Globe
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-orient-dark/80 backdrop-blur-md border-b border-antique-gold/20 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-antique-gold font-display text-3xl">自主学习</span>
        <span className="text-antique-gold font-serif tracking-widest text-xl hidden sm:block">ZIZHU XUEXI</span>
      </div>
      <div className="hidden md:flex gap-8 font-serif text-sm uppercase tracking-widest">
        <a href="#servicios" className="hover:text-antique-gold transition-colors">Servicios</a>
        <a href="#hsk" className="hover:text-antique-gold transition-colors">Niveles HSK</a>
        <a href="#faq" className="hover:text-antique-gold transition-colors">FAQ</a>
        <a href="https://wa.me/51913036321" className="text-antique-gold border border-antique-gold px-4 py-1 hover:bg-antique-gold hover:text-orient-dark transition-all">Contacto</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale contrast-125" />
      <div className="absolute inset-0 bg-orient-dark/60" />
      <div className="absolute inset-0 chinese-lattice" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block bg-imperial-red text-orient-cream px-4 py-1 rounded-full text-xs font-serif tracking-widest mb-6 animate-pulse">
          🎁 SESIÓN DE PRUEBA GRATIS
        </span>
        <h1 className="text-5xl md:text-8xl font-display mb-4 text-antique-gold">
          学中文，改变你的mundo
        </h1>
        <p className="text-xl md:text-2xl font-serif text-orient-cream/80 mb-8 tracking-wide">
          Clases virtuales de chino mandarín desde cero hasta HSK 6
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/51913036321"
            className="bg-antique-gold text-orient-dark px-8 py-4 font-serif font-bold text-lg hover:scale-105 transition-transform gold-glow shadow-lg"
          >
            RESERVA TU CLASE GRATIS
          </a>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="text-antique-gold w-8 h-8" />
    </div>
  </section>
);

const TrustBar = () => (
  <div className="bg-orient-cream text-orient-dark py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div className="flex flex-col items-center gap-2">
        <Globe className="text-imperial-red w-8 h-8" />
        <span className="font-serif font-bold text-xl">HSK 1–6</span>
        <span className="text-xs uppercase tracking-widest opacity-70">Niveles Oficiales</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Video className="text-imperial-red w-8 h-8" />
        <span className="font-serif font-bold text-xl">Clases Grabadas</span>
        <span className="text-xs uppercase tracking-widest opacity-70">Acceso 24/7</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <BookOpen className="text-imperial-red w-8 h-8" />
        <span className="font-serif font-bold text-xl">Material Gratis</span>
        <span className="text-xs uppercase tracking-widest opacity-70">PDFs y Guías</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Users className="text-imperial-red w-8 h-8" />
        <span className="font-serif font-bold text-xl">Atención Personal</span>
        <span className="text-xs uppercase tracking-widest opacity-70">Soporte Directo</span>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-orient-dark border border-antique-gold/30 p-8 hover:border-antique-gold transition-all group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-16 h-16 bg-antique-gold/5 -mr-8 -mt-8 rounded-full group-hover:bg-antique-gold/10 transition-colors" />
    <Icon className="text-antique-gold w-12 h-12 mb-6" />
    <h3 className="text-2xl font-serif mb-4 text-antique-gold">{title}</h3>
    <p className="text-orient-cream/70 leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => (
  <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-imperial-red font-display text-4xl block mb-2">我们的服务</span>
      <h2 className="text-4xl md:text-5xl font-serif text-antique-gold uppercase tracking-widest">Nuestros Servicios</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ServiceCard 
        icon={BookOpen} 
        title="Material Autodidacta" 
        description="Guías completas y recursos descargables para estudiar a tu propio ritmo."
      />
      <ServiceCard 
        icon={Video} 
        title="Clases Grabadas" 
        description="Acceso libre a nuestra biblioteca de lecciones en video de alta calidad."
      />
      <ServiceCard 
        icon={Users} 
        title="Clases en Vivo" 
        description="Sesiones interactivas desde HSK 1 hasta HSK 6 con profesores expertos."
      />
      <ServiceCard 
        icon={PenTool} 
        title="Práctica de Hanzi" 
        description="Plantillas y ejercicios de gramática para perfeccionar tu escritura."
      />
    </div>
  </section>
);

const WhyUs = () => (
  <section className="bg-orient-cream text-orient-dark py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
      <div className="space-y-4">
        <div className="w-16 h-16 bg-imperial-red rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <CheckCircle className="text-orient-cream w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold">Aprende a tu ritmo</h3>
        <p className="opacity-80">Flexibilidad total para adaptar el estudio a tu vida diaria.</p>
      </div>
      <div className="space-y-4">
        <div className="w-16 h-16 bg-imperial-red rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <CheckCircle className="text-orient-cream w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold">Contenido en español</h3>
        <p className="opacity-80">Explicaciones claras diseñadas específicamente para hispanohablantes.</p>
      </div>
      <div className="space-y-4">
        <div className="w-16 h-16 bg-imperial-red rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <CheckCircle className="text-orient-cream w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold">Desde básico a avanzado</h3>
        <p className="opacity-80">Un camino estructurado desde tus primeras palabras hasta la fluidez.</p>
      </div>
    </div>
  </section>
);

const HSKRoadmap = () => {
  const levels = [
    { level: 'HSK 1', color: 'bg-imperial-red', desc: 'Básico inicial: 150 palabras' },
    { level: 'HSK 2', color: 'bg-red-700', desc: 'Básico elemental: 300 palabras' },
    { level: 'HSK 3', color: 'bg-red-600', desc: 'Intermedio bajo: 600 palabras' },
    { level: 'HSK 4', color: 'bg-orange-700', desc: 'Intermedio alto: 1200 palabras' },
    { level: 'HSK 5', color: 'bg-orange-600', desc: 'Avanzado: 2500 palabras' },
    { level: 'HSK 6', color: 'bg-antique-gold', desc: 'Maestría: 5000+ palabras' },
  ];

  return (
    <section id="hsk" className="py-24 px-6 bg-orient-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-antique-gold uppercase tracking-widest mb-4">Mapa de Ruta HSK</h2>
          <div className="w-24 h-1 bg-antique-gold mx-auto" />
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-antique-gold/20 -translate-y-1/2 hidden md:block" />
          <div className="grid md:grid-cols-6 gap-8 relative z-10">
            {levels.map((l, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 ${l.color} rounded-full flex items-center justify-center text-orient-cream font-bold text-xl mb-6 shadow-xl group-hover:scale-110 transition-transform border-4 border-orient-dark`}>
                  {i + 1}
                </div>
                <h4 className="text-xl font-serif text-antique-gold mb-2">{l.level}</h4>
                <p className="text-sm text-orient-cream/60">{l.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="bg-imperial-red py-20 px-6 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/chinese-lantern.png')]" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-display text-antique-gold mb-6">准备好了吗?</h2>
      <p className="text-2xl font-serif text-orient-cream mb-10 tracking-widest">¿ESTÁS LISTO PARA EMPEZAR?</p>
      <a 
        href="https://wa.me/51913036321"
        className="inline-flex items-center gap-3 bg-orient-dark text-antique-gold px-10 py-5 font-serif font-bold text-xl hover:bg-orient-cream hover:text-orient-dark transition-all shadow-2xl"
      >
        <MessageCircle className="w-6 h-6" />
        QUIERO MI CLASE GRATIS
      </a>
    </div>
  </section>
);

const Payments = () => (
  <section className="py-16 px-6 bg-orient-dark/50">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="text-sm font-serif uppercase tracking-[0.3em] text-antique-gold/50 mb-8">Métodos de Pago</h3>
      <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
        <div className="bg-orient-cream/10 px-6 py-3 rounded border border-antique-gold/20 font-bold text-antique-gold">YAPE</div>
        <div className="bg-orient-cream/10 px-6 py-3 rounded border border-antique-gold/20 font-bold text-antique-gold">PAYPAL</div>
        <div className="bg-orient-cream/10 px-6 py-3 rounded border border-antique-gold/20 font-bold text-antique-gold">EFECTIVO</div>
        <div className="bg-orient-cream/10 px-6 py-3 rounded border border-antique-gold/20 font-bold text-antique-gold">PRO VERSION</div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "¿Necesito conocimientos previos?", a: "No, tenemos cursos diseñados específicamente para principiantes absolutos." },
    { q: "¿Cómo son las clases en vivo?", a: "Son sesiones interactivas vía Zoom con grupos reducidos para garantizar tu aprendizaje." },
    { q: "¿El material es gratuito?", a: "Ofrecemos una gran cantidad de material gratuito, y guías premium para nuestros alumnos matriculados." },
    { q: "¿Cuánto dura cada nivel HSK?", a: "Depende de tu ritmo, pero en promedio cada nivel toma entre 3 a 6 meses." },
    { q: "¿Hay certificación?", a: "Te preparamos para los exámenes oficiales HSK que otorgan la certificación internacional de China." },
  ];

  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-serif text-antique-gold text-center mb-12 uppercase tracking-widest">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="group bg-orient-dark border border-antique-gold/20 p-6 cursor-pointer hover:border-antique-gold/50 transition-all">
            <summary className="flex justify-between items-center font-serif text-lg text-antique-gold list-none">
              {f.q}
              <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-4 text-orient-cream/70 leading-relaxed border-t border-antique-gold/10 pt-4">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-orient-dark border-t border-antique-gold/20 py-20 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="text-antique-gold font-display text-4xl">自主学习</span>
          <span className="text-antique-gold font-serif text-xl">ZIZHU XUEXI</span>
        </div>
        <p className="text-orient-cream/50 text-sm leading-relaxed">
          Tu puerta de entrada a la cultura y el idioma chino. Excelencia académica con alma oriental.
        </p>
      </div>
      
      <div className="space-y-6">
        <h4 className="text-antique-gold font-serif uppercase tracking-widest">Contacto</h4>
        <p className="text-orient-cream/70 flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-antique-gold" />
          913036321
        </p>
        <div className="flex gap-4">
          <Instagram className="w-5 h-5 text-antique-gold hover:scale-110 transition-transform cursor-pointer" />
          <Facebook className="w-5 h-5 text-antique-gold hover:scale-110 transition-transform cursor-pointer" />
          <Twitter className="w-5 h-5 text-antique-gold hover:scale-110 transition-transform cursor-pointer" />
        </div>
      </div>
      
      <div className="space-y-6 text-right md:text-left">
        <h4 className="text-antique-gold font-serif uppercase tracking-widest">Filosofía</h4>
        <p className="text-orient-cream/70 italic font-serif">
          "千里之行，始于足下"
        </p>
        <p className="text-xs text-orient-cream/40">
          Un viaje de mil millas comienza con un solo paso.
        </p>
      </div>
    </div>
    
    <div className="text-center pt-8 border-t border-antique-gold/10 text-orient-cream/30 text-xs">
      © 2026 ZIZHU XUEXI. Todos los derechos reservados. | Diseñado con ❤️ por Prompt Maestro
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-antique-gold selection:text-orient-dark">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <HSKRoadmap />
      <CTASection />
      <Payments />
      <FAQ />
      <Footer />
      
      {/* SVG Filter for Ink Effect */}
      <svg className="hidden">
        <filter id="ink-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
        </filter>
      </svg>
    </div>
  );
}
