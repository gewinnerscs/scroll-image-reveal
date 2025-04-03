
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative section-height flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/a70e75dd-e472-4ec7-90f6-6f1b4072e64b.png" 
          alt="Geospatial data visualization" 
          className="object-cover w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 appear-on-scroll">
            The <span className="text-gradient">Geospatial</span>
            <br />
            Intelligence Platform
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/80 appear-on-scroll">
            built to <span className="font-semibold text-white">transform data</span> into <span className="font-semibold text-white">powerful insights</span>, 
            we unlock <span className="font-semibold text-white">deep insights</span> to drive <span className="font-semibold text-white">smarter
            decisions</span> faster and <span className="font-semibold text-white">with precision</span>
          </p>
          
          <button className="button-primary appear-on-scroll">
            LET'S PLAY WITH US <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
