import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// _app.js
// import { PrimeReactProvider } from 'primereact/api';

// export default function MyApp({ Component, pageProps }) {
//     return (
//         <PrimeReactProvider>
//             <Component {...pageProps} />
//         </PrimeReactProvider>
//     );
// }

        