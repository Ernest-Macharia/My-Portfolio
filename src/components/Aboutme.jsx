import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Ernest Thuku Macharia</h2>
            <img
              src={'pic.jpeg'}
              alt="avatar"
              className="avatar-img"
              
               />
             <p className="contact-text" >My name is Ernest Thuku Macharia. I am a recent graduate holding a Bachelor in Computer Technology from Meru University of Science and Technology. I am a great fan of Technology and the passion grows up each and every day. I am a passionate guy who values working very hard and having a consistent way of working. I like learning a lot since its the one that makes me solve many problems and remaining relevant in the society. I also like and have that zeal in solving people's problems and difficulties, thus techbnology has granted me this power through creation of web apps, mobile applications, desktop applications, smart systems using AI and ML and many more.</p>

          </Cell>
          </Grid>
          </div>
    )
  }
}

export default About;