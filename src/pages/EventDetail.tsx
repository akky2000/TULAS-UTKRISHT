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







"unlocking-engine-secrets": {
  title: "Unlocking Engine Secrets",
  category: "MECHANICAL",
  date: "November 13, 2025",
  time: "11:00 AM onwards",
  venue: "Mechanical Workshop, Tula's Institute",
  participants: "Teams of 4–5 members",
  prize: "Trophies & Certificates for Top 3 Winners",
  description:
    "Get ready to explore the core of mechanical engineering! The Assembly and Disassembly of IC Engine event offers a hands-on experience where participants will dismantle and reassemble an internal combustion engine, understanding each component’s function and mechanism. This workshop bridges theory with real-world mechanical practice.",
  rules: [
    "Teams must report 15 minutes before the scheduled start time.",
    "All participants must wear safety gear (gloves, shoes, goggles).",
    "Careful handling of tools and components is mandatory.",
    "Latecomers or unsafe practices will lead to disqualification.",
    "Judges' decisions are final and binding."
  ],
  contact: [
    "Mr. Anurag Bahuguna - +91 8126028009",
    "Mr. Manoj Singh - +91 8958562630",
    "Mr. Shivam Raturi - +91 8126453950",
    "Mr. Kushagra Sharma - +91 9045014351",
    "Mr. Vivek Mishra - +91 7061926650",
    "Mr. Deepanshu Raj - +91 7857872631"
  ],
},


"doctor-driving": {
  title: "Doctor Driving (Traffic Track & Symbol Scan)",
  category: "GENERAL / MECHANICAL",
  date: "November 13, 2025",
  time: "11:00 AM – 2:00 PM",
  venue: "Cricket Ground, Tula's Institute",
  participants: "Open to all students (Individual participation)",
  prize: "Trophies & Certificates for Top 3 Winners",
  description:
    "Doctor Driving is an exciting and educational event designed to test participants’ driving skills, awareness of traffic symbols, and knowledge of road safety rules — all in a fun and controlled environment. The event promotes safe driving habits through an engaging track-based challenge using bicycles.",
  rules: [
    "Participants must attend the briefing session before the event begins.",
    "Ignoring signs or hitting track edges will lead to penalties.",
    "All participants must maintain discipline throughout the event.",
    "Judges' decisions will be final and binding."
  ],
  contact: [
    "Mr. Satish Kumar - +91 7895351268",
    "Mr. Amit Morya - +91 9997322591",
    "Mr. Himanshu Kala - +91 9410969386",
    "Mr. Devang Tomar - +91 9389840278",
    "Mr. Arman Kumar - +91 9334545709",
    "Mr. Nakib Raza - +91 8178972765"
  ],
},

"poster-presentation": {
  title: "Poster Presentation",
  category: "GENERAL / MULTIDISCIPLINARY",
  date: "November 14, 2025",
  time: "10:00 AM – 1:00 PM",
  venue: "In front of Library, Tula's Institute",
  participants: "Individual / Team of up to 3 members",
  prize: "Certificates & Recognition for Best Posters",
  description:
    "Poster Presentation is an intellectually stimulating event of Utkrisht that offers students a platform to showcase their innovative ideas, research insights, and creativity through visually engaging posters. Participants will present their work on themes related to science, technology, innovation, environment, and society — highlighting analytical thinking, creativity, and communication skills.",
  rules: [
    "Participants can participate individually or in teams of up to 3 members.",
    "Posters must be original and relevant to chosen themes.",
    "All presentations must be completed within the given time slot.",
    "Judges’ decisions will be final and binding.",
    "Participants must maintain discipline and professional behavior."
  ],
  contact: [
    "Dr. Rachna Sharma - +91 9465777388",
    "Dr. Amisha Khati - +91 8958418844"
  ],
},


"war-of-words": {
  title: "War of Words",
  category: "GENERAL / MULTIDISCIPLINARY",
  date: "November 13, 2025",
  time: "11:00 AM – 2:00 PM",
  venue: "Seminar Hall (Block C), Tula's Institute",
  participants: "Team of 3 Students",
  prize: "Certificates & Recognition for Best Speakers",
  description:
    "War of Words is an engaging inter-departmental Extempore competition that tests participants’ ability to think on their feet and express their thoughts clearly on the spot. The event promotes confidence, communication skills, and critical thinking by encouraging students to speak spontaneously on diverse topics, fostering clarity, creativity, and poise in public speaking.",
  rules: [
    "Participants must form teams of 3 students from any department.",
    "Each participant will receive a random topic and must begin speaking within 1 minute of preparation.",
    "Speaking time per participant will be 2–3 minutes.",
    "Judges’ decisions will be final and binding.",
    "Participants must maintain discipline and professionalism during the event."
  ],
  contact: [
    "Ms. Shalini Binjola - +91 9759067727",
    "Ms. Riya Dariyal - +91 8279964438"
  ],
},



