"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "I have partnered with MEA Group for our high-net-worth expat clients relocating to the GCC, as well as engaging them for my own residency and relocation planning when I moved to the UAE. Zeeshan and his team have provided a world class service to our clients and with their proactive hands on approach and extensive knowledge of the GCC market, I would strongly recommend them to our clients and contacts relocating or expending to the region",
    name: "Craig Potter",
    role: "Senior Wealth Manager",
    image: "/craig_potter.png",
  },
  {
    quote:
      "We have partnered with MEA Group to support a number of our high-profile clients who were relocating from the UK to the UAE and needed expert advisory and structuring services. MEA Group’s excellent cross-border knowledge and expertise made our clients’ GCC market entry process seamless and efficient.",
    name: "Sherad Dewedi",
    role: "Managing Partner at Shenward Chartered Accountants (UK)",
    image: "/dummy_profile.png",
  },
  {
    quote:
      "MEA Group’s proactive and partner-led service has been instrumental for a number of our high-net-worth private clients expanding and relocating to the UAE and Saudi Arabia. The firm has not only provided top quality advisory services to our clients establishing their businesses in the GCC region, but have also been excellent with their proactive compliance services post implementation",
    name: "Amer Nazir",
    role: "Partner – Fortis Private Wealth",
    image: "/amer_nazir.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [layout, setLayout] = useState({
    containerWidth: 0,
    slideWidth: 0,
    gap: 24,
  });

  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      const isDesktop = window.innerWidth >= 768;
      const slideRatio = isDesktop ? 0.82 : 1;
      const gap = isDesktop ? 24 : 16;

      setLayout({
        containerWidth: width,
        slideWidth: Math.round(width * slideRatio),
        gap,
      });
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const sidePadding = Math.max(
    0,
    (layout.containerWidth - layout.slideWidth) / 2
  );
  const lastIndex = testimonials.length - 1;
  const translateX = layout.slideWidth
    ? active * (layout.slideWidth + layout.gap) -
      (active === lastIndex ? sidePadding : 0)
    : 0;
  const paddingLeft = active === 0 ? 0 : sidePadding;
  const paddingRight = active === lastIndex ? 0 : sidePadding;

  return (
    <section className="max-w-7xl mx-auto  py-20">
      <div className="relative px-16">
        <h3 className="text-[#5A2C35] text-xl font-semibold mb-8">
          What our clients say
        </h3>

        {/* Slider */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${translateX}px)`,
              gap: `${layout.gap}px`,
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name + index}
                className="shrink-0"
                style={{
                  width: layout.slideWidth ? `${layout.slideWidth}px` : "100%",
                }}
              >
                <div className="bg-[#BD994E] rounded-[32px] px-10 py-12 h-full">
                  <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 items-center">
                    <div>
                      <p className="text-white text-lg leading-relaxed italic">
                        “{testimonial.quote}”
                      </p>

                      <div className="mt-6 text-white">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm opacity-90">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                      {/* <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-white"> */}
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={260}
                          height={300}
                          className="object-cover rounded-full"
                          loading="lazy"
                        />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center -mt-10">
          <div className="flex items-center gap-3 bg-white/40 px-5 py-2 rounded-full z-99">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  active === index ? "bg-[#5A2C35]" : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
