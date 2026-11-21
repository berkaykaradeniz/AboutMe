module.exports = (ctx) => ({
  plugins: [
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" || ctx.env === "production"
      ? [
          require("cssnano")({
            preset: "default",
          }),
        ]
      : []),
  ],
});