"pottery-demonstration": {
  "title": "Pottery Demonstration & Training",
  "category": "AGRI",
  "date": "November 13 , 2025",
  "time": "2:00 PM - 5:00 PM ",
  "venue": "Agri Dept.",
  "participants": "Open for all students (Beginner to Advanced)",
  "prize": "Certificates for Participants",
  "description":
    "A pottery demonstration showcasing the foundational techniques of creating a vessel on a potter's wheel. The session highlights the transformation of simple clay (earth and water) into a functional art piece through skill and heat (fire and air). This hands-on training offers an immersive experience for participants to learn forming processes and shaping techniques under expert guidance.",
  "rules": [
    "Participants must register before the event date.",
    "All materials required for pottery will be provided at the venue.",
    "Participants should follow safety instructions during the demonstration.",
    "Judges’ and instructors’ decisions will be final.",
    "Participants are advised to wear comfortable clothing suitable for clay work."
  ],
  "contact": [
    "Dr Sanjay Sharma (9411138838)",
     "Mr Pankaj Negi ( 9760805826)"
    
  ]
},
"investors-den": {
  "title": "Investors Den",
  "category": "GSB",
  "date": "November 13, 2025",
  "time": "4 Hours (Starting 11:00 AM)",
  "venue": "F-404 Smart Class, Tula's Institute",
  "participants": "Team of 3 Students (Open to all UG/PG)",
  "prize": "Trophies & Certificates for Top Teams",
  "description":
    "Investors Den is a Shark Tank-inspired entrepreneurship challenge where teams pitch innovative startup ideas, build low-cost prototypes, and perform live brand campaigns before mock investors. The event develops creativity, business acumen, pitching confidence, and teamwork — empowering students to become future founders and innovators.",
 
  "rules": [
    "Teams of 3 students from UG/PG programs.",
    "Pitch deck to be emailed in advance to varun@tulas.edu.in.",
    "Top 10 teams qualify after Round 1; Top 5 reach the final.",
    "No digital tools allowed in Round 3 — only creativity & storytelling.",
    "Judges’ decisions will be final and binding."
  ],
  "contact": [
    "Mr. Varun Singh - Faculty Coordinator",
    "Ms. Sakshi Shahi - Faculty Coordinator",
    "Mr. Shivanshu Baluni - B.COM 2nd Year",
    "Ms. Kanishka - BBA 1st Year",
    "Mr. Saurabh - MBA 1st Year"
  ]
},

"finance-tambola": {
  "title": "Finance Tambola – Play. Learn. Invest.",
  "category": "GSB",
  "date": "November 13, 2025",
  "time": "11:00 AM – 1:00 PM",
  "venue": "F-402, Tula’s Institute",
  "participants": "Individual Participation (Open to all GSB Students)",
  "prize": "Attractive Prizes & Certificates for Winners and Active Participants",
  "description":
    "Finance Tambola – Play. Learn. Invest. is an engaging and interactive financial literacy event designed to promote financial awareness among students through a fun, pictorial learning experience. It combines entertainment and education, helping participants understand key financial concepts like investment, savings, taxation, and budgeting in an enjoyable and memorable way.",
  "rules": [
    "Event will be conducted offline at Tula’s Institute (F-402).",
    "Individual participation only; open to all GSB students.",
    "The event will have 2 rounds lasting a total of 2 hours.",
    "Tambola grids will include finance-related visuals and concepts.",
    "Evaluation will be based on accuracy of answers, active participation, and timely completion.",
    "Participants must maintain discipline and sportsman spirit throughout the event.",
    "Organizers’ and judges’ decisions will be final."
  ],
  "contact": [
     "Faculty Coordinators: Mr. Ayush Nautiyal, Ms. Monalsha Chand",
    "Student Coordinators: Ms. Neha Bhagat, Ms. Kanupriya"
  ]
},

"brand-in-a-blink": {
  "title": "Brand in a Blink",
  "category": "GSB",
  "date": "November 14, 2025",
  "time": "11:00 AM – 1:00 PM",
  "venue": "Room No. F-404, Tula’s Institute",
  "participants": "Team Participation (4 members per team, Open to all GSB Students)",
  "prize": "Prizes and Certificates for Winners and Participants",
  "description": "Brand in a Blink is an interactive branding and marketing event organized under UTKRISHT – ‘The Creative Edge’ by the Marketing Club, Graduate School of Business. It challenges participants to identify popular brands through logos, taglines, and visuals shown briefly on screen, promoting quick thinking and brand awareness in an exciting way.",
  "rules": [
    "Teams of 4 members will participate.",
    "Each team will watch a 60-second video containing brand visuals or logos.",
    "Teams must identify the correct brand, company, or product within the time limit.",
    "Points will be awarded based on accuracy and response speed.",
    "Judges’ decisions will be final and binding."
  ],
  "contact": [
    "Ms. Garima Sharma - Faculty Coordinator",
    "Ms. Sarah Parveen - Faculty Coordinator",
    "Surabhi - BBA 2nd Year, Sec-C",
    "Mazhar Imam - BBA 3rd Year",
    "Anchal Negi - BBA 1st Year"
  ]
},

