"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EDE4D8] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image src="/sofi-logo.webp" alt="SOFI" fill className="object-contain" />
          </div>
          <span
            className="font-playfair text-xl font-bold text-[#7A1F00] hidden sm:block"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            SOFI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { label: "Stories", href: "#stories" },
            { label: "Why SOFI", href: "#why" },
            { label: "Community", href: "#community" },
            { label: "Founder", href: "#founder" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#1A1A1A] hover:text-[#7A1F00] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSBQooy4gCg5uB2eno8QLpyAIzbGXaeskRRRvP1EWx9zLHjg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#7A1F00] text-[#F5EFE7] text-sm font-medium rounded-full hover:bg-[#5C1700] transition-all hover:scale-105 active:scale-95"
          >
            ✨ Share Your Story
          </a>
        </div>

        {/* Mobile menu */}
        <button
          className="lg:hidden p-2 text-[#7A1F00]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-[#FAF7F2]/98 backdrop-blur-md border-b border-[#EDE4D8] px-6 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {[
              { label: "Stories", href: "#stories" },
              { label: "Why SOFI", href: "#why" },
              { label: "Community", href: "#community" },
              { label: "Founder", href: "#founder" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-[#1A1A1A] hover:text-[#7A1F00]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdSBQooy4gCg5uB2eno8QLpyAIzbGXaeskRRRvP1EWx9zLHjg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#7A1F00] text-[#F5EFE7] text-sm font-medium rounded-full"
            >
              ✨ Share Your Story
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
