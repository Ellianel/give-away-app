import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
      <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
      >
      </ThemeProvider>
  );
}

export default App;
