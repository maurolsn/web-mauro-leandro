import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ThemeProvider from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";
import Home from "Components/pages/Home";
import About from "Components/pages/About";
import ProductDetail from "Components/pages/ProductDetail";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
