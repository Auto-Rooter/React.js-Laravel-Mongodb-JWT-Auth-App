import React, {Component} from 'react';
import {login} from './UserFunctions';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onChange = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit(e){
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        login(user).then(res => {
            if(res){
                this.props.history.push(`/profile`)
            }
        })
    };

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Please Sign In
                            </h1>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Enter Your Email Address"
                                value={this.state.email}
                                onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Enter Your Password"
                                value={this.state.password}
                                onChange={this.onChange}
                                />
                            </div>

                           <button type="submit" className=" button btn btn-lg btn-primary btn-block" >
                            Login
                           </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login;