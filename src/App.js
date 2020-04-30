import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Chapter1, Chapter2, Chapter3 } from './Chapters'
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
          <Route path="/grid" component={Chapter1} />
          <Route path="/appbar" component={Chapter2}/>
          <Route path="/drawer" component={Chapter3}/>
          <Route  component={Chapter2}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
