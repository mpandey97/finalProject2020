import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Login from './components/Loginpage'
import axios from 'axios'; 
import API from './components/API'

class App extends Component {
   
    
    state = {
        title : '',
        body : '',
        posts : ''
        
    };
    
     componentDidMount = () => {
        this.getData(); 
    }
    
    getData = () => {
        axios.get('http://localhost:4000/business')
        .then((response) => {
            const data = response.data; 
            this.setState({posts : data});
            console.log('data recieved'); 
            
        })
        .catch(() => {
            console.log('errorrrr');
        }  )
        
    }
    
    displayProfile = (posts) => {
        if (!posts.length){
            
            return <div> No Profile Found</div>; 
        }
        return posts.map((post, index) => (
            <div key = {index}>
                
                <h2> {post.person_name} </h2>
                <p> {post.business_name} </p>
                </div> 
        )
                 
                 
        );
        
            }; 

    
  render() {
    
      
    return (
       
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Profile Page</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
        
        <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Admin</Link>
                </li>                
               
              </ul>
            </div>
          </nav> <br/>
          <div className = "image"><img src={require('./pic1.jpg')} width="200" height="200" /> </div>
          
        <div>{this.displayProfile(this.state.posts)}</div> <br/>
            
        <div>
            <h2> JSON Placeholder API</h2>
            <Link to={'/api'}>Click this button to generate</Link>
        
            </div>
        
        
          <Switch>
                
              <Route exact path='/create' component={ Index } />
              <Route path='/edit/:id' component={ Edit } />

              <Route path='/index' component={ Index } />
                  <Route path = '/api' component = {API}/>
          </Switch>
        </div>
      </Router>
    );
  }

}


  export default App;





