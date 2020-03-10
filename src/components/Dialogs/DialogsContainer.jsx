import React from "react";
import {
  updateNewMessageTextCreator,
  sendMessageCreator
} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = props => {

//   let state = props.store.getState().dialogsPage;
//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   };

//   let onNewMessageChange = body => {
//     // let body = e.target.value;
//     props.store.dispatch(updateNewMessageTextCreator(body));
//   };

//   return (
//     <Dialogs state={state}
//              onSendMessageClick={onSendMessageClick}
//              onNewMessageChange={onNewMessageChange} />
//   );
// };


let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
     dispatch(sendMessageCreator());
    },

    onNewMessageChange: (body) => {
      dispatch(updateNewMessageTextCreator(body));
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


