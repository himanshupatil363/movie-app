import { Switch,Route } from "react-router-dom";
import Movies from './pages/Movies'
import AddMovie from './pages/AddMovie';
import Video from "./pages/Video";
const App = () =>{
  return (
    <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route path="/addmovie">
            <AddMovie />
          </Route>
          <Route path="/video/:id" children={Video}/>
        </Switch>
  );
}
export default App;
