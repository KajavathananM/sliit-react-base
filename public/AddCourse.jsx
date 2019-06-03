import React, {Component} from 'react';
import axios from  'axios';

class AddCourse extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            code:null,
            name:null,
            passMark:null,
            lecturer:null,
            subjects:null
        };
        this.onCodeChange=this.onCodeChange.bind(this);
        this.onNameChange=this.onNameChange.bind(this);
        this.onPassChange=this.onPassChange.bind(this);
        this.onlecChange=this.onlecChange.bind(this);
        this.onSubjectsChange=this.onSubjectsChange.bind(this);

        this.onClick=this.onClick.bind(this);
    }
    onCodeChange(e){
        this.setState({code:e.target.value});
    }
    onNameChange(e){
        this.setState({name:e.target.value});
    }
    onPassChange(e){
        this.setState({passMark:e.target.value});
    }
    onlecChange(e){
        this.setState({ lecturer:e.target.value});
    }
    onSubjectsChange(e){
        this.setState({ subjects:e.target.value});
    }

    onClick(){
        console.log(this.state);
        console.log(this.state.name);
         var re = /""\s|""|\s/;
         var subjects = this.state.subjects.split(re);
         console.log( subjects );
          axios.post('http://localhost:3000/course/',{
              name:this.state.name,
              code:this.state.code,
              passMark:this.state.passMark,
              lecturer:this.state.lecturer,
              subjects:subjects.map(subject=>{
                  return subject
              })
          }).then(
              alert("Added new course")
          );

    }
    render() {
        return (
            <div>
                <h3 style={{textAlign:"center"}}>Add new Course</h3><br/>
                <table style={tableStyle}>
                    <tbody>
                       <tr>
                           <td><label><b>Name</b></label></td>
                           <td><input
                                       type="text"
                                       name="name"
                                       onChange={this.onNameChange}
                           />
                           </td>
                       </tr>
                       <br/>
                       <tr>
                           <td><b>Code</b></td>
                           <td><input
                                      type="text"
                                      name="code"
                                      onChange={this.onCodeChange}
                           />
                           </td>
                       </tr>
                       <br/>
                       <tr>
                           <td><b>Pass Mark</b></td>
                           <td><input
                                      type="number"
                                      name="pass"

                                      onChange={this.onPassChange}
                           />
                           </td>
                       </tr>
                       <br/>
                       <tr>
                           <td><b>Lecturer in Charge</b></td>
                           <td><input
                                       type="text"
                                       name="lecturer"
                                       onChange={this.onlecChange}
                           />
                           </td>
                       </tr>
                       <br/>
                       <tr>
                           <td><b>Subjects</b></td>
                           <td><input
                                  type="textArea"
                                  name="subjects"
                                  onChange={this.onSubjectsChange}
                           /></td>
                       </tr>
                       <br/>
                       <tr>
                           <td><div style={divStyle}><button style={btnStyle} onClick={this.onClick}>Create course</button></div></td>
                       </tr>
                    </tbody>
                </table>
                {console.log(this.state)}
            </div>
        );
    }
}

const divStyle={
    position:'absolute',
    left:"100px",
    right:"100px"
};
const tableStyle={
    position:'absolute',
    cellSpacing:"10",
    left:"450px",
    right:"450px",
    fontSize:"17px"
};

const btnStyle={
    width:"200px",
    height:"50px",
    color:"white",
    background:"red"
};
export default AddCourse;
