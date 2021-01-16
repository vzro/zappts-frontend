import React, { useState, useEffect } from "react";
import { Container } from "./components/container";
import { Panel } from "./components/panel";
import { Slider } from "./components/slider";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
    };
  }, [screenSize]);

  if (screenSize >= 1100) {
    return (
      <Container>
        <Slider />
        <Panel />
      </Container>
    );
  } else {
    return (
      <Container>
        <Panel />
        <Slider />
      </Container>
    );
  }
}

export default App;
