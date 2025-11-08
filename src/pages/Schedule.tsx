import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin } from "lucide-react";

const Schedule = () => {
  const day1Schedule = [
    { time: "9:00 AM - 10:00 AM", event: "Registration & Welcome", venue: "Main Lobby", type: "general" },
    { time: "10:00 AM - 11:00 AM", event: "Inaugural Ceremony", venue: "Main Auditorium", type: "ceremony" },
    { time: "11:00 AM - 12:30 PM", event: "Keynote: The Future of AI in Healthcare", speaker: "Dr. Priya Sharma", venue: "Main Auditorium", type: "keynote" },
    { time: "12:30 PM - 1:30 PM", event: "Lunch Break", venue: "Food Court", type: "break" },
    { time: "1:30 PM - 2:00 PM", event: "Hackathon - Problem Statement Release", venue: "Tech Lab A", type: "competition" },
    { time: "2:00 PM - 3:00 PM", event: "Workshop: AI/ML Fundamentals", venue: "Workshop Hall 1", type: "workshop" },
    { time: "2:00 PM - 5:00 PM", event: "Web Development Sprint - Round 1", venue: "Computer Lab B", type: "competition" },
    { time: "3:00 PM - 4:00 PM", event: "Keynote: Building Scalable Tech Startups", speaker: "Rahul Verma", venue: "Seminar Hall", type: "keynote" },
    { time: "4:00 PM - 6:00 PM", event: "UI/UX Design Challenge", venue: "Design Studio", type: "competition" },
    { time: "5:00 PM - 7:00 PM", event: "IoT Innovation Challenge - Setup", venue: "Hardware Lab", type: "competition" },
    { time: "7:00 PM - 8:00 PM", event: "Dinner Break", venue: "Food Court", type: "break" },
    { time: "8:00 PM - 9:00 PM", event: "Panel Discussion: Tech Trends 2025", venue: "Main Auditorium", type: "panel" }
  ];

  const day2Schedule = [
    { time: "9:00 AM - 10:00 AM", event: "Hackathon - Final Submissions", venue: "Tech Lab A", type: "competition" },
    { time: "10:00 AM - 11:00 AM", event: "Keynote: Robotics Revolution in Industry 4.0", speaker: "Anita Desai", venue: "Main Auditorium", type: "keynote" },
    { time: "11:00 AM - 12:00 PM", event: "Robo Wars Championship - Qualifiers", venue: "Arena", type: "competition" },
    { time: "12:00 PM - 1:00 PM", event: "Workshop: Blockchain Masterclass", venue: "Workshop Hall 2", type: "workshop" },
    { time: "1:00 PM - 2:00 PM", event: "Lunch Break", venue: "Food Court", type: "break" },
    { time: "2:00 PM - 3:00 PM", event: "Keynote: Cybersecurity in the Modern Age", speaker: "Arjun Nair", venue: "Seminar Hall", type: "keynote" },
    { time: "3:00 PM - 4:00 PM", event: "Drone Racing Challenge", venue: "Outdoor Arena", type: "competition" },
    { time: "3:00 PM - 5:00 PM", event: "Debug Wars - Finals", venue: "Computer Lab C", type: "competition" },
    { time: "4:00 PM - 5:00 PM", event: "Robo Wars Championship - Finals", venue: "Main Arena", type: "competition" },
    { time: "5:00 PM - 6:00 PM", event: "IoT Innovation Challenge - Presentations", venue: "Hardware Lab", type: "competition" },
    { time: "6:00 PM - 7:00 PM", event: "Prize Distribution & Closing Ceremony", venue: "Main Auditorium", type: "ceremony" },
    { time: "7:00 PM onwards", event: "Cultural Night & Networking", venue: "Open Air Theatre", type: "social" }
  ];

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      general: "bg-muted",
      ceremony: "bg-primary/20 border-l-4 border-primary",
      keynote: "bg-secondary/20 border-l-4 border-secondary",
      workshop: "bg-accent/20 border-l-4 border-accent",
      competition: "bg-primary/10 border-l-4 border-primary",
      panel: "bg-secondary/10 border-l-4 border-secondary",
      break: "bg-muted/50",
      social: "bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary"
    };
    return colors[type] || "bg-card";
  };

  type ScheduleItem = {
    time: string;
    event: string;
    venue: string;
    type: string;
    speaker?: string;
  };

  const ScheduleDay = ({ schedule }: { schedule: ScheduleItem[] }) => (
    <div className="space-y-4">
      {schedule.map((item, index) => (
        <div
          key={index}
          className={`${getEventTypeColor(item.type)} rounded-lg p-4 hover:shadow-lg transition-all duration-300 animate-fade-in`}
          style={{ animationDelay: `${index * 30}ms` }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">{item.event}</h3>
              {item.speaker && (
                <p className="text-sm text-muted-foreground mb-2">Speaker: {item.speaker}</p>
              )}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>{item.venue}</span>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full capitalize">
                {item.type}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen grid-bg">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Event Schedule
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Plan your Utkrisht 2025 experience
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="text-primary" size={20} />
              <span>March 15-16, 2025</span>
            </div>
          </div>

          {/* Schedule Tabs */}
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="day1" className="text-base">
                Day 1 - March 15
              </TabsTrigger>
              <TabsTrigger value="day2" className="text-base">
                Day 2 - March 16
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="mt-8">
              <ScheduleDay schedule={day1Schedule} />
            </TabsContent>

            <TabsContent value="day2" className="mt-8">
              <ScheduleDay schedule={day2Schedule} />
            </TabsContent>
          </Tabs>

          {/* Legend */}
          <div className="mt-12 bg-card border border-border rounded-lg p-6">
            <h3 className="font-bold mb-4">Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { type: "ceremony", label: "Ceremony" },
                { type: "keynote", label: "Keynote" },
                { type: "competition", label: "Competition" },
                { type: "workshop", label: "Workshop" }
              ].map(item => (
                <div key={item.type} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${getEventTypeColor(item.type)}`} />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
