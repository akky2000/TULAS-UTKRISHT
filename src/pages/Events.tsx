import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";


import jengaPoster from "@/assets/events/Jenga.png";
import bgmiPoster from "@/assets/events/bgmi.png";
import codePoster from "@/assets/events/coder.png";
import roboPoster from "@/assets/events/Robo.png"
import id from "@/assets/events/Investors.png";
import rj from "@/assets/events/rj.png";
import cad from "@/assets/events/cad.png";
import ftambola from "@/assets/events/ftambola.png";
import blink from "@/assets/events/blink.png";
import pp from "@/assets/events/pp.jpeg";
import tm from "@/assets/events/tm.png";
import reel from "@/assets/events/reel.png";
import tf from "@/assets/events/tf.png";
import mod from "@/assets/events/pharm1.png";
import soap from "@/assets/events/soap.png";
import rsoccer from "@/assets/events/rsoccer.png";
import ng from "@/assets/events/ng.png";
import tt from "@/assets/events/tt.png";
import am from "@/assets/events/am.png";
import aq from "@/assets/events/aq.png";
import mr from "@/assets/events/mr.png";
import ll from "@/assets/events/ll.png";
import cb from "@/assets/events/cb.png";
import pc from "@/assets/events/pc.png";
import em from "@/assets/events/em.png";
import es from "@/assets/events/es.png";
import dd from "@/assets/events/dd.png";
import present from "@/assets/events/present.png";
import ww from "@/assets/events/ww.png";
import pottery from "@/assets/events/pottery.png";
import echo from "@/assets/events/echo.png";
import er from "@/assets/events/escape.png";
import bot from "@/assets/events/bot.png";
import udaan from "@/assets/events/udaan.png";
import tradex from "@/assets/events/tradex.png";
import tal from "@/assets/events/tal.png";
import trace from "@/assets/events/trace.png";
import reelrumble from "@/assets/events/reelrumble.png";
import junkyard from "@/assets/events/junkyard.png";
import printer from "@/assets/events/3dprinting.png";
import sgem from "@/assets/events/sgem.png";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All","CENTERSTAGE","ASH", "CIVIL", "EEE/ECE", "AGRI","MECHANICAL","GSB", "CSE","PHARMACY","CA","JMC","FUN ACTIVITY"];

  const events = [
    {
    id: "bgmi-tournament",
    title: "THE BGMI CHALLANGE",
    category: "CENTERSTAGE",
    date: "November 13-14, 2025",
    participants: "Teams of 3-4",
    poster: bgmiPoster,
    prize: "Overall 16,000 INR + Certificates",
    description: " Compete in our thrilling BGMI Tournament and showcase your gaming skills to claim victory."
    },
    {
      "id": "coderush",
      "title": "CodeRush",
      "category": "CSE",
      "date": "November 13, 2025",
      "participants": "Open to all undergraduate students (individual participation)",
      "prize": "Trophies & Certificates",
      "description": "CodeRush is an inter-college coding contest powered by GeeksforGeeks and ACM Student Chapter, designed to test accuracy, efficiency, and problem-solving speed. With 4 challenges of increasing difficulty, participants compete for recognition as the top coders on campus.",
      poster: codePoster
    },
    {
      "id": "rj-hunt",
      "title": "RJ Hunt",
      "category": "JMC",
      "date": "November 13, 2025",
      "participants": "Solo participation (open to all departments)",
      "prize": "Exciting prizes for top performers",
      "description": "Get ready to turn up the volume at RJ Hunt – Utkrisht 2025! Step into the spotlight and let your voice do the magic in this thrilling hunt for the ultimate Radio Jockey. Participants will be judged on voice modulation, creativity, spontaneity, and on-air presence. It’s not just about what you say, but how you say it!",
      poster: rj

    },
    {
      id: "cad-mad",
      title: "CAD MAD",
      category: "CIVIL",
      date: "November 13, 2025",
      participants: "Teams of 3",
      prize: "Exciting Rewards",
      description: " Showcase your AutoCAD skills by designing innovative structures and models.",
      poster: cad
      
    },
    {
      "id": "finance-tambola",
      "title": "Finance Tambola.",
      "category": "GSB",
      "date": "November 13, 2025",
      "participants": "Individual Participation (Open to all GSB Students)",
      "prize": "Attractive Prizes & Certificates.",
      "description": "An interactive financial literacy event that blends learning and fun through a pictorial Tambola game, helping students understand key concepts like savings, investment, taxation, and budgeting.",
      poster : ftambola
    },

    {
      "id": "brand-in-a-blink",
      "title": "Brand in a Blink",
      "category": "GSB",
      "date": "November 14, 2025",
      "participants": "Team Participation (Open to all GSB Students)",
      "prize": "Prizes and Certificates for all",
      "description": "A fun and fast-paced branding challenge where teams identify brands, logos, and taglines flashed briefly on screen to test their marketing knowledge and brand recall.",
       poster : blink
    },
    {
      "id": "peoples-pulse",
      "title": "People’s Pulse",
      "category": "GSB",
      "date": "November 14, 2025",
      "participants": "Open to MBA/BBA Students (Teams of 2–3)",
      "prize": "Certificates & Prizes.",
      "description": "An HR-based interactive event with rounds like HR Quiz War, Case Crackers, and Ad Design Showdown — promoting strategic HR thinking, ethics, and creativity under the theme 'People at the Heart of Strategy'.",
      poster : pp
    },
    {
      "id": "techmanthan",
      "title": "TechManthan ",
      "category": "CSE",
      "date": "November 13, 2025",
      "participants": "Individual or Team Participation",
      "prize": "Certificates & Recognition for Best Ideas",
      "description": "TechManthan – Ideas for Viksit Bharat empowers young minds to innovate for the nation’s technological growth. Participants act as youth representatives, presenting 2-minute speeches with ideas that can drive India’s transformation into a Viksit Bharat (Developed India). The event fosters leadership, innovation, and public speaking skills aligned with the Viksit Bharat@2047 vision.",
       poster : tm
    },
    {
      "id": "reel-o-tech",
      "title": "Reel-O-Tech",
      "category": "CSE",
      "date": "November 13, 2025",
      "participants": "Individual or Team (up to 3 members)",
      "prize": "Exciting Awards",
      "description": "Reel-O-Tech blends technology and creativity, allowing participants to craft short 60–90 second reels around tech life, innovation, or campus experiences. The event promotes storytelling, editing skills, and originality using tools like CapCut, Runway ML, and Synthesia, celebrating the spirit of Utkrisht 2025.",
      poster : reel
    },
    {
      "id": "techfusion",
      "title": "TechFusion",
      "category": "CSE",
      "date": "November 13, 2025",
      "participants": "Open to all(Team size: 1–4 members)",
      "prize": "Exciting Awards",
      "description": "A multidisciplinary competition that unites AI/ML, software development, and cybersecurity through three segments — Build, Predict, and Secure. Students innovate, analyze, and defend in real-world tech challenges designed to test creativity, technical acumen, and ethical problem-solving.",
      poster : tf
    },
    {
      "id": "anatomical-3d-model-making",
      "title": "Anatomical 3D Model Making",
      "category": "PHARMACY",
      "date": "November 13, 2025",
      "participants": "Pharmacy students of Tula’s Institute",
      "prize": "Certificates",
      "description": "An engaging hands-on activity organized by the Department of Pharmacy, Tula’s Institute of Pharmacy, where students designed 3D models of human anatomical structures. The activity aimed to strengthen understanding of anatomy, spatial visualization, and teamwork through creative model construction using diverse materials and techniques.",
      poster : mod
    },
    {
      "id": "soap-making-activity",
      "title": "Soap Making Activity",
      "category": "PHARMACY",
      "date": "November 13, 2025",
      "participants": "Pharmacy students of Tulas Institute",
      "prize": "Certificates",
      "description": "A hands-on workshop by the Department of Pharmacy, Tulas Institute, where students learned the process of saponification, formulation techniques, and cosmetic product preparation. Participants created customized soaps using natural oils and herbal additives, promoting creativity, eco-friendly innovation, and technical skills in cosmetic manufacturing.",
       poster : soap
    },
    {
      id: "robo-soccer",
      title: "Super Strikers",
      category: "CENTERSTAGE",
      date: "November 13, 2025",
      participants: "Teams of 4",
      prize: "TBA",
      description: "Design and program autonomous robot to play soccer against competing teams.",
      poster : rsoccer
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
     poster : ng
    },
    {
      id: "robo-wars",
      title: "ARMAGEDDON - Robo Wars",
      category: "CENTERSTAGE",
      date: "November 14, 2025",
      participants: "Teams of 4",
      prize: "TBA",
      description: "Build and battle robots in an arena to outlast and outfight your opponents.",
      poster: roboPoster
    },
    {
      id: "jenga-war",
      title: "JENGA WAR",
      category: "FUN ACTIVITY",
      date: "November 13-14, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "A high-stakes twist on the classic block game where precision meets strategy in a battle of balance and nerves!",
      poster: jengaPoster
    },
    {
      id: "tool-test",
      title: "Tech Tools Test",
      category: "EEE/ECE",
      date: "November 14, 2025",
      participants: "Team of 2",
      prize: "TBA",
      description: "Test your technical knowledge on essential electrical and electronics instruments in this exciting competition.",
      poster : tt
    },
    {
      id: "investors-den",
      title: "INVESTORS DEN",
      category: "CENTERSTAGE",
      date: "November 13, 2025",
      participants: "Teams of 4",
      poster: id,
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
      poster : am
    },
    {
      id: "agri-quest",
      title: "AGRI QUEST",
      category: "AGRI",
      date: "November 14, 2025",
      participants: "Individual",
      prize: "Exciting Rewards",
      description: "Test your knowledge of modern agricultural tools, quality seeds and seedling management in this fun quiz competition.",
      poster : aq
    },
    {
      id: "Mashroom",
      title: "MUSHROOM WORKSHOP",
      category: "AGRI",
      date: "November 14, 2025",
      participants: "Individual",
      prize: "Certificates",
      description: " ",
      poster : mr
    },
    {
      id: "load-limit",
      title: "THE_LOAD_LIMIT",
      category: "CIVIL",
      date: "November 13, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Test your structural engineering skills by designing and building a load-bearing model structure.",
       poster : ll
    },
    {
      id: "circuit-fab",
      title: "TURBOFLUX",
      category: "EEE/ECE",
      date: "November 14, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Design and fabricate a functional electronic circuit to meet specified performance criteria.",
       poster : cb
    },
    {
      id: "planting-competition",
      title: "PLANTING COMPETITION",
      category: "AGRI",
      date: "November 14, 2025",
      participants: "Team of 5",
      prize: "Certificates",
      description: " Engage in a hands-on planting competition to showcase your gardening skills and knowledge of plant care.",
      poster : pc
    },

    {
      id: "electro-maze",
      title: "ELECTROMAZE",
      category: "FUN ACTIVITY",
      date: "November 13-14, 2025",
      participants: "Teams of 2",
      prize: "Exciting Rewards",
      description: "Navigate an electrifying maze using your knowledge of circuits and electronics.",
       poster : em
    },
    {
      id: "unlocking-engine-secrets",
      title: "Unlocking Engine Secrets",
      category: "MECHANICAL",
      date: "November 13, 2025",
      time: "11:00 AM onwards",
      participants: "Open to all undergraduate students",
      prize: "Certificates",
      description:" Learn the art of cultivating a nutritious kitchen garden with hands-on experience in planting, nurturing, and harvesting a variety of vegetables and herbs. Discover sustainable gardening practices that promote health and wellness.",
       poster : es
    },
    {
      id: "doctor-driving",
      title: "Doctor Driving ",
      category: "MECHANICAL",
      date: "November 13, 2025",
      time: "11:00 AM – 2:00 PM",
      participants: "Open to all undergraduate students",
      prize: "Certificates",
      description:" Learn the art of cultivating a nutritious kitchen garden with hands-on experience in planting, nurturing, and harvesting a variety of vegetables and herbs. Discover sustainable gardening practices that promote health and wellness.",
      poster : dd
    },
    {
      id: "poster-presentation",
      title: "Poster Presentation",
      category: "ASH",
      date: "November 14, 2025",
      time: "10:00 AM – 1:00 PM",
      participants: "Individual / Team of up to 3 members",
      prize: "Certificates & Recognition for Best Posters",
      description:"Showcase your innovative ideas and research insights through visually engaging posters! Present your creativity on themes like science, technology, innovation, and environment while demonstrating analytical thinking and clear communication skills.",
      poster : present
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
      poster : ww
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
      poster : pottery
    },
    {
      id: "echo",
      title: "ECHOES OF TALENT 2.O",
      category: "FUN ACTIVITY",
      date: "November 13, 2025",
      time: "2:00 PM – 5:00 PM",
      participants: "Open for all students",
      prize: "Certificates for Participants",
      description:
        "Echoes of Talent 2.O is a vibrant cultural showcase that celebrates the creativity and passion of students. The event provides an open platform for participants to express themselves through singing, dancing, acting, stand-up comedy, and other performing arts. It aims to inspire confidence, highlight individuality, and create a joyful atmosphere of artistic expression and entertainment.",
      poster : echo
    },
    {
      id: "escape",
      title: "ESCAPE ROOM   2.0",
      category: "CA",
      date: "November 13, 2025",
      time: "2:00 PM – 5:00 PM",
      participants: "Open for CA/CSE students",
      prize: "Certificates for Participants",
      description:
        "The Escape Room 2.0  event is an intellectually stimulating and fun-filled competition designed to test participants’ problem-solving, analytical thinking, and technical abilities through a series of challenging phases. Each round progressively increases in complexity, encouraging logical reasoning, collaboration, and quick decision-making. Participants must clear each phase to unlock the next, ultimately aiming to “escape” by cracking the final challenge.",
      poster : er
    },
    {
      id: "battle of thoughts",
      title: "BATTLE OF THOUGHTS",
      category: "CENTERSTAGE",
      date: "14th November 2025",
      time: "1:00 PM – 4:00 PM ",
      participants: "Open to all",
      prize: "Certificates for Participants",
      description:
        "A Battle of Thoughts Competition is a formal event where participants speak for or against a topic, present logical arguments, counter opponents’ statements, and convince judges with strong reasoning, clarity, and confidence.It develops communication skills, critical thinking, leadership, and the ability to think under pressure.",
      poster : bot
    },
    {
      id: "the big",
      title: "UDAAN 2025 - Balloon Tree Battle",
      category: "CA",
      date: "13th November 2025",
      time: "11:00 AM – 2:00PM ",
      participants: "Open to all",
      prize: "Exciting prizes.",
      description:
        "UDAAN 2025 is a creative and interactive event designed to celebrate imagination, teamwork, and artistic expression. In this activity, participants collaboratively create a vibrant tree using colorful balloons. The balloon tree serves as a symbolic representation of growth, unity, and the endless possibilities of rising higher, just as the name ‘the big balloon show’ signifies aspiration. The event encourages participants to think innovatively and work together to transform simple materials into a meaningful and visually appealing creation. It not only enhances creative thinking and coordination among team members but also promotes a sense of joy, positivity, and collective achievement. Through this fun-filled and inspiring activity, The Big balloon aims to nurture creativity, strengthen bonds, and remind everyone that with teamwork and imagination, we can all soar to new heights.",
      poster : udaan
    },
    {
      id: "tradex",
      title: "TRADE-X",
      category: "CENTERSTAGE",
      date: "13th November 2025",
      time: "9:30 AM – 3:30 PM (6 Hours)",
      participants: "Open to all",
      prize: "Cash prizes.",
      description:
        "Experience the Thrill of Real-Time Trading: The Live Intraday Trading Competition offers participants a thrilling real-time stock market experience using virtual capital and live market data. Conducted during the Tech Fest, the event tests analytical skills, risk management, and decision-making under pressure. Participants trade to maximize portfolio returns, gaining practical exposure to financial markets while competing for exciting prizes and recognition as top trading strategists.",
      poster : tradex
    },
    {
      id: "auction",
      title: "Tula’s Auction League",
      category: "CENTERSTAGE",
      date: "13th November 2025",
      time: "10:00 AM – 6:00 PM (8 Hours)",
      participants: "Open to all",
      prize: "Exciting prizes.",
      description:
        "The Tula’s Auction League is an innovative and engaging sporting event that combines the thrill of cricket with the excitement of a live player auction. Inspired by professional tournaments like the Indian Premier League (IPL), it introduces students or local players to the dynamics of team building, bidding strategies, and competitive gameplay. Unlike traditional cricket tournaments where teams are pre-decided, the Auction League begins with a player auction, where team owners or captains purchase players using a fixed virtual budget.This process not only ensures fairness and balanced team formation but also adds entertainment and strategic depth to the competition.",
       poster : tal
    },
    {
      id: "turtle race",
      title: "Turtle Race",
      category: "FUN ACTIVITY",
      date: "14th November 2025",
      time: "2:00 PM – 5:00 PM",
      participants: "Open to all",
      prize: "Exciting prizes.",
      description:
        "Turtle Race is one of the most exciting and entertaining events of Utkrisht, designed to test participants balance, control, and patience. Unlike traditional races where speed leads to victory, this unique challenge rewards those who can move slowly and steadily while maintaining perfect balance. The goal is simple yet tricky to be the last one to cross the finish line without losing control or touching the ground. This event is a blend of fun, focus, and physical coordination, giving participants an opportunity to showcase their composure and determination. It’s not just a race, it’s a test of endurance, concentration, and skill, all in the spirit of sportsmanship and enjoyment.",
      poster : trace
    },
    {
      "id": "reels-rumble",
      "title": "Reels Rumble (45 Seconds Reel)",
      "category": "JMC",
      "date": "November 13, 2025",
      "participants": "Individual participation (open to all college students)",
      "prize": "Exciting prizes for most creative and impactful reels",
      "description": "Reels Rumble is a creative showdown where participants create a 45-second reel that captures the theme’s essence through storytelling, innovation, and cinematic execution. The event celebrates digital creativity and originality, challenging participants to craft a short yet impactful masterpiece.",
      poster : reelrumble
    },
    {
      "id": "junkyard",
      "title": "Junkyard",
      "category": "CENTERSTAGE",
      "date": "November 14, 2025",
      "participants": "Teams of 4 (Open for all)",
      "prize": "Exciting Prizes",
      "description": "Junkyard is an exciting and eco-creative event of Utkrisht that challenges students to turn trash into treasure using their innovation, teamwork, and imagination",
      poster : junkyard
    },
    {
      id: "3d-printing",
      title: "3D Printing",
      category: "CENTERSTAGE",
      date: "November 13-14, 2025",
      participants: "Individuals ",
      prize: "Exciting Rewards",
      description: "Showcase your skills in 3D modeling and printing by creating innovative designs and prototypes.",
      poster: printer
    },
    {
      id: "strategem",
      title: "STRATEGEM",
      category: "CENTERSTAGE",
      date: "November 13-14, 2025",
      participants: "Individuals (Open to all)",
      prize: "Exciting Rewards",
      description : "The CESIM Business Simulation is a powerful, interactive learning tool designed to enhance the managerial and strategic competencies of Graduation and Post-Graduation students.",
      poster : sgem
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
              <img
    src="/images/can.png"
    alt="UTKRISHT Mascot"
    className="mx-auto mb-4 w-[30%] max-w-[400px] h-auto"
  />
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
