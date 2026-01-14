/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}", "./blog/**/*.{md,mdx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Linear-like dark theme palette
        background: '#0B0C0E', // Very dark grey/black
        surface: '#141517',
        primary: '#5E6AD2', // Linear Purple
        secondary: '#9CA3AF', // Muted text
        accent: '#8B5CF6', // Purple accent
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable preflight to avoid conflicts with Docusaurus styles
  },
  blocklist: ['container'], // Avoid conflict with Docusaurus container class
};
