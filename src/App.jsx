// NPM packages
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

// Project files
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Detail from "./pages/Detail";
import "./styles/style.scss";
import Footer from "./components/Footer";

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
