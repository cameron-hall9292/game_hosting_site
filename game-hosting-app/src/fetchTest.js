
import { useState, useEffect } from "react";


function FetchData() {

    let [result, setResult] = useState([]);

    useEffect( () => {

        fetch("http://localhost:5500/api/test")

     

        .then((res) => {
            console.log(res.json);
            return res.json();
        })
        .then((data) => {

            setResult(data);
            console.log(data);
            //result = data;

        })
        .catch((error) => console.log(error));
    

    },[]);
   
    
    return (
      <>
      <div>{result}</div>
      </>
    );
  }

  export default FetchData;