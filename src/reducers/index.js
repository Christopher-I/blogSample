import postsReducer from "./postsReducer";
import { combineReducers } from "redux";
import usersReducer from "./UsersReducer";

export default combineReducers({
	posts: postsReducer,
	users: usersReducer
});
