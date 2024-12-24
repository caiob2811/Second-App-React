import React from "react";
import Input from "./Input";

export default function Register () {
     return (
            <div>
                <h1>Register</h1>
              <form className="form">
               <Input type="name"
                placeholder={"Type your first name"} 
                  maxLength={8}
                />
              <Input type="password"
                placeholder="Type your password"
                maxLength={8}
               />
               <Input type="password"
                placeholder="Confirm your password"
                maxLength={8}
               />
                <button type="submit">Sign-up</button>
              </form>
            </div>
        )
    }