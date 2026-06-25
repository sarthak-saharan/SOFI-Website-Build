"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-[#F5EFE7] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Portrait */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto">
              <Image
                src="/founder.jpeg"
                alt="Deepika Sobti — Founder, SOFI"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Overlay gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F00]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p
                  className="font-playfair text-2xl font-bold text-[#F5EFE7]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Deepika Sobti
                </p>
                <p className="text-[#F5EFE7]/80 text-sm">Founder, SOFI</p>
              </div>
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:right-0 max-w-[240px] bg-[#FAF7F2] rounded-2xl p-4 shadow-xl border border-[#EDE4D8]"
            >
              <p className="text-xs text-[#6B6B6B] mb-1">Unite • Share • Inspire</p>
              <p className="text-sm font-medium text-[#7A1F00]">Started in 2024 ✨</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs font-medium text-[#C96A3A] tracking-widest uppercase mb-4 block">
              The Founder
            </span>
            <h2
              className="font-playfair text-[clamp(2rem,4.5vw,3rem)] font-bold text-[#1A1A1A] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why I Started{" "}
              <span className="italic text-[#7A1F00]">SOFI</span>
            </h2>

            <blockquote
              className="font-cormorant text-xl sm:text-2xl italic text-[#7A1F00] border-l-4 border-[#C96A3A] pl-5 mb-8 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "I realised thousands of first-generation Indians were carrying stories nobody was documenting."
            </blockquote>

            <div className="space-y-4 text-[#6B6B6B] text-base leading-relaxed mb-8">
              <p>
                I was sitting in my apartment in a city far from home when it hit me — I had never heard someone tell the story of what it actually felt like to be first-gen. Not the success highlights. The actual journey.
              </p>
              <p>
                The visa anxiety. The nights you question everything. The pride mixed with guilt. The phone calls where you pretend everything is fine because you don't want your parents to worry.
              </p>
              <p>
                SOFI started as a simple idea: what if we built a place where these stories could live? Where someone who just landed in a new country could find a story that says — <span className="text-[#7A1F00] font-medium">you're not alone.</span>
              </p>
            </div>

            <a
              href="https://www.linkedin.com/company/stories-of-first-gen-indians/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7A1F00] text-[#F5EFE7] font-semibold rounded-full hover:bg-[#5C1700] transition-all hover:scale-105"
            >
              Connect with Founder →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
