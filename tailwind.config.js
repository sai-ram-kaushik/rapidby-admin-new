/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            background: "#FFFFFF",
            primary: "#000000",
            primaryShade: "#080808",
            secondary: "#48246C",
            container: "#1C1C1C",
         },

         fontFamily: {
            heading: "Poppins",
            bodyContent: "Nunito",
         },
      },
   },
   plugins: [],
};
