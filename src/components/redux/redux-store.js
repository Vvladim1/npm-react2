import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from './profile-reducer';
import userReducer from "./users-reducer";


let redusers = combineReducers({
    
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: userReducer
});
let store = createStore(redusers);

window.store = store;

export default store;