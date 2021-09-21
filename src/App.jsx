// NPM packages
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

// Project files
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Detail from "./pages/Detail";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/overview" exact component={Overview} />
            <Route path="/parcel/:id" exact component={Detail} />
          </Switch>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}
