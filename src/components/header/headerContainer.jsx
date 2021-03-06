import React from "react";
import * as axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from '../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        // debugger;
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
          // debugger;
        let {id, email, login} = response.data.data;
        if(response.data.resultCode === 0){
            this.props.setAuthUserData(id, email, login);
        }
        });
      }
  render() {
    return <Header {...this.props}/>;
  }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);
