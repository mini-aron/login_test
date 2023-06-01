import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Main() {
  
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("code"))
  const onClick = () => {

  }
  return (
    <div>
      
        
      
    </div>
  );
}

export default Main;