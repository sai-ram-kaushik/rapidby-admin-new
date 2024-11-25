/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            background: "#FFFFFF",
            primary: "#000000",
            primaryShade: "#808080",
            secondary: "#48246C",
            container: "#F5F5F5",
         },

         fontFamily: {
            heading: "Poppins",
            bodyContent: "Nunito",
         },
      },
   },
   plugins: [],
};
