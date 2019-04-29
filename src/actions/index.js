import JSONPlaceHolder from "../apis/JSONPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	//using lodash library to map through the fetch posts array and filter the user id object
	const userIds = _.uniq(_.map(getState().posts, "userId"));
	userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
	const response = await JSONPlaceHolder.get("/posts");

	dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
	const response = await JSONPlaceHolder.get(`/users/${id}`);

	dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = id => dispatch => {
// 	_fetchuser(id, dispatch);
// };

// const _fetchuser = _.memoize(async (id, dispatch) => {
// 	const response = await JSONPlaceHolder.get(`/users/${id}`);

// 	dispatch({ type: "FETCH_USER", payload: response.data });
// });
