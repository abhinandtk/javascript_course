import React, { useMemo, useState } from "react";
import Innercom from "./inndercomponent";

function Retfun(props) {
  const { children } = props;
  const [state, setState] = useState(true);
  const count = React.Children.count(children);
  const setchange = () => {
    setState(
      (val) => !val,
    );
  
  };
  const newval=useMemo(()=>{
    return {
      key:"val",
      state:"state"
    }
  },[state])
  
  return (
    <>
    <Innercom newval={newval}></Innercom>
      <div>{children}</div>
      <h2>{count}</h2>
      <button onClick={setchange}>Clickss</button>
    </>
  );
}

export default Retfun;
