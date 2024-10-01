/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:
        "#ffc727"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:
          "1rem",
          sm:"3rem",
        },
      },
    },
  },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
};



// plugins: [],
//   variants:{
//     extend:{
//       display: ["focus-group"]
//     }
//   }
// }