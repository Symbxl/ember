import type { Config } from "tailwindcss";

// Ember Sterling — Light canvas, warm orange accents.
// Palette tokens preserve their direction: ink-50 = darkest (primary text),
// ink-950 = lightest (page canvas). The values were flipped to suit a
// light-mode canvas. `ember` is the brand orange. `cream-50` is dark text.

const config: Config = {
  content: ["./src/**/*.{ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // INK — neutral surface scale (light-mode), 50 darkest text / 950 lightest canvas
        ink: {
          50: "#0a0a0b",   // primary dark text
          100: "#18181b",  // secondary dark text
          200: "#27272a",  // body text
          300: "#3f3f46",  // muted paragraph
          400: "#71717a",  // muted (zinc-500)
          500: "#a1a1aa",  // hint text (zinc-400)
          600: "#d4d4d8",  // strong dividers (zinc-300)
          700: "#e4e4e7",  // borders (zinc-200)
          800: "#f1f5f9",  // elevated card (slate-100)
          900: "#f8fafc",  // section band (slate-50)
          950: "#ffffff"   // page canvas
        },
        cream: {
          50: "#0a0a0b",   // primary dark text on light canvas
          100: "#27272a",
          200: "#71717a"
        },
        // EMBER — brand orange (warm fire palette), extended for gradient work
        ember: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407"
        },
        // ACCENT — gradient endpoints for the hero glow
        accent: {
          cyan: "#22d3ee",
          violet: "#8b5cf6",
          pink: "#ec4899"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(15, 23, 42, 0.12)",
        lift: "0 24px 50px -20px rgba(15, 23, 42, 0.2)",
        glow: "0 18px 50px -18px rgba(249, 115, 22, 0.45)",
        "glow-violet": "0 18px 60px -18px rgba(139, 92, 246, 0.35)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #ffffff 90%), linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
        "ember-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(249,115,22,0.18) 0%, transparent 60%)",
        "hero-aurora":
          "radial-gradient(50% 50% at 80% 20%, rgba(234,88,12,0.35) 0%, transparent 50%), radial-gradient(40% 40% at 70% 70%, rgba(251,191,36,0.25) 0%, transparent 50%)",
        "gradient-text":
          "linear-gradient(90deg, #fb923c 0%, #f97316 35%, #ea580c 70%, #c2410c 100%)"
      },
      backgroundSize: {
        grid: "100% 100%, 28px 28px, 28px 28px"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "blur-in": {
          "0%": { opacity: "0", filter: "blur(14px)", transform: "scale(0.98)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "scale(1)" }
        },
        "ember-pulse": {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" }
        },
        "drift-slow": {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(20px,-16px,0) scale(1.08)" }
        },
        "gradient-pan": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        "pulse-dot": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.4)" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(.2,.7,.2,1) both",
        "blur-in": "blur-in 1.1s cubic-bezier(.2,.7,.2,1) both",
        "ember-pulse": "ember-pulse 7s ease-in-out infinite",
        "drift-slow": "drift-slow 22s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease-in-out infinite",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
