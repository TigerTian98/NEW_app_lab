import React, {Component} from 'react';

class Student2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div> {this.props.student2 && this.props.student2.name} </div>
         );
    }
}
 
export default Student2;