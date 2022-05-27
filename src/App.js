import React, { useState, useEffect } from 'react';

// prettier-ignore
import { About, Faq, Footer, Home, Navigation, Showcase, WhatAre } from './sections';
import ScrollToTop from './components/common/ScrollToTop';

import GlobalStyles from './styles/GlobalStyles';

function App() {
   const [ancho, setAncho] = useState(null);
   useEffect(() => {
      window.addEventListener('resize', () => setAncho(window.innerWidth));

      return () => {
         window.removeEventListener('resize', setAncho(window.innerWidth));
      };
   }, []);

   useEffect(() => {
      console.log(ancho);
   }, [ancho]);

   return (
      <div>
         <GlobalStyles />

         <main className="App">
            <Navigation />
            <Home />
            <WhatAre />
            <About />
            <Showcase />
            <Faq />
            <Footer />

            <ScrollToTop />
         </main>
      </div>
   );
}

export default App;

// yellow
// NO ESTOY OCUPANDO content.js DE ABOUT

// "normalize.css": "^8.0.1",
// "react-router-dom": "^6.2.1",
// "styled-components": "^5.3.3",
