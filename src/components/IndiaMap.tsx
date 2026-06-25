"use client"

// @ts-ignore – react-simple-maps has no bundled types
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import React, { useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"

const GEO_URL = "/new-india.json"

type CityData = {
  name: string
  state: string
  coords: [number, number]
  stories: number
  destinations: string
  avatar: AvatarStyle
}

type HairStyle = "bun" | "short" | "curly" | "long" | "turban" | "cap"
type Accessory = "none" | "glasses" | "earring" | "bindi"

type AvatarStyle = {
  skin: string
  hair: string
  accent: string
  style: HairStyle
  accessory: Accessory
}

const cities: CityData[] = [
  {
    name: "Delhi",
    state: "Delhi",
    coords: [77.209, 28.614],
    stories: 48,
    destinations: "New York, London, Dubai",
    avatar: { skin: "#C68642", hair: "#1a0a00", accent: "#C96A3A", style: "short", accessory: "glasses" },
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    coords: [75.787, 26.912],
    stories: 21,
    destinations: "Toronto, Sydney, Singapore",
    avatar: { skin: "#8D5524", hair: "#2c1a00", accent: "#7A1F00", style: "turban", accessory: "none" },
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    coords: [72.877, 19.076],
    stories: 63,
    destinations: "New York, London, San Francisco",
    avatar: { skin: "#D4956A", hair: "#0d0d0d", accent: "#C96A3A", style: "long", accessory: "bindi" },
  },
  {
    name: "Pune",
    state: "Maharashtra",
    coords: [73.856, 18.52],
    stories: 29,
    destinations: "Germany, Canada, UAE",
    avatar: { skin: "#FDBCB4", hair: "#3b1e00", accent: "#7A1F00", style: "curly", accessory: "glasses" },
  },
  {
    name: "Hyderabad",
    state: "Andhra Pradesh",
    coords: [78.474, 17.384],
    stories: 37,
    destinations: "Seattle, Sydney, Singapore",
    avatar: { skin: "#A0522D", hair: "#1a0a00", accent: "#C96A3A", style: "bun", accessory: "earring" },
  },
  {
    name: "Bangalore",
    state: "Karnataka",
    coords: [77.594, 12.972],
    stories: 54,
    destinations: "San Francisco, London, Berlin",
    avatar: { skin: "#7B4F35", hair: "#0d0d0d", accent: "#7A1F00", style: "cap", accessory: "none" },
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    coords: [80.27, 13.083],
    stories: 31,
    destinations: "Singapore, Toronto, Dubai",
    avatar: { skin: "#5C3317", hair: "#0a0a0a", accent: "#C96A3A", style: "long", accessory: "bindi" },
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    coords: [88.363, 22.572],
    stories: 18,
    destinations: "London, New York, Dubai",
    avatar: { skin: "#C68642", hair: "#1a1a00", accent: "#7A1F00", style: "bun", accessory: "earring" },
  },
]

// SVG avatar generator — same engine, SOFI colours
function StoryFace({ av, size = 56 }: { av: AvatarStyle; size?: number }) {
  const r = size / 2
  const cx = r
  const cy = r

  const hairPaths: Record<HairStyle, React.ReactElement> = {
    bun: (
      <g>
        <ellipse cx={cx} cy={cy - r * 0.62} rx={r * 0.55} ry={r * 0.38} fill={av.hair} />
        <circle cx={cx} cy={cy - r * 0.9} r={r * 0.22} fill={av.hair} />
      </g>
    ),
    short: <ellipse cx={cx} cy={cy - r * 0.55} rx={r * 0.62} ry={r * 0.3} fill={av.hair} />,
    curly: (
      <g>
        <ellipse cx={cx} cy={cy - r * 0.6} rx={r * 0.65} ry={r * 0.35} fill={av.hair} />
        {[-1, 0, 1].map((i) => (
          <circle key={i} cx={cx + i * r * 0.28} cy={cy - r * 0.72} r={r * 0.18} fill={av.hair} />
        ))}
      </g>
    ),
    long: (
      <g>
        <ellipse cx={cx} cy={cy - r * 0.55} rx={r * 0.6} ry={r * 0.3} fill={av.hair} />
        <rect x={cx - r * 0.6} y={cy - r * 0.4} width={r * 0.18} height={r * 0.8} rx={r * 0.09} fill={av.hair} />
        <rect x={cx + r * 0.42} y={cy - r * 0.4} width={r * 0.18} height={r * 0.8} rx={r * 0.09} fill={av.hair} />
      </g>
    ),
    turban: (
      <g>
        <ellipse cx={cx} cy={cy - r * 0.58} rx={r * 0.62} ry={r * 0.32} fill={av.accent} />
        <rect x={cx - r * 0.62} y={cy - r * 0.62} width={r * 1.24} height={r * 0.12} rx={r * 0.06} fill={av.accent} />
        <circle cx={cx} cy={cy - r * 0.72} r={r * 0.1} fill="#F5EFE7" />
      </g>
    ),
    cap: (
      <g>
        <ellipse cx={cx} cy={cy - r * 0.56} rx={r * 0.62} ry={r * 0.28} fill={av.accent} />
        <rect x={cx - r * 0.62} y={cy - r * 0.62} width={r * 1.24} height={r * 0.14} rx={r * 0.04} fill={av.accent} />
        <rect x={cx - r * 0.1} y={cy - r * 0.62} width={r * 0.5} height={r * 0.1} rx={r * 0.04} fill={av.accent} opacity={0.8} />
      </g>
    ),
  }

  const accessoryEl: Record<Accessory, React.ReactElement | null> = {
    none: null,
    glasses: (
      <g fill="none" stroke={av.accent} strokeWidth={size * 0.03}>
        <circle cx={cx - r * 0.28} cy={cy + r * 0.04} r={r * 0.2} />
        <circle cx={cx + r * 0.28} cy={cy + r * 0.04} r={r * 0.2} />
        <line x1={cx - r * 0.08} y1={cy + r * 0.04} x2={cx + r * 0.08} y2={cy + r * 0.04} />
        <line x1={cx - r * 0.48} y1={cy + r * 0.04} x2={cx - r * 0.56} y2={cy - r * 0.02} />
        <line x1={cx + r * 0.48} y1={cy + r * 0.04} x2={cx + r * 0.56} y2={cy - r * 0.02} />
      </g>
    ),
    earring: (
      <g>
        <circle cx={cx - r * 0.58} cy={cy + r * 0.22} r={r * 0.07} fill={av.accent} />
        <circle cx={cx + r * 0.58} cy={cy + r * 0.22} r={r * 0.07} fill={av.accent} />
      </g>
    ),
    bindi: <circle cx={cx} cy={cy - r * 0.12} r={r * 0.07} fill="#7A1F00" />,
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ overflow: "visible" }}>
      <ellipse cx={cx} cy={cy + r * 0.85} rx={r * 0.6} ry={r * 0.12} fill="rgba(0,0,0,0.15)" />
      <rect x={cx - r * 0.2} y={cy + r * 0.55} width={r * 0.4} height={r * 0.3} rx={r * 0.1} fill={av.skin} />
      <ellipse cx={cx} cy={cy + r * 0.92} rx={r * 0.52} ry={r * 0.18} fill={av.accent} />
      <ellipse cx={cx} cy={cy + r * 0.08} rx={r * 0.55} ry={r * 0.62} fill={av.skin} />
      {hairPaths[av.style]}
      <ellipse cx={cx - r * 0.2} cy={cy + r * 0.02} rx={r * 0.1} ry={r * 0.13} fill="#fff" />
      <ellipse cx={cx + r * 0.2} cy={cy + r * 0.02} rx={r * 0.1} ry={r * 0.13} fill="#fff" />
      <circle cx={cx - r * 0.2} cy={cy + r * 0.04} r={r * 0.07} fill="#1a0a00" />
      <circle cx={cx + r * 0.2} cy={cy + r * 0.04} r={r * 0.07} fill="#1a0a00" />
      <circle cx={cx - r * 0.17} cy={cy + r * 0.01} r={r * 0.025} fill="#fff" />
      <circle cx={cx + r * 0.23} cy={cy + r * 0.01} r={r * 0.025} fill="#fff" />
      <path
        d={`M ${cx - r * 0.28} ${cy + r * 0.36} Q ${cx} ${cy + r * 0.52} ${cx + r * 0.28} ${cy + r * 0.36}`}
        fill="none" stroke="#8B4513" strokeWidth={size * 0.03} strokeLinecap="round" opacity={0.7}
      />
      <ellipse cx={cx - r * 0.38} cy={cy + r * 0.28} rx={r * 0.14} ry={r * 0.09} fill="#FF9999" opacity={0.3} />
      <ellipse cx={cx + r * 0.38} cy={cy + r * 0.28} rx={r * 0.14} ry={r * 0.09} fill="#FF9999" opacity={0.3} />
      {accessoryEl[av.accessory]}
    </svg>
  )
}

