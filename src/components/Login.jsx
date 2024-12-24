import React from "react";
import Input from "./Input";

export default function Login () {
    return (
      <div>
        <h1>Login</h1>
          <form className="form">  {/*Utilizando os props */}
            <Input type="name" 
              placeholder={"Type your first name"} 
                maxLength={8}
            />
            <Input type="password"
              placeholder="Type your password"
              maxLength={8}
           />
            <button type="submit">Login</button>
          </form>
      </div>
    )
}