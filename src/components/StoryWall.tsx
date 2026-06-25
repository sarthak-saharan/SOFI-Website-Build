"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "Priya Sharma",
    origin: "Jaipur, India",
    city: "New York, USA",
    quote: "I came with one suitcase and a dream my parents had sacrificed everything for. Six years later, I lead a team of 40.",
    tag: "Tech & Finance",
    color: "h-80",
  },
  {
    name: "Arjun Mehta",
    origin: "Mumbai, India",
    city: "Toronto, Canada",
    quote: "The hardest part wasn't the cold. It was learning to celebrate Diwali alone.",
    tag: "Healthcare",
    color: "h-64",
  },
  {
    name: "Kavya Reddy",
    origin: "Hyderabad, India",
    city: "London, UK",
    quote: "My accent made people underestimate me. I made sure they never forgot my work.",
    tag: "Law & Policy",
    color: "h-72",
  },
  {
    name: "Rohan Nair",
    origin: "Kochi, India",
    city: "Sydney, Australia",
    quote: "Every video call home reminded me of everything I was building toward.",
    tag: "Engineering",
    color: "h-60",
  },
  {
    name: "Ananya Joshi",
    origin: "Pune, India",
    city: "Dubai, UAE",
    quote: "I didn't just migrate countries. I migrated identities. And found my own.",
    tag: "Entrepreneurship",
    color: "h-76",
  },
  {
    name: "Vikram Pillai",
    origin: "Bangalore, India",
    city: "Berlin, Germany",
    quote: "Startups, student visas, and 12 flatmates. That was my first chapter.",
    tag: "Product & Design",
    color: "h-68",
  },
  {
    name: "Shruti Agarwal",
    origin: "Delhi, India",
    city: "Singapore",
    quote: "My parents asked why I left a good job. I asked why I shouldn't build something of my own.",
    tag: "Finance",
    color: "h-72",
  },
  {
    name: "Nikhil Verma",
    origin: "Lucknow, India",
    city: "San Francisco, USA",
    quote: "I was the only Indian in the room for years. Now I make sure the door stays open.",
    tag: "Tech",
    color: "h-64",
  },
];

export default function StoryWall() {
  const col1 = stories.filter((_, i) => i % 3 === 0);
  const col2 = stories.filter((_, i) => i % 3 === 1);
  const col3 = stories.filter((_, i) => i % 3 === 2);

  return (
    <section id="stories" className="py-24 px-6 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-medium text-[#C96A3A] tracking-widest uppercase mb-4 block">
            Community Stories
          </span>
          <h2
            className="font-playfair text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#1A1A1A] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Real People.{" "}
            <span className="italic text-[#7A1F00]">Real Journeys.</span>
          </h2>
          <p className="text-[#6B6B6B] text-lg">
            Stories shared by the global first-gen Indian community.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[col1, col2, col3].map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-5">
              {col.map((story, i) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (colIdx * 0.1) + (i * 0.1) }}
                  className="story-card group relative bg-[#F5EFE7] rounded-2xl p-6 cursor-pointer overflow-hidden"
                >
                  {/* Hover fill */}
                  <div className="absolute inset-0 bg-[#7A1F00] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="font-semibold text-[#1A1A1A] group-hover:text-[#F5EFE7] transition-colors">
                          {story.name}
                        </p>
                        <p className="text-xs text-[#6B6B6B] group-hover:text-[#F5EFE7]/70 transition-colors mt-0.5">
                          {story.origin} → {story.city}
                        </p>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#7A1F00]/10 text-[#7A1F00] group-hover:bg-[#F5EFE7]/20 group-hover:text-[#F5EFE7] transition-all">
                        {story.tag}
                      </span>
                    </div>

                    <p
                      className="font-cormorant text-lg italic text-[#1A1A1A] group-hover:text-[#F5EFE7] transition-colors leading-relaxed mb-5"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      "{story.quote}"
                    </p>

                    <button className="text-xs font-medium text-[#C96A3A] group-hover:text-[#F5EFE7] transition-colors flex items-center gap-1 hover:gap-2">
                      Read Story <span>→</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSBQooy4gCg5uB2eno8QLpyAIzbGXaeskRRRvP1EWx9zLHjg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-[#7A1F00] text-[#7A1F00] font-semibold rounded-full hover:bg-[#7A1F00] hover:text-[#F5EFE7] transition-all"
          >
            Share Your Story →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
