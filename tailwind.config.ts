
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6", // Refined purple for premium feel
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#6D4ADB", // Deeper secondary purple
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#E2D9FF", // Subtle light purple
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "#dc2e3e", // Red for CTAs and critical actions
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8F9FA", // Lighter background with subtle tint
          foreground: "#1A1A1A",
        },
        success: {
          DEFAULT: "#0D6E42", // Green for success states
          foreground: "#FFFFFF",
        },
        info: {
          DEFAULT: "#0096d4", // Blue for informational elements
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#F4B400", // Yellow for warnings (use sparingly)
          foreground: "#1A1A1A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        rookblue: "#0096d4", // Primary brand color
        rookgreen: "#0D6E42", // Rook Green brand color
        textPrimary: "#1a1a1a", // Rich readability
        textSecondary: "#4a4a4a", // Muted paragraphs
        borderLight: "#e5e5e5", // Light borders
        cardBg: "#f5f5f5", // Card backgrounds
        shadowSoft: "rgba(0,0,0,0.05)", // Soft shadows
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Poppins as unified font for everything
        poppins: ["Poppins", "sans-serif"], // Poppins font family
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-down": "fadeDown 0.7s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 6s linear infinite",
        "bounce-gentle": "bounceGentle 3s ease-in-out infinite",
        "blur-pulse": "blurPulse 4s ease-in-out infinite",
        "scale-pulse": "scalePulse 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.3" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        blurPulse: {
          "0%, 100%": { filter: "blur(0px)" },
          "50%": { filter: "blur(2px)" },
        },
        scalePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.05)",
        card: "0 2px 8px rgba(0,0,0,0.08)",
        premium: "0 10px 25px rgba(139,92,246,0.08)",
        glow: "0 0 15px rgba(139,92,246,0.3)",
        "inner-glow": "inset 0 0 10px rgba(139,92,246,0.2)",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200% 200%',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
