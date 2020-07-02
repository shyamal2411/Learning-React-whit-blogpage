import React from "react";
import "./stilosHeader.css";
import Header from "./Header";
import SocialBar from "./SocialBar";


class App extends React.Component{
  render(){
    return (
    <>
      <SocialBar/> 
      <Header/>
    </>
    );
  }
}
export default App;
