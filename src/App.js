import { About, Faq, Footer, Home, Navigation, Showcase } from './sections';
import ScrollToTop from './components/common/ScrollToTop';

import GlobalStyles from './styles/GlobalStyles';

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

         <ScrollToTop />
      </div>
   );
}

export default App;

// "normalize.css": "^8.0.1",
// "react-router-dom": "^6.2.1",
// "styled-components": "^5.3.3",
