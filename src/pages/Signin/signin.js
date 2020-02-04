import React from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userAction } from '../../redux/actions/userActions';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state);
  }

  render(){
    return (
      <div id="login-main">
        <header>
          <Link to="sign_in" style={activeLinkStyle}>Sign in</Link>
          <span>·</span> 
          <Link to="sign_up" style={inactiveLinkStyle}>Sign up</Link>
        </header>
        <form onSubmit={this.handleSubmit}>
          <div className="formItem">
            <i className="iconfont icon-icon_people_fill"></i>
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

          <button onClick={this.handleSubmit}>Sign In</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: userInfo => dispatch(userAction.login(userInfo)),
})

export default connect(null, mapDispatchToProps)(Login);

const activeLinkStyle = {
  color: '#b55959',
}

const inactiveLinkStyle = {
  color: '#B7B7B7',
  textDecoration: "none",
}