import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import homePage from "./views/home/homePage";




function AppRoute() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path='/' component={homePage} >
       
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoute;
