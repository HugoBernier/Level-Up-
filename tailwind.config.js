import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.ts',
        './resources/**/*.jsx',
        './resources/**/*.tsx',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4F46E5',
                    dark: '#4338ca',
                    light: '#818CF8',
                },
                secondary: {
                    DEFAULT: '#1b1b18',
                    light: '#19140035',
                    dark: '#EDEDEC',
                },
                background: {
                    DEFAULT: '#FDFDFC',
                    dark: '#0a0a0a',
                },
                footer: {
                    DEFAULT: '#ffffff',
                    dark: '#1b1b18',
                },
            },
            fontFamily: {
                sans: ['"Instrument Sans"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
