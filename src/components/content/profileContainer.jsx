import React from "react";
import Content from "./Content";
import * as axios from "axios";
import { connect } from "react-redux";
import {setUserProfile} from '../redux/profile-reducer'
import { withRouter } from "react-router-dom";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) userId = 6092;
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response => {
      // debugger;
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return (
      <div>
        <Content {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);
