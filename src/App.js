import React from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import '@/styles/App.css';

import HomePage from '@/pages/HomePage/HomePage';
import AboutPage from '@/pages/AboutPage/AboutPage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import ProjectPage from '@/pages/ProjectPage/ProjectPage';
import NotFound from '@/pages/NotFound/NotFound';
import NavigationBar from '@/components/Navigation/NavigationBar';

function App() {
  return (
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
  );
}

export default App;