import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import E from "../api/EnvConfig";
import useGauth from "../hooks/useGauth";
function Main() {
  const BaseLoginUrl = E.BASE_LOGIN_URL;
  const clientId = E.CLIENT_ID;
  const redirect_uri = E.REDIRECT_URI;
  const clientSecret = E.CLIENT_SECRET;
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("code"));

  const onClick = () => {
    window.open(
      `${BaseLoginUrl}?client_id=${clientId}&redirect_uri=${redirect_uri}`,
      "_self"
    );
  };
  
  useEffect(() => {
    const getToken = () => {
      if (searchParams.get("code") === null) {
      }else{
          axios.post("https://server.gauth.co.kr/oauth/token", {
          "code": `${searchParams.get("code")}`,
          "clientId": `${clientId}`,
          "clientSecret": `${clientSecret}`,
          "redirectUri": `${redirect_uri}`,
        })
        .then(function (res) {
          console.log(res);
        })
        .then(function(error){
          console.log(error);
        })
      }
      console.log(`
      ${redirect_uri}`,);
    };
    getToken()}, []);
  return (
    <div>
      <button onClick={onClick}>로그인</button>
    </div>
  );
}

export default Main;
