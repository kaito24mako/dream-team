import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store/store.js";
import { loadUser } from "./utils/redux/slices/authSlice.js";
import setAuthToken from "./utils/redux/setAuthToken";

import "./styles/index.css";
import App from "./App.tsx";

const token = localStorage.getItem("token");
console.log("token:", token);

if (token) {
  console.log("setting token...");

  // set token in HTTP header for requests
  setAuthToken(token);

  // get the logged in user and to the auth state
  store.dispatch(loadUser());
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
