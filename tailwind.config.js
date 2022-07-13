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
            'jockey': ['jockey one'],
            'cursive': ['cursive'],
            'sans': ['open sans'],
            'lato': ['Lato'],
            'montserrat':['Montserrat'],
            'metro': ['metropolis'],
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
                'enroll': "url('images/enroll.webp')",
            }),
            spacing: {
                '1/10': '10%',
                '1/8': '12.5%',
                '3/20': '15%',
                '6/20': '30%',
                '8/20': '40%',
                '25': '6.25rem',
                '2/1': '200%',
                '7/10': '70%',
            }
        },
    },
    plugins: [],
}
