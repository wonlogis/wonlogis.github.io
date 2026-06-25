import type { Config } from "tailwindcss";

export default {
  content: ["./site-src/index.html", "./site-src/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07182f",
        navy: "#0b2244",
        gold: "#d9ad52",
        sand: "#efe2c8",
        mist: "#eef3f8"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 24, 47, 0.12)",
        gold: "0 20px 50px rgba(217, 173, 82, 0.18)"
      },
      maxWidth: {
        container: "1220px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "100%": { transform: "translateX(220%) skewX(-18deg)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shine: "shine 1.4s ease",
        marquee: "marquee 18s linear infinite"
      },
      backgroundImage: {
        "grain-light":
          "radial-gradient(circle at top, rgba(217, 173, 82, 0.16), transparent 34%), radial-gradient(circle at bottom, rgba(12, 37, 76, 0.10), transparent 30%)"
      }
    }
  },
  plugins: []
} satisfies Config;
