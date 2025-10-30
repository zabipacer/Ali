import React, { useEffect, useRef, useState } from "react";

/**
 * SmoothInfiniteScrollLogos
 * - Uses requestAnimationFrame to animate in pixels for perfectly smooth motion.
 * - Duplicate group technique for seamless looping.
 * - Props: duration (seconds for one group to fully scroll), gap (CSS gap).
 *
 * Example usage: <SmoothInfiniteScrollLogos duration={18} gap="3.5rem" />
 */
export default function SmoothInfiniteScrollLogos({
  duration = 18, // seconds to move exactly one group width
  gap = "3.5rem",
}) {
  const brands = [
    { name: "TechStart", color: "text-blue-400" },
    { name: "CreativeCo", color: "text-green-400" },
    { name: "BrandX", color: "text-purple-400" },
    { name: "AgencyPro", color: "text-pink-400" },
    { name: "GlobalInc", color: "text-cyan-400" },
    { name: "StudioMax", color: "text-orange-400" },
    { name: "DigitalHub", color: "text-indigo-400" },
    { name: "MediaFlow", color: "text-rose-400" },
  ];

  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const offsetRef = useRef(0);
  const [groupWidth, setGroupWidth] = useState(0);

  // Build brand nodes once
  const group = brands.map((brand, i) => (
    <div
      key={i}
      className={`brand-item ${brand.color} font-bold text-2xl whitespace-nowrap flex-shrink-0`}
      role="img"
      aria-label={brand.name}
    >
      {brand.name}
    </div>
  ));

  // Measure group width (in pixels). Recalculate on resize.
  useEffect(() => {
    const measure = () => {
      if (groupRef.current) {
        // offsetWidth gives whole pixel width including gaps/margins
        const w = groupRef.current.offsetWidth;
        setGroupWidth(w);
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (groupRef.current) ro.observe(groupRef.current);
    // Also observe the track container in case layout changes
    if (trackRef.current) ro.observe(trackRef.current);

    window.addEventListener("load", measure);
    return () => {
      if (groupRef.current) ro.unobserve(groupRef.current);
      if (trackRef.current) ro.unobserve(trackRef.current);
      ro.disconnect();
      window.removeEventListener("load", measure);
    };
  }, [gap, brands.length]);

  // RAF loop for smooth animation in pixels
  useEffect(() => {
    if (!groupWidth || groupWidth === 0) return;

    // distance we need to move per second to shift exactly one groupWidth in `duration` seconds
    const pxPerSec = groupWidth / Math.max(0.001, duration);

    const step = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000; // delta seconds
      lastTimeRef.current = time;

      offsetRef.current += pxPerSec * dt;

      // wrap offset to keep it within [0, groupWidth) to create the seamless loop
      if (offsetRef.current >= groupWidth) {
        offsetRef.current -= groupWidth;
      }

      // translate negative to move left
      if (trackRef.current) {
        // translate using translate3d for GPU acceleration
        const translateX = -offsetRef.current;
        trackRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      lastTimeRef.current = null;
      offsetRef.current = 0;
      cancelAnimationFrame(rafRef.current);
    };
  }, [groupWidth, duration]);

  return (
    <section className="py-16 bg-zinc-900/50 border-y border-zinc-800 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-8">
          <p className="text-zinc-400 font-medium text-sm uppercase tracking-wider">
            TRUSTED BY INDUSTRY LEADERS
          </p>

          {/* Marquee Container */}
          <div className="marquee relative" style={{ ["--logo-gap"]: gap }}>
            {/* left / right fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-900/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-900/50 to-transparent z-10 pointer-events-none" />

            {/* Track: we'll translate this in pixels using RAF */}
            <div
              ref={trackRef}
              className="marquee__track will-change-transform"
              aria-hidden="false"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {/* visible group - width is measured here */}
              <div ref={groupRef} className="marquee__group">
                {group}
              </div>
              {/* duplicated group for seamless loop */}
              <div className="marquee__group" aria-hidden="true">
                {group}
              </div>
            </div>
          </div>

          <p className="text-zinc-500 text-sm italic">
            "Brands, Creators & Agencies Worldwide Trust Mohammad's Expertise"
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 text-zinc-400 text-sm flex-wrap">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>50+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>200+ Videos Delivered</span>
            </div>
          </div>
        </div>
      </div>

      {/* component-local styles */}
      <style>{`
        .marquee {
          position: relative;
          overflow: hidden;
        }
        .marquee__track {
          display: flex;
          align-items: center;
          /* disable pointer events on track so hover interaction can be per-item */
          pointer-events: none;
          transform: translate3d(0,0,0);
        }
        .marquee__group {
          display: flex;
          align-items: center;
          /* use CSS variable for customizable gap */
          gap: var(--logo-gap, 3.5rem);
          flex: 0 0 auto;
        }
        .brand-item {
          padding: 0 0.25rem;
          flex: 0 0 auto;
          transition: transform .25s ease;
          cursor: pointer;
          pointer-events: auto; /* allow hover on the items */
        }
        .brand-item:hover {
          transform: scale(1.08);
        }
        /* GPU & smoothing helpers */
        .marquee__track {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -webkit-transform: translate3d(0,0,0);
        }

        @media (max-width: 640px) {
          .marquee__group { gap: 1.5rem; }
          .brand-item { font-size: 1.05rem; }
        }
      `}</style>
    </section>
  );
}