import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import AddCourse from "./AddCourse";

class Courses extends Component {
    constructor(props)
    {
        super(props);
        this.onClick=this.onClick.bind(this);
    }
    onClick(id){
        console.log(id);
        window.location.href='/courseInfo/'.concat(id);
    }
    render() {
        return (
            <div>
                <h3 style={{textAlign:"center"}}>Available Courses</h3>
                <ul style={listStyle}>
                    <li><button style={btnStyle} onClick={() => this.onClick("SE2018")}>Software Engineering</button></li>
                    <li><button style={btnStyle} onClick={() => this.onClick("CN2018")}>Networking</button></li>
                </ul>
            </div>
        );
    }
}
const listStyle={
    textAlign:"center",
    listStyleType:"none"
};
const btnStyle={
    width:"200px",
    height:"50px",
    color:"black",
    background:"none",
    border:"none"
};

export default Courses;