"peoples-pulse": {
  "title": "People’s Pulse – A Signature HR Learning Extravaganza",
  "category": "GSB",
  "date": "November 14, 2025",
  "time": "Half-Day Event (Approx. 4–5 Hours)",
  "venue": "Tula’s Institute (On-Campus)",
  "participants": "Open to MBA/BBA Students (Teams of 2–3)",
  "prize": "Certificates & Prizes for Winners and Finalists",
  "description": "People’s Pulse is a flagship HR learning event designed to engage participants in real-world human resource management challenges. Through interactive rounds like HR Quiz War, Case Crackers, and Ad Design Showdown, students experience the strategic importance of HR while applying creativity, ethics, and analytical thinking to solve dynamic business challenges.",
  "rules": [
    "Event will be conducted offline on-campus.",
    "Participants can register in teams (2–3 members).",
    "Round 1: HR Quiz War – Pen-paper + buzzer round on HR laws, analytics, and ethics.",
    "Round 2: Case Crackers – On-the-spot HR case with limited preparation and presentation time.",
    "Round 3: Ad Design Showdown – Create a recruitment campaign using given materials only.",
    "No electronic devices allowed after case reveal.",
    "Solutions must align with HR ethics and feasibility.",
    "Jury’s decision will be final and binding."
  ],
  "contact": [
    "Ms. Manya Chugh Sharma - Faculty Coordinator",
    "Ms. Akansha Gautam - Faculty Coordinator",
    "Ms. Afsha Naaz - MBA 1st Year",
    "Ms. Sidhhim Paliwal - MBA 1st Year"
  ]
},

"techmanthan": {
  "title": "TechManthan – Ideas for Viksit Bharat",
  "category": "CSE",
  "date": "To Be Announced",
  "time": "To Be Announced",
  "venue": "To Be Announced",
  "participants": "Individual or Team Participation",
  "prize": "Certificates & Recognition for Best Ideas",
  "description": "TechManthan – Ideas for Viksit Bharat is an engaging and intellectually stimulating event designed to empower young minds to think, speak, and innovate for the nation’s technological growth. The event provides a platform for students to act as youth representatives, presenting their ideas and solutions that can contribute to building a Viksit Bharat (Developed India). Each participant or team will deliver a 2-minute speech focusing on innovative uses of technology for social and economic development, identifying existing gaps in current technological adoption, and proposing actionable ideas or solutions for national progress.",
  "rules": [
    "Each participant or team will deliver a 2-minute speech.",
    "Speech must focus on innovative technological ideas for national development.",
    "Participants must present original ideas and avoid plagiarism.",
    "Judges’ decision will be final and binding.",
    "Participants should maintain decorum and professionalism."
  ],
  "contact": [
    "Faculty Coordinators: To Be Announced",
    "Student Coordinators: To Be Announced"
  ]
},

"reel-o-tech": {
  "title": "Reel-O-Tech",
  "category": "CSE",
  "date": "13 NOV",
  "time": "12:00 AM onwards",
  "venue": "To Be Announced",
  "participants": "Individual or Team (up to 3 members)",
  "prize": "Awards for Best Creative Reel, Most Relatable/Fun Reel & Best Editing/Technical Reel; e-Certificates for all participants",
  "description": "Reel-O-Tech is a techno-creative event that encourages students to showcase their imagination, innovation, and storytelling skills through short reels (60–90 seconds). Participants will create engaging and original videos highlighting aspects of technology, innovation, or campus life. Shortlisted reels will be screened and judged on creativity, originality, and audience impact.",
  "rules": [
    "Participants can register individually or in teams of up to 3 members.",
    "Each team must create one reel based on the revealed theme.",
    "All team members must be enrolled students of the institution.",
    "Cross-branch participation is allowed.",
    "Each team must bring its own smartphone or recording device.",
    "Creation Time: 1–2 hours (on the spot). Screening & results in 1 hour.",
    "Reels must be 60–90 seconds long and submitted before the deadline.",
    "Participants may use AI-based tools such as Pika Labs, Runway ML, Synthesia, Descript, CapCut, Veed.io, ElevenLabs, LALAL.AI, or InShot.",
    "Editing, filters, captions, and background music are allowed.",
    "Content must be original, appropriate, and non-offensive.",
    "Plagiarized or inappropriate content will lead to disqualification.",
    "Participants must adhere to the event schedule and conduct professionally.",
    "The organizing committee’s decision will be final."
  ],
  "contact": [
    "Faculty In-Charge: To Be Announced",
    "Event Coordinators: To Be Announced",
    "Student Volunteers: To Be Announced"
  ]
},

