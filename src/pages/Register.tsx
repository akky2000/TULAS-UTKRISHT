import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";
import { trackRegistration } from "@/utils/analytics";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    event: "",
    teamSize: "",
    agreeToTerms: false
  });

  const events = [
    "CAD MAD",
    "Robo Wars Championship",
    "AI/ML Workshop Series",
    "JENGA WAR",
    "Drone Racing Challenge",
    "UI/UX Design Challenge",
    "Blockchain Masterclass",
    "IoT Innovation Challenge",
    "THE_LOAD_LIMIT"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions",
        variant: "destructive"
      });
      return;
    }
    trackRegistration(formData.event || 'General Registration');
    toast({
      title: "Registration Successful!",
      description: "Check your email for confirmation and further details.",
    });
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      college: "",
      year: "",
      event: "",
      teamSize: "",
      agreeToTerms: false
    });
  };

  return (
    <div className="min-h-screen grid-bg">
      <SEO 
        title="Register Now - Utkrisht 2025 | Secure Your Spot"
        description="Register for Utkrisht 2025 - India's premier tech fest. Join 5000+ participants in hackathons, robotics, AI workshops & more. Limited seats available!"
        keywords="register utkrisht, event registration, tech fest signup, hackathon registration, workshop enrollment, competition registration"
      />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Register Now
            </h1>
            <p className="text-xl text-muted-foreground">
              Secure your spot at Utkrisht 2025
            </p>
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserPlus className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Participant Registration</h2>
                  <p className="text-sm text-muted-foreground">Fill in your details to register</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Personal Information</h3>
                  
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 1234567890"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Academic Information</h3>
                  
                  <div>
                    <Label htmlFor="college">College/University *</Label>
                    <Input
                      id="college"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      placeholder="Your institution name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="year">Year of Study *</Label>
                    <Select
                      value={formData.year}
                      onValueChange={(value) => setFormData({ ...formData, year: value })}
                      required
                    >
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                        <SelectItem value="pg">Postgraduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Event Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Event Details</h3>
                  
                  <div>
                    <Label htmlFor="event">Select Event *</Label>
                    <Select
                      value={formData.event}
                      onValueChange={(value) => setFormData({ ...formData, event: value })}
                      required
                    >
                      <SelectTrigger id="event">
                        <SelectValue placeholder="Choose your event" />
                      </SelectTrigger>
                      <SelectContent>
                        {events.map((event) => (
                          <SelectItem key={event} value={event}>
                            {event}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="teamSize">Team Size (if applicable)</Label>
                    <Select
                      value={formData.teamSize}
                      onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                    >
                      <SelectTrigger id="teamSize">
                        <SelectValue placeholder="Individual or team?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="2">Team of 2</SelectItem>
                        <SelectItem value="3">Team of 3</SelectItem>
                        <SelectItem value="4">Team of 4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, agreeToTerms: checked as boolean })
                    }
                  />
                  <div className="flex-1">
                    <Label htmlFor="terms" className="text-sm cursor-pointer">
                      I agree to the terms and conditions and the code of conduct of Utkrisht 2025. 
                      I understand that providing false information may lead to disqualification.
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Complete Registration
                </Button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> After registration, you'll receive a 
                  confirmation email with your registration ID and further instructions. Please check your 
                  spam folder if you don't see it in your inbox.
                </p>
              </div>
            </div>

            {/* Registration Benefits */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Confirmation Email", desc: "Instant registration confirmation" },
                { title: "Event Access", desc: "Entry to all selected events" },
                { title: "Certificates", desc: "Participation certificates for all" }
              ].map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-card border border-border rounded-lg p-4 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
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

export default Register;
