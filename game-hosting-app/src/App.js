


import { useState, useEffect } from "react";


import FetchData from "./fetchTest";






export default function App() {

  const [count, setCount] = useState(0);
  
  
  
     function handleClick() {
       setCount(count + 1)
  
    }
  return (
    <>
    <div>
      <FetchData />
    </div>

      < Button count = {count} onClick= {handleClick} />
      < Button count = {count} onClick= {handleClick}/>
    
    
    </>
    
  );
}

function Button({count, onClick}) {

  
  
    
    return (
      <button id="button" onClick={onClick}>clicked {count} times </button>
    )
  }


