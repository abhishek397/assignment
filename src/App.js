import "./styles.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import background from "./images/assignment1.jpg";
import Cart from "./Cart.js";
import Logo from "./images/assilogo.jpg";

export default function App() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState(false);

  const handelClick = (e) => {
    e.preventDefault();
    console.log(user, password);
    setUser("");
    setPassword("");
    setStatus(true);
  };

  return (
    <>
      {status ? (
        <section>
          <Cart />
        </section>
      ) : (
        <div
          className="App"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <form className="logIn-Form">
            <div className="logo">
              <img src={Logo} alt="logo"/>
            </div>
            <div className="text">
              <TextField
                id="standard-basic"
                autoComplete="off"
                label="Email"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                variant="standard"
                required
              />
              <br />
              <TextField
                type="password"
                id="standard-basic"
                autoComplete="off"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="standard"
                required
              />

              <div className="Forget-details">
                <span>Remember Me</span>
                <span>
                  <a href="/#">Forget Password?</a>
                </span>
              </div>
              <button className="btn" onClick={handelClick}>
                Login
              </button>

              <div className="Foot">
                <span>
                  Don't Have An Account?<a href="/#">SignUp</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
