/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            textColor: {
                skin: {
                    primary: "var(--color-primary)",
                    secondary: "var(--color-secondary)",
                    secondaryDark: "var(--color-secondary-dark)",
                    secondaryLight: "var(--color-secondary-light)",
                },
            },
            backgroundColor: {
                skin: {
                    primary: "var(--color-primary)",
                    secondary: "var(--color-secondary)",
                    secondaryDark: "var(--color-secondary-dark)",
                    secondaryLight: "var(--color-secondary-light)",
                },
            },
            ringColor: {
                skin: {
                    primary: "var(--color-primary)",
                    secondary: "var(--color-secondary)",
                    secondaryDark: "var(--color-secondary-dark)",
                    secondaryLight: "var(--color-secondary-light)",
                },
            },
            ringOffsetColor: {
                skin: {
                    primary: "var(--color-primary)",
                    secondary: "var(--color-secondary)",
                    secondaryDark: "var(--color-secondary-dark)",
                    secondaryLight: "var(--color-secondary-light)",
                },
            },
            borderColor: {
                skin: {
                    primary: "var(--color-primary)",
                    secondary: "var(--color-secondary)",
                    secondaryDark: "var(--color-secondary-dark)",
                    secondaryLight: "var(--color-secondary-light)",
                },
            },
            gradientColorStops: {
                skin: {
                    primary: "var(--color-primary)",
                    secondary: "var(--color-secondary)",
                    secondaryDark: "var(--color-secondary-dark)",
                    secondaryLight: "var(--color-secondary-light)",
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
        require('flowbite/plugin')
    ],
};
