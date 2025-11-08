import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import hackathonPoster from "@/assets/events/hackathon.jpg";
import roboWarsPoster from "@/assets/events/robo-wars.jpg";
import aiWorkshopPoster from "@/assets/events/ai-workshop.jpg";
import webDevPoster from "@/assets/events/web-dev.jpg";
import droneRacePoster from "@/assets/events/drone-race.jpg";
import uiUxPoster from "@/assets/events/ui-ux.jpg";
import blockchainPoster from "@/assets/events/blockchain.jpg";
import iotPoster from "@/assets/events/iot.jpg";
import debugWarsPoster from "@/assets/events/debug-wars.jpg";
import robowarPoster from "@/assets/events/R-w.jpeg"
import icPoster from "@/assets/events/ic.jpg"
import docterPoster from "@/assets/events/doctor.jpg"


const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "CIVIL", "ECE", "CENTERSTAGE", "AGRI","MECHANICAL"];

  const events = [
    {
      id: "cad-mad",
      title: "CAD MAD",
      category: "CIVIL",
      date: "November 11, 2025",
      participants: "Teams of 3",
      prize: "Exciting Rewards",
      description: " Showcase your AutoCAD skills by designing innovative structures and models.",
      poster: hackathonPoster
    },
    {
      id: "robo-soccer",
      title: "Super Strikers - Robo Soccer ",
      category: "ECE",
      date: "November 13, 2025",
      participants: "Teams of 4",
      prize: "TBA",
      description: "Design and program autonomous robot to play soccer against competing teams.",
      poster: roboWarsPoster
    },
    {
  id: "nutritive-garden",
  title: "Nutritive Kitchen Garden",
  category: "AGRI",
  date: "November 13, 2025",
  time: "11:00 AM – 3:00 PM",
  participants: "Open to all undergraduate students",
  prize: "Certificates",
  description:
    " Learn the art of cultivating a nutritious kitchen garden with hands-on experience in planting, nurturing, and harvesting a variety of vegetables and herbs. Discover sustainable gardening practices that promote health and wellness.",
  poster: iotPoster
},
    {
      id: "robo-wars",
      title: "ARMAGEDDON - Robo Wars",
      category: "ECE",
      date: "November 14, 2025",
      participants: "Teams of 4",
      prize: "TBA",
      description: "Build and battle robots in an arena to outlast and outfight your opponents.",
      poster: robowarPoster
    },
    {
      id: "jenga-war",
      title: "JENGA WAR",
      category: "CIVIL",
      date: "November 13-14, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Create a stunning, functional website in just 6 hours. Show off your frontend and backend skills.",
      poster: webDevPoster
    },
    {
      id: "tool-test",
      title: "Tech Tools Test",
      category: "ECE",
      date: "November 14, 2025",
      participants: "Team of 2",
      prize: "TBA",
      description: "Test your technical knowledge on essential electrical and electronics instruments in this exciting competition.",
      poster: droneRacePoster
    },
     {
    id: "trading",
    title: "INVESTORS DEN",
    category: "CENTERSTAGE",
    date: "November 13, 2025",
    participants: "Teams of 4",
    poster: roboWarsPoster,
    prize: "TBA",
    description: "Design and program autonomous robot to play soccer against competing teams."
  },
    {
      id: "agrimart",
      title: "AGRIMART",
      category: "AGRI",
      date: "November 13-14, 2025",
      participants: "Individual",
      prize: "Exciting Rewards",
      description: "Showcase innovative agricultural products and solutions that can revolutionize farming practices.",
      poster: uiUxPoster
    },
    {
      id: "agri-quest",
      title: "AGRI QUEST",
      category: "AGRI",
      date: "November 14, 2025",
      participants: "Individual",
      prize: "Exciting Rewards",
      description: "Test your knowledge of modern agricultural tools, quality seeds and seedling management in this fun quiz competition.",
      poster: blockchainPoster
    },
    {
    id: "bgmi-tournament",
    title: "THE BGMI CHALLANGE",
    category: "CENTERSTAGE",
    date: "November 13, 2025",
    participants: "Teams of 2-4",
    poster: hackathonPoster,
    prize: "Exciting Rewards",
    description: " Compete in our thrilling BGMI Tournament and showcase your gaming skills to claim victory."
  },
    {
      id: "Mashroom",
      title: "MASHROOM WORKSHOP",
      category: "AGRI",
      date: "November 14, 2025",
      participants: "Individual",
      prize: "Certificates",
      description: " ",
      poster: iotPoster
    },
    {
      id: "load-limit",
      title: "THE_LOAD_LIMIT",
      category: "CIVIL",
      date: "November 13, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Test your structural engineering skills by designing and building a load-bearing model structure.",
      poster: debugWarsPoster
    },

    {
      id: "circuit-fab",
      title: "TURBOFLUX",
      category: "ECE",
      date: "November 14, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Design and fabricate a functional electronic circuit to meet specified performance criteria.",
      poster: debugWarsPoster
    },
    {
      id: "planting-competition",
      title: "PLANTING COMPETITION",
      category: "AGRI",
      date: "November 14, 2025",
      participants: "Team of 5",
      prize: "Certificates",
      description: " Engage in a hands-on planting competition to showcase your gardening skills and knowledge of plant care.",
      poster: aiWorkshopPoster
    },

    {
      id: "electro-maze",
      title: "ELECTROMAZE",
      category: "ECE",
      date: "November 13-14, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Navigate an electrifying maze using your knowledge of circuits and electronics.",
      poster: debugWarsPoster
    },



{

    id: "unlocking-engine-secrets",
  title: "Unlocking Engine Secrets",
  category: "MECHANICAL",
  date: "November 13, 2025",
  time: "11:00 AM onwards",
  participants: "Open to all undergraduate students",
  prize: "Certificates",
  description:
    " Learn the art of cultivating a nutritious kitchen garden with hands-on experience in planting, nurturing, and harvesting a variety of vegetables and herbs. Discover sustainable gardening practices that promote health and wellness.",
  poster: icPoster
},

{

    id: "doctor-driving",
  title: "Doctor Driving ",
  category: "MECHANICAL",
  date: "November 13, 2025",
  time: "11:00 AM – 2:00 PM",
  participants: "Open to all undergraduate students",
  prize: "Certificates",
  description:
    " Learn the art of cultivating a nutritious kitchen garden with hands-on experience in planting, nurturing, and harvesting a variety of vegetables and herbs. Discover sustainable gardening practices that promote health and wellness.",
  poster: docterPoster
},



  ];

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen grid-bg">
      <SEO 
        title="Events & Competitions - Utkrisht 2025 | Hackathons, Robotics & Workshops"
        description="Explore 20+ tech events at Utkrisht 2025: Hackathons, Robo Wars, AI/ML Workshops, Web Development, Drone Racing, UI/UX Design & more. Win prizes worth ₹5 Lakh+!"
        keywords="tech events, hackathon 2025, robotics competition, AI workshop, web development contest, drone racing, coding competition, blockchain workshop, IoT challenge"
      />
      <Navbar />
      
      <main className="pt-32 pb-16 relative">
        {/* Background effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-primary/20 backdrop-blur-md border-2 border-primary/50 rounded-full text-sm font-tech font-bold tracking-widest text-primary shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                COMPETE & CONQUER
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-black mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent tracking-wider uppercase">
              Events & Competitions
            </h1>
            <p className="text-2xl text-muted-foreground font-light">
              Choose your battleground and showcase your skills
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`font-tech font-bold tracking-wider px-6 py-3 text-base transition-all duration-300 ${
                  selectedCategory === category 
                    ? "shadow-[0_0_20px_rgba(234,179,8,0.6)] border-primary" 
                    : "border-2 border-primary/30 hover:border-primary hover:bg-primary/10"
                }`}
              >
                {category.toUpperCase()}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 mb-6">
                <span className="text-5xl">🔍</span>
              </div>
              <p className="text-muted-foreground text-xl font-light">No events found in this category</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
