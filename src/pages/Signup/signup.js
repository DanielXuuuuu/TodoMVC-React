import React from 'react'
import { connect } from "react-redux";
import { userAction } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state);
  }

  render(){
    return (
      <div id="signup-main">
        <header>
          <Link to="sign_in" style={inactiveLinkStyle}>Sign in</Link>
          <span>·</span> 
          <Link to="sign_up" style={activeLinkStyle}>Sign up</Link>
        </header>
        <form onSubmit={this.handleSubmit}>
        <div className="formItem">
            <i className="iconfont icon-icon_people_fill"></i>
            <input type="text" name="nickname" placeholder="Nickname"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="formItem">
            <i className="iconfont icon-icon_dmail_fill"></i>
            <input type="text" name="email" placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formItem">
            <i className="iconfont icon-suo"></i>
            <input type="password" name="password" placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formItem">
            <i className="iconfont icon-suo"></i>
            <input type="password" name="confirmPassword" placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>

          <button onClick={this.handleSubmit}>Sign Up</button>
          <p>By clicking “Sign up”, you agree to our Terms of Service and Privacy Statement. We’ll occasionally send you account related emails.</p>
        </form>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: userInfo => dispatch(userAction.signup(userInfo)),
})

export default connect(null, mapDispatchToProps)(Signup);

const activeLinkStyle = {
  color: '#b55959',
}

const inactiveLinkStyle = {
  color: '#B7B7B7',
  textDecoration: "none",
}