import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstname: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props
            .processForm(this.state)
            .then(() => this.props.history.push("/"));
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
            return  (<label>First Name:
                                <input type='text'
                                    value={this.state.firstname}
                                    onChange={this.update('firstname')}
                                    className="login-input"
                                />
                            </label>
                    )  
                }
        return (
            <ul>
               <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        Bikes and Bikers
                        <br/>
                        {this.renderErrors()}
                        <div className = "login-form">
                            <br/>
                            {isSignedUp ? fname() : null}
                            <label>Email:
                                <input type='text'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                            </label>
                            
                            <label>Password:
                                <input type='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
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



export default SessionForm;