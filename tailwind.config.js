module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      '200': '2.0',
      '250': '2.5',
    },
     
    extend: {
      backgroundImage: (theme) => ({
          'login-img': "url('./images/LOGIN.jpeg')",
          'signup-img': "url('./images/SIGNUP.jpg')",
          'logo-img': "url('./images/LOGO.png')",
          'logout-img': "url('./images/LOGOUT.jpeg')",
          'about-img': "url('./images/ABOUT.jpeg')",
          'profile-img': "url('./images/PROFILE.jpeg')",
          'home-img': "url('./images/HOME.jpg')",
          'destiny-img': "url('./images/DESTINATION.jpeg')",
          'posts-img': "url('./images/POST3.jpeg')",
          'mexico-img': "url('./images/mexico-B.jpg')",
          'brazil-img': "url('./images/brazil.jpg')",
          'greece-img': "url('./images/greece.jpg')",
          'destinations-img': "url('./images/Brazil4.jpeg')",
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
