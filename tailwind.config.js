module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false,
  corePlugins: {
    container: true,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "610px",
          },
          "@screen md": {
            maxWidth: "750px",
          },
          "@screen lg": {
            maxWidth: "1000px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
          "@screen 2xl": {
            maxWidth: "1408px",
          },
        },
      });
    },
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        "coolGray-800": "#1c1a1a",
        "coolGray-600": "#0A0909",
        "coolGray-400": "#4E4E4E",
        "coolGray-200": "#CCCCCC",
        "coolGray-100": "#F9F9F9",
        "coolGray-50": "#cccccc30",
        "orange-800": "#FA6400",
      },
      placeholderColor: (theme) => theme("colors"),
      placeholderColor: {
        "coolGray-400": "#4E4E4E",
      },
      fontFamily: {
        sans: [
          '"Red Hat Display",sans-serif',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        "9xl": "7.5rem",
      },
    },
  },
  // Other stuff
};
