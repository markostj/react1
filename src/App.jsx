import React from "react";
import { ToDo } from "./ToDo";
import { ErrorPage } from "./ErrorPage";
import { Detalji } from "./Detalji";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  withRouter
} from "react-router-dom";
import { AppLayout } from "./components";
export const App = () => (
  <>
    <BrowserRouter>
      <AppLayout>
        <Switch>
          <Route exact path="/" component={ToDo} />
          
          <Route exact path="/detalji" component={Detalji} />
          <Route component={ErrorPage} />
        </Switch>
      </AppLayout>
    </BrowserRouter>
  </>
);
