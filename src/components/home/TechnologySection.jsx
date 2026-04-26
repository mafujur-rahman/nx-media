"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { FaAngular, FaFigma, FaReact, FaSketch, FaVuejs, FaWordpress } from "react-icons/fa"
import { 
  HiOutlineCube, 
  HiOutlineCode, 
  HiOutlinePencilAlt 
} from "react-icons/hi"
import { SiTailwindcss, SiWoocommerce } from "react-icons/si"
import { BsTypescript } from "react-icons/bs"
import { BiLogoAdobe } from "react-icons/bi"
import { DiPhotoshop } from "react-icons/di"

export default function TechnologySection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const scrollRow1Ref = useRef(null)
  const scrollRow2Ref = useRef(null)

  // Tech stack data – all technologies with React Icons
  const technologies = [
    // Branding & Design
    {
      name: "Figma",
      icon: FaFigma,
      category: "Design",
    },
    {
      name: "Adobe XD",
      icon: BiLogoAdobe,
      category: "Design",
    },
    {
      name: "Photoshop",
      icon: DiPhotoshop,
      category: "Design",
    },
    // Web Development
    {
      name: "React",
      icon: FaReact,
      category: "Web",
    },
    {
      name: "Next.js",
      icon: HiOutlineCube,
      category: "Web",
    },
    {
      name: "Vue.js",
      icon: FaVuejs,
      category: "Web",
    },
    {
      name: "Angular",
      icon: FaAngular,
      category: "Web",
    },
    // WordPress & CMS
    {
      name: "WordPress",
      icon: FaWordpress,
      category: "CMS",
    },
    {
      name: "WooCommerce",
      icon: SiWoocommerce,
      category: "CMS",
    },
    {
      name: "Elementor",
      icon: HiOutlinePencilAlt,
      category: "CMS",
    },
    // UI/UX
    {
      name: "Sketch",
      icon: FaSketch,
      category: "UI/UX",
    },
    {
      name: "InVision",
      icon: HiOutlineCode,
      category: "UI/UX",
    },
    {
      name: "Zeplin",
      icon: HiOutlinePencilAlt,
      category: "UI/UX",
    },
    // Additional Modern Technologies
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      category: "CSS",
    },
    {
      name: "TypeScript",
      icon: BsTypescript,
      category: "Language",
    },
  ]

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })

      // ROW 1 - Infinite leftward scroll
      if (scrollRow1Ref.current) {
        const row1 = scrollRow1Ref.current
        const row1Content = row1.children
        let totalWidth = 0
        
        // Calculate total width of all items in row1
        for (let i = 0; i < row1Content.length; i++) {
          totalWidth += row1Content[i].offsetWidth + 24 // 24px gap
        }
        
        // Clone items for seamless infinite scroll
        const clones = Array.from(row1Content).map(el => el.cloneNode(true))
        clones.forEach(clone => row1.appendChild(clone))
        
        // Set initial position
        gsap.set(row1, { x: 0 })
        
        // Create infinite scroll animation
        const animation = gsap.to(row1, {
          x: `-${totalWidth}`,
          duration: 40,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => {
              const wrapped = parseFloat(x) % totalWidth
              return wrapped + "px"
            }
          }
        })
        
        // Pause on hover
        row1.addEventListener("mouseenter", () => animation.pause())
        row1.addEventListener("mouseleave", () => animation.resume())
      }

      // ROW 2 - Infinite rightward scroll
      if (scrollRow2Ref.current) {
        const row2 = scrollRow2Ref.current
        const row2Content = row2.children
        let totalWidth = 0
        
        // Calculate total width of all items in row2
        for (let i = 0; i < row2Content.length; i++) {
          totalWidth += row2Content[i].offsetWidth + 24
        }
        
        // Clone items for seamless infinite scroll
        const clones = Array.from(row2Content).map(el => el.cloneNode(true))
        clones.forEach(clone => row2.appendChild(clone))
        
        // Set initial position
        gsap.set(row2, { x: `-${totalWidth}` })
        
        // Create infinite scroll animation moving right
        const animation = gsap.to(row2, {
          x: `0`,
          duration: 45,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => {
              const wrapped = parseFloat(x) % totalWidth
              return wrapped + "px"
            }
          }
        })
        
        // Pause on hover
        row2.addEventListener("mouseenter", () => animation.pause())
        row2.addEventListener("mouseleave", () => animation.resume())
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Split technologies into two rows
  const firstRowTech = []
  const secondRowTech = []

  technologies.forEach((tech, index) => {
    if (index % 2 === 0) {
      firstRowTech.push(tech)
    } else {
      secondRowTech.push(tech)
    }
  })

  return (
    <section
      ref={sectionRef}
      className="w-full pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0 bg-black text-white overflow-hidden relative"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="flex justify-center mb-4 md:mb-6">
            <span className="px-4 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-white text-xs md:text-sm font-medium">
              Our Technology Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Tools & Technologies</span>{" "}
            <span className="text-red-500">we master</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
            From branding to development — we use the best tools to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Infinite scrolling rows */}
        <div className="space-y-8">
          {/* FIRST ROW - Leftward scroll */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <div
              ref={scrollRow1Ref}
              className="flex gap-6 py-4"
              style={{ width: "max-content" }}
            >
              {firstRowTech.map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <div
                    key={`row1-${index}`}
                    className="group relative flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[30px] transition-all duration-500 hover:bg-white/10 hover:border-white/20 cursor-default min-w-[160px]"
                  >
                    <span className="absolute top-3 left-3 text-[10px] text-white/30 uppercase tracking-wider">
                      {tech.category}
                    </span>
                    <div className="relative mb-4 transition-transform duration-700 group-hover:scale-110 text-white">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <span className="text-sm font-medium text-white/70 tracking-wide">
                      {tech.name}
                    </span>
                    <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent transition-opacity duration-700" />
                  </div>
                )
              })}
            </div>
          </div>

          {/* SECOND ROW - Rightward scroll */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <div
              ref={scrollRow2Ref}
              className="flex gap-6 py-4"
              style={{ width: "max-content" }}
            >
              {secondRowTech.map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <div
                    key={`row2-${index}`}
                    className="group relative flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[30px] transition-all duration-500 hover:bg-white/10 hover:border-white/20 cursor-default min-w-[160px]"
                  >
                    <span className="absolute top-3 left-3 text-[10px] text-white/30 uppercase tracking-wider">
                      {tech.category}
                    </span>
                    <div className="relative mb-4 transition-transform duration-700 group-hover:scale-110 text-white">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <span className="text-sm font-medium text-white/70 tracking-wide">
                      {tech.name}
                    </span>
                    <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent transition-opacity duration-700" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}