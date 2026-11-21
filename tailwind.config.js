const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  safelist: ["active"],
  theme: {
    fontFamily: {
      header: ["Plus Jakarta Sans", "Raleway", ...defaultTheme.fontFamily.sans],
      body: ["Inter", "Open Sans", ...defaultTheme.fontFamily.sans],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      colors: {
        primary: "#4f46e5",
        "primary-dark": "#3730a3",
        secondary: "#0f172a",
        yellow: "#facc15",
        lila: "#e0e7ff",
        "grey-10": "#475569",
        "grey-20": "#64748b",
        "grey-30": "#94a3b8",
        "grey-40": "#64748b",
        "grey-50": "#f8fafc",
        "grey-60": "#e2e8f0",
        "grey-70": "#cbd5e1",
      },
      zIndex: {
        60: "60",
        70: "70",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};
