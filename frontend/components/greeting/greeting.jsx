import React from 'react';
import { Link } from 'react-router-dom';



class Greeting extends React.Component {

  render() {
    
    return (<div className="main-nav">

        {this.props.currentUser ? (
            <div className= 'outerDiv'>
                <p>
                 {this.props.currentUser.firstname}
                </p>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
       )  :(  
               <div className='right-nav'> 

                <div className="nav-signin" onClick={() => this.props.openModal('login')}>Login</div>
                    &nbsp;&nbsp;
                  <div className="nav-signin" onClick={() => this.props.openModal('signup')}>Signup</div>
                
                </div>
            
            
        )}
          </div>
    )
  }
}

export default Greeting;