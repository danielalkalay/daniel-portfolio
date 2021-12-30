import React from "react";
import "react-slideshow-image/dist/styles.css";
import NavBar from "./components/NavBar/NavBar";
import GlobalStyle from "./GlobalStyle";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
