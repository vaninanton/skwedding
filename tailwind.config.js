/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                'display': ['Marck Script'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
