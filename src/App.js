import React from "react";
import "./stilosHeader.css";
import Header from "./Header";
import SocialBar from "./SocialBar";
import PortadaImg from "./portada";


class App extends React.Component{
  render(){
    return (
    <>
      <SocialBar/> 
      <Header/>
      <PortadaImg/>
    </>
    );
  }
}
export default App;