"techfusion": {
  "title": "TechFusion: Build, Predict & Secure",
  "category": "CSE",
  "date": "To Be Announced",
  "time": "Full-Day Event (~6–8 Hours)",
  "venue": "Tula’s Institute, Dehradun – CSE Department",
  "participants": "Open to undergraduate and postgraduate students from Computer Science, IT, and allied disciplines (Team size: 1–4 members)",
  "prize": "Overall Winner, Best Innovation Award, Best AI/ML Solution, and Best Cybersecurity Skill. Certificates for all participants.",
  "description": "TechFusion: Build, Predict & Secure is a multidisciplinary technical competition that brings together the domains of software development, artificial intelligence, and cybersecurity. Participants engage in three dynamic challenges — Build (Prototype/App Development), Predict (AI/ML Model), and Secure (Cybersecurity Challenge) — to showcase innovation, analytical skills, and teamwork.",
  "rules": [
    "Teams can participate in one, two, or all three components — Build, Predict, and Secure.",
    "Each component has separate evaluation criteria; the overall winner is based on cumulative scores.",
    "Team size: 1–4 members (inter-department teams allowed).",
    "All work must be original; plagiarism or copied solutions lead to disqualification.",
    "Use of open-source tools and datasets is allowed with proper citation.",
    "Participants must follow ethical hacking practices during the Secure challenge.",
    "Teams must submit abstracts for Build and Predict components at registration.",
    "Judges’ decisions will be final and binding.",
    "Internet and power facilities will be provided; participants should bring their own laptops.",
    "Any misconduct or unethical behavior may result in disqualification."
  ],
  "contact": [
    "Mr. Mohit Saini - Faculty Coordinator (9759581657)",
    "Mr. Sanjeev Gupta - Faculty Coordinator (9457467374)",
    "Mr. Shivam Pandey - Faculty Coordinator (7017944688)"
  ]
},




"coderush": {
  "title": "CodeRush – Crack the Code. Beat the Clock.",
  "category": "CSE",
  "date": "Tuesday, 4th November 2025",
  "time": "11:00 AM – 1:00 PM (2 Hours)",
  "venue": "Online (GeeksforGeeks Platform)",
  "participants": "Open to all undergraduate students (individual participation)",
  "prize": "Trophies & Certificates for Top 3 Winners; Sponsored Goodies from GeeksforGeeks and ACM Student Chapter",
  "description": "CodeRush is a premier inter-college coding contest that tests participants’ logical reasoning, problem-solving ability, and coding efficiency. Organized in collaboration with GeeksforGeeks and supported by ACM Student Chapter, the event aims to foster a competitive programming culture while recognizing top coding talent across campuses.",
  "rules": [
    "Total of 4 coding questions: 2 Easy, 1 Medium, and 1 Hard.",
    "Contest duration is 2 hours.",
    "Evaluation based on accuracy, efficiency, and total time taken.",
    "Individual participation only.",
    "Event will be conducted on GeeksforGeeks platform.",
    "Judging Criteria:",
    "• Code Correctness – 40%",
    "• Time & Space Efficiency – 25%",
    "• Problem Solving Approach – 20%",
    "• Code Quality – 10%",
    "• Speed of Submission – 5%",
    "Top 3 performers will receive trophies and certificates.",
    "All participants must adhere to fair coding practices.",
    "Decisions made by the judging panel will be final and binding."
  ],
  "contact": [
    "Faculty Coordinator: Dr. Ritu Pal",
    "Student Coordinator: Abhishek Maurya",
    "Student Coordinator: Devanshu Purohit",
    "Student Coordinator: Abhinav Singhal"
  ]
},


"soap-making-activity": {
  "title": "Soap Making Activity",
  "category": "PHARMACY",
  "date": "N/A",
  "time": "N/A",
  "venue": "Pharmaceutics Laboratory, Tulas Institute of Pharmacy",
  "participants": "Pharmacy students of Tulas Institute",
  "prize": "N/A",
  "description": "The Department of Pharmacy, Tulas Institute of Pharmacy, organized a Soap Making Activity as part of a practical learning and skill development initiative. The activity aimed to provide hands-on experience in soap formulation and preparation, focusing on the application of Pharmaceutical Chemistry and Pharmaceutics concepts. Students learned the saponification process, ingredient selection, quality control, and creativity in product design. Under faculty guidance, they prepared customized soaps using natural ingredients such as coconut oil, castor oil, aloe vera, and neem. The activity promoted innovation, teamwork, and awareness of eco-friendly formulations.",
  "rules": [
    "Understand and apply the process of saponification.",
    "Use safe and approved ingredients for formulation.",
    "Maintain cleanliness and safety during preparation.",
    "Ensure creativity in design and fragrance selection."
  ],
  "contact": [
    "Ms. Priyanka Gupta",
    "Ms. Yati Gaur (Spokesperson)"
  ]
},


