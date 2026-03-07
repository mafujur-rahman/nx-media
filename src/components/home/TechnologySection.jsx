"use client"
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function TechnologySection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const scrollRow1Ref = useRef(null);
  const scrollRow2Ref = useRef(null);

  // Tech stack data – all technologies for branding, web dev, WordPress, UI/UX design
  const technologies = [
    // Branding & Design
    {
      name: 'Figma',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 1.47.75 2.77 1.89 3.56C8.27 11.14 7.5 12.48 7.5 14c0 2.07 1.28 3.84 3.09 4.56-.22.42-.34.89-.34 1.39 0 1.63 1.33 2.95 2.95 2.95s2.95-1.33 2.95-2.95c0-.5-.12-.97-.34-1.39 1.81-.72 3.09-2.49 3.09-4.56 0-1.52-.77-2.86-1.89-3.69 1.14-.79 1.89-2.09 1.89-3.56C16.75 4.13 14.62 2 12 2zm0 2.95c1.02 0 1.85.83 1.85 1.85s-.83 1.85-1.85 1.85-1.85-.83-1.85-1.85.83-1.85 1.85-1.85zM12 17c-1.63 0-2.95-1.33-2.95-2.95S10.37 11.1 12 11.1s2.95 1.33 2.95 2.95S13.63 17 12 17z" />
        </svg>
      ),
      color: 'text-purple-400',
      category: 'Design'
    },
    {
      name: 'Adobe XD',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm4.5 5.5v5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5zm6 0c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5z" />
        </svg>
      ),
      color: 'text-pink-400',
      category: 'Design'
    },
    {
      name: 'Photoshop',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm3.5 5.5v5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5zm6 0c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5z" />
        </svg>
      ),
      color: 'text-blue-400',
      category: 'Design'
    },
    // Web Development
    {
      name: 'React',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 10.11c-1.04 0-1.89.85-1.89 1.89s.85 1.89 1.89 1.89 1.89-.85 1.89-1.89-.85-1.89-1.89-1.89zm8.77 1.89c0 3.79-4.08 6.89-8.77 6.89s-8.77-3.1-8.77-6.89 4.08-6.89 8.77-6.89 8.77 3.1 8.77 6.89zm-1.65 0c0-2.78-2.92-5.05-6.3-5.44.43.66.69 1.45.69 2.3 0 .85-.26 1.64-.69 2.3 3.38-.39 6.3-2.66 6.3-5.44zm-12.24 0c0 2.78 2.92 5.05 6.3 5.44-.43-.66-.69-1.45-.69-2.3 0-.85.26-1.64.69-2.3-3.38.39-6.3 2.66-6.3 5.44z" />
        </svg>
      ),
      color: 'text-sky-400',
      category: 'Web'
    },
    {
      name: 'Next.js',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.85L10 8.5h2.85L16 13.35V8.5h2v8.35h-1.5zM8.5 16h2v-6h-2v6z" />
        </svg>
      ),
      color: 'text-white',
      category: 'Web'
    },
    {
      name: 'Vue.js',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 21h4l6-11 6 11h4L12 2z" />
        </svg>
      ),
      color: 'text-green-400',
      category: 'Web'
    },
    {
      name: 'Angular',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.5l7 3.5-7 3.5-7-3.5 7-3.5zm0 14.5v-7l7-3.5v7l-7 3.5z" />
        </svg>
      ),
      color: 'text-red-400',
      category: 'Web'
    },
    // WordPress
    {
      name: 'WordPress',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.54-3.57 1.46-5.01l5.91 13.12C7.36 19.66 4 16.18 4 12zm8 8c-.79 0-1.56-.1-2.3-.28l2.44-7.09 2.5 6.86c.01.04.03.08.05.12-.85.24-1.74.39-2.69.39zm3.27-11.94c.47-.02.89-.08.89-.08.42-.05.37-.66-.05-.64 0 0-1.26.1-2.07.1-.76 0-2.04-.1-2.04-.1-.42-.02-.47.61-.05.64 0 0 .4.06.82.08l1.22 3.35-1.71 5.14-2.85-8.49c.48-.02.91-.08.91-.08.42-.05.37-.66-.05-.64 0 0-1.26.1-2.07.1-.15 0-.32 0-.5-.01 1.56-1.43 3.65-2.3 5.94-2.3 1.88 0 3.61.64 4.99 1.71h-.04c-.4 0-.78.18-1.02.5l3.71 10.81 1.02-3.41c.44-1.11.58-2.01.32-2.77-.31-.87-1.1-1.44-2-1.77zM18.92 17L15.5 7.68c.45.1.86.23 1.19.39-.68 1.86-1.44 3.85-1.44 3.85l2.9 7.99c1.25-1.14 2.15-2.67 2.5-4.42.04-.24.06-.49.06-.74.01-.79-.12-1.55-.33-2.27.15.46.27.95.33 1.46.14 1.14-.22 2.5-.69 3.86z" />
        </svg>
      ),
      color: 'text-blue-400',
      category: 'CMS'
    },
    {
      name: 'WooCommerce',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.85L10 8.5h2.85L16 13.35V8.5h2v8.35h-1.5zM8.5 16h2v-6h-2v6z" />
        </svg>
      ),
      color: 'text-purple-400',
      category: 'CMS'
    },
    {
      name: 'Elementor',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5H8v-9h2v9zm4 0h-2v-9h2v9zm4 0h-2v-9h2v9z" />
        </svg>
      ),
      color: 'text-pink-400',
      category: 'CMS'
    },
    // UI/UX
    {
      name: 'Sketch',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.5l7 3.5-7 3.5-7-3.5 7-3.5zm0 14.5v-7l7-3.5v7l-7 3.5z" />
        </svg>
      ),
      color: 'text-yellow-400',
      category: 'UI/UX'
    },
    {
      name: 'InVision',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.85L10 8.5h2.85L16 13.35V8.5h2v8.35h-1.5zM8.5 16h2v-6h-2v6z" />
        </svg>
      ),
      color: 'text-red-400',
      category: 'UI/UX'
    },
    {
      name: 'Zeplin',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5H8v-9h2v9zm4 0h-2v-9h2v9zm4 0h-2v-9h2v9z" />
        </svg>
      ),
      color: 'text-purple-400',
      category: 'UI/UX'
    }
  ];

  useEffect(() => {
    // Skip animation if window is not defined (SSR)
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Title animation - elegant fade up
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // ROW 1 - Independent leftward scroll
      if (scrollRow1Ref.current) {
        const row1 = scrollRow1Ref.current;
        const width = row1.scrollWidth / 2;

        // Start at a random position between -width and 0
        const randomStart = -Math.random() * width;
        gsap.set(row1, { x: randomStart });

        // Animate to -width and repeat
        gsap.to(row1, {
          x: `-=${width}`,
          duration: 60,
          ease: "none",
          repeat: -1
        });
      }

      // ROW 2 - Independent rightward scroll
      if (scrollRow2Ref.current) {
        const row2 = scrollRow2Ref.current;
        const width = row2.scrollWidth / 2;

        // Start at a random position between -width and 0
        const randomStart = -Math.random() * width;
        gsap.set(row2, { x: randomStart });

        // Animate to +=width and repeat
        gsap.to(row2, {
          x: `+=${width}`,
          duration: 70,
          ease: "none",
          repeat: -1
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Split technologies into two rows - mix categories for visual variety
  const firstRowTech = [];
  const secondRowTech = [];

  technologies.forEach((tech, index) => {
    if (index % 2 === 0) {
      firstRowTech.push(tech);
    } else {
      secondRowTech.push(tech);
    }
  });

  // Create separate arrays for each row
  const row1Items = [...firstRowTech, ...firstRowTech];
  const row2Items = [...secondRowTech, ...secondRowTech];

  return (
    <section
      ref={sectionRef}
      className="w-full pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0 bg-black text-white overflow-hidden relative"
    >
      {/* Sophisticated background texture - very subtle grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header - refined typography */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="flex justify-center mb-4 md:mb-6">
            <span className="px-4 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-white text-xs md:text-sm font-medium">
              Our Technology Stack
            </span>
          </div>
          <h2 className="title_text">
            <span className=" text-white">Tools & Technologies</span>{' '}
            <span className="text-red-500">we master</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
            From branding to development — we use the best tools to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Infinite scrolling rows */}
        <div className="space-y-8">
          {/* FIRST ROW - Independent leftward scroll */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
            <div
              ref={scrollRow1Ref}
              className="flex gap-6 py-4"
              style={{ width: 'max-content' }}
            >
              {row1Items.map((tech, index) => (
                <div
                  key={`row1-${index}`}
                  className={`
                    group relative flex flex-col items-center justify-center p-8
                    bg-white/5 backdrop-blur-sm
                    border border-white/10
                    rounded-[30px]
                    transition-all duration-500
                    hover:bg-white/10 hover:border-white/20
                    cursor-default
                    min-w-[160px]
                  `}
                >
                  <span className="absolute top-3 left-3 text-[10px] text-white/30 uppercase tracking-wider">
                    {tech.category}
                  </span>
                  <div className={`
                    relative mb-4 transition-transform duration-700
                    group-hover:scale-110 ${tech.color}
                  `}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-white/70 tracking-wide">
                    {tech.name}
                  </span>
                  <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent transition-opacity duration-700" />
                </div>
              ))}
            </div>
          </div>

          {/* SECOND ROW - Independent rightward scroll */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
            <div
              ref={scrollRow2Ref}
              className="flex gap-6 py-4"
              style={{ width: 'max-content' }}
            >
              {row2Items.map((tech, index) => (
                <div
                  key={`row2-${index}`}
                  className={`
                    group relative flex flex-col items-center justify-center p-8
                    bg-white/5 backdrop-blur-sm
                    border border-white/10
                    rounded-[30px]
                    transition-all duration-500
                    hover:bg-white/10 hover:border-white/20
                    cursor-default
                    min-w-[160px]
                  `}
                >
                  <span className="absolute top-3 left-3 text-[10px] text-white/30 uppercase tracking-wider">
                    {tech.category}
                  </span>
                  <div className={`
                    relative mb-4 transition-transform duration-700
                    group-hover:scale-110 ${tech.color}
                  `}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-white/70 tracking-wide">
                    {tech.name}
                  </span>
                  <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent transition-opacity duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}