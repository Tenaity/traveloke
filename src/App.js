import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./styles.css";
import BookHotel from "./pages/BookHotel";
import HotelDetail from "./pages/HotelDetail";
import AppReducer from "./reducers/AppReducer";
import { useCallback, useEffect, useReducer } from "react";
import AppContext from "./components/AppContext";
import axios from "axios";
const theme = extendTheme();

const App = () => {
  const initialState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const checkCurrentUser = useCallback(async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const option = {
  //       method: "get",
  //       url: "https://pbl6-travelapp.herokuapp.com/auth/login",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     const response = await axios(option);
  //     if (response.data.data.user) {
  //       const { userName } = response.data.data.user.name;
  //       dispatch({ type: "CURRENT_USER", payload: { userName } });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   checkCurrentUser();
  // }, [checkCurrentUser]);
  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route path="/booking">
            <BookHotel />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/hoteldetail">
            <HotelDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AppContext.Provider>
    </ChakraProvider>
  );
};

export default App;
