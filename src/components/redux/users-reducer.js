const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS;'

let initialState = {
  
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
  
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if(u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        } )
      }      
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if(u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        } )
      }
    case SET_USERS: {
      return {...state, users: action.users};
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count};
    }
    case SET_CURENT_PAGE: {
      return {...state, currentPage: action.currentPage};
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching};
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state, 
        followingInProgress: action.isFetching 
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id => id != action.userId)};
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId  });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId});
export const setUsers = users => ({ type: SET_USERS, users});
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const setCurrentPage = currentPage => ({type: SET_CURENT_PAGE, currentPage});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export default userReducer;
