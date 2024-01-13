import logo from "./logo.svg";
import "./App.css";
import Newtest from "./Newtest";
import { Provider } from "react-redux";
// import Immer from "./Redux/immer";
import store from "./Reduxtoolkit/store";

function App() {
  return (
    <Provider store={store}>
      <Newtest />
      {/* <Immer/> */}

    </Provider>
  );
}

export default App;
