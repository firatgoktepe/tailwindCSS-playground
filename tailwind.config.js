module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                main: "var(--main)",
                background: "var(--background)",
                header: "var(--header)",
                accent: "var(--accent)",
              },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}
