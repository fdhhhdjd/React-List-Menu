import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./Page/Home_Food/Home";
import Select from "./Components/Choose_Select/Select";
import Button_Particle from "./Page/button_Particle/Button_Particle";
import Choose_img from "./Page/Choose_images/Choose_img";
import Alphabet from "./Page/Alphabet_auto/Alphabet";
import Routers from "./Components/RouterFull/Router";
import Carousel from "./Components/Carousel/Carousel";
import Infinite from "./Page/Infinite scroll/Infinite";
import UrlImages from "./Components/UrlImage/UrlImages";
import ShowImage from "./Components/Show-image-move/ShowImage";
import Locations from "./Page/Route_Locaitons/Locations";
import Sliders from "./Components/Sliders/Slider";
import CopyColor from "./Components/CopyColor/CopyColor";
import Choose from "./Components/ChooseImage/Choose";
function App() {
  return (
    <>
      <BrowserRouter>
        <Select />
        <Switch>
          <Route exact path="/categories">
            <Home />
          </Route>
          <Route exact path="/images">
            <Choose_img />
          </Route>
          <Route exact path="/button">
            <Button_Particle />
          </Route>
          <Route exact path="/alphabet_auto">
            <Alphabet />
          </Route>
          <Route path="/router">
            <Routers />
          </Route>
          <Route path="/carousel">
            <Carousel />
          </Route>
          <Route exact path="/infinite">
            <Infinite />
          </Route>
          <Route exact path="/url">
            <UrlImages />
          </Route>
          <Route exact path="/movie">
            <ShowImage />
          </Route>
          <Route path="/router_location">
            <Locations />
          </Route>
          <Route path="/slider">
            <Sliders />
          </Route>
          <Route path="/copycolor">
            <CopyColor />
          </Route>
          <Route path="/img">
            <Choose />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
