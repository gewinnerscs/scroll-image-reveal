
import { Globe, LineChart, Leaf, Building2 } from 'lucide-react';

export default function ImpactSection() {
  return (
    <section id="impact" className="relative section-height flex items-center bg-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/dd66df45-21a6-451b-8d3f-0e12543818f3.png" 
          alt="Real-world impact visualization" 
          className="object-cover w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 appear-on-scroll">
            <span className="text-gradient">Real-World</span> Impact
          </h2>
          <p className="text-primary text-2xl font-semibold mb-12 appear-on-scroll">
            Where Our Insights Matter
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg overflow-hidden appear-on-scroll">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Retail planning" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Retail & Expansion Planning</h3>
                  <p className="text-white/70 text-sm">Find The Perfect Location Before Your Competitors Do</p>
                </div>
                <div className="bg-primary/20 p-2 rounded-full">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-white/80 mb-6 text-sm">
                Open Stores Where Customers Already Go, Reduce Expansion Risks, And Maximize Profitability From Day One.
              </p>
              <button className="button-secondary text-sm">
                Explore More
              </button>
            </div>
          </div>
          
          <div className="bg-card rounded-lg overflow-hidden appear-on-scroll">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Agriculture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Agriculture & Agribusiness</h3>
                  <p className="text-white/70 text-sm">Maximize Yields, Minimize Risks With Smart Farming</p>
                </div>
                <div className="bg-primary/20 p-2 rounded-full">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-white/80 mb-6 text-sm">
                Increase Farm Productivity, Reduce Resource Waste, And Ensure Food Security With Precision Agriculture.
              </p>
              <button className="button-secondary text-sm">
                Explore More
              </button>
            </div>
          </div>
          
          <div className="bg-card rounded-lg overflow-hidden appear-on-scroll">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Climate" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Climate & Environmental Risk Assessment</h3>
                  <p className="text-white/70 text-sm">Predict & Prevent Environmental Disasters</p>
                </div>
                <div className="bg-primary/20 p-2 rounded-full">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-white/80 mb-6 text-sm">
                Mitigate Risks, Improve Disaster Preparedness, And Enable Sustainable Development Decisions.
              </p>
              <button className="button-secondary text-sm">
                Explore More
              </button>
            </div>
          </div>
          
          <div className="bg-card rounded-lg overflow-hidden appear-on-scroll">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Finance" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Finance & Investment Decisions</h3>
                  <p className="text-white/70 text-sm">See Beyond The Numbers, Map Your Next Big Opportunity</p>
                </div>
                <div className="bg-primary/20 p-2 rounded-full">
                  <LineChart className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-white/80 mb-6 text-sm">
                Make Smarter Investments With Hyper-Local Insights That Traditional Economic Data Can't Provide.
              </p>
              <button className="button-secondary text-sm">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
