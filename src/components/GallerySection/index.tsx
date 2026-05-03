import React from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const GALLERY_IMAGES = [
  { src: '/gallery_1.png', alt: 'Ana e Beto', className: 'col-span-2 row-span-2' },
  { src: '/gallery_2.png', alt: 'Ana e Beto', className: 'col-span-1 row-span-1' },
  { src: '/gallery_3.png', alt: 'Ana e Beto', className: 'col-span-1 row-span-1' },
  { src: '/gallery_4.png', alt: 'Ana e Beto', className: 'col-span-2 row-span-1' },
];

export default function GallerySection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[var(--cream-dark)]">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className={`${img.className} relative group overflow-hidden rounded-2xl`}>
              <ScrollReveal delay={index * 100} className="w-full h-full">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Organic Shape Image Section */}
        <div className="mt-20 flex flex-col md:flex-row items-center gap-12">
          <ScrollReveal className="w-full md:flex-1 relative">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Organic Mask using CSS clip-path or mask-image would be ideal here, 
                  but for simplicity and compatibility, we use border-radius tricks */}
              <div 
                className="absolute inset-0 overflow-hidden shadow-2xl"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  border: '4px solid white',
                }}
              >
                <img 
                  src='/gallery_organic.png' 
                  alt="Ana e Beto" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-[var(--gold)] opacity-30 rounded-[50%_50%_50%_50%_/_50%_50%_50%_50%]" 
                   style={{ borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%' }} />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} className="w-full md:flex-1 text-center md:text-left">
            <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--charcoal)] mb-6">
              “Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separa”. 
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-sm uppercase tracking-wide">
              – Mateus 19:6
            </p>

            <div className="w-16 h-1 bg-[var(--gold)] mx-auto md:mx-0 opacity-50" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
