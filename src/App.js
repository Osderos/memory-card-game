import React, { useEffect } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    console.log("App component did mount");
    document.body.style.margin = "0px";
    document.body.style.padding = "0px";
  }, []);

  return (
    <div
      // className="App"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "100vh",
      //   margin:"25%"
      // }}
    >
      <Header />
      <Gameboard />
      <Footer/>
    </div>
  );
}

export default App;