const HIGHLIGHT_STATES = new Set([
  "Delhi", "Rajasthan", "Maharashtra", "Andhra Pradesh",
  "Karnataka", "Tamil Nadu", "West Bengal", "Uttar Pradesh",
  "Gujarat", "Punjab", "Kerala",
])

export function IndiaMap() {
  const [mounted, setMounted] = useState(false)
  const [hoveredCity, setHoveredCity] = useState<CityData | null>(null)
  const [hoveredState, setHoveredState] = useState<string | null>(null)

  useEffect(() => { setMounted(true) }, [])

  const getStateColor = useCallback(
    (stateName: string) => {
      if (hoveredState === stateName) return "rgba(201,106,58,0.35)"
      if (HIGHLIGHT_STATES.has(stateName)) return "rgba(122,31,0,0.12)"
      return "rgba(122,31,0,0.04)"
    },
    [hoveredState]
  )

  const cityForState = useCallback(
    (stateName: string) => cities.find((c) => c.state === stateName) ?? null,
    []
  )

  return (
    <section className="py-24 bg-[#FAF7F2] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-medium text-[#C96A3A] tracking-widest uppercase mb-4 block">
            Where Stories Begin
          </span>
          <h2
            className="font-playfair text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#1A1A1A] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Every Story Starts{" "}
            <span className="italic text-[#7A1F00]">In India.</span>
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-xl">
            From Delhi to Chennai, Jaipur to Kolkata — hover over a city to see the stories that began there.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-[#F5EFE7] border border-[#EDE4D8] rounded-3xl p-3 sm:p-5 relative shadow-xl shadow-[#7A1F00]/5"
            suppressHydrationWarning
          >
            {mounted && <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [82.5, 21], scale: 560 }}
              width={600}
              height={860}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => {
                    const stateName: string = geo.properties.NAME_1
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setHoveredState(stateName)
                          const city = cityForState(stateName)
                          setHoveredCity(city)
                        }}
                        onMouseLeave={() => {
                          setHoveredState(null)
                          setHoveredCity(null)
                        }}
                        style={{
                          default: {
                            fill: getStateColor(stateName),
                            stroke: "rgba(122,31,0,0.3)",
                            strokeWidth: 0.7,
                            outline: "none",
                            transition: "fill 0.2s ease",
                          },
                          hover: {
                            fill: "rgba(201,106,58,0.28)",
                            stroke: "#C96A3A",
                            strokeWidth: 1.2,
                            outline: "none",
                          },
                          pressed: {
                            fill: "rgba(122,31,0,0.35)",
                            outline: "none",
                          },
                        }}
                      />
                    )
                  })
                }
              </Geographies>

              {/* City markers */}
              {cities.map((city) => {
                const isActive = hoveredCity?.name === city.name
                return (
                  <Marker
                    key={city.name}
                    coordinates={city.coords}
                    onMouseEnter={() => {
                      setHoveredCity(city)
                      setHoveredState(city.state)
                    }}
                    onMouseLeave={() => {
                      setHoveredCity(null)
                      setHoveredState(null)
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Avatar card on hover */}
                    {isActive && (
                      <g transform="translate(-28, -108)">
                        <line x1={28} y1={104} x2={28} y2={74} stroke="#C96A3A" strokeWidth={1.5} strokeDasharray="3,2" />
                        <rect x={0} y={0} width={56} height={70} rx={6} fill="#FAF7F2" stroke="#C96A3A" strokeWidth={1.5} />
                        <StoryFace av={city.avatar} size={56} />
                      </g>
                    )}

                    {/* Pulse ring */}
                    <circle r={isActive ? 14 : 10} fill="#C96A3A" opacity={0.15}>
                      {!isActive && (
                        <>
                          <animate attributeName="r" values="6;16;6" dur="2.4s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite" />
                        </>
                      )}
                    </circle>
                    {/* Core dot */}
                    <circle
                      r={isActive ? 7 : 5}
                      fill={isActive ? "#7A1F00" : "#C96A3A"}
                      stroke="#FAF7F2"
                      strokeWidth={isActive ? 2 : 1.5}
                    />
                    {/* Label */}
                    <text
                      textAnchor="start"
                      x={10}
                      y={4}
                      fill={isActive ? "#7A1F00" : "#6B6B6B"}
                      fontSize={isActive ? 13 : 11}
                      fontWeight="700"
                      fontFamily="Inter, sans-serif"
                      style={{ pointerEvents: "none", letterSpacing: "-0.01em" }}
                    >
                      {city.name}
                    </text>
                  </Marker>
                )
              })}
            </ComposableMap>}
          </motion.div>

          {/* Side panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-4 sticky top-24"
          >
            {/* Info card */}
            <div className="bg-[#F5EFE7] border border-[#EDE4D8] rounded-2xl p-6">
              <p className="text-xs font-medium text-[#C96A3A] tracking-widest uppercase mb-3">
                {hoveredCity ? "Story Origin" : "Hover a city or state"}
              </p>

              {hoveredCity ? (
                <div className="flex items-center gap-4 mb-5">
                  <div className="border-2 border-[#EDE4D8] rounded-xl p-1 bg-[#FAF7F2] flex-shrink-0">
                    <StoryFace av={hoveredCity.avatar} size={60} />
                  </div>
                  <div>
                    <p
                      className="font-playfair text-2xl font-bold text-[#1A1A1A] leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {hoveredCity.name}
                    </p>
                    <p className="text-sm text-[#6B6B6B]">{hoveredCity.state}</p>
                  </div>
                </div>
              ) : (
                <p
                  className="font-playfair text-3xl font-bold text-[#1A1A1A] mb-5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  India
                </p>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#7A1F00] rounded-xl p-4">
                  <p className="text-[10px] font-semibold text-[#F5EFE7]/70 uppercase tracking-wider mb-1">Stories</p>
                  <p
                    className="font-playfair text-2xl font-bold text-[#F5EFE7]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {hoveredCity ? `${hoveredCity.stories}+` : "300+"}
                  </p>
                </div>
                <div className="bg-[#EDE4D8] rounded-xl p-4">
                  <p className="text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-wider mb-1">Now in</p>
                  <p className="text-xs font-medium text-[#1A1A1A] leading-snug">
                    {hoveredCity ? hoveredCity.destinations : "10+ Countries"}
                  </p>
                </div>
              </div>
            </div>

            {/* City list */}
            <div className="bg-[#F5EFE7] border border-[#EDE4D8] rounded-2xl p-5">
              <p className="text-xs font-medium text-[#6B6B6B] tracking-widest uppercase mb-3">Story Origins</p>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                {cities.map((c) => (
                  <li
                    key={c.name}
                    className={`flex items-center gap-2 text-sm transition-colors ${
                      hoveredCity?.name === c.name ? "text-[#7A1F00] font-semibold" : "text-[#6B6B6B]"
                    }`}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-[#C96A3A]"
                      style={{ opacity: hoveredCity?.name === c.name ? 1 : 0.4 }}
                    />
                    {c.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdSBQooy4gCg5uB2eno8QLpyAIzbGXaeskRRRvP1EWx9zLHjg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#7A1F00] text-[#F5EFE7] font-semibold text-sm rounded-xl text-center hover:bg-[#5C1700] transition-colors"
            >
              ✨ Add Your City's Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
