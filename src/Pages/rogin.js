
import axios from "axios";
import { useState } from "react";


function Main() {
  const BaseLoginUrl = process.env.REACT_APP_BaseLoginUrl
  const clientId = process.env.REACT_APP_CLIENT_ID
  const redirect_uri = process.env.REACT_APP_redirect_uri
  const onClick = () => {
    window.open(`${BaseLoginUrl}?client_id=${clientId}&redirect_uri=${redirect_uri}`,"_self")
  }
  return (
    <div>
        <button onClick={onClick} >로그인</button>
    </div>
  );
}

export default Main;