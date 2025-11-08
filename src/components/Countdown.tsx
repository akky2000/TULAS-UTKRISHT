import { useState, useEffect, useMemo, useCallback } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
}

const Countdown = ({ targetDate: targetDateProp }: CountdownProps) => {
  const targetDate = useMemo(() => targetDateProp.getTime(), [targetDateProp]);

  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = targetDate - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="text-4xl font-bold text-primary">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm uppercase tracking-wider text-muted-foreground mt-1">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
