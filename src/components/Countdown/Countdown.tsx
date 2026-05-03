"use client";
import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-05-23T20:00:00-03:00");

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
}

function calcTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();

  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0 };

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="countdown-wrapper">
        <div className="countdown-grid">
          {["Dias", "Horas", "Minutos"].map((label) => (
            <div key={label} className="countdown-block">
              <span className="countdown-number">--</span>
              <span className="countdown-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const blocks = [
    { value: timeLeft.dias, label: "Dias" },
    { value: timeLeft.horas, label: "Horas" },
    { value: timeLeft.minutos, label: "Minutos" },
  ];

  return (
    <div className="countdown-wrapper">
      <p className="countdown-title">Faltam</p>
      <div className="countdown-grid">
        {blocks.map(({ value, label }) => (
          <div key={label} className="countdown-block">
            <span className="countdown-number">
              {String(value).padStart(2, "0")}
            </span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
