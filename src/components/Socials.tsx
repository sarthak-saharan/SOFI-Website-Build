"use client";

import { motion } from "framer-motion";

const socials = [
  {
    name: "LinkedIn",
    handle: "@stories-of-first-gen-indians",
    desc: "Professional stories, career journeys, and community updates.",
    href: "https://www.linkedin.com/company/stories-of-first-gen-indians/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    followers: "2,400+ followers",
    color: "bg-[#F5EFE7] hover:bg-[#7A1F00]",
  },
  {
    name: "Instagram",
    handle: "@storiesoffirstgenindians",
    desc: "Visual stories, community spotlights, and cultural moments.",
    href: "https://www.instagram.com/storiesoffirstgenindians/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    followers: "Community growing",
    color: "bg-[#F5EFE7] hover:bg-[#7A1F00]",
  },
];

export default function Socials() {
  return (
    <section className="py-24 px-6 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-[#C96A3A] tracking-widest uppercase mb-4 block">
            Stay Connected
          </span>
          <h2
            className="font-playfair text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#1A1A1A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Join Our{" "}
            <span className="italic text-[#7A1F00]">Community</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className={`group p-8 rounded-3xl border border-[#EDE4D8] transition-all duration-300 cursor-pointer ${s.color}`}
            >
              <div className="text-[#7A1F00] group-hover:text-[#F5EFE7] transition-colors mb-4">
                {s.icon}
              </div>
              <p className="text-xs font-medium text-[#6B6B6B] group-hover:text-[#F5EFE7]/60 mb-1 transition-colors">
                {s.followers}
              </p>
              <h3 className="font-playfair text-2xl font-bold text-[#1A1A1A] group-hover:text-[#F5EFE7] mb-1 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                {s.name}
              </h3>
              <p className="text-sm text-[#C96A3A] group-hover:text-[#F5EFE7]/70 mb-4 transition-colors">
                {s.handle}
              </p>
              <p className="text-sm text-[#6B6B6B] group-hover:text-[#F5EFE7]/80 leading-relaxed transition-colors">
                {s.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#7A1F00] group-hover:text-[#F5EFE7] transition-colors">
                Follow →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
