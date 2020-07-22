import React, {Component} from 'react';
import {register} from './UserFunctions';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onChange = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit(e){
        e.preventDefault();

        const newUser = {
            name: this.state.first_name+' '+this.state.last_name,
            email: this.state.email,
            password: this.state.password
        };

        register(newUser).then(res => {
                this.props.history.push(`/login`)
        })
    };

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Please Sign Up
                            </h1>

                            
                            <div className="form-group">
                                <label htmlFor="first_name">First name</label>
                                <input 
                                type="text"
                                className="form-control"
                                name="first_name"
                                id="first_name"
                                placeholder="Enter Your Fisrt Name"
                                value={this.state.first_name}
                                onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                            <label htmlFor="last_name">Last name</label>
                            <input 
                            type="text"
                            className="form-control"
                            name="last_name"
                            id="last_name"
                            placeholder="Enter Your Last NAme"
                            value={this.state.last_name}
                            onChange={this.onChange}
                            />
                        </div>

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
                           Register
                           </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Register;