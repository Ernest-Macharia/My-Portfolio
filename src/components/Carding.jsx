
import React from 'react';
import './Cards.css';
import Projectcard from './Projectcard';
function Carding(props) {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Projects and more on my Github Page!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h2>React Projects</h2>
          <ul className='cards__items'>
            
            <Projectcard
              src={'https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png'}
              text='My Portfolio'
              
              path=''
            />
            <Projectcard
              src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
              text='Counter App'
              
              path='https://github.com/Ernest-Macharia/counterapp'
            />
            <Projectcard
              src={'https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe'}
              text='Todo App'
              
              path='https://github.com/Ernest-Macharia/todoapp'
            />
            <Projectcard
              src={'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN'}
              text='Food Ordering App'
              
              path='https://github.com/Ernest-Macharia/letasasa'
            />
            <Projectcard
              src={'https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg'}
              text='Tic-Tac-Toe'
              
              path='https://github.com/Ernest-Macharia/Tic-Tac-Toe'
            />
          </ul>
          <h2>Django and Django Rest Projects</h2>
          <ul className='cards__items'>
          
          <Projectcard
              src={'https://i.pinimg.com/originals/36/54/e7/3654e7e5cd4023d6a65bb172fb178be0.jpg'}
              text='Stock Management'
              
              path='https://github.com/Ernest-Macharia/stock'
            />
            <Projectcard
              src={'data:image/png;base64,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'}
              text='Hospital Management'
              
              path='https://github.com/Ernest-Macharia/hospital-management'
            />
            <Projectcard
              src={'https://pythondevs.org/wp-content/uploads/2020/04/why_django_is_the_best_web_framework_for_your_project_2_image_1.png'}
              text='Asset Management'
              
              path='https://github.com/Ernest-Macharia/asset-management'
            />
            <Projectcard
              src={'https://pythondevs.org/wp-content/uploads/2020/04/why_django_is_the_best_web_framework_for_your_project_2_image_1.png'}
              text='Portfolio'
              
              path='https://github.com/Ernest-Macharia/portfolio'
            />
            <Projectcard
              src={'https://pythondevs.org/wp-content/uploads/2020/04/why_django_is_the_best_web_framework_for_your_project_2_image_1.png'}
              text='Social Media App'
              
              path='https://github.com/Ernest-Macharia/simple-groups-social-media-app'
            />
            <Projectcard
              src={'https://unyscape.com/wp-content/uploads/2019/03/django.jpg'}
              text='Notes Taking Api'
              
              path='https://github.com/Ernest-Macharia/python-note-taking-api'
            />
          </ul>
          <h2>django + ML Projects</h2>
          <ul className='cards__items'>
          
          <Projectcard
              src={'https://media.istockphoto.com/photos/robot-with-education-hud-picture-id966248982?k=6&m=966248982&s=612x612&w=0&h=n4MgcVUV2D6kXpJGCyIMIgFuqsi63DkzjiwWQi4n0aE='}
              text='Student Performance Prediction'
              
              path='https://github.com/Ernest-Macharia/student-performance-prediction-'
            />
            <Projectcard
              src={'https://miro.medium.com/max/1024/1*3CXBOKNql4qS-lRyHT3pqw.png'}
              text='Programming Chatbot'
              
              path='https://github.com/Ernest-Macharia/chatbot-app'
            />
          </ul>
          
         
        </div>
      </div>
    </div>
  );
}

export default Carding;