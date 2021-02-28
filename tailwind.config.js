module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ["'Major Mono Display'", 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "'Liberation Mono'", "'Courier New'", 'monospace'],
      'body': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Roboto', "'Helvetica Neue'", 'Arial', "'Noto Sans'", 'sans-serif', "'Apple Color Emoji'", "'Segoe UI Emoji'", "'Segoe UI Symbol'", "'Noto Color Emoji'"],
    },
    outline: {
      DEFAULT: ['2px solid transparent', '-1px'],
      brutal: ['2px solid white', '-1px']
    },
    extend: {},
  },
  variants: {
    extend: {
      outline: ['hover', 'focus-within', 'focus'],
    }
  },
  plugins: [],
}
