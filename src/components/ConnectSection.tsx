
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

export default function ConnectSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you soon.",
    });
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      jobTitle: '',
      phone: '',
      message: ''
    });
  };
  
  return (
    <section id="connect" className="relative min-h-screen flex items-center bg-background py-20">
      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 appear-on-scroll">
            <span className="text-primary">Let's Connect</span> And Unlock Geospatial Insights
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="appear-on-scroll">
            <div className="mb-8">
              <p className="text-lg mb-6 italic text-white/80">
                "Every Decision Starts With The Right Data. Whether You're Planning Your Next
                Expansion, Optimizing Networks, Mitigating Risks, Or Transforming Agriculture, We're
                Here To Guide You."
              </p>
              
              <p className="text-lg mb-10 text-white/80">
                We'd Love To Hear Your Vision And Explore How Geospatial Intelligence Can Empower
                Your Decisions.
              </p>
              
              <div className="border-t border-border pt-8 mb-8"></div>
              
              <h3 className="text-xl font-semibold mb-6">
                Reach Out, And Let's Create Something Impactful Together.
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p>Contact@Geospatial360.Id</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Phone</p>
                  <p>+62-8356-1694</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Location</p>
                  <p>Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border appear-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground focus:border-primary outline-none"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground focus:border-primary outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground focus:border-primary outline-none"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground focus:border-primary outline-none"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground focus:border-primary outline-none"
                  />
                </div>
              </div>
              
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message
Tell Us More About Your Needs"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground focus:border-primary outline-none resize-none"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="button-primary">
                Send <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
