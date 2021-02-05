import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Header, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from  'react-router-dom';

class App extends Component {
    render() {
      return (
    <div>
       <Layout>
        <Header className="header-color" title="Ernest
        " scroll>
            
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Aboutme">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
                
            </Navigation>
        </Header>
        
        <Content>
          
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
     
    </div>
  );
  }
}

export default App;
