/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */
/** @type {import('tailwindcss').Config} */

// Settings
const settingsGrid = require('./tailwind/tailwind.settings.grid.cjs');
const settingsfluidType = require('./tailwind/tailwind.settings.fluidType.cjs');
const settingsThemeIt = require('./tailwind/tailwind.settings.themeIt.cjs');

module.exports = {
  content: ['./templates/**/*.{twig,html,vue,js,ts}', './src/vue/**/*.{vue,js,ts}'],
  safelist: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      mono: ['"JetBrains Mono"', '"Courier New"', 'Courier', 'monospace'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      nthover: { raw: '(hover: hover)' },
    },
    extend: {
      gridTemplateColumns: { ...settingsGrid.gridTemplateColumns },
      gridColumn: { ...settingsGrid.gridColumn },
      gridRowStart: { ...settingsGrid.gridRowStart },
      gridRowEnd: { ...settingsGrid.gridRowEnd },
      aspectRatio: {
        landscape: '3 / 2',
        portrait: '2 / 3',
      },
    },
    // Plugin Stuff
    debugScreens: {
      ignore: ['nthover'],
      position: ['bottom', 'right'],
    },
  },
  variants: {},
  corePlugins: {
    container: false,
    fontSize: false, // disable because we use the fluid type plugin
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-theme-it')(settingsThemeIt),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-fluid-type')({
      ...settingsfluidType,
    }),
    ({ addComponents }) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      addComponents(require('./tailwind/tailwind.plugins.addComponents'));
    },
  ],
};
