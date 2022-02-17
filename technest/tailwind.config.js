module.exports = {
  mode: 'jit',
    purge: ['./pages/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./containers/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors:{
        yudha: 'red'
      },
        screens:{
            'sm': '375px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
