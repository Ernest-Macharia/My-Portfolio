import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={5}>
            <div style={{textAlign: 'center'}}>
              <img
                src={'pic.jpeg'}
                alt="avatar"
                className="avatar-image"
                style={{height: '300px', margin: 'auto', paddingTop: '3em',borderRadius: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Ernest Thuku Macharia</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p style={{fontSize: '20px'}}>I remember clearly when I run the “hello world” application in the console and get feedback. I was amazed how great a computer can work and how programming can translate to pure magic. What started as “hello world” has grown and developed passion towards learning programming that only gets better as time goes by. This journey for sure has not been easy and I can always regard discipline, determination, consistency, patience and thirst in learning every day.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5 style={{fontSize: '20px'}}>Address</h5>
            <p style={{fontSize: '18px'}}>343 Kajiado</p>
            <h5>Phone</h5>
            <p style={{fontSize: '18px'}}>+254710992763</p>
            <h5>Email</h5>
            <p style={{fontSize: '18px'}}>Ernesthuku@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={7}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2020}
              course="Bachelor of Science in Computer Technology"
              level="Degree"
              schoolName="Meru University of Science and Technology"
              schoolDescription="A great university located at 15km from meru. It offers wide range of quality courses."
               />

              

              <h2>Experience</h2>

            <Experience
              startYear={  " 2018 February"}
              endYear={"2018 July"}
              jobName="Volunteer"
              place="Kajiado County Government"
              jobDescription="I worked as a junior developer and an IT assistant whereby I aided in the development of county website"/>

              <Experience
                startYear={"2020 October"}
                endYear={"2021 November"}
                place="Pixel Data Center"
                jobName="First Job"
                jobDescription="Worked on an online ordering system where one can order food, beverages, groceries and many more"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="python"
                progress={65}
                />
              <Skills
                skill="javascript"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="mysql"
                    progress={60}
                    />
                    <Skills
                skill="django"
                progress={70}
                />
                    <Skills
                      skill="React"
                      progress={60}
                      />
                      <Skills
                skill="laravel"
                progress={30}
                />
                <Skills
                skill="machine learning"
                progress={30}
                />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;