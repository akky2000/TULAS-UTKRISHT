import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";

const Sponsors = () => {
  const platinumSponsors = [
    { name: "TechCorp Global", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop", website: "#" },
    { name: "InnovateTech", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=200&fit=crop", website: "#" }
  ];

  const goldSponsors = [
    { name: "CodeMasters", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=150&fit=crop", website: "#" },
    { name: "DataStream Solutions", logo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=150&fit=crop", website: "#" },
    { name: "CloudNine Systems", logo: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=300&h=150&fit=crop", website: "#" }
  ];

  const silverSponsors = [
    { name: "StartupHub", website: "#" },
    { name: "TechVentures", website: "#" },
    { name: "ByteForce", website: "#" },
    { name: "QuantumLeap", website: "#" },
    { name: "NexGen Labs", website: "#" },
    { name: "DevOps Pro", website: "#" }
  ];

  return (
    <div className="min-h-screen grid-bg">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Sponsors
            </h1>
            <p className="text-xl text-muted-foreground">
              Thank you to our amazing sponsors who make Utkrisht 2025 possible
            </p>
          </div>

          {/* Platinum Sponsors */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Platinum Sponsors</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {platinumSponsors.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className="bg-card border-2 border-primary rounded-lg p-8 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{sponsor.name}</h3>
                  <a
                    href={sponsor.website}
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Visit Website <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Gold Sponsors</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {goldSponsors.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className="bg-card border border-secondary rounded-lg p-6 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{sponsor.name}</h3>
                  <a
                    href={sponsor.website}
                    className="inline-flex items-center gap-2 text-secondary hover:underline text-sm"
                  >
                    Visit Website <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Silver Sponsors</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-muted-foreground to-foreground mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {silverSponsors.map((sponsor, index) => (
                <a
                  key={sponsor.name}
                  href={sponsor.website}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-all duration-300 flex items-center justify-center text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {sponsor.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Become a Sponsor CTA */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
              <p className="text-muted-foreground mb-6">
                Join us in empowering the next generation of innovators. Partner with Utkrisht 2025 
                and get your brand in front of 5000+ students and tech enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="gap-2">
                  <Mail size={20} />
                  Contact for Sponsorship
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
