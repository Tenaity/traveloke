import React, { Fragment } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./styles.css";
import BookHotel from "./pages/BookHotel";
import RoomDetail from "./pages/RoomDetail";
import AppReducer from "./reducers/AppReducer";
import { useCallback, useEffect, useReducer } from "react";
import AppContext from "./components/AppContext";
import axios from "axios";
import Settings from "./pages/Settings";
import BookRestaurant from "./pages/BookRestaurant";
import RestaurantDetail from "./pages/RestaurantDetail";
import CarDetail from "./pages/CarDetail";
import BookCar from "./pages/BookCar";
import Invoice from "./pages/Invoice";
import SearchResult from "./pages/SearchResult";
import HotelDetail from "./pages/HotelDetail";
import HistoryBill from "./pages/HistoryBill";
import VehicleDetail from "./pages/VehicleDetail";
const theme = extendTheme();
function Hotel() {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <Fragment>
      <Switch>
        <Route exact path={path}>
          <BookHotel />
        </Route>
        <Route path={`${path}/:id`}>
          <HotelDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}
function Room() {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <Fragment>
      <Switch>
        <Route exact path={`${path}/:id`}>
          <RoomDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}
function Restaurant() {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <Fragment>
      <Switch>
        <Route exact path={path}>
          <BookRestaurant />
        </Route>
        <Route path={`${path}/:id`}>
          <RestaurantDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}
function Car() {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <Fragment>
      <Switch>
        <Route exact path={path}>
          <BookCar />
        </Route>
        <Route path={`${path}/:id`}>
          <CarDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}
function Vehicle() {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <Fragment>
      <Switch>
        <Route exact path={`${path}/:id`}>
          <VehicleDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}
function Payment() {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}/:id`}>
          <Invoice />
        </Route>
      </Switch>
    </Fragment>
  );
}

function Search() {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}`}>
          <SearchResult />
        </Route>
      </Switch>
    </Fragment>
  );
}
const App = () => {
  const initialState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const checkCurrentUser = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const option = {
        method: "get",
        url: `https://pbl6-travelapp.herokuapp.com/users/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
      console.log(response);
      if (response) {
        const userName = response.data.name;
        const userId = response.data.id;
        dispatch({ type: "CURRENT_USER", payload: { userName, userId } });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);
  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route path="/vehicle">
            <Vehicle />
          </Route>
          <Route path="/selfVehicle">
            <Car />
          </Route>
          <Route path="/restaurant">
            <Restaurant />
          </Route>
          <Route path="/hotel">
            <Hotel />
          </Route>
          <Route path="/room">
            <Room />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/invoice">
            <Payment />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/historybills">
            <HistoryBill />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </AppContext.Provider>
    </ChakraProvider>
  );
};

export default App;
