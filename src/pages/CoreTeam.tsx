import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CoreTeam = () => {
  const facultyTeam = [
    {
      name: "Prof. (Dr.) Shailendra Kumar Tiwary",
      designation: "Director",
      image: "https://tulas.edu.in/_next/static/media/shailendra.d5366e63.png",
      social: { linkedin: "#", email: "rajesh@example.com" }
    },
    {
      name: "Dr. Deepak Nanda",
      designation: "Director of Pharmacy",
      image: "https://tulas.edu.in/_next/static/media/deepak.15eec6d4.png",
      social: { linkedin: "#", email: "anjali@example.com" }
    },
    {
      name: "Prof. Nishant Saxena",
      designation: "Add. Director",
      image: "https://tulas.edu.in/_next/static/media/nishant.215a395a.png",
      social: { linkedin: "#", email: "vikram@example.com" }
    },
    {
      name: "Dr. Vijay Kumar Upadhyay",
      designation: "Registrar",
      image: "https://tulas.edu.in/_next/static/media/vijay.8c670b0f.png",
      social: { linkedin: "#", email: "priya@example.com" }
    },
    {
      name: "Dr. Sunil Semwal",
      designation: "Dean R&D",
      image: "https://tulas.edu.in/_next/static/media/sunilSemwal.b84902f9.png",
      social: { linkedin: "#", email: "arun@example.com" }
    },
    
    {
      name: "Dr. Sanjay Sharma",
      designation: "Dean Student Welfare",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      social: { linkedin: "#", email: "meera@example.com" }
    },
    {
      name: "Mr. Tauseef Iqbal",
      designation: (
    <>
      Convener<br />Head of Department, JMC
    </>
  ),
      image: "https://tulas.edu.in/_next/static/media/TauseefIqbal.74ec6266.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Dr. Tripti Khanduri",
      designation: (
    <>
      Convener<br />Head of Department, Civil Engineering
    </>
  ),
      image: "https://tulas.edu.in/_next/static/media/Tripti.812510df.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Mr. Gaurav Singh",
      designation: "Creative and Multimedia Head",
      image: "/core/gaurav.jpeg",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Mr. Ashish Kumar",
      designation: "Chief Proctor",
      image: "https://tulas.edu.in/_next/static/media/AshishKumar.c0aeb601.webp",
      social: { linkedin: "#", email: "suresh@example.com" }
    },
    {
      name: "Dr. Sandeep Kumar",
      designation: "Head of the Department, Computer Science Engineering",
      image: "https://tulas.edu.in/_next/static/media/SandeepKumar.1b12d88b.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    
    {
      name: "Mr. Abhishek Chakravorty",
      designation: "Head of the Department, EEE/ECE ",
      image: "https://tulas.edu.in/_next/static/media/abhishekchakrovarty.8626209a.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Mr.Ankit Jain",
      designation: "Head of the Department, Mechanical Engineering",
      image: "https://tulas.edu.in/_next/static/media/AnkitJain.871b1985.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Mr. Mukesh Pathela",
      designation: "Head of the Department, Applied Sciences and Humanities",
      image: "https://tulas.edu.in/_next/static/media/MukeshPathela.4643d30b.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },

    {
      name: "Dr. Arghya Sarkar",
      designation: "Head of the Department, Graduate School of Business",
      image: "https://tulas.edu.in/_next/static/media/ArghyaSarkar.9aca3742.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Dr Priya Matta",
      designation: "Head of the Department, Computer Applications",
      image: "https://tulas.edu.in/_next/static/media/PriyaMatta.b7bfbb54.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },

    {
      name: "Dr. Sanjeev Kumar",
      designation: "Professor, Computer Applications",
      image: "https://tulas.edu.in/_next/static/media/SanjeevKumnar.2b7a4c0c.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },

    {
      name: "Dr. Sugam Gupta",
      designation: "Associate Professor, Applied Sciences and Humanities",
      image: "https://tulas.edu.in/_next/static/media/SugamGupta.32cf3e1e.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },

    {
      name: "Ms. Shaista Hasan",
      designation: "Assistant Professor, Applied Sciences and Humanities",
      image: "https://tulas.edu.in/_next/static/media/ShaistaHasan.c32aa85d.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },

    {
      name: "Ms. Deepika Rawat",
      designation: "Assistant Professor, Journalism & Mass Comm.",
      image: "https://tulas.edu.in/_next/static/media/deepkarawat.df9c11a2.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Mr. Neeraj Kotiyal",
      designation: "Assistant Professor, Journalism & Mass Comm.",
      image: "https://tulas.edu.in/_next/static/media/NeerajKotiyal.23802036.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Mr. Mohit Bisht",
      designation: "Assistant Professor, Civil Engineering",
      image: "https://tulas.edu.in/_next/static/media/MohitBisht.865c46d1.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Mr. Mohit Sharma",
      designation: "Assistant Professor, Civil Engineering",
      image: "https://tulas.edu.in/_next/static/media/mohitSharma.c0fa4d83.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Ms. Swati Yadav",
      designation: "Assistant Professor, Graduate School of Business",
      image: "https://tulas.edu.in/_next/static/media/SwatiYadav.d76ca863.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Mr. Emmanuel Gabriel",
      designation: "Assistant Professor, Graduate School of Business",
      image: "https://tulas.edu.in/_next/static/media/Emmanuel.573f837e.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },

    {
      name: "Mr. Rakesh Kumar",
      designation: "Assistant Professor, Computer Applications",
      image: "https://tulas.edu.in/_next/static/media/RakeshKumar.377ad3ff.webp",
      social: { linkedin: "#", email: "kavita@example.com" }
    },
    {
      name: "Mr. Saurabh Singh",
      designation: "Assistant Professor, Computer Science Engineering",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      social: { linkedin: "#", email: "kavita@example.com" }
    }
  ];

  const studentTeam = [
    {
      name: "Aditya Sharma",
      role: "Student Co-ordinator Utkrisht",
      badge: "Coordinator",
      image: "/core/Adi.jpg"
    },
    {
      name: "Sneha Sariyal",
      role: "Student Co-ordinator Utkrisht",
      badge: "Coordinator",
      image: "core/Sneha.jpg"
    },
    {
      name: "Raj Kumar Bid",
      role: "Student Co-ordinator Utkrisht",
      badge: "Coordinator",
      image: "/core/Raj.png"
    },
    {
      name: "Abhishek Maurya",
      role: "Tech Lead",
      badge: "Tech",
      image: "/core/Abhi.jpeg"
    },
    {
      name: "Dhruv Dogra",
      role: "Web Master",
      badge: "Tech",
      image: "/core/dhruv.jpeg"
    },
    {
      name: "Akash Kumar",
      role: "Web Master",
      badge: "Tech",
      image: "/core/akash.png"
    },
    {
      name: "Vaibhav Chauhan",
      role: "Web Master",
      badge: "Tech",
      image: "/core/vaibhav.jpg"
    },
    {
      name: "Devanshu Purohit",
      role: "Operations Lead",
      badge: "Operations",
      image: "/core/devanshu.jpeg"
    },
    {
      name: "Devashish Anand",
      role: "Event Management",
      badge: "Operations",
      image: "/core/dev.jpeg"
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
                      {/* <a
                        href={member.social.linkedin}
                        className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a> */}
                      {/* <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-muted hover:bg-secondary hover:text-secondary-foreground rounded-lg transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a> */}
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
