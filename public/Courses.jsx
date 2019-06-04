import React, { Component } from 'react';
import axios from 'axios';

class Courses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: []
        };
    }

    componentDidMount() {
        axios.get('/course')
            .then((response) => {
                this.setState({ courses: response.data.data })
            });
    }


    render() {
        return (
            <div>
                <h3 style={{ textAlign: "center" }}>Available Courses</h3>
                <ul style={listStyle}>
                    {this.state.courses.map(course =>
                        <li key={course._id}><a href={'/courseinfo/' + course.code}  >{course.name}</a></li>
                    )
                    }
                </ul>
            </div>
        );
    }
}
const listStyle = {
    textAlign: "center",
    fontSize:"20px",
    listStyleType: "none"
};

export default Courses;
