import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Farourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout.js";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>

        <Route path="/favourites">
          <Farourites />
        </Route>

        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
