import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import SubTopic from "./SubTopic";

const Topic = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <h1>TOPIC</h1>
      <ul>
        <li>
          <Link to={`${url}/math`}>Math</Link>
        </li>
        <li>
          <Link to={`${url}/science`}>Science</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${url}/:topic`}>
          <SubTopic />
        </Route>
        <Route exact path={`${url}`}>
          <h1>Please select topic</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Topic;
