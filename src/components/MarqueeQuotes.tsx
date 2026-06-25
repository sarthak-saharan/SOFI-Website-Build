"use client";

const quotes = [
  "\"I carried two cultures in one heart.\"",
  "\"My parents sacrificed everything. I carry that every day.\"",
  "\"Home is everywhere and nowhere at the same time.\"",
  "\"First to leave, first to understand what home means.\"",
  "\"I had to become fluent in three languages: English, Hindi, and longing.\"",
  "\"I am the dream my parents couldn't live.\"",
  "\"Every phone call home is a reminder of everything I left behind.\"",
  "\"Being first-gen means writing the rulebook as you go.\"",
];

export default function MarqueeQuotes() {
  const doubled = [...quotes, ...quotes];

  return (
    <section className="py-12 bg-[#7A1F00] overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-track">
          {doubled.map((q, i) => (
            <span
              key={i}
              className="mx-8 font-cormorant text-xl italic text-[#F5EFE7]/80 shrink-0"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {q}
              <span className="mx-8 text-[#C96A3A]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
