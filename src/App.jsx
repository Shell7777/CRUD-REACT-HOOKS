import NavBar from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/Body';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/">
            <Body></Body>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
