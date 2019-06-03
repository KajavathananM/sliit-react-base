import React, {Component} from 'react';
import  axios from 'axios';

const statement=(props1,props2)=>{
        console.log(props1);
        console.log(props2);
        console.log(typeof props2);
        console.log(Array.isArray(  console.log(typeof props2)));
};

class Course extends Component {
    constructor(props)
    {
        super(props);
        this.state={
           courseInfo:null,
           code:null,
           name:null,
           lecturer:null,
           subjects:[]
        };
    }
    componentWillMount() {
         let id=window.location.href.split("http://localhost:3000/courseInfo/")[1];
        console.log(id);
         axios.get('http://localhost:3000/course/'+id).then(res => {
             let details =res.data;
             console.log(typeof  details);
             console.log(details);
             let courseInfo=details.data.pop();
             console.log(courseInfo);
             this.setState({ courseInfo:courseInfo});
             this.setState({ code:courseInfo.code});
             this.setState({ name:courseInfo.name});
             this.setState({ lecturer:courseInfo.lecturer});
             this.setState({ subjects:courseInfo.subjects});
         });

    }

    render() {

        return (
            <div>
                {statement(this.state.courseInfo,this.state.subjects)}
                <h3 style={{textAlign:"center"}}>Course Information</h3><br/>
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
                        <td>List of subjects:<br/>
                            <ul style={{listStyleType:"none"}}>

                                {
                                    this.state.subjects.map((subject)=>{
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

const tableStyle={
    position:'absolute',
    width:"420px",
    height:"220px",
    cellSpacing:"10",
    left:"450px",
    right:"450px",
    fontSize:"25px"
};

export default Course;
