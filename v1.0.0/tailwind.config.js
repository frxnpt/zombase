module.exports = {
    purge: [
        './views/**/*.hbs',
    ],
    darkMode: false, //or 'media' or 'class'
    theme: {
        extend: {}
    },
    variants: {
        extend: {
            padding: ['hover'],
        },
    },
    plugins: [],
    mode: 'jit',
}