import React from 'react';
import { Link } from 'react-router-dom';



class Greeting extends React.Component {

  render() {
    
    return (
        this.props.currentUser ? (
            <div className= 'outerDiv'>
                <p>
                Hello {this.props.currentUser.firstname}
                </p>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
       )  :( <div>
                <li><Link to="/signup" >Create Account</Link></li>
                <li><Link to="/login" >Log In.</Link></li>
                  <div className="backgroundVid">
                    {/* <iframe frameBorder="0" height="100%" width="100%"
                      src="https://youtube.com/embed/Am7gJxRveO0?autoplay=1&controls=0&showinfo=0&autohide=1">
                    </iframe> */}
                  {/* <video autoPlay loop muted>
                      <source src="vid1.mp4" type="greeting/mp4"/>
                  </video> */}
                  </div>
            </div>
            
        )
    )
  }
}

export default Greeting;