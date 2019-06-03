import React, {Component} from 'react';

class AddCourse extends Component {
    onChange(){

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
                                       name="name"/>
                           </td>
                       </tr>
                       <br/>
                       <tr>
                           <td><b>Code</b></td>
                           <td><input
                                      type="text"
                                      name="code"/>
                           </td>
                       </tr>
                       <br/>
                       <tr>
                           <td><b>Pass Mark</b></td>
                           <td><input
                                      type="text"
                                      name="pass"/>
                           </td>
                       </tr>
                       <br/>
                       <tr>
                           <td><b>Lecturer in Charge</b></td>
                           <td><input
                                       type="text"
                                       name="lecturer"/>
                           </td>
                       </tr>
                       <br/>
                       <tr>
                           <td><b>Subjects</b></td>
                       </tr>
                       <br/>
                       <tr>
                           <td><div style={divStyle}><button style={btnStyle}>Create course</button></div></td>
                       </tr>
                    </tbody>
                </table>

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