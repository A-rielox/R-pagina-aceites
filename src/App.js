import { Routes, Route, useLocation } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

function App() {
   return (
      <div>
         <GlobalStyles />

         <Button>hola</Button>
      </div>
   );
}

const Button = styled.button`
   background-color: var(--color-primary);
   padding: 3rem;
   color: white;
`;

export default App;

// "normalize.css": "^8.0.1",
// "react-router-dom": "^6.2.1",
// "styled-components": "^5.3.3",
