import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from './Landing';
import Contact from './Contact';
import About from './Aboutme';
import Projects from './Projects';
import Resume from './Resume';


const Main = () => (
    <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Aboutme" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
        
    </Switch>

)
   
export default Main;