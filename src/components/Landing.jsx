import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img 
            src={'pic.jpeg'}
            alt="avatar"
            className="avatar-image"
          />
          <div className="banner">
            <h1>Web Developer</h1>

            <hr/>

            
            <p>HTML/CSS | Bootstrap | JavaScript | React | Python | Django | Flask | Mysql | Git | Machine Learning</p>

            <div className="social-links">
              <div className="linkdin">
              <a href="https://www.linkedin.com/in/ernest-thuku-31a900149/" rel="noopener noreferrer"  target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a>
              </div>
              <div className="github">
              <a href="https://github.com/Ernest-Macharia" rel="noopener noreferrer"  target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"/>
              </a>
              </div>
              <div className="instagram">
              <a href="https://www.instagram.com/__ernedev__/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
              </div>
              <div className="facebook">
              <a href="https://web.facebook.com/ernest.macharia.31/" rel="noopener noreferrer"  target="_blank">
                <i className="fa fa-facebook-square" aria-hidden="true"/>
              </a>
              </div>
              <div className="twitter">
              <a href="https://twitter.com/MachariaErnestT" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>
          </div>
          
            </div>
          </div>
          </Cell>
          </Grid>
          </div>
    )
  }
}

export default Landing;