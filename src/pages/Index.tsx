import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, Trophy, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import FAQ from "@/components/FAQ";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import hackathonPoster from "@/assets/events/hackathon.jpg";
import roboWarsPoster from "@/assets/events/robo-wars.jpg";
import aiWorkshopPoster from "@/assets/events/ai-workshop.jpg";
import utkrishtPoster from "@/assets/events/temp.jpg";

const EVENT_DATE = new Date('2025-11-14T09:00:00');

const Index = () => {
  const featuredEvents = [
  {
    id: "bgmi-tournament",
    title: "THE BGMI CHALLANGE",
    category: "CENTERSTAGE",
    date: "November 13, 2025",
    participants: "Teams of 2-4",
    poster: utkrishtPoster,
    prize: "Exciting Rewards",
    description: " Compete in our thrilling BGMI Tournament and showcase your gaming skills to claim victory."
  },

  {
    id: "robo-wars",
    title: "ARMAGEDDON - Robo Wars",
    category: "CENTERSTAGE",
    date: "November 14, 2025",
    participants: "Teams of 4",
    poster: roboWarsPoster,
    prize: "TBA",
    description: "Build and battle robots in an arena to outlast and outfight your opponents."
  },
  {
    id: "investors-den",
    title: "INVESTORS DEN",
    category: "CENTERSTAGE",
    date: "November 13, 2025",
    participants: "Teams of 4",
    poster: utkrishtPoster,
    prize: "TBA",
    description: "Design and program autonomous robot to play soccer against competing teams."
  }
  
];


  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="UTKRISHT 2K25 - Tula's Institute"
        description="UTKRISHT 2K25 - One of the biggest technical events in the history of Tula's Institute."
        keywords="utkrish, tula's institute, technical fest, hackathon, robo wars, ai workshop"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60" />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
   <img
  src="/images/FINAL UTKRISHT 2025.gif"
  alt="UTKRISHT 2K25 Logo"
  className="mx-auto mb-6 w-full max-w-6xl h-auto"
/>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The annual technical fest of Tula's Institute - Where Innovation Meets Excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 text-lg rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <Link to="/events">
                Explore Events <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white/10 font-bold py-6 px-8 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Countdown Section - Moved to appear before Featured Events */}
      <section id="countdown" className="py-20 bg-gradient-to-b from-background via-background/95 to-muted/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent tracking-wider">
            Event Starts In
          </h2>
          <Countdown targetDate={EVENT_DATE} />
          <p className="mt-6 text-xl text-muted-foreground">
            November 13-14, 2025 | 9:00 AM Onwards
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section id="events" className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background/95 to-background/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent tracking-wider uppercase">
              Featured Events
            </h2>
            <p className="text-xl text-muted-foreground font-light">Explore our most exciting competitions and workshops</p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredEvents.map((event, index) => (
              <div
                key={event.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events">
              <Button 
                variant="outline" 
                size="lg"
                className="font-tech font-bold tracking-widest px-8 py-6 text-lg border-2 border-primary/50 hover:border-primary hover:bg-primary/20 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all duration-300"
              >
                VIEW ALL EVENTS <ArrowRight className="ml-3" size={22} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Index;
