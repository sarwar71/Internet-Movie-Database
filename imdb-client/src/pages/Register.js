import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../store/actions/authActions'

class Register extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        error: {}
    }

    // check error from backend
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)) {
            return {
                error: nextProps.auth.error.errors
            }
        }
        return null
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        let { first_name, last_name, email, password, password_confirmation } = this.state
        this.props.register({ first_name, last_name, email, password, password_confirmation }, this.props.history)
    }

    render() {

        let { first_name, last_name, email, password, password_confirmation, error } = this.state

        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center display-4">Register Here</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="first_name"> First Name: </label>
                            <input
                                className={error.first_name ? "form-control is-invalid" : "form-control"}
                                type="text"
                                placeholder="Enter Your First Name"
                                name="first_name"
                                id="first_name"
                                required
                                value={first_name}
                                onChange={this.changeHandler} />
                            {error.first_name && <div className="invalid-feedback">
                                {error.first_name}
                            </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name"> Last Name: </label>
                            <input
                                className={error.last_name ? "form-control is-invalid" : "form-control"}
                                type="text"
                                required
                                placeholder="Enter Your Last Name"
                                name="last_name"
                                id="first_last_namename"
                                value={last_name}
                                onChange={this.changeHandler} />
                            {error.last_name && <div className="invalid-feedback">
                                {error.last_name}
                            </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> Email: </label>
                            <input
                                className={error.email ? "form-control is-invalid" : "form-control"}
                                type="email"
                                placeholder="Enter Your Email"
                                name="email"
                                required
                                id="email"
                                value={email}
                                onChange={this.changeHandler} />
                            {error.email && <div className="invalid-feedback">
                                {error.email}
                            </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"> Password: </label>
                            <input
                                className={error.password ? "form-control is-invalid" : "form-control"}
                                type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                required
                                id="password"
                                value={password}
                                onChange={this.changeHandler} />
                            {error.password && <div className="invalid-feedback">
                                {error.password}
                            </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password_confirmation"> Confirm Password: </label>
                            <input
                                className={error.password_confirmation ? "form-control is-invalid" : "form-control"}
                                type="password"
                                placeholder="Confirm Your Password"
                                required
                                name="password_confirmation"
                                id="password_confirmation"
                                value={password_confirmation}
                                onChange={this.changeHandler} />
                            {error.password_confirmation && <div className="invalid-feedback">
                                {error.password_confirmation}
                            </div>}
                        </div>
                        <Link to="/login">Already Register? Login Here</Link>
                        <button className="btn btn-primary my-3 d-block">Register</button>
                    </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { register })(Register)