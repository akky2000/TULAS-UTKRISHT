import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, Clock, MapPin, ArrowLeft } from "lucide-react";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>(); // ✅ ensure 'id' has a type

  // ✅ Define the type of event data
  type EventInfo = {
    title: string;
    category: string;
    date: string;
    time: string;
    venue: string;
    participants: string;
    prize: string;
    description: string;
    rules: string[];
    contact: string[];
   
  };

  // ✅ Define all event data
  const eventDetails: Record<string, EventInfo> = {
    "cad-mad": {
      title: "CAD-MAD Plot Competition",
      category: "CIVIL",
      date: "November 13, 2025",
      time: "11:00 AM onwards",
      venue: "Tula's Institute, Lab 5",
      participants: "Teams of 3",
      prize: "Exciting Rewards",
      description:
        "Join us for the (CAD-MAD) Plot Competition at the college Tech Fest “UTKRISHT”! This event challenges students to showcase their AutoCAD skills, team coordination, and time management abilities. Participants will work together to design and draft engineering structures within a limited time frame, testing their technical knowledge, creativity, and teamwork.",
      rules: [
         "Participants must be enrolled in the B.Tech Civil/Mechanical Engineering program.",
      "Open for all undergraduate Civil/Mechanical students from 1st to final year.",
      "Teams of 3 members are allowed.",
      "The theme or design brief will be provided at the start of the competition (e.g., residential building, commercial complex, road layout, bridge, etc.).",
      "Only AutoCAD software is allowed; work done using any other software will not be accepted.",
      "Participants must strictly follow the theme; deviation will lead to disqualification.",
      "The competition will have a time limit of 3–4 hours.",
      "Late submissions will not be accepted except in technical issues approved by organizers.",
      "Final drawings must be submitted in both .dwg and .pdf formats.",
      "Participants must use college-provided systems only; personal systems are not allowed.",
      "Use of pre-made templates, plagiarism, or external assistance will result in disqualification.",
      "Participants must maintain professional behavior; any misconduct will lead to elimination."
      ],
      contact: [
        "Mr. Prashant Gusain - +91 8527809373",
        "Mr. Atul Khanduri - +91 8077375112",
      ],
     
    },


    "jenga-war": {
  title: "Jenga War",
  category: "CIVIL",
  date: "November 13- 14, 2025",
  time: "10:30 AM onwards",
  venue: "TBA",
  participants: "Teams of 2 members",
  prize: "Exciting Rewards",
  description:
    "JENGA WAR challenges participants to think like engineers and act like architects! Teams will compete to construct the tallest and most stable tower using Jenga blocks — within a limited time and following specific rules that demand both skill and strategy. It’s a perfect blend of fun and engineering logic, testing your patience, balance, and precision.",
  rules: [
    "Each team will receive one Jenga box (54 blocks).",
    "No external tools, supports, or adhesives are allowed.",
    "The base (1 block) and first floor (2 blocks placed perpendicularly) are fixed for all teams.",
    "From the third floor onward, teams can use blocks in any arrangement of their choice.",
    "Time limit: 5 minutes.",
    "Teams must stop building immediately once time is called.",
    "Judging Criteria:",
    " Height of the tower (number of floors).",
    " Stability – the tower must stand for at least 10 seconds after completion.",
    "In case of a tie, completion time and stability will be considered, or an extra round may be held.",
    "Disqualification Rules:",
    " Touching or adjusting the tower after time ends.",
    " Not starting from the fixed base structure.",
    " Using external support or violating construction rules."
  ],
  contact: [
    "Mr. Aditya Thakur - +91 7906662388",
    "Mr. Rishabh Negi - +91 9760568120"
  ]
},

"load-limit": {
  title: "The Load Limit",
  category: "Structural Challenge",
  date: "November 13 , 2025",
  time: "10:00 AM Onwards",
  venue: "Tula's Institute, block J, J-206",
  participants: "Teams of 2 members",
  prize: "Exciting Rewards",
  description:
    "Get ready to test your engineering creativity and teamwork skills in “THE LOAD LIMIT” event at the college Tech Fest “UTKRISHT”! Participants will design and build a truss-type bridge using simple materials like newspapers and glue. The challenge? Make your bridge strong enough to hold the maximum load! This event is perfect for aspiring civil engineers who want to put their design knowledge and practical skills to the test. Join in and see if your bridge can handle the pressure!",
  rules: [
    "Only the provided materials (Newspaper, Fevicol, and Glue Gun) may be used.",
    "No other materials or external supports (tape, string, etc.) are allowed.",
    "The bridge must be of truss design with visible triangular units.",
    "Bridge dimensions must be a minimum of 45 cm in length and 15 cm in width.",
    "The structure must stand independently without additional support.",
    "The bridge will undergo load and dimension tests.",
    "Teams failing to meet the criteria will be disqualified.",
    "Maintain discipline and handle materials responsibly during construction.",
    "Misbehavior or damage to college property will result in penalties."
  ],
  contact: [
     "Faculty Coordinators:",
    "Archit Priyadarshi - +91 9557237379",
    "Preeti Kumari - +91 9690789772"
  ]
},

"robo-soccer": {
  title: "Super Strikers – Robo Soccer",
  category: "ECE",
  date: "November 13, 2025",
  time: "01:00 PM Onwards",
  venue: "Tula's Institute, Ground Between Block C & Bloclk E",
  participants: "Team of 4 members",
  prize: "TBA",
  description:
    "Get ready for an electrifying experience at Utkrisht 2025, the annual technical fest of Tula’s Institute! Witness the perfect fusion of technology and sportsmanship in Super Strikers – Robo Soccer, where innovation meets adrenaline. Each team, equipped with a single bot, will compete fiercely to outscore their opponents in a rectangular arena. Every move counts and every goal ignites excitement in this high-energy Robotic Soccer Championship!",
  rules: [
    "Each team can maintain only one bot throughout the entire match.",
    "The weight of the bot is limited to 5 kg with a tolerance of 5%.",
    "The bot must possess mechanisms for shooting, dragging, or gripping.",
    "The bot cannot exceed dimensions of 45 cm × 45 cm × 30 cm (striker/barrier mechanism included).",
    "Failure to maintain bot dimensions will lead to instant disqualification before the match starts.",
    "Robots cannot use grippers or actions intended to harm the opponent's bot."
  ],
  contact: [
    "Faculty Coordinators:",
    "Ms. Sushma, Assistant Professor, EEE - +91 7409037531",
    "Mr. Sandeep Rawat, Assistant Professor, ECE - +91 7668373537"
  ]
},


"robo-wars": {
  title: "Armageddon – Robowar",
  category: "Combat Robotics",
  date: "November 14, 2025",
  time: "11:00 AM Onwards",
  venue: "Tula's Institute, Ground Between Block C & Bloclk E",
  participants: "Teams with one combat robot each",
  prize: "Exciting Rewards",
  description:
   "Tula’s Institute proudly presents Armageddon – Robowar, one of the most awaited highlights of the Annual Technical Fest Utkrisht 2025. This adrenaline-fueled combat robotics championship brings together innovation, engineering excellence, and fierce competition as custom-built robots clash in a battle of strength, strategy, and survival. Armageddon promises an electrifying arena where machines fight for glory — and only the toughest will prevail. As metal meets metal and sparks fly, one thing remains certain: “At the end of the day, one shall stand, one shall fall.” When the dust settles, only one bot will emerge victorious as the Ultimate Combat Champion of Utkrisht 2025.",
  rules: [
    "Maximum weight: 8 kg (tolerance: 3%). The total weight of the robot including all accessories and power source must not exceed 8 kg. Exceeding the weight limit will lead to disqualification.",
    "Size specification: The robot must fit inside a box of 450 mm × 450 mm × 300 mm (L × B × H) before the start of every match.",
    "The weight of any compressor and/or cylinder (if using pneumatics or hydraulics and mounted onboard) will be included in the total weight.",
    "Power sources: Robots may be powered electrically only. Use of IC engines in any form is strictly prohibited.",
    "Arena power: Only 220 V A.C. supply will be provided at the arena and can be used in the form of DC voltage via battery eliminators brought by the team.",
    "Maximum permitted DC voltage (and eliminator output) is 36 V.",
    "Onboard batteries (if used) must be non-spillable/non-leaking types (safe when damaged or inverted).",
    "All electrical connections must be made safely to prevent short circuits and battery fires. Organizers may require unsafe circuitry to be replaced; failure to comply will result in disqualification.",
    "All robots must have a clearly visible external indicator that shows when the main power is activated.",
    "Mobility: Robots must have easily visible and controlled mobility. Permitted mobility methods include rolling (wheels or tracks), walking (linear actuated legs without rolling or cams), or shuffling (rotational cam-operated legs).",
    "Controls: Only wireless remote controls are allowed. Remotes should support at least two frequency operations (or equivalent anti-interference methods) to prevent interference with other teams.",
    "Pneumatics & hydraulics (if used): Only non-inflammable and non-corrosive fluids may be used. Pneumatic/hydraulic devices must be safe and certified. Pistons and cylinders must be securely and properly mounted on the robot; cylinders MUST be mounted on the robot.",
    "Weaponry: A wide variety of weapons are permitted, except the following banned weapon types:",
    "  - Weapons designed to cause invisible damage (electrical weapons, RF jamming, EMF fields, etc.).",
    "  - Weapons using liquids, gases, or foams.",
    "  - Weapons using any source of heat or fire.",
    "  - Powdered materials or chaff weapons.",
    "  - Explosion-based weapons.",
    "  - High-power magnets or electromagnets.",
    "Safety & sportsmanship: Any mechanism or behavior deemed unsafe by the organizers will be prohibited. Teams must follow referees' instructions and maintain sportsmanlike conduct. Misbehavior or unsafe actions may lead to penalties or disqualification."
  ],
  contact: [
"Faculty Coordinators:",
    "Mr Vrij Mohan Vidhyarthi, Assistant Professor, EEE - 8077633165",
    "Mr Sandeep Gotam, Assistant Professor, ECE - 8218572218",
    "Ms Nanse, Assistant Professor - 8954996462"
  ]
},

"tool-test": {
  title: "Tech Tools Test",
  category: "ECE",
  date: "November 14, 2025",
  time: "10:00 AM - 12:00 PM",
  venue: "Tula's Institute, Electrical Machine Lab (F-101)",
  participants: "Teams of 2",
  prize: "Exciting Rewards",
  description: "Tech Tools Test is an interactive and skill-based departmental event designed to enhance students’ practical knowledge of various electrical and electronic measuring instruments. The event begins with a demonstration and familiarization session, where participants learn the working principles, functions, and applications of tools such as clamp meters, multimeters, and other essential testing devices used in the Electrical and Electronics Department. This is followed by an engaging competition, where participants measure different physical parameters like current, voltage, and resistance with precision and speed. Tech Tools Test combines technical learning with competitive spirit, fostering accuracy, confidence, and hands-on expertise among future engineers.",
 
  rules: [
    "Round 1: Familiarization of various types of tech tools (Physical & Visual Quiz).",
    "Round 2: Real-world calculations through various types of tech tools.",
    "Teams must work collaboratively and handle instruments safely.",
    "Accuracy and precision in measurements will be prioritized in scoring.",
    "Participants must adhere to all lab safety guidelines.",
    "Misbehavior or mishandling of instruments may result in disqualification."
  ],
 
  contact: [
    "Event Coordinators:",
    "Ms Rashmi Dhaundiyal, Assistant Professor, EEE Department - 8077882886",
    "Ms Priyanka Chauhan, Assistant Professor, ECE Department - 8126328782"
  ]
},



"circuit-fab": {
  title: "Turboflux – Circuit Fabrication",
  category: "ECE",
  date: "November 13, 2025",
  time: "10:00 AM - 1:00 PM",
  venue: "Tula's Institute, Computer Lab & Digital Electronics Lab (E-401)",
  participants: "Teams of 2",
  prize: "Exciting Rewards",
  description: "Turboflux is an exciting departmental event of ECE & EEE designed to ignite innovation and practical learning among budding engineers. Participants will begin with virtual design and simulation of electronic circuits on the Tinkercad platform, testing their designs in a simulated environment. Once validated, these designs are implemented hands-on using real circuit components such as resistors, LEDs, switches, and breadboards. This two-stage approach bridges the gap between theory and practical application, enhancing participants’ understanding of circuit behavior, troubleshooting, and design optimization.",
  rules: [
    "Round 1: Filtration round (Visual Quiz) to test theoretical and conceptual understanding.",
    "Round 2: Circuit simulation in the online simulator Tinkercad; participants must validate their designs virtually.",
    "Round 3: Hardware implementation using breadboards or zero PCBs based on the simulated design.",
    "Teams must work collaboratively and handle all circuit components safely.",
    "Participants should ensure their designs function correctly before submission in each stage.",
    "Accuracy, creativity, and efficiency in design will be evaluated.",
    "Misbehavior, unsafe handling of components, or violation of lab rules may lead to disqualification."
  ],
  contact: [
    "Event Coordinators:",
    "Ms Sonam Rai, Assistant Professor, ECE Department - 8077882886",
    "Mr Rahul Negi, Assistant Professor, ECE Department - 6395490781"
  ]
},
"electro-maze": {
  title: "ElectroMaze",
  category: "ECE",
  date: "November 13-14, 2025",
  time: "10:00 AM - 3:00 PM",
  venue: "Tula's Ground, Tula's Institute",
  participants: "Open to all",
  prize: "Exciting Rewards",
  description: "Step into the world of ElectroMaze—a thrilling mix of engineering and adventure! Participants navigate a maze built from conductive pathways, switches, and light or sound signals, solving electrical puzzles and completing circuit challenges. Each correct connection lights up a segment, guiding them closer to the exit. Mistakes trigger alerts, requiring quick thinking and circuit-rewiring skills. This high-energy, hands-on race tests teamwork, circuit logic, and creative wiring in an electrifying dash from start to finish.",
  rules: [
    "Participants must navigate the maze using the provided conductive pathways, switches, and circuit components.",
    "Correct connections light up segments of the maze; incorrect connections trigger alerts and must be corrected promptly.",
    "Teams or individuals must complete all circuit challenges to successfully exit the maze.",
    "All handling of electrical components must be done safely; unsafe actions may result in disqualification.",
    "The event is timed; speed, accuracy, and problem-solving will determine the winners.",
    "Teamwork and coordination are essential; collaboration is encouraged where allowed."
  ],
  contact: [
    "Event Coordinators:",
    "Mr Rajkumar, Assistant Professor, EEE Department - 9119049001"
  ]
},
"agrimart": {
  title: "AgriMart",
  category: "Agriculture",
  date: "November 13–14, 2025",
  time: "11:00 AM – 4:00 PM",
  venue: "Tula's Institute, Department of Agriculture",
  participants: "Open for all",
  prize: "—",
  description:
    "AgriMart is a student-led initiative organized by the Department of Agriculture to promote practical learning, entrepreneurship, and community engagement in the agricultural sector. It serves as a platform for showcasing agricultural produce, innovative technologies, and value-added products developed by students and local farmers, bridging the gap between academic knowledge and real-world agricultural practices.",
  rules: [
    "Provide students with hands-on experience in agricultural marketing, value addition, and agribusiness management.",
    "Create awareness about local farm products, sustainable farming practices, and rural entrepreneurship.",
    "Encourage innovation and self-reliance among young agri-professionals.",
    "Exhibition and sale of value-added farm produce such as pickles, jams, chutneys, squashes, bio-fertilizers, candies, vegetable seedlings, and handmade agri-items.",
    "Maintain discipline during setup and interactions with visitors; respect all participants and faculty members."
  ],
  contact: [
    "Faculty Coordinators:",
    "Archit Priyadarshi - +91 9557237379",
    "Preeti Kumari - +91 9690789772"
  ]
},
"agri-quest": {
  title: "Agri-Quest – Know Your Tools, Seeds & Seedlings",
  category: "Agriculture",
  date: "November 14, 2025",
  time: "11:00 AM – 1:00 PM",
  venue: "Tula's Institute, Department of Agriculture",
  participants: "Open to all undergraduate students",
  prize: "—",
  description:
    "Agri-Quest empowers farmers, gardeners, and agricultural enthusiasts with practical knowledge about modern and traditional farming tools, quality seeds, and effective seedling management. The event bridges the gap between traditional practices and modern innovations, helping participants make informed decisions that enhance productivity, sustainability, and crop resilience.",
  rules: [
    "The event will consist of a quiz of 30 questions to be completed in 10 minutes.",
    "Evaluation is based on accuracy of responses.",
    "Participants must adhere to time limits; late submissions will not be considered.",
    "The quiz focuses on agricultural tools, seed quality, and sustainable farming practices.",
    "Live tool demos and seed showcases will be organized for hands-on learning.",
    "Participants are encouraged to interact with experts for Q&A sessions and guidance."
  ],
  contact: [
    "Faculty Coordinators:",
    "Dr. Rupinder Kaur",
    "Dr. Ankur",
    "Mrs. Shivani",
    "Mr. Shivendra Mishra"
  ]
},
"Mashroom": {
  title: "Skill Development Workshop on Mushroom Production and Entrepreneurship",
  category: "Agriculture",
  date: "November 14, 2025",
  time: "10:00 AM – 3:00 PM",
  venue: "Agricultural Research Farm, Tula’s Institute, Dehradun",
  participants: "Open to all students",
  prize: "Certificate of Participation",
  description:
    "This one-day hands-on workshop introduces participants to the fascinating world of mushroom cultivation, focusing on sustainable production, entrepreneurship, and modern cultivation techniques. Organized by the Department of Agriculture, Tula’s Institute in collaboration with Krishivan Research Centre, the workshop bridges theory and practice — equipping students, farmers, and aspiring entrepreneurs with practical knowledge and business insights in mushroom production.",
  rules: [
    "The workshop is open to all students and participants interested in sustainable agriculture.",
    "The session will include both theoretical and hands-on training in mushroom cultivation.",
    "Participants must attend all sessions to receive the certificate of participation.",
    "Proper discipline and adherence to safety guidelines during the practical demonstration are mandatory.",
    "Photography or recording during expert sessions requires prior permission.",
    "Participants are encouraged to actively engage in Q&A and discussion sessions."
  ],
  contact: [
    "Faculty Coordinators:",
    "Dr. Suresh Kumar (Department of Agriculture)",
    "Ms. Shambhavi Tiwari (Department of Agriculture)",
    "Organized by: Department of Agriculture, Tula’s Institute, Dehradun",
    "In Collaboration with: Krishivan Research Centre, Dhoolkot, Dehradun"
  ]
},
"nutritive-garden": {
  title: "Nutritive Kitchen Garden at Tula’s Agriculture Research Farm",
  category: "Agriculture",
  date: "November 13, 2025",
  time: "11:00 AM – 3:00 PM",
  venue: "Agriculture Research Farm, Tula’s Institute, Dehradun",
  participants: "Individual",
  prize: "Exciting Rewards",
  description:
    "The Nutritive Kitchen Garden initiative aims to enhance nutritional security and promote sustainable vegetable production through hands-on learning and practical demonstration. This garden will serve as a live laboratory for students, faculty, and local farmers—showcasing techniques in organic farming, resource efficiency, and eco-friendly production. It emphasizes the cultivation of nutrient-rich, pesticide-free produce while supporting education, research, and community engagement.",
  rules: [
    "Participants will assist in planning, layout, and establishment of the kitchen garden.",
    "Demonstrations will include crop rotation, organic composting, and irrigation management.",
    "All practices must adhere to eco-friendly and sustainable methods.",
    "Data collection on yield, cost, and resource usage will be maintained for future reference."
  ],
  contact: [
    "Faculty Coordinators:",
    "Dr. Mukesh Kumar, Department of Agriculture",
    "Dr. Suresh Kumar, Department of Agriculture"
  ]
},

"planting-competition": {
  title: "Planting Competition",
  category: "Agriculture",
  date: "November 14, 2025",
  time: "2:00 PM – 4:00 PM",
  venue: "Agriculture Research Farm, Tula’s Institute, Dehradun",
  participants: "Open to all students (individual participation)",
  prize: "Certificates for winners",
  description:
    "The Planting Competition aims to encourage environmental awareness and hands-on learning through practical planting activities. Participants will prepare soil, plant seedlings correctly, and maintain cleanliness and care throughout the competition. The event promotes sustainability, responsibility, and appreciation for nature while equipping students with essential gardening and soil management skills.",
  rules: [
    "Each participant competes individually.",
    "Minimum 5 participants are required for the event.",
    "Each participant will receive a plot, pot, or grow bag for planting.",
    "Time limit for planting: 3 minutes.",
    "Participants must properly prepare soil, plant seedlings at the correct depth and spacing, and label their plots.",
    "No external help is allowed during the competition.",
    "Cleanliness and safety must be maintained at all times.",
    "Judges will evaluate participants during and after the event based on set criteria."
  ],
 
  contact: [
    "Faculty Coordinators:",
    "Mr. Ashish Upadhyay, Department of Agriculture",
    "Dr. Shivangi Negi, Department of Agriculture",
    "Dr. Prem Singh Verma, Department of Agriculture",
    
    
  ]
},




  };

  // ✅ Safely fetch event data
  const event = eventDetails[id as string] || eventDetails["cad-mad"];

  return (
    <div className="min-h-screen">
      <SEO
        title={`${event.title} - Utkrisht 2025 | Event Details`}
        description={`${event.description} ${event.category} event on ${event.date}. Prize: ${event.prize}. Register now!`}
        keywords={`${event.title}, ${event.category}, tech competition, ${id}, event details`}
      />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link to="/events" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Events
          </Link>

          {/* Event Header */}
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-8 animate-fade-in">
            <div className="h-3 bg-gradient-to-r from-primary to-secondary" />

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  {event.category}
                </span>
                <span className="px-4 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                  Prize: {event.prize}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-6">{event.title}</h1>

              <p className="text-lg text-muted-foreground mb-8">
                {event.description}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="text-primary" size={20} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="text-primary" size={20} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="text-primary" size={20} />
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="text-primary" size={20} />
                  <span>{event.participants}</span>
                </div>
              </div>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9-4Zy_i23aE0xzXDcwuTKZ4aZ32vl0VwEOFi-NLazDhGMEQ/viewform">
                <Button variant="hero" size="lg" className="w-full md:w-auto">
                  Register for this Event
                </Button>
              </a>
            </div>
          </div>

          {/* Rules */}
          {event.rules && (
            <div className="bg-card border border-border rounded-lg p-8 mb-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="text-primary" size={24} />
                Rules & Regulations
              </h2>
              <ul className="space-y-2">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
 {event.contact && (
            <div className="bg-card border border-border rounded-lg p-8 mb-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="text-primary" size={24} />
                Contact Information
              </h2>
              <ul className="space-y-2">
                {event.contact.map((contact, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{contact}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
      
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
