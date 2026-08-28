import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-16 pb-10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clean Headline */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Curated web works &amp; <br />
            <span className="bg-gradient-to-r from-[#59b7a6] via-[#68c6b6] to-[#457292] bg-clip-text text-transparent">
              digital experiences.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#8496AA] font-sans leading-relaxed max-w-2xl mx-auto">
            A portfolio showcase of bespoke websites and digital platforms. Click any website card to launch the live platform.
          </p>
        </div>
      </div>
    </section>
  );
};
