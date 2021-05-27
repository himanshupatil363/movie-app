import { Switch,Route } from "react-router-dom";
import Movies from './pages/Movies'
import AddMovie from './pages/AddMovie';
const App = () =>{
  return (
    <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route path="/addmovie">
            <AddMovie />
          </Route>
        </Switch>
  );
}
export default App;
