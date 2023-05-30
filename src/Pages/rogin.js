import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
    const clientId="4268ba164e2c473fb6ec04b4283983a159707d3a531342c0a61d1c427f6b7cec"
    const BaseLoginUrl="https://gauth.co.kr/login";
    const redirect_uri="http://localhost:3000/main"
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