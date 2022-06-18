module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        backgroundSize: {
            'auto': 'auto',
            'cover': 'cover',
            'contain': 'contain',
            '110%': '110%',
        },
        fontFamily: {
            'jockey': ['jockey one', 'sans-serif'],
            'cursive': ['cursive'],
            'sans': ['sans-serif'],
            'lato': ['Lato', 'sans-serif'],
            'montserrat':['Montserrat'],
        },
        extend: {
            colors: {
                'sea-green': '#2e8b57',
                'darkslategray': '#2F4F4F'
            },
            backgroundImage: () => ({
                'back': "url('images/background.jpg')",
                'space': "url('images/space.webp')",
                'dome': "url('images/dome.webp')",
            }),
            spacing: {
                '1/10': '10%',
                '1/8': '12.5%',
                '3/20': '15%',
                '25': '6.25rem',
                '2/1': '200%',
            }
        },
    },
    plugins: [],
}
