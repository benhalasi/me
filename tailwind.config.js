/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: [
        "'Major Mono Display'",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "'Liberation Mono'",
        "'Courier New'",
        "monospace",
      ],
      body: [
        "Poppins",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "Roboto",
        "'Helvetica Neue'",
        "Arial",
        "'Noto Sans'",
        "sans-serif",
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
        "'Noto Color Emoji'",
      ],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("prettier-plugin-tailwindcss"),
  ],
};
