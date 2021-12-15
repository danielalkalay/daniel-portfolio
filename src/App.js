import React from "react";
import NavBar from "./components/NavBar/NavBar";
import GlobalStyle from "./GlobalStyle";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <MainSection />
    </>
  );
}

export default App;
