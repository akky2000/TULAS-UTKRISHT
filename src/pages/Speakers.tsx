import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, Twitter } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief AI Scientist",
      company: "TechCorp India",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Leading AI researcher with 15+ years of experience in machine learning and neural networks.",
      topic: "The Future of AI in Healthcare",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Rahul Verma",
      role: "CTO",
      company: "StartupX",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Serial entrepreneur and tech innovator, building products that scale to millions of users.",
      topic: "Building Scalable Tech Startups",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Anita Desai",
      role: "Robotics Engineer",
      company: "RoboTech Labs",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Award-winning robotics engineer specializing in autonomous systems and human-robot interaction.",
      topic: "Robotics Revolution in Industry 4.0",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Vikram Singh",
      role: "Blockchain Architect",
      company: "CryptoVentures",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Blockchain expert helping enterprises adopt decentralized technologies and Web3 solutions.",
      topic: "Blockchain Beyond Cryptocurrency",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Meera Patel",
      role: "UX Design Lead",
      company: "DesignHub",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Design thinking advocate creating user-centered experiences for global products.",
      topic: "Human-Centered Design in Tech",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Arjun Nair",
      role: "Cybersecurity Expert",
      company: "SecureNet",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Ethical hacker and security consultant protecting organizations from cyber threats.",
      topic: "Cybersecurity in the Modern Age",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  return (
    <div className="min-h-screen grid-bg">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Keynote Speakers
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn from industry leaders and innovators shaping the future of technology
            </p>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.name}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-1">{speaker.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{speaker.company}</p>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {speaker.bio}
                  </p>

                  <div className="bg-muted/30 rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Talk Topic:</p>
                    <p className="text-sm font-semibold">{speaker.topic}</p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={speaker.social.linkedin}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors text-sm"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={speaker.social.twitter}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-muted hover:bg-secondary hover:text-secondary-foreground rounded-lg transition-colors text-sm"
                      aria-label="Twitter"
                    >
                      <Twitter size={16} />
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Speakers;
