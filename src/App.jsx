// NPM packages
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

// Project files
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Overview from "./pages/Overview";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/overview" component={Overview} />
            <Route path="/parcel/:id" component={Detail} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}
