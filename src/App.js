import React from "react";
import { Landing } from "./components/landing/";
import { UserDetails } from "./components/userDetails/";
import NotFound from "./components/notFound";
import { Admin, Login } from "./components/admin";
import { Easy, Intermediate, Advanced } from "./components/madlib";
import {
  EasyMadlib,
  IntermediateMadlib,
  AdvancedMadlib,
} from "./components/madlib/story";
import {
  EasyView,
  IntermediateView,
  AdvancedView,
} from "./components/madlib/view";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import ProtectedRoute from "./ProtectedRoute";
import { SET_AUTHENTICATED } from "./actions/types";
import { logoutAdmin } from "./actions/admin";
import JwtDecode from "jwt-decode";

function App() {
  axios.defaults.baseUrl = "http://localhost:4000";

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
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/details" component={UserDetails} />
            <Route path="/easy" component={Easy} />
            <Route path="/intermediate" component={Intermediate} />
            <Route path="/advanced" component={Advanced} />
            <ProtectedRoute path="/admin" component={Admin} />
            <Route path="/madlib/easy" component={EasyMadlib} />
            <Route path="/madlib/intermediate" component={IntermediateMadlib} />
            <Route path="/madlib/advanced" component={AdvancedMadlib} />
            <Route path="/madlib/view/easy" component={EasyView} />
            <Route path="/login" component={Login} />
            <Route
              path="/madlib/view/intermediate"
              component={IntermediateView}
            />
            <Route path="/madlib/view/advanced" component={AdvancedView} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
