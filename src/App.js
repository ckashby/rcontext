import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
// import ShowContextData from "./ShowContextData";
// import UpdateContextData from "./UpdateContextData";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
