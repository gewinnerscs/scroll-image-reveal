
import { BarChart3, Database, Search, Brain } from 'lucide-react';

export default function InsightsSection() {
  return (
    <section id="insights" className="relative section-height flex items-center bg-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/08ee1442-80e5-4e55-a948-e0e93bec23c3.png" 
          alt="Data insights visualization" 
          className="object-cover w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center appear-on-scroll">
            Where Our Insight Begin
          </h2>
          <p className="text-center text-xl mb-12 appear-on-scroll">
            We <span className="text-primary font-semibold">Gather</span> And <span className="text-primary font-semibold">Refine</span> Data From <span className="text-primary font-semibold">Diverse, Authoritative Sources</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card rounded-lg p-6 border border-border appear-on-scroll">
            <div className="mb-4 text-primary">
              <h3 className="text-xl font-semibold mb-2">Government & Economic Data</h3>
              <p className="text-white/70">Authoritative Sources For Policy And Development</p>
            </div>
          </div>
          
          <div className="space-y-4 appear-on-scroll">
            <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border">
              <div className="bg-primary/20 p-2 rounded-full">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <span>Census & Demographics</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border">
              <div className="bg-primary/20 p-2 rounded-full">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <span>Economic Indicators</span>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center appear-on-scroll">
            How We Turn <span className="text-primary">Raw Data</span> Into <span className="text-gradient">Intelligence</span>
          </h2>
          <p className="text-center mb-10 appear-on-scroll">
            We Transform Raw Data Into Precise, Actionable Geospatial Intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border appear-on-scroll">
            <div className="mb-4 flex items-center gap-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Web Scraping</h3>
            </div>
            <p className="text-white/70">Automated Extraction Of Dynamic, Real-World Information</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border appear-on-scroll">
            <div className="mb-4 flex items-center gap-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">ML & Advanced Analytics</h3>
            </div>
            <p className="text-white/70">Filling The Gaps, Predicting Trends, And Enhancing Accuracy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
