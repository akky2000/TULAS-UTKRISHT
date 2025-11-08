import { Link } from "react-router-dom";
import { Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface EventCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  participants: string;
  prize: string;
  description: string;
  poster: string;
}

const EventCard = ({ id, title, category, date, participants, prize, description, poster }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl rounded-lg overflow-hidden transition-all duration-500 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      {/* Animated neon border */}
      <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
        isHovered 
          ? 'shadow-[0_0_30px_rgba(234,179,8,0.6),0_0_60px_rgba(6,182,212,0.4)] border-2 border-primary' 
          : 'border-2 border-primary/30'
      }`} />
      
      {/* Glowing corners effect */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-150' : 'opacity-40'
      }`} />
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-150' : 'opacity-40'
      }`} />
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-150' : 'opacity-40'
      }`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-150' : 'opacity-40'
      }`} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Poster Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={poster} 
            alt={`${title} poster`}
            className="w-full h-full object-cover transition-all duration-500"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              filter: isHovered ? 'brightness(1.1)' : 'brightness(0.9)',
            }}
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-90' : 'opacity-60'
          }`} />
          
          {/* Category badge */}
          <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-tech font-bold rounded tracking-wider backdrop-blur-sm border border-primary">
            {category.toUpperCase()}
          </span>
          
          {/* Trophy icon */}
          <Trophy className="absolute top-3 right-3 text-primary" size={24} />
        </div>

        {/* Event Info */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className={`text-xl font-display font-bold mb-2 tracking-wide uppercase transition-all duration-300 ${
            isHovered ? 'text-primary text-glow-gold' : 'text-foreground'
          }`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-light">
            {description}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} className="text-primary" />
              <span className="font-tech">{date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} className="text-secondary" />
              <span className="font-tech">{participants}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Trophy size={16} className="text-primary" />
              <span className="font-tech font-bold text-primary text-lg tracking-wider">
                {prize} <span className="text-xs text-muted-foreground">*</span>
              </span>
            </div>
          </div>

          {/* View Details Button - appears on hover */}
          <Link to={`/events/${id}`} className="mt-auto">
            <div className={`transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <Button 
                variant="outline" 
                className="w-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/50 hover:border-primary hover:bg-primary/30 font-tech font-semibold tracking-wide group/btn"
              >
                VIEW DETAILS
                <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
