import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import setAuthToken from "../setAuthToken";

const baseURL = "http://localhost:3001/api/auth";

//** create initial state for auth
const initialState = {
  user: {},
  token: "",
  isAdmin: false,
  isAuth: false,
  status: "idle",
  error: null,
};

//** create actions

//* log in - action
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    console.log("Logging in - authSlice.js");

    // get response from our api route
    const res = await axios.post(`${baseURL}/login`, {
      email,
      password,
    });

    console.log("Response for logging in:", res.data);

    // set token into local storage
    localStorage.setItem("token", res.data.token);

    // set token into http request header
    setAuthToken(res.data.token);

    //! get the logged in user from the db - NOT WORKING ATM
    // const response = await axios.get(`${baseURL}`);
    // console.log("Logged in user:", response.data);
    // return response.data;

    return res.data;
  },
);

//* load user - action
export const loadUser = createAsyncThunk("auth/loadUser", async () => {
  console.log("Load user - authSlice.js");

  try {
    // get response from our api route
    const res = await axios.get(`${baseURL}`);
    console.log("Loaded user:", res.data);

    return res.data;
  } catch (err) {
    console.log("Failed to load user", err.message);
    return err.message;
  }
});

//* register user - action
export const register = createAsyncThunk("auth/register", async (newUser) => {
  console.log("Register user - authSlice.js");

  // get response from our api route
  const res = await axios.post(`${baseURL}/register`, newUser);

  console.log("Response for registering user:", res.data);

  // set token into local storage
  localStorage.setItem("token", res.data.token);

  // set token into http request header
  setAuthToken(res.data.token);

  //! get the logged in user from the dbs - NOT WORKING ATM
  // const response = await axios.get(`${baseURL}`);
  // console.log("Registered user:", response.data);
  // return response.data;

  return res.data;
});

//** create slice and reducers
const authSlice = createSlice({
  name: "auth",
  initialState,

  //* reducers - when "logout" action is called, set the state to this
  reducers: {
    logout: (state) => {
      console.log("logout reducer");
      localStorage.removeItem("token");
      state.user = null;
      state.token = null;
      state.isAdmin = false;
      state.isAuth = false;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      // login.pending
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      // login.fulfilled
      .addCase(login.fulfilled, (state, action) => {
        state.status = "successful";
        state.user = action.payload.user;
        state.isAdmin = action.payload.user.isAdmin;
        state.isAuth = true;
        state.token = action.payload.token;
        state.error = null;
      })
      // login.rejected
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.isAdmin = false;
        state.isAuth = false;
        state.token = null;
        localStorage.removeItem("token");
        state.error = action.error.message;
      })
      // loadUser.pending
      .addCase(loadUser.pending, (state) => {
        state.status = "loading";
      })
      // loadUser.fulfilled
      .addCase(loadUser.fulfilled, (state, action) => {
        state.status = "successful";
        state.user = action.payload;
        state.isAdmin = action.payload.isAdmin;
        state.isAuth = true;
        state.error = null;
      })
      // loadUser.rejected
      .addCase(loadUser.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.isAdmin = false;
        state.isAuth = false;
        state.error = action.error.message;
      })
      // register.pending
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      // register.fulfilled
      .addCase(register.fulfilled, (state, action) => {
        state.status = "successful";
        state.user = action.payload.user;
        state.isAdmin = action.payload.user.isAdmin;
        state.isAuth = true;
        state.token = action.payload.token;
        state.error = null;
      })
      // register.rejected
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.isAdmin = false;
        state.isAuth = false;
        state.token = null;
        localStorage.removeItem("token");
        state.error = action.error.message;
      });
  },
});

//** export selectors
export const getUser = (state) => state.auth.user;
export const getIsAdmin = (state) => state.auth.isAdmin;
export const getIsAuth = (state) => state.auth.isAuth;

//** export actions
export const { logout } = authSlice.actions;

//** export reducer
export default authSlice.reducer;
