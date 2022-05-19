import { About, Faq, Footer, Home, Navigation, Showcase } from './sections';

import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

function App() {
   return (
      <div>
         <GlobalStyles />

         <Navigation />
         <Home />
         <About />
         <Showcase />
         <Faq />
         <Footer />
      </div>
   );
}

export default App;

// "normalize.css": "^8.0.1",
// "react-router-dom": "^6.2.1",
// "styled-components": "^5.3.3",
