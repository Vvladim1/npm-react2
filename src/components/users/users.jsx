import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/userImg.jpg";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        
        {pages.map(p => (
          <span className={`${props.currentPage === p && styles.selectedPage} ${styles.cursor} `}
                 onClick={ (e) => {props.onPageChanged(p)} }
                 >{p}</span>
        ))}
        {props.users.map(u => (
          <div key={u.id}>
            <div className={styles.wrapper}>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    unfollowe
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    followed
                  </button>
                )}
              </div>
              <div>{u.name}</div>
              <div>{u.status}</div>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }


export default Users;
