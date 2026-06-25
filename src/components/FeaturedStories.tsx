"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const featured = [
  {
    name: "Meera Krishnan",
    role: "Software Engineer → Founder",
    city: "Chennai → San Francisco",
    quote:
      "I remember the exact moment I realized I didn't have to choose between being Indian and being ambitious. I could be both, fully.",
    snippet:
      "Meera left Chennai at 22 with a scholarship and a lot of fear. She climbed the engineering ladder at two Silicon Valley unicorns before founding her own startup at 31. This is the story of what she learned, lost, and found along the way.",
    color: "bg-[#F5EFE7]",
    textColor: "text-[#1A1A1A]",
  },
  {
    name: "Rahul Kapoor",
    role: "Doctor",
    city: "Chandigarh → London",
    quote:
      "Nobody told me that becoming a doctor in Britain as an Indian immigrant meant fighting two battles at once — medicine and belonging.",
    snippet:
      "Rahul passed his PLAB exam on the second attempt, worked three jobs to stay in London, and is now a respected cardiologist at the NHS. His story is about grit, cultural whiplash, and what it means to heal others when you're still healing yourself.",
    color: "bg-[#7A1F00]",
    textColor: "text-[#F5EFE7]",
  },
  {
    name: "Sonal Mehta",
    role: "Author & Cultural Writer",
    city: "Surat → Toronto",
    quote:
      "Writing became the way I existed in two cultures at once — in the space between languages, I found my voice.",
    snippet:
      "Sonal's debut novel about the Indian diaspora spent three weeks on a Canadian bestseller list. She wrote it during her lunch breaks at a grocery store job she took after arriving with a student visa and zero connections.",
    color: "bg-[#EDE4D8]",
    textColor: "text-[#1A1A1A]",
  },
];

export default function FeaturedStories() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (idx: number) => {
    setCurrent(idx);
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: trackRef.current.offsetWidth * idx,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-[#FAF7F2] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-medium text-[#C96A3A] tracking-widest uppercase mb-4 block">
            Story of the Week
          </span>
          <h2
            className="font-playfair text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#1A1A1A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured{" "}
            <span className="italic text-[#7A1F00]">Journeys</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="flex overflow-x-hidden snap-x snap-mandatory gap-0"
          style={{ scrollbarWidth: "none" }}
        >
          {featured.map((story, i) => (
            <div
              key={i}
              className={`flex-none w-full snap-center rounded-3xl overflow-hidden ${story.color} p-8 sm:p-12 lg:p-16`}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center h-full">
                {/* Avatar placeholder */}
                <div className="order-2 lg:order-1">
                  <div className="w-24 h-24 rounded-2xl bg-[#7A1F00]/10 flex items-center justify-center text-4xl mb-6">
                    {["🌟", "💫", "✨"][i]}
                  </div>
                  <p className={`text-sm font-medium ${story.textColor === "text-[#F5EFE7]" ? "text-[#F5EFE7]/60" : "text-[#6B6B6B]"} mb-1 uppercase tracking-wider`}>
                    {story.role}
                  </p>
                  <h3 className={`font-playfair text-2xl sm:text-3xl font-bold ${story.textColor} mb-1`} style={{ fontFamily: "'Playfair Display', serif" }}>
                    {story.name}
                  </h3>
                  <p className={`text-sm ${story.textColor === "text-[#F5EFE7]" ? "text-[#F5EFE7]/60" : "text-[#6B6B6B]"} mb-6`}>
                    {story.city}
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdSBQooy4gCg5uB2eno8QLpyAIzbGXaeskRRRvP1EWx9zLHjg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 ${
                      story.textColor === "text-[#F5EFE7]"
                        ? "bg-[#F5EFE7] text-[#7A1F00]"
                        : "bg-[#7A1F00] text-[#F5EFE7]"
                    }`}
                  >
                    Read Full Story →
                  </a>
                </div>

                <div className="order-1 lg:order-2">
                  <p
                    className={`font-cormorant text-2xl sm:text-3xl lg:text-4xl italic leading-snug ${story.textColor} mb-6`}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    "{story.quote}"
                  </p>
                  <p className={`text-base leading-relaxed ${story.textColor === "text-[#F5EFE7]" ? "text-[#F5EFE7]/70" : "text-[#6B6B6B]"}`}>
                    {story.snippet}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all rounded-full ${
                current === i
                  ? "w-8 h-2.5 bg-[#7A1F00]"
                  : "w-2.5 h-2.5 bg-[#C96A3A]/30 hover:bg-[#C96A3A]/60"
              }`}
              aria-label={`Go to story ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow nav */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={() => goTo(Math.max(0, current - 1))}
            disabled={current === 0}
            className="w-12 h-12 rounded-full border border-[#EDE4D8] flex items-center justify-center text-[#7A1F00] disabled:opacity-30 hover:bg-[#F5EFE7] transition-all"
          >
            ←
          </button>
          <button
            onClick={() => goTo(Math.min(featured.length - 1, current + 1))}
            disabled={current === featured.length - 1}
            className="w-12 h-12 rounded-full border border-[#EDE4D8] flex items-center justify-center text-[#7A1F00] disabled:opacity-30 hover:bg-[#F5EFE7] transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
