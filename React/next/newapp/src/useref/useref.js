import React, { useEffect, useRef } from "react";
function Useref(){

    const newref=useRef()
    console.log(newref.current);
    useEffect(() => {
        if (newref.current) {
          const width = newref.current.getBoundingClientRect().width;
          console.log(width, 'newref');
        }
      }, []);
      
//useefect is asynchronous
//useLayouteffect is synchronous
    return <div>
        <label ref={newref}>Hello</label>
    </div>
}

export default Useref