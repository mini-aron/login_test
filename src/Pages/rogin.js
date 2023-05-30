import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
    
  const onClick = () => {
    window.open(`${BaseLoginUrl}?client_id=${clientId}&redirect_uri=${redirect_uri}`)
  }
  return (
    <div>
        <button onClick={onClick} >로그인</button>
    </div>
  );
}

export default Main;