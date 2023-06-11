import React from "react";
import E from "../api/EnvConfig";
const BaseLoginUrl = E.BASE_LOGIN_URL;
const clientId = E.CLIENT_ID;
const redirect_uri = E.REDIRECT_URI;
const clientSecret = E.CLIENT_SECRET;

function useGauth(){
    window.open(
        `${BaseLoginUrl}?client_id=${clientId}&redirect_uri=${redirect_uri}`,
        "_self"
      );
}
export default useGauth;