import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CoreTeam = () => {
  const facultyTeam = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Fest Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      social: { linkedin: "#", email: "rajesh@example.com" }
    },
    {
      name: "Prof. Anjali Mehta",
      designation: "Head of Department",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      social: { linkedin: "#", email: "anjali@example.com" }
    },
    {
      name: "Dr. Vikram Singh",
      designation: "Technical Advisor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      social: { linkedin: "#", email: "vikram@example.com" }
    },
    {
      name: "Prof. Priya Sharma",
      designation: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      social: { linkedin: "#", email: "priya@example.com" }
    },
    {
      name: "Dr. Arun Patel",
      designation: "Faculty Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      social: { linkedin: "#", email: "arun@example.com" }
    },
    {
      name: "Prof. Meera Reddy",
      designation: "Sponsorship Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      social: { linkedin: "#", email: "meera@example.com" }
    },
    {
      name: "Dr. Suresh Iyer",
      designation: "Operations Head",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      social: { linkedin: "#", email: "suresh@example.com" }
    },
    {
      name: "Prof. Kavita Desai",
      designation: "Hospitality Coordinator",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      social: { linkedin: "#", email: "kavita@example.com" }
    }
  ];

  const studentTeam = [
    {
      name: "Arjun Malhotra",
      role: "Overall Coordinator",
      badge: "Management",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    {
      name: "Sneha Kapoor",
      role: "Technical Head",
      badge: "Tech",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Rohan Verma",
      role: "Design Head",
      badge: "Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Priya Nair",
      role: "PR & Marketing Lead",
      badge: "PR",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    },
    {
      name: "Karan Joshi",
      role: "Events Manager",
      badge: "Events",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Ananya Sharma",
      role: "Content Lead",
      badge: "Content",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Aditya Singh",
      role: "Sponsorship Manager",
      badge: "Sponsorship",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Isha Gupta",
      role: "Social Media Manager",
      badge: "PR",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop"
    },
    {
      name: "Varun Mehta",
      role: "Workshop Coordinator",
      badge: "Events",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    },
    {
      name: "Neha Reddy",
      role: "Logistics Head",
      badge: "Operations",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    },
    {
      name: "Rahul Patel",
      role: "Web Development Lead",
      badge: "Tech",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    {
      name: "Divya Kumar",
      role: "Hospitality Manager",
      badge: "Operations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Amit Desai",
      role: "Registration Head",
      badge: "Management",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Pooja Iyer",
      role: "Creative Director",
      badge: "Design",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Siddharth Rao",
      role: "Security Coordinator",
      badge: "Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ];

  const badgeColors: Record<string, string> = {
    Management: "bg-primary/20 text-primary border-primary/30",
    Tech: "bg-secondary/20 text-secondary border-secondary/30",
    Design: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    PR: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Events: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Content: "bg-green-500/20 text-green-400 border-green-500/30",
    Sponsorship: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Operations: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  };

  return (
    <div className="min-h-screen grid-bg">
      <SEO 
        title="Core Team - Utkrisht 2025 | Meet Our Organizers"
        description="Meet the dedicated team behind Utkrisht 2025. Faculty coordinators, student organizers, and passionate volunteers making this tech fest a success."
        keywords="core team, organizing committee, fest coordinators, student organizers, event management team"
      />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Meet the Core Team Behind Utkrisht 2025
            </h1>
            <p className="text-xl text-muted-foreground">
              Passionate individuals working together to create an unforgettable experience
            </p>
          </div>

          {/* Faculty Core Team */}
          <section className="mb-20">
            <div className="relative rounded-2xl p-8 mb-12" style={{ background: 'linear-gradient(135deg, hsl(263 70% 50% / 0.05), hsl(193 100% 50% / 0.05))' }}>
              <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
                Faculty Core Team
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {facultyTeam.map((member, index) => (
                  <div
                    key={member.name}
                    className="group bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-semibold mb-4">{member.designation}</p>
                    
                    <div className="flex gap-2 justify-center">
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-muted hover:bg-secondary hover:text-secondary-foreground rounded-lg transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Student Core Team */}
          <section className="mb-16">
            <div className="relative rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, hsl(193 100% 50% / 0.05), hsl(263 70% 50% / 0.05))' }}>
              <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
                Student Core Team
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {studentTeam.map((member, index) => (
                  <div
                    key={member.name}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:border-secondary transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-fade-in"
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-4">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-2 ${badgeColors[member.badge] || badgeColors.Management}`}>
                        {member.badge}
                      </div>
                      <h3 className="text-base font-bold mb-1">{member.name}</h3>
                      <p className="text-muted-foreground text-sm">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Back to Home Button */}
          <div className="text-center animate-fade-in">
            <Link to="/">
              <Button variant="hero" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoreTeam;
