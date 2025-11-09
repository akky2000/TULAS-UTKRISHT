import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import hackathonPoster from "@/assets/events/temp.jpg";
import roboWarsPoster from "@/assets/events/temp.jpg";
import aiWorkshopPoster from "@/assets/events/ai-workshop.jpg";
import webDevPoster from "@/assets/events/web-dev.jpg";
import droneRacePoster from "@/assets/events/drone-race.jpg";

import blockchainPoster from "@/assets/events/blockchain.jpg";
import iotPoster from "@/assets/events/iot.jpg";
import debugWarsPoster from "@/assets/events/debug-wars.jpg";
import robowarPoster from "@/assets/events/R-w.jpeg"
import icPoster from "@/assets/events/ic.jpg"
import docterPoster from "@/assets/events/doctor.jpg"
import posterPresentationPoster from "@/assets/events/poster.jpg"
import warOfWordsPoster from "@/assets/events/war.jpg"
import potteryPoster from "@/assets/events/pottery.jpg"
import nPoster from "@/assets/events/nutritive.jpg"
import martPoster from "@/assets/events/agrimart.jpg";
import quizPoster from "@/assets/events/agriquiz.jpg";
import mPoster from "@/assets/events/mushroom.jpg";
import plantPoster from "@/assets/events/plant.jpg";
import investPoster from "@/assets/events/invest.jpg";
import utkrishtPoster from "@/assets/events/temp.jpg";



const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All","CENTERSTAGE","ASH", "CIVIL", "EEE/ECE", "AGRI","MECHANICAL","GSB", "CSE","PHARMACY","FUN ACTIVITY"];

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
  "id": "finance-tambola",
  "title": "Finance Tambola.",
  "category": "GSB",
  "date": "November 13, 2025",
  "participants": "Individual Participation (Open to all GSB Students)",
  "prize": "Attractive Prizes & Certificates.",
  "description": "An interactive financial literacy event that blends learning and fun through a pictorial Tambola game, helping students understand key concepts like savings, investment, taxation, and budgeting.",
  poster: utkrishtPoster
},

{
  "id": "brand-in-a-blink",
  "title": "Brand in a Blink",
  "category": "GSB",
  "date": "November 14, 2025",
  "participants": "Team Participation (Open to all GSB Students)",
  "prize": "Prizes and Certificates for all",
  "description": "A fun and fast-paced branding challenge where teams identify brands, logos, and taglines flashed briefly on screen to test their marketing knowledge and brand recall.",
  poster: utkrishtPoster
},
{
  "id": "peoples-pulse",
  "title": "People’s Pulse",
  "category": "GSB",
  "date": "November 14, 2025",
  "participants": "Open to MBA/BBA Students (Teams of 2–3)",
  "prize": "Certificates & Prizes.",
  "description": "An HR-based interactive event with rounds like HR Quiz War, Case Crackers, and Ad Design Showdown — promoting strategic HR thinking, ethics, and creativity under the theme 'People at the Heart of Strategy'.",
  poster: utkrishtPoster
},


{
  "id": "techmanthan",
  "title": "TechManthan ",
  "category": "CSE",
  "date": "13 NOV",
  "participants": "Individual or Team Participation",
  "prize": "Certificates & Recognition for Best Ideas",
  "description": "TechManthan – Ideas for Viksit Bharat empowers young minds to innovate for the nation’s technological growth. Participants act as youth representatives, presenting 2-minute speeches with ideas that can drive India’s transformation into a Viksit Bharat (Developed India). The event fosters leadership, innovation, and public speaking skills aligned with the Viksit Bharat@2047 vision.",
  poster: utkrishtPoster
},

{
  "id": "reel-o-tech",
  "title": "Reel-O-Tech",
  "category": "CSE",
  "date": "13 NOV",
  "participants": "Individual or Team (up to 3 members)",
  "prize": "Exciting Awards",
  "description": "Reel-O-Tech blends technology and creativity, allowing participants to craft short 60–90 second reels around tech life, innovation, or campus experiences. The event promotes storytelling, editing skills, and originality using tools like CapCut, Runway ML, and Synthesia, celebrating the spirit of Utkrisht 2025.",
  poster: utkrishtPoster
},

{
  "id": "techfusion",
  "title": "TechFusion",
  "category": "CSE",
  "date": "13 NOV",
  "participants": "Open to all(Team size: 1–4 members)",
  "prize": "Exciting Awards",
  "description": "A multidisciplinary competition that unites AI/ML, software development, and cybersecurity through three segments — Build, Predict, and Secure. Students innovate, analyze, and defend in real-world tech challenges designed to test creativity, technical acumen, and ethical problem-solving.",
  poster: utkrishtPoster
},


{
  "id": "anatomical-3d-model-making",
  "title": "Anatomical 3D Model Making",
  "category": "PHARMACY",
  "date": "N/A",
  "participants": "Pharmacy students of Tula’s Institute",
  "prize": "N/A",
  "description": "An engaging hands-on activity organized by the Department of Pharmacy, Tula’s Institute of Pharmacy, where students designed 3D models of human anatomical structures. The activity aimed to strengthen understanding of anatomy, spatial visualization, and teamwork through creative model construction using diverse materials and techniques.",
  poster: utkrishtPoster
},

{
  "id": "soap-making-activity",
  "title": "Soap Making Activity",
  "category": "PHARMACY",
  "date": "N/A",
  "participants": "Pharmacy students of Tulas Institute",
  "prize": "N/A",
  "description": "A hands-on workshop by the Department of Pharmacy, Tulas Institute, where students learned the process of saponification, formulation techniques, and cosmetic product preparation. Participants created customized soaps using natural oils and herbal additives, promoting creativity, eco-friendly innovation, and technical skills in cosmetic manufacturing.",
  poster: utkrishtPoster
},



