"use client";

import { useEffect, useRef } from "react";

interface ParallaxPhotoProps {
  src: string;
  alt: string;
}

export default function ParallaxPhoto({ src, alt }: ParallaxPhotoProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const yOffset = (progress - 0.5) * 80;
        const img = section.querySelector<HTMLElement>(".parallax-photo-img");
        if (img) {
          img.style.transform = `translate3d(0, ${yOffset}px, 0)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="parallax-photo" ref={sectionRef}>
      <div className="parallax-photo-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="parallax-photo-img"
          loading="lazy"
        />
      </div>
      <div className="parallax-photo-fade-top" />
      <div className="parallax-photo-fade-bottom" />
    </section>
  );
}
