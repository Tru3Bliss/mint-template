module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          primary: {
            DEFAULT: "#000011",
            light: "#545454",
            100: "#a7a4a4",
            200: "#a7a4a4",
            300: "#a7a4a4"
          },
          blue: {
            100: "#2B92CE"
          },
          pink: {
            100: "#DB4B95"
          },
          yellow: {
            100: "#F4B065"
          },
          black: {
            100: "#252525",
            transparent: "#000000Af"
          },
        }
      },
      fontFamily: {
        "nordeco": ["nordeco"],
        "nordeco-bold": ["nordeco-bold"],
      },
      maxWidth: {
        30: "300px",
        50: "500px",
        max: "max-content",
      },
      borderRadius: {
        DEFAULT: '4px',
        'none': '0',
        'sm': '0.125rem',
        'md': '4px',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      }
    },
    screens: {
      'tiny': '500px',
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1680px"
    },
  },
  plugins: [],
}