"anatomical-3d-model-making": {
  "title": "Anatomical 3D Model Making",
  "category": "PHARMACY",
  "date": "N/A",
  "time": "N/A",
  "venue": "Human Anatomy and Physiology Laboratory, Tula’s Institute of Pharmacy",
  "participants": "Pharmacy students of Tula’s Institute",
  "prize": "N/A",
  "description": "The Department of Pharmacy, Tula’s Institute of Pharmacy, organized an Anatomical 3D Model Making Activity aimed at enhancing students’ understanding of human anatomy through hands-on experience. Participants created detailed three-dimensional models of anatomical structures to visualize and comprehend complex body systems. The activity encouraged teamwork, creativity, and innovation while improving spatial and visual learning skills.",
  "rules": [
    "Each participant or team must design and construct a 3D anatomical model.",
    "Models should accurately represent human anatomical structures.",
    "Participants may use both electrical and non-electrical tools.",
    "Maintain safety and follow laboratory protocols during the activity.",
    "Originality and clarity of structure presentation will be key evaluation factors."
  ],
  "contact": [
    "Miss Neha Kumari (Activity Coordinator)",
    "Miss Yati Gaur (Spokesperson)"
  ]
},
"echo": {
  "title": "ECHOES OF TALENT 2.O",
  "category": "FUN ACTIVITY",
  "date": "Thursday, 13th November 2025",
  "time": "02:00 PM – 5:00 PM (3 Hours)",
  "venue": "Open Ground Near Tendulkar’s Pavilion",
  "participants": "Open to all students",
  "prize": "TBA",
  "description": "Echoes of Talent 2.O is a vibrant cultural showcase that celebrates the creativity and passion of students. The event provides an open platform for participants to express themselves through singing, dancing, acting, stand-up comedy, and other performing arts. It aims to inspire confidence, highlight individuality, and create a joyful atmosphere of artistic expression and entertainment.",
  "rules": [
  "The event is open to all students of the institution.",
  "Participants can register individually or in groups depending on the performance type.",
  "Each participant or group can perform in only one category — Singing, Dancing, Acting, or Other Talents.",
  "Each performance must strictly adhere to the time limit of 1–3 minutes.",
  "Exceeding the time limit may result in deduction of marks or disqualification.",
  "All performances must maintain decency and respect; offensive language, gestures, or content are strictly prohibited.",
  "Microphones, speakers, and a basic sound setup will be provided at the venue.",
  "Judging will be based on Talent/Skill, Creativity, Stage Presence, Entertainment Value, and Overall Impact.",
  "The decision of the judging panel will be final and binding.",
  "Top performers will receive certificates of recognition; special mentions may be awarded for exceptional acts.",
],

  "contact": [
    "Ms. Divya Negi(Faculty Coordinator)",
    "Mr. Siddharth Sharma(Faculty Coordinator)",
    "Mr. Ayush chandrol (Faculty Coordinator)"
  ]
},

"escape": {
  "title": "ESCAPE ROOM   2.0",
  "category": "CA",
  "date": "13th November 2025",
  "time": "02:00 PM – 5:00 PM (3 Hours)",
  "venue": "Lab 2/Lab 3",
  "participants": "Open to CA/CSE students",
  "prize": "Certificates and prizes",
  "description": "Echoes of Talent 2.O is a vibrant cultural showcase that celebrates the creativity and passion of students. The event provides an open platform for participants to express themselves through singing, dancing, acting, stand-up comedy, and other performing arts. It aims to inspire confidence, highlight individuality, and create a joyful atmosphere of artistic expression and entertainment.",
  "rules": [
  "The event is open to students from the CA and CSE departments only.",
  "Participants can register individually or in teams as specified.",
  "The event will consist of three phases, each increasing in difficulty and complexity.",
  "Participants must clear each phase to qualify for the next round.",
  "Phase 1 will include Quantitative Aptitude, Logical Reasoning, and Technical Puzzles.",
  "Phase 2 will test analytical thinking through Sudoku or Crossword solving.",
  "Phase 3, titled 'Swap the Coat, Fix the Code', will evaluate coding ability and debugging skills.",
  "The total number of questions across all phases will be approximately 30+01+03 (subject to change).",
  "The total duration of the competition will be 2 hours.",
  "Evaluation will be based on accuracy, efficiency, and total time taken to complete all challenges.",
  "Participants must submit answers within the given time limits; late submissions will not be considered.",
  "The event will be conducted on designated digital platforms such as Google Classroom and Canvas LMS.",
  "Use of the internet or external help during the competition is strictly prohibited unless explicitly allowed.",
  "Teams will progress to the next level only after successfully completing the qualifying criteria for the previous round.",
  "Judging criteria will include correctness of code (60%), code quality (20%), and speed of submission (20%).",
  "In case of a tie, submission time will be used as the deciding factor.",
  "Participants must maintain discipline, integrity, and fair play throughout the event.",
  "Any form of malpractice or violation of rules will result in immediate disqualification.",
  "The decision of the judges and faculty coordinators will be final and binding.",
  "Certificates and prizes will be awarded to top-performing participants or teams.",
  "Participants are encouraged to approach challenges collaboratively and demonstrate logical and innovative thinking."
],

  "contact": [
    "Mr. Mohd Mursleen(Faculty Coordinator)",
    "Ms. Payal Manwal(Faculty Coordinator)",
    "Ms. Hemlata Gairola (Faculty Coordinator)"
  ]
},

