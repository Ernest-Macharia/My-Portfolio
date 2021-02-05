import React, { Component } from 'react';
import { Grid,Cell,Tabs,Tab, Card,CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Carding from './Carding'

class Projects extends Component {
  
  render() {
    return(
      <div className="project">
        <Carding/>
        
      </div>
    )
  }
}

export default Projects;