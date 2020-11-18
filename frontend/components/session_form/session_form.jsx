import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "Email",
            password: "Password",
            firstname: "First Name"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props
            .processForm(this.state)
            .then(this.props.closeModal);
    }

    update(field) {
       return e => this.setState({
            [field]: e.target.value
        });
    }

    renderErrors() {
        return (
        <ul>
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>{error}</li>
            ))}
        </ul>
        );
    }

    render() {
        const isSignedUp = this.props.formType === 'Sign Up';
        const fname = () => {
            return  (
                                <input type='text'
                                    value={this.state.firstname}
                                    onChange={this.update('firstname')}
                                    className="login-input"
                                />
                            
                    )  
                }
        return (
            <ul>
               <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        Bikes and Bikers
                        <br/>
                        <div onClick={this.props.closeModal} className="close-x"></div>
                        {this.renderErrors()}
                        <div className = "login-form">
                            <br/>
                            {isSignedUp ? fname() : null}
                            
                                <input type='text'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                            
                                <input type='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                          
                            <br/>
                           
                            <br/>
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
               </div>
            </ul>
        )
    }


}



export default withRouter(SessionForm);