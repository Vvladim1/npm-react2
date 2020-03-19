import React from "react";
import { followAC, unfollowAC, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../redux/users-reducer";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from './users'
import Preloader from "../common/preload/preload";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        // debugger;
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        
      });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
    }
  
  

  render() {
    return (
      <>
      {this.props.isFetching && <Preloader />}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged} 
             users={this.props.users} 
             follow={this.props.followAC}
             unfollow={this.props.unfollowAC} />
             </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching

  }
}


export default connect(mapStateToProps,  {
    followAC,
    unfollowAC,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
    })(UsersContainer);

 
