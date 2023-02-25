const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                sandy: {
                    '50': '#fef7ee',
                    '100': '#fcedd8',
                    '200': '#f8d8b0',
                    '300': '#f4bb7d',
                    '400': '#ee964b',
                    '500': '#e97826',
                    '600': '#db5f1b',
                    '700': '#b54819',
                    '800': '#913a1b',
                    '900': '#753219',
                }
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
