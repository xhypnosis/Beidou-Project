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
            'Montserrat':['Montserrat'],

        },
        fontSize: {
            '3xl': ['2rem', '3rem'],
        },
        extend: {
            colors: {
                'sea-green': '#2e8b57',
                'darkslategray': '#2F4F4F'
            },
            backgroundImage: () => ({
                'back': "url('images/background.jpg')"
            }),
            spacing: {
                '1/10': '10%',
                '1/8': '12.5%',
                '3/20': '15%',
                '25': '6.25rem',
            }
        },
    },
    plugins: [],
}
