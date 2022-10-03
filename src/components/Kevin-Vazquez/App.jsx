import React, { StrictMode, useState } from "react";
import "./main.css";
import chooseCharacter from "./password";

function App() {
	const [password, setPassword] = useState("");

	const click = ()=>{
		setPassword();	
	}

	const copy = ()=>{

	}

  return (
    <StrictMode>
      <div className="container">
        <form className="box">
          <div className="display">
            <span className="pass-span">{password}</span>
            <button onClick={copy}>
              <img src="./icon/copy.png" />
            </button>
          </div>
          <button onClick={click}>Generar Password</button>
        </form>
      </div>
    </StrictMode>
  );
}

export default App;