"battle of thoughts": {
  "title": "BATTLE OF THOUGHTS",
  "category": "CA",
  "date": "14th November 2025",
  "time": "1:00 PM – 4:00 PM (3 Hours)",
  "venue": "P-801 (Pharmacy Block)",
  "participants": "Open to all Undergraduate and Graduate students",
  "prize": "Certificates and prizes",
  "description": "Battle of Thoughts is a formal debating competition where participants speak for or against a given topic, present logical arguments, counter opponents’ statements, and convince judges with strong reasoning, clarity, and confidence. The event aims to develop communication skills, critical thinking, leadership, and the ability to think under pressure.",
  "rules": [
    "The event is open to all undergraduate and graduate students.",
    "Participants can register individually or as a team, as per the event format.",
    "Each participant or team will be assigned a topic and must speak either for or against it.",
    "Speeches must be well-structured, logical, and relevant to the given topic.",
    "Participants must present arguments supported by facts, data, or real-life examples.",
    "Rebuttals should be logical, respectful, and directly address the opponent’s statements.",
    "Reading directly from paper or mobile phones is discouraged; natural delivery is expected.",
    "Participants must maintain respectful behavior toward opponents and judges.",
    "Each speaker must adhere to the time limit specified by the organizers.",
    "Use of offensive, discriminatory, or inappropriate language will lead to disqualification.",
    "Judging will be based on Content & Argument Strength (30%), Clarity & Communication (20%), Rebuttal Skills (20%), Presentation & Body Language (15%), Time Management (10%), and Team Coordination (5%).",
    "Participants should maintain eye contact, confident posture, and proper stage presence.",
    "All speeches must be original and plagiarism-free.",
    "Equal participation and coordination are mandatory in team debates.",
    "The decision of the judges will be final and binding.",
    "Winners will receive certificates and prizes in recognition of their performance.",
    "Participants are encouraged to demonstrate logical reasoning, respectful disagreement, and confidence throughout the event."
  ],
  "contact": [
    "Mr. Akhilesh Pandey (Faculty Coordinator)",
    "Mr. Anand Ojha (Faculty Coordinator)",
    "Mohit (Student Coordinator) - 8755115115",
    "Bhavesh Joshi (Student Coordinator) - 8755115115"
  ]
},

"the big": {
  "title": "THE BIG BALLOON SHOW",
  "category": "FUN ACTIVITY",
  "date": "13th November 2025",
  "time": "11:00 AM – 2:00 PM (3 Hours)",
  "venue": "Near Auditorium",
  "participants": "Open to all students",
  "prize": "Certificates and prizes",
  "description": "The Big Balloon Show is a creative and interactive event designed to celebrate imagination, teamwork, and artistic expression. In this activity, participants collaboratively create a vibrant 'Tree of Growth' using colorful balloons. The event symbolizes unity, growth, and the boundless potential to rise higher together, promoting creativity, joy, and collective achievement.",
  "rules": [
    "The event is open to all students across departments.",
    "Participants will form small teams as per organizer instructions.",
    "Each team will be provided with balloons and basic decorative materials by the organizers.",
    "Teams must design and construct a creative 'Tree of Growth' entirely using balloons within the given time limit.",
    "The balloon structure should be self-supporting and stable.",
    "Teams are encouraged to use innovative color combinations, decorations, and designs.",
    "External materials other than those provided by the organizers are not allowed unless permitted.",
    "Participants must complete their design within the allotted 3-hour duration.",
    "The final display must remain intact until the end of the event for evaluation and photography.",
    "Teams are expected to maintain cleanliness and handle materials responsibly.",
    "Judging will be based on the Height of the Balloon Tree (60%) and Creativity & Decoration (40%).",
    "All decisions by the judges and event coordinators will be final and binding.",
    "Participants must maintain discipline and cooperative behavior throughout the event.",
    "Damaging event property or causing disturbance will lead to disqualification.",
    "Certificates and prizes will be awarded to the top-performing teams.",
    "The event aims to encourage creativity, teamwork, and the spirit of unity among participants."
  ],
  "contact": [
    "Mrs. Apoorva Talwar (Faculty Coordinator)",
    "Mr. Devendra Sood (Faculty Coordinator)",
    "Ms. Ananya Sharma (Faculty Coordinator)",
    "Anivesh (Student Coordinator) - 9523467896",
    "Adishty (Student Coordinator) - 8406000095"
  ]
},

"bgmi-tournament": {
  "title": "BATTLEGROUNDS MOBILE INDIA (BGMI) TOURNAMENT",
  "category": "CENTERSTAGE",
  "date": "29th November 2024",
  "time": "4:00 PM – 10:00 PM",
  "venue": "Lab 1 and Lab 4",
  "participants": "Team participation (maximum 4 members per team)",
  "prize": "Total Prize Pool ₹30,000 (1st – ₹15,000, 2nd – ₹7,000, 3rd – ₹5,000, MVP – ₹1,000, Most Eliminations – ₹1,000, Iconic Moment – ₹1,000)",
  "description": "Join us for an exciting BGMI (Battlegrounds Mobile India) tournament at the college Tech Fest ‘UTKRISHT’! Compete against the best teams, showcase your skills, and battle for thrilling prizes. Whether you're a seasoned player or a newcomer, this is your chance to experience the adrenaline rush of one of India's most popular mobile games.",
  "rules": [
    "Only registered players are eligible to participate.",
    "Each team can have a maximum of 4 members.",
    "Players must be present at the venue before the match begins.",
    "Teams arriving late will be eliminated from the match.",
    "Use of third-party or unauthorized apps is strictly prohibited.",
    "Any form of cheating will lead to immediate disqualification of the entire team.",
    "Participants must bring their own mobile devices and accessories.",
    "No restrictions on device brands or models, but players are responsible for their equipment.",
    "Players must ensure stable internet connectivity for smooth gameplay.",
    "Any kind of misbehavior or verbal abuse towards other teams or organizers will lead to penalties.",
    "Respect college property and maintain discipline within the venue.",
    "Damaging college infrastructure will lead to immediate disqualification and disciplinary action.",
    "Organizers hold the right to modify rules or match formats if required.",
    "The decision of the judges and event coordinators will be final and binding.",
    "Fair play, teamwork, and professionalism are expected throughout the tournament."
  ],
  "contact": [
    "Mr. Sharad partap Singh",
    "Mr Girish Singh Bisht"
  ]
},

