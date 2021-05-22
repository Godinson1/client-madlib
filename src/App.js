import React, { useEffect } from "react";
import Landing from "./components/newlanding/Landing";
import Navbar from "./components/newlanding/Navbar";
import { EasyForm, EasyStory, EasyView } from "./components/Easy";
import {
  IntermediateForm,
  IntermediateStory,
  IntermediateView,
} from "./components/Intermediate";
import { AdvanceForm, AdvanceStory, AdvanceView } from "./components/Advance";
import NotFound from "./components/notFound";
import { Admin, Login } from "./components/admin";
import { ChakraProvider } from "@chakra-ui/react";
import Details from "./components/Details/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Loader from "./helpers/Loader";

import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import { SET_AUTHENTICATED } from "./actions/types";
import { getUsersData, logoutAdmin } from "./actions/admin";
import JwtDecode from "jwt-decode";

function App() {
  useEffect(() => {
    store.dispatch(getUsersData());
  }, []);

  const token = localStorage.YMToken;
  if (token) {
    const decoded = JwtDecode(token);
    if (decoded.exp * 1000 < Date.now()) {
      store.dispatch(logoutAdmin());
      window.location.href = "/login";
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common["madlib-token"] = token;
    }
  }

  return (
    <div className="App">
      <ChakraProvider>
        <Provider store={store}>
          <Navbar />
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/details" component={Details} />
              <Route path="/easy" component={EasyForm} />
              <Route path="/intermediate" component={IntermediateForm} />
              <Route path="/advanced" component={AdvanceForm} />
              <Route path="/admin" component={Admin} />
              <Route path="/madlib/easy" component={EasyStory} />
              <Route
                path="/madlib/intermediate"
                component={IntermediateStory}
              />
              <Route path="/madlib/advanced" component={AdvanceStory} />
              <Route path="/madlib/view/easy" component={EasyView} />
              <Route path="/login" component={Login} />
              <Route
                path="/madlib/view/intermediate"
                component={IntermediateView}
              />
              <Route path="/madlib/view/advanced" component={AdvanceView} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Provider>
      </ChakraProvider>
    </div>
  );
}

export default App;
