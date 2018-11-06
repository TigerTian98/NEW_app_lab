import React, {Component} from 'react';

class Student extends Component {
    state = {  }
    render() { 
        return ( 
            <div> {this.props.student && this.props.student.name} </div>
         );
    }
}
 
export default Student;