{
  "id": "coderush",
  "title": "CodeRush",
  "category": "CSE",
  "date": "Tuesday, 4th November 2025",
  "participants": "Open to all undergraduate students (individual participation)",
  "prize": "Trophies & Certificates",
  "description": "CodeRush is an inter-college coding contest powered by GeeksforGeeks and ACM Student Chapter, designed to test accuracy, efficiency, and problem-solving speed. With 4 challenges of increasing difficulty, participants compete for recognition as the top coders on campus.",
  poster: utkrishtPoster
},


    {
      id: "robo-soccer",
      title: "Super Strikers",
      category: "CENTERSTAGE",
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
  poster: utkrishtPoster
},
    {
      id: "robo-wars",
      title: "ARMAGEDDON - Robo Wars",
      category: "CENTERSTAGE",
      date: "November 14, 2025",
      participants: "Teams of 4",
      prize: "TBA",
      description: "Build and battle robots in an arena to outlast and outfight your opponents.",
      poster: utkrishtPoster
    },
    {
      id: "jenga-war",
      title: "JENGA WAR",
      category: "FUN ACTIVITY",
      date: "November 13-14, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Create a stunning, functional website in just 6 hours. Show off your frontend and backend skills.",
      poster: utkrishtPoster
    },
    {
      id: "tool-test",
      title: "Tech Tools Test",
      category: "EEE/ECE",
      date: "November 14, 2025",
      participants: "Team of 2",
      prize: "TBA",
      description: "Test your technical knowledge on essential electrical and electronics instruments in this exciting competition.",
      poster: utkrishtPoster
    },
     {
    id: "investors-den",
    title: "INVESTORS DEN",
    category: "CENTERSTAGE",
    date: "November 13, 2025",
    participants: "Teams of 4",
    poster: utkrishtPoster,
    prize: "TBA",
    description: "Investors Den is a Shark Tank-inspired entrepreneurship challenge."
  },
    {
      id: "agrimart",
      title: "AGRIMART",
      category: "AGRI",
      date: "November 13-14, 2025",
      participants: "Individual",
      prize: "Exciting Rewards",
      description: "Showcase innovative agricultural products and solutions that can revolutionize farming practices.",
      poster: utkrishtPoster
    },
    {
      id: "agri-quest",
      title: "AGRI QUEST",
      category: "AGRI",
      date: "November 14, 2025",
      participants: "Individual",
      prize: "Exciting Rewards",
      description: "Test your knowledge of modern agricultural tools, quality seeds and seedling management in this fun quiz competition.",
      poster: utkrishtPoster
    },
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
      id: "Mashroom",
      title: "MUSHROOM WORKSHOP",
      category: "AGRI",
      date: "November 14, 2025",
      participants: "Individual",
      prize: "Certificates",
      description: " ",
      poster: utkrishtPoster
    },
    {
      id: "load-limit",
      title: "THE_LOAD_LIMIT",
      category: "CIVIL",
      date: "November 13, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Test your structural engineering skills by designing and building a load-bearing model structure.",
      poster: utkrishtPoster
    },

    {
      id: "circuit-fab",
      title: "TURBOFLUX",
      category: "EEE/ECE",
      date: "November 14, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Design and fabricate a functional electronic circuit to meet specified performance criteria.",
      poster: utkrishtPoster
    },
    {
      id: "planting-competition",
      title: "PLANTING COMPETITION",
      category: "AGRI",
      date: "November 14, 2025",
      participants: "Team of 5",
      prize: "Certificates",
      description: " Engage in a hands-on planting competition to showcase your gardening skills and knowledge of plant care.",
      poster: utkrishtPoster
    },

    {
      id: "electro-maze",
      title: "ELECTROMAZE",
      category: "FUN ACTIVITY",
      date: "November 13-14, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Navigate an electrifying maze using your knowledge of circuits and electronics.",
      poster: utkrishtPoster
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
  poster: utkrishtPoster
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
  poster: utkrishtPoster
},



{
  id: "poster-presentation",
  title: "Poster Presentation",
  category: "ASH",
  date: "November 14, 2025",
  time: "10:00 AM – 1:00 PM",
  participants: "Individual / Team of up to 3 members",
  prize: "Certificates & Recognition for Best Posters",
  description:
    "Showcase your innovative ideas and research insights through visually engaging posters! Present your creativity on themes like science, technology, innovation, and environment while demonstrating analytical thinking and clear communication skills.",
  poster: utkrishtPoster,
},

{
  id: "war-of-words",
  title: "War of Words",
  category: "ASH",
  date: "November 13, 2025",
  time: "11:00 AM – 2:00 PM",
  participants: "Team of 3 Students (Open for all departments)",
  prize: "Certificates",
  description:
    "War of Words is an engaging inter-departmental Extempore competition designed to enhance communication, critical thinking, and analytical abilities of students. Participants will speak spontaneously on a given topic, showcasing their ability to think quickly, organize ideas effectively, and express viewpoints confidently. This event encourages clarity of thought, stage presence, and fluency — fostering leadership and intellectual confidence.",
  poster: utkrishtPoster
},

{
  id: "pottery-demonstration",
  title: "Pottery Demonstration & Training",
  category: "AGRI",
  date: "November 13, 2025",
  time: "2:00 PM – 5:00 PM",
  participants: "Open for all students (Beginner to Advanced)",
  prize: "Certificates for Participants",
  description:
    "A pottery demonstration showcasing the foundational techniques of creating a vessel on a potter's wheel. The session highlights the transformation of simple clay (earth and water) into a functional art piece through skill and heat (fire and air). This hands-on training offers an immersive experience for participants to learn forming processes and shaping techniques under expert guidance.",
  poster: utkrishtPoster
}


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
