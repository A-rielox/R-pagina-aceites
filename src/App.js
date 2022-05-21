// prettier-ignore
import { About, Faq, Footer, Home, Navigation, Showcase, WhatAre } from './sections';
import ScrollToTop from './components/common/ScrollToTop';

import GlobalStyles from './styles/GlobalStyles';

function App() {
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

// "normalize.css": "^8.0.1",
// "react-router-dom": "^6.2.1",
// "styled-components": "^5.3.3",
