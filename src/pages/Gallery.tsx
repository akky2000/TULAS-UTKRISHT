import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { url: "/images/image1.jpeg"},
    { url: "/images/image2.jpeg"},
    { url: "/images/image3.jpeg"},
    { url: "/images/image4.jpeg"},
    { url: "/images/image5.jpeg"},
    { url: "/images/image6.jpeg"},
    { url: "/images/image7.JPG"},
    { url: "/images/image8.jpeg"},
    { url: "/images/image9.jpeg", caption: "" }
  ];

  return (
    <div className="min-h-screen grid-bg">
      <SEO 
        title="Gallery - Utkrisht 2025 | Event Photos & Memories"
        description="Browse through memorable moments from past editions of Utkrisht - India's premier tech fest. See photos from hackathons, robotics competitions, workshops, and cultural events."
        keywords="event gallery, tech fest photos, utkrisht memories, hackathon photos, robotics competition images, workshop pictures"
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
                MEMORIES & MOMENTS
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-black mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent tracking-wider uppercase">
              Gallery
            </h1>
            <p className="text-2xl text-muted-foreground font-light">
              Relive the memorable moments from past editions of Utkrisht
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer animate-fade-in border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-foreground font-tech font-semibold tracking-wide">{image.caption}</p>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Past Editions Section */}
          <div className="mt-24 max-w-6xl mx-auto">
            <h2 className="text-5xl font-display font-black text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">
              Past Editions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { year: "2024", participants: "4500+", events: "18", prize: "₹4L+" },
                { year: "2023", participants: "4000+", events: "16", prize: "₹3.5L+" },
                { year: "2022", participants: "3500+", events: "15", prize: "₹3L+" }
              ].map((edition, index) => (
                <div
                  key={edition.year}
                  className="glass-card rounded-xl p-8 text-center border-2 border-primary/30 hover:border-primary transition-all duration-500 animate-slide-up group shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:scale-105 relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary transition-all duration-500 group-hover:scale-150" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary transition-all duration-500 group-hover:scale-150" />
                  
                  <h3 className="text-5xl font-display font-black text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    UTKRISHT {edition.year}
                  </h3>
                  <div className="space-y-3 text-muted-foreground font-light">
                    <p className="text-lg">
                      <span className="font-tech font-bold text-foreground text-2xl block mb-1">{edition.participants}</span> 
                      Participants
                    </p>
                    <p className="text-lg">
                      <span className="font-tech font-bold text-foreground text-2xl block mb-1">{edition.events}</span> 
                      Events
                    </p>
                    <p className="text-lg">
                      <span className="font-tech font-bold text-primary text-2xl block mb-1">{edition.prize}</span> 
                      Prize Pool
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/98 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 w-14 h-14 rounded-full bg-primary/20 border-2 border-primary/50 hover:border-primary text-foreground hover:text-primary text-3xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] font-light"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-7xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-xl border-2 border-primary/30 shadow-[0_0_60px_rgba(234,179,8,0.4)]"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
