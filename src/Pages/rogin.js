import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Main() {
  const BaseLoginUrl = process.env.REACT_APP_BaseLoginUrl;
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_redirect_uri;
  const clientSecret = process.env.REACT_APP_clientSecret;
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
          'code': searchParams.get("code"),
          'clientId': clientId,
          'clientSecret': clientSecret,
         ' redirectUri': redirect_uri,
        })
        .then(function (res) {
          console.log(res);
        })
        .then(function(error){
          console.log(error);
        })
      }
      console.log("a");
    };
    getToken()}, []);
  return (
    <div>
      <button onClick={onClick}>로그인</button>
    </div>
  );
}

export default Main;
