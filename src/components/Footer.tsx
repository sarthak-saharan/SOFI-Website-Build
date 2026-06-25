import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5EFE7] pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image src="/sofi-logo.webp" alt="SOFI" fill className="object-contain" />
              </div>
              <span
                className="font-playfair text-2xl font-bold text-[#F5EFE7]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                SOFI
              </span>
            </div>
            <p className="text-[#F5EFE7]/60 text-sm leading-relaxed max-w-xs mb-6">
              A global movement documenting and celebrating the stories of first-generation Indians around the world.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/stories-of-first-gen-indians/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#F5EFE7]/20 flex items-center justify-center hover:border-[#C96A3A] hover:text-[#C96A3A] transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/storiesoffirstgenindians/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#F5EFE7]/20 flex items-center justify-center hover:border-[#C96A3A] hover:text-[#C96A3A] transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-[#F5EFE7]/40 tracking-widest uppercase mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#" },
                { label: "Stories", href: "#stories" },
                { label: "Why SOFI", href: "#why" },
                { label: "Founder", href: "#founder" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#F5EFE7]/60 hover:text-[#F5EFE7] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <p className="text-xs font-semibold text-[#F5EFE7]/40 tracking-widest uppercase mb-5">
              Community
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "Share Your Story",
                  href: "https://docs.google.com/forms/d/e/1FAIpQLSdSBQooy4gCg5uB2eno8QLpyAIzbGXaeskRRRvP1EWx9zLHjg/viewform",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/stories-of-first-gen-indians/",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/storiesoffirstgenindians/",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#F5EFE7]/60 hover:text-[#F5EFE7] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F5EFE7]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-cormorant text-2xl italic text-[#C96A3A]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "Unite. Share. Inspire."
          </p>
          <p className="text-xs text-[#F5EFE7]/30">
            © {new Date().getFullYear()} SOFI — Stories of First-Gen Indians. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
