import React from "react";
import Login from "./Login";
import Register from "./Register";


let userIsLogged = true; // se colocar false aparece o componente Register

export default function App() {
  return (
    <div className="title">
        {
         userIsLogged ? <Login/> : <Register/> 
        }
    </div>
  );
}