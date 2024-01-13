import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function Dynamicuser() {
  const { userid } = useParams();
  const [searchparams, Setsearchparams] = useSearchParams();
  console.log(userid, "userid");
  const value=searchparams.get("class")
  const location=useLocation()
  console.log(location,'location');
  console.log(value,'value');

  console.log(searchparams, "searchparams");
  return (
    <div>
      {`Dynamicuser${userid}`}

      <div>
        <button
          onClick={() =>
            Setsearchparams({
              name: "Abhi",
              place: "Kakkur",
            })
          }
        >
          Setsearchparams
        </button>
      </div>
    </div>
  );
}
