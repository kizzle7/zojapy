import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "../../Views/Auth/Index";
import MyPortfolio from "../../Views/Dashboard/Index";
import Messages from "../../Views/Messages/Index";
export default function AppRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/my-portfolio" exact component={MyPortfolio} />
        <Route path="/messages" exact component={Messages} />
      </Switch>
    </Router>
  );
}
