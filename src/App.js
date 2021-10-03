import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./styles.css";
import BookHotel from "./pages/BookHotel";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const App = () => {
  const location = useLocation();
  return (
    <ChakraProvider theme={theme}>
      <TransitionGroup>
        <CSSTransition classNames="fade" key={location.key}>
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/">
              <BookHotel />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </ChakraProvider>
  );
};

export default App;