"tradex": {
  "title": "TRADE-X",
  "category": "CENTERSTAGE",
  "date": "13th November 2025",
  "time": "9:30 AM – 3:30 PM (6 Hours)",
  "prize": "Cash prizes",
  "venue": "GSB department",
  "participants": "Open to all students",
  "description": "The Live Intraday Trading Competition offers participants a real-time stock market experience using virtual capital and live market data. Conducted during the Tech Fest, it challenges participants to demonstrate their analytical thinking, risk management, and decision-making skills in a simulated trading environment. The competition provides practical exposure to financial markets and investment strategies while fostering financial literacy and confidence among students.",
  "rules": [
    "Each participant will be provided with a fixed amount of virtual capital to trade during the event.",
    "All trading must be conducted exclusively on the authorized B-School Bulls platform.",
    "Trading is allowed strictly within the designated 6-hour window (9:30 AM – 3:30 PM).",
    "Participants are prohibited from using external trading tools, bots, or third-party assistance.",
    "Any attempt to manipulate or disrupt the trading environment will lead to disqualification.",
    "Portfolio performance will be monitored and verified by the coordinators in real-time.",
    "Evaluation will be based on profit/loss and overall return on virtual capital at the end of the session.",
    "In the event of a tie, decision-making quality and risk management strategy may be considered.",
    "Participants must maintain decorum and comply with all coordinator instructions.",
    "Any violation of the rules or unethical conduct will result in immediate disqualification."
  ],
  "contact": [
    "Ms. Neetika Gupta (Faculty Coordinator)",
    "Mr. Prakash Bhatnagar (Faculty Coordinator)",
    "Adarsh Negi (Student Coordinator)",
    "Ankit Kumar (Student Coordinator)",
    "Namira Ansari (Student Coordinator)"
  ]
},

"auction": {
  "title": "TULA’S AUCTION LEAGUE",
  "category": "CENTERSTAGE",
  "date": "13th November 2025",
  "time": "10:00 AM – 6:00 PM (8 Hours)",
  "venue": "Tula’s Institute Campus",
  "participants": "Open to all Tula’s students (Individual Registration)",
  "prize": "Certificates and prizes to top performers",
  "description": "Tula’s Auction League is a unique and dynamic event that blends the excitement of cricket with the strategic intensity of a live player auction. Inspired by the IPL format, participants take part in an engaging process of team creation through bidding and budget management. This innovative format promotes sportsmanship, leadership, and decision-making while offering a fun and interactive learning experience for all participants.",
  "rules": [
    "The event is open exclusively to students of Tula’s Institute.",
    "Participants must register individually using the QR code provided by the organizers.",
    "The competition will be conducted in 3 rounds with distinct challenges and themes.",
    "Round 1 will consist of 25 questions focusing on analytical and logical skills.",
    "Round 2 will include 20 questions testing decision-making and strategic thinking.",
    "Round 3 will simulate a live auction experience involving team selection and management.",
    "Evaluation will be based on accuracy, efficiency, and total time taken across all rounds.",
    "Teams formed through the auction will compete in cricket matches as per event schedule.",
    "Participants must adhere to the time limits and guidelines provided by coordinators.",
    "Any form of misconduct, argument, or violation of fair play will lead to disqualification.",
    "All results and decisions made by judges or event coordinators will be final and binding.",
    "Participants are expected to maintain discipline, sportsmanship, and decorum throughout the event.",
    "College property and event materials must be handled responsibly.",
    "The organizers reserve the right to modify the rounds or structure if required.",
    "Certificates and prizes will be awarded to the top-performing teams and individuals."
  ],
  "contact": [
    "Dr. Abdal Ahmed (Faculty Coordinator)",
    "Ms. Kajal Chatri (Faculty Coordinator)",
    "Sajal Mittal (Student Coordinator)",
    "Sneha Singh (Student Coordinator)",
    "Sourav Rawat (Student Coordinator)",
    "Afsha Naaz (Student Coordinator)",
    "Pankaj Kalakoti (Student Coordinator)",
    "Neha Bhagat (Student Coordinator)",
    "Siddhim Paliwal (Student Coordinator)",
    "Priyanka Kumari (Student Coordinator)",
    "Ayushi Priya (Student Coordinator)"
  ]
},

