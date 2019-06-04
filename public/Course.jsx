import React, { Component } from 'react';
import axios from 'axios';

const TestState = (props1, props2) => {
    console.log(props1);
    console.log(props2);


    console.log(typeof props2);
    console.log(Array.isArray(  console.log(typeof props2)));

};
const AssignSubjects=(subjectState)=>{
    let subjects=[];
    axios.get('/subject/').then(res=>{
        for(let i=0; i<res.data.data.length;i++){
            subjects[i]=res.data.data[i];
            console.log(subjects[i]);
            console.log(subjects[i].id);
        }
    });
    for(let i=0; i<subjects.length;i++){
        subjectState[i]=subjects[i];
        console.log(subjectState[i]);
        console.log(subjectState[i].id);
    }
    console.log(subjectState);
    return subjectState;
};
class Course extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            courseInfo: null,
            code: null,
            name: null,
            lecturer: null,
            subjects: []
        };
    }
    componentDidMount() {
        axios.get('/course/' + this.props.match.params.id).then(res => {
            let courseInfo = res.data.data[0];
            this.setState({ courseInfo: courseInfo,
                                  code: courseInfo.code,
                                  name: courseInfo.name,
                                  lecturer: courseInfo.lecturer,
                                  subjects: courseInfo.subjects });
        });

    }

    render() {

        return (
            <div>
                {TestState(this.state.courseInfo, this.state.subjects)}
                {/*{this.setState({subjects:AssignSubjects(this.state.subjects)})}*/}
                {console.log(this.state.subjects)}
                <h3 style={{ textAlign: "center" }}>Course Information</h3><br />
                <table style={tableStyle}>
                    <tr>
                        <td>Course Id: </td>
                        <td>{this.state.code}</td>
                    </tr>
                    <tr>
                        <td>Course Name: </td>
                        <td>{this.state.name}</td>
                    </tr>
                    <tr>
                        <td>Lecturer in charge: </td>
                        <td>{this.state.lecturer}</td>
                    </tr>
                    <tr>
                        <td>List of subjects:<br />
                            <ul style={{ listStyleType: "none" }}>

                                {
                                    this.state.subjects.map((subject) => {
                                        return <li key={subject}>{subject}</li>;
                                    })
                                }
                            </ul>

                        </td>

                    </tr>
                </table>
            </div>
        );
    }
}

const tableStyle = {
    position: 'absolute',
    width: "420px",
    height: "220px",
    cellSpacing: "10",
    left: "450px",
    right: "450px",
    fontSize: "25px"
};

export default Course;
