import React from "react";
import "./App.css";


class App extends React.Component{
  render(){
    return(
      <div className="App-header">
        <div className="classContent">
          <h1>Formulario</h1>
          <p>hola mundo</p>
          <form action="firebase" name="formulario" method="POST">
            <input type="checkbox" name="dsdsdsddsd" id="aceptar"/>l
            <button type="submit" onClick= "validar" id='btn' name='btn' value="hola"/>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
