const { Navbar } = require("react-bootstrap");

module.exports = {
  content: [
    './src/App.js',
    './src/index.js',
    './src/AllArtists.js',
    './src/AllVenues.js',
    './src/ArtistLogin.js',
    './src/VenueLogin.js',
    './src/ArtistRegister.js',
    './src/VenueRegister.js',
    './src/LandingPage.js',
    './src/ShowArtist.js',
    './src/ShowVenue.js',
    './src/StartJourney.js',
    './node_modules/flowbite/**/*.{js,jsx}',
    './src/VenueStart.js',
    './src/ArtistStart.js',
    './src/Navbar.js',
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    }, width: {
      '18/20': '92%',
    },
    screens: {
      'fold': '280px',
      
      'tablet': '724px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'button': '#FF3DB1',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/oscar-keys-background-dark.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }, 
    },
  },
  plugins: [
  ],
}
