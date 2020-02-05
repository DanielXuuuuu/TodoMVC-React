import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userAction } from "../../redux/actions/userActions";
import { validator } from "../../utils/validate";
import { message, Popover } from 'antd';

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
    for(let key in this.state){
      if(this.state[key] === ""){
        message.warn("Please fill the form first!");
        return;
      }
    }
    if(!validator.isValidUsername(this.state.nickname)){
      message.error("Invalid nickname, please check!");
      return;
    }
      if(!validator.isValidEmail(this.state.email)){
        message.error("Invalid email, please check!");
        return;
      }
    if(!validator.isValidPassword(this.state.password)){
      message.error("Invalid password, please check!");
      return;
    }
    if(this.state.confirmPassword !== this.state.password){
      message.error("Password inconsistent, please check!");
      return;
    }
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
            <Popover placement="right" content={tips.nickname} title="nickname" trigger="click">
              <i className="iconfont icon-icon_people_fill"></i>
                <input type="text" name="nickname" placeholder="Nickname"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
            </Popover>
          </div>

          <div className="formItem">
            <Popover placement="right" content={tips.email} title="email" trigger="click">
              <i className="iconfont icon-icon_dmail_fill"></i>
              <input type="text" name="email" placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Popover>
          </div>

          <div className="formItem">
            <Popover placement="right" content={tips.password} title="password" trigger="click">
              <i className="iconfont icon-suo"></i>
              <input type="password" name="password" placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Popover>
          </div>

          <div className="formItem">
            <Popover placement="right" content={tips.confirmPassword} title="confirmPassword" trigger="click">
              <i className="iconfont icon-suo"></i>
              <input type="password" name="confirmPassword" placeholder="Confirm Password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
            </Popover>
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

const tips = {
  nickname: '4-12 characters，including letter, number and must start with letter',
  email: 'valid email address',
  password: '6-20 characters，including letter and number',
  confirmPassword: 'repeat and confirm your password'
};

const activeLinkStyle = {
  color: '#b55959',
}

const inactiveLinkStyle = {
  color: '#B7B7B7',
  textDecoration: "none",
}