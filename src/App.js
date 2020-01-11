import React from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import '@/styles/App.css';

import HomePage from '@/pages/HomePage/HomePage';
import NotFound from '@/pages/NotFound/NotFound';
import NavigationBar from '@/components/Navigation/NavigationBar';

function App() {
  return (
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
  );
}

export default App;