"turtle race": {
  "title": "TURTLE RACE",
  "category": "FUN ACTIVITY",
  "date": "14th November 2025",
  "time": "2:00 PM – 5:00 PM",
  "venue": "Basketball Ground",
  "participants": "Individual Participation (Open to all students)",
  "prize": "Certificates and prizes for winners",
  "description": "Turtle Race is a fun-filled and thrilling event designed to test participants’ balance, control, and patience. Unlike traditional races focused on speed, this challenge rewards the slowest and most steady rider who crosses the finish line without losing balance or control. It’s an event of focus, endurance, and composure — where slow and steady truly wins the race.",
  "rules": [
    "Each participant must ride their bicycle as slowly as possible without stopping or losing balance.",
    "The winner will be the participant who crosses the finish line last without touching the ground or leaving the designated track.",
    "Participants using their feet or hands to maintain balance will be immediately disqualified.",
    "The bicycle must remain within the marked racing area throughout the event.",
    "Any external assistance or interference during the race is prohibited.",
    "Participants must use their own bicycles and ensure they are in proper working condition.",
    "All participants must wear appropriate safety gear including a helmet.",
    "Judges will assess performance based on Time Taken, Control, Balance, and Adherence to Rules.",
    "Any act of misbehavior, unsafe conduct, or disregard for instructions will lead to disqualification.",
    "The decision of the judges and event coordinators will be final and binding.",
    "Participants should maintain discipline and sportsmanship throughout the event.",
    "The organizers reserve the right to modify or cancel the event schedule in case of unforeseen circumstances."
  ],
  "contact": [
    "Dr. Ashish Mishra (Associate Professor, Applied Sciences and Humanities) - 9557738263",
    "Mr. Deepak Chandola (Assistant Professor, Applied Sciences and Humanities) - 9997125399"
  ]
},



"rj-hunt": {
  "title": "RJ Hunt",
  "category": "Cultural / Personality-Based",
  "date": "13/11/2025",
  "time": "2:00 PM - 5:00 PM",
  "venue": "EMPC Lab",
  "participants": "Solo participation (open to all departments)",
  "prize": "Exciting prizes for top performers",
  "description": "Get ready to turn up the volume at RJ Hunt – Utkrisht 2025! Step into the spotlight and let your voice do the magic in this thrilling hunt for the ultimate Radio Jockey. Participants will be judged on voice modulation, creativity, spontaneity, and on-air presence. It’s not just about what you say, but how you say it!",
  "rules": [
    "Solo participation only, open to students from all departments.",
    "Participants must submit a short recorded audio clip (1–2 minutes) at least 2 days before the event at empc@tulas.edu.in.",
    "Submitted audios will be screened, and selected participants will be informed prior to the event day.",
    "Shortlisted participants must come prepared for round two based on topics provided in advance.",
    "The third round will be an open mic, and the topic will be given 10 minutes before the round begins.",
    "Participants will be judged on voice modulation, creativity, spontaneity, confidence, and audience engagement.",
    "Use of inappropriate language or content will lead to disqualification.",
    "Participants must maintain professionalism and follow all instructions given by the event coordinators."
  ],
  "contact": [
    "Dr. Neha Uniyal - Faculty Coordinator (8791406454)",
    "Mr. Gaurav Singh - Faculty Coordinator (8534810382)",
    "Anisha Gusain - Student Coordinator (8445422697)",
    "Muskan - Student Coordinator (9634660277)"
  ]
},
"reels-rumble": {
  "title": "Reels Rumble (45 Seconds Reel)",
  "category": "Techno-Creative / Centre Stage Event",
  "date": "13/11/2025",
  "time": "11:00 AM - 2:00 PM",
  "venue": "EMPC Lab",
  "participants": "Individual participation (open to all college students)",
  "prize": "Exciting prizes for most creative and impactful reels",
  "description": "Reels Rumble is a centre stage creative event where participants must craft a 45-second reel that captures the essence of the theme — combining innovation, storytelling, and technical finesse to leave a lasting impact. The theme will be revealed on the event day, encouraging originality and creativity in every frame.",
  "rules": [
    "The reel must align with the given theme, which will be disclosed on the event day.",
    "Each reel should be within 45 seconds.",
    "Offensive, explicit, or plagiarized material will lead to disqualification.",
    "Avoid using copyrighted music, videos, or visuals unless proper permissions are obtained.",
    "All content must be original, self-created, and should reflect your authentic style.",
    "Open to all college students (individual entries only).",
    "Step 1: Register through the Google Form or contact event coordinators to confirm participation.",
    "Step 2: Shoot and capture visuals on Day 1.",
    "Step 3: Complete editing and post-production in the EMPC – JMC Lab on Day 2 (10:00 AM).",
    "Step 4: Submit final reels to empc@tulas.edu.in with your name and department.",
    "Strictly follow the time limit of 45 seconds."
  ],
  "contact": [
    "Ms. Deepika Rawat - Faculty Coordinator (7895370002)",
    "Mr. Neeraj Kotiyal - Faculty Coordinator (7895653792)",
    "Khushi Gangola - Student Coordinator (9761833792)",
    "Shreya Jakhmola - Student Coordinator (7895093201)"
  ]
}




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
