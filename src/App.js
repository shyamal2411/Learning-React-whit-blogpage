import React from "react";
import "./Stilos.css";
import Header from "./Header";
import SocialBar from "./SocialBar";
import PortadaImg from "./portada";
import QuienSoy from "./section";


class App extends React.Component{
  render(){
    return (
    <>
      <SocialBar/> 
      <Header/>
      <PortadaImg/>
      <QuienSoy/>
    </>
    );
  }
}
export default App;
