import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
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
        return (
            <ul>
               <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        Bikes and Bikers
                        <br/>
                        {this.renderErrors()}
                        <div className = "login-form">
                            <br/>
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
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
               </div>
            </ul>
        )
    }


}



export default SessionForm;