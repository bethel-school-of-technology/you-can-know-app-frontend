module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      '250': '2.5',
    },
    extend: {
      backgroundImage: (theme) => ({
          'login-img': "url('./images/LOGIN.jpeg')",
          'signup-img': "url('./images/SIGNUP.jpeg')",
          'logo-img': "url('./images/LOGO.png')",
          'logout-img': "url('./images/LOGOUT.jpeg')",
          'about-img': "url('./images/ABOUT.jpeg')",
          'profile-img': "url('./images/PROFILE.jpeg')",
          'home-img': "url('./images/HOME.jpeg')",
    }),
  },
},
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
