import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./views/home/homePage";

function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoute;
