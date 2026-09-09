import axios from "axios";

//* set the token to be sent in the http header whenever a http request is sent
function setAuthToken(token) {
  console.log("setAuthToken()");
  console.log("token:", token);

  // add the token to our http request in the http header
  // this create a key-value pair: 'x-auth-token: token'
  if (token) {
    axios.defaults.headers.common["x-auth-token"];
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
}

export default setAuthToken;
