import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "ft-blue": "#0B1B3F", // Deep Premium Navy
                "ft-red": "#E31D1D",  // Vibrant Red
                "ft-green": "#25D366", // WhatsApp Green
                "slate-850": "#1e293b", // Custom slate for contrast
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
};
export default config;
