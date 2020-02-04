import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { userAction } from '../../../redux/actions/userActions';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      needFixed: false,
    }
  }

  componentDidMount(){
    this.props.getProfile();
    this.checkFix();
  }

  checkFix = () => {
    const top = document.getElementById('left').offsetTop;
    window.onscroll = () => {
      let scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      if(scrollTop >= top - 10){
        this.setState({
          needFixed: true,
        })
      }else{
        this.setState({
          needFixed: false,
        })
      }
    }
  }

  render(){
    return (
      <div id="left" className={this.state.needFixed ? "fixed" : ""}>
        <header>Hi, {this.props.user.nickname}!</header>
        <main>
          <div>
            <span>History Number</span>
            <span>{this.props.user.historyNumber}</span>
          </div>
          <div>
            <span>Completed Number</span>
            <span>{this.props.user.completedNumber}</span>
          </div>
          <div>
            <span>Completed rate</span>
            <span>{this.props.user.historyNumber === 0 ? 0 : 
              Math.round(this.props.user.completedNumber / this.props.user.historyNumber * 100) / 100}
            </span>
          </div>
        </main>
        <footer>
          <Link to="/sign_in" onClick={this.props.logout}>Logout</Link>
        </footer>
      </div>
    )
  }
} 

const mapStateToProps = state => ({
  user: state.currentUser,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userAction.logout()),
  getProfile: () => dispatch(userAction.getProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(User);