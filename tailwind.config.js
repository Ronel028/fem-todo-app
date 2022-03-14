module.exports = {
  content: ['./index.html', './script/app.js'],
  theme: {
    extend: {
      colors: {
        // primary
        'BrightBlue': 'hsl(220, 98%, 61%)',
        'CheckBackgroundfirst' : 'hsl(192, 100%, 67%)',
        'CheckBackgroundsecond' : 'hsl(280, 87%, 65%)',


        // light theme
        'VeryLightGray': 'hsl(0, 0%, 98%)',
        'VeryLightGrayishBlue': 'hsl(236, 33%, 92%)',
        'LightGrayishBlue': 'hsl(233, 11%, 84%)',
        'DarkGrayishBlue': 'hsl(236, 9%, 61%)',
        'VeryDarkGrayishBlue': 'hsl(235, 19%, 35%)',

        // dark theme
        'VeryDarkBlue': 'hsl(235, 21%, 11%)',
        'VeryDarkDesaturatedBlue': 'hsl(235, 24%, 19%)',
        'LightGrayishBlue': 'hsl(234, 39%, 85%)',
        'LightGrayishBlueHover': 'hsl(236, 33%, 92%)', //(hover)
        'DarkGrayishBlue': 'hsl(234, 11%, 52%)',
        'VeryDarkGrayishBlue1': 'hsl(233, 14%, 35%)',
        'VeryDarkGrayishBlue2': 'hsl(237, 14%, 26%)',
      },
    },
    fontFamily: {
      'JosefinSans': ['Josefin Sans', 'sans-serif']
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'tablet': {'max': '860px'},
      // => @media (max-width: 1023px) { ... }

      'tabletmd': {'max': '600px'},
      // => @media (max-width: 767px) { ... }

      'mobile': {'max': '500px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
