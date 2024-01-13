import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Label from "./newfile";
import Newfun from "./functional";
import Tools from "./Returnchildren";
import Retfun from "./Returnchildfun";
import Componentmount from "./Componentmount/Componentmount";
import Effects from "./useeffect/useeffect";
import Useref from "./useref/useref";
import Reduce from "./Reducer";

const MyContext = createContext();

function RootComponent() {
  const [state, setState] = useState(8);

  return (
    <React.StrictMode>
      {/* <App /> */}
      <Label />
      <Newfun />
      <Tools>
        <div>
          <h2>Hello</h2>
          <h2>Hello</h2>
          <h2>Hello</h2>
          <h2>Hello</h2>
        </div>
      </Tools>
      <Reduce/>
      <MyContext.Provider value={state}>
        <Retfun>
          <h3>Hai</h3>
          <h3>Hai</h3>
          <h3>Hai</h3>
          <h3>Hai</h3>
        </Retfun>
      </MyContext.Provider>
      <Componentmount />
      <Effects />
      <Useref/>

    </React.StrictMode>
  );
}
export default MyContext

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);
