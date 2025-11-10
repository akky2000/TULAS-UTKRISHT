import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Users, Target, Award, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To create a platform that fosters innovation, collaboration, and technical excellence among students and professionals."
    },
    {
      icon: Rocket,
      title: "Our Vision",
      description: "To be the premier tech fest that inspires the next generation of innovators and technology leaders."
    },
    {
      icon: Award,
      title: "Our Legacy",
      description: "Over 10 years of excellence in organizing India's most prestigious student-run technical festival."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "A vibrant ecosystem of 50,000+ alumni, participants, and tech enthusiasts from across the globe."
    }
  ];

  return (
    <div className="min-h-screen grid-bg">
      <SEO 
        title="About Us - Utkrisht 2025 | India's Premier Tech Fest"
        description="Learn about Utkrisht 2025 - Founded in 2015, now India's largest technical festival with 5000+ participants from 200+ colleges. Discover our mission, vision, and 10+ years of excellence."
        keywords="about utkrisht, tech fest history, student tech festival, TULAS institute, technical excellence, innovation platform"
      />
      <Navbar />
      
      <main className="pt-32 pb-16 relative">
        {/* Background effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-primary/20 backdrop-blur-md border-2 border-primary/50 rounded-full text-sm font-tech font-bold tracking-widest text-primary shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                WHO WE ARE
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-black mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent tracking-wider uppercase">
              About Utkrisht
            </h1>
            <p className="text-2xl text-muted-foreground font-light">
              From Heritage to Innovation, Utkrisht celebrates a journey where tradition fuels progress. Rooted in excellence, we continue to inspire creativity, collaboration, and technological advancement for a smarter tomorrow.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full" />
          </div>

          {/* Story */}
<div className="max-w-6xl mx-auto mb-20">
  <div className="glass-card glass-hover rounded-xl p-10 md:p-12 animate-slide-up border-2 border-primary/30 shadow-[0_0_40px_rgba(234,179,8,0.2)] relative grid md:grid-cols-2 gap-12 items-center">
    {/* Corner decorations */}
    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-secondary" />
    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-secondary" />
    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />
    
    {/* Left side - Text */}
    <div className="text-left space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
      <h2 className="text-4xl font-display font-bold mb-6 text-primary uppercase tracking-wide">Our Story</h2>
      <p>
        Established in 2015, Utkrisht has grown from a modest college fest into one of India’s premier technical festivals, inspiring innovation, collaboration, and creativity among young minds. Organized by Tula’s Institute, Utkrisht serves as a national platform for students to explore emerging technologies, demonstrate their technical acumen, and connect with industry experts and innovators.

Over the years, Utkrisht has become a symbol of excellence and innovation, featuring a wide spectrum of technical competitions, startup challenges, hackathons, workshops, and expert-led sessions that empower participants to think beyond boundaries.

The 2024 edition of Utkrisht witnessed an overwhelming participation of over 2,700 students across 40+ diverse events, marking an impressive 97% overall engagement. Building on that success, Utkrisht 2025 has already attracted 1,500+ registrations ahead of its grand celebration scheduled for November 13–14, 2025 — setting new benchmarks of enthusiasm and participation every year.

Driven by the vision of fostering technology, teamwork, and transformation, Utkrisht continues to evolve as a dynamic hub where creativity meets innovation — truly embodying the spirit of India’s next generation of tech leaders.   </p>
     
    </div>

    {/* Right side - Image */}
    <div className="flex justify-center md:justify-end">
      <picture>
        <source srcSet="/images/Our-S.jpeg" type="image/webp" />
        <img 
          src="/images/Our-S.jpeg" 
          alt="Utkrisht Story" 
          className="rounded-xl shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:scale-105 transition-transform duration-500"
        />
      </picture>
    </div>
  </div>
</div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-5xl font-display font-black text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">What Drives Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="glass-card rounded-xl p-8 hover:border-primary border-2 border-primary/30 transition-all duration-500 animate-fade-in group shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:scale-105 relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary transition-all duration-500 group-hover:scale-150" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary transition-all duration-500 group-hover:scale-150" />
                  
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="text-primary group-hover:text-secondary transition-colors" size={32} />
                  </div>
                  <h3 className="text-2xl font-tech font-bold mb-4 text-foreground uppercase tracking-wide">{value.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="glass-card rounded-xl p-12 md:p-16 border-2 border-primary/30 shadow-[0_0_50px_rgba(234,179,8,0.2)] relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            
            <h2 className="text-5xl font-display font-black text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider relative z-10">
              Utkrisht by Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
              {[
                { number: "10+", label: "Years of Excellence" },
                { number: "5000+", label: "Annual Participants" },
                { number: "200+", label: "Colleges Represented" },
                { number: "₹5L+", label: "Prize Money" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-slide-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl md:text-6xl font-display font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-tech tracking-wide uppercase text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Theme 2025 */}
          <div className="max-w-4xl mx-auto mt-24">
            <div className="glass-card rounded-xl p-10 md:p-12 border-2 border-secondary/30 shadow-[0_0_40px_rgba(6,182,212,0.2)] relative animate-fade-in">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-secondary" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-secondary" />
              
              <h2 className="text-4xl font-display font-bold mb-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent uppercase tracking-wide">
              Theme 2025: WHERE HERITAGE MEETS INNOVATION
              </h2>
              <p className="text-muted-foreground font-light text-lg leading-relaxed mb-6">
              This year's Utkrisht is centered around the theme <span className="text-secondary font-tech font-bold">"HERITAGE MEETS INNOVATION"</span> – celebrating the harmony between timeless traditions and cutting-edge technology. It explores how modern advancements like <span className="text-primary font-semibold">Artificial Intelligence</span>, <span className="text-secondary font-semibold">Blockchain</span>, <span className="text-primary font-semibold">IoT</span>, and <span className="text-secondary font-semibold">Sustainable Tech</span> can blend with India’s rich cultural and scientific legacy to inspire a future rooted in both wisdom and innovation.

              </p>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Through our carefully curated events, workshops, and speaker sessions, we aim to equip participants 
                with the knowledge and skills needed to thrive in an increasingly digital future while addressing 
                global challenges through innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
