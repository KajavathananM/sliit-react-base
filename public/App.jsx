import React, {Component} from 'react';

import {Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Courses from "./Courses";
import Course from "./Course";
import AddCourse from "./AddCourse";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        fetch('/api/messages', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({message: jsonRes.message});
            })
            .catch(err => {
                this.setState({message: 'An error occurred'});
            });
    }

    render() {
        return (
                <div style={divStyle}>
                    <h2 style={{textAlign:"center"}}>{this.state.message}</h2><br/>
                    <Route exact path="/" render={()=>(
                        <div>
                          <h3 style={{textAlign:"center"}}>Courses</h3>
                            <ul style={listStyle}>
                                <li><button style={btnStyle}><Link style={linkStyle} to="/courses">View Courses</Link></button></li>
                                <li><button style={btnStyle}><Link style={linkStyle} to="/Add">Add Course</Link></button></li>
                            </ul>
                        </div>
                    )}/>

                <Route path="/courses" component={Courses}/>
                <Route path="/courseInfo/:id" component={Course}/>
                <Route path="/add" component={AddCourse}/>
                </div>
        );
    }
}

const divStyle={
    position:'absolute',
    left:"200px",
    right:"200px",
    top:"200px",
    bottom:"200px"
};

const listStyle={
   textAlign:"center",
    listStyleType:"none"
};

const linkStyle={
    fontSize:'15px',
    color:'white',
    textDecoration:'none'
};

const btnStyle={
   width:"200px",
   height:"80px",
   color:"white",
   background:"red"
};