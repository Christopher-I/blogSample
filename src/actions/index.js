import JSONPlaceHolder from "../apis/JSONPlaceholder";

export const fetchPosts = () => async dispatch => {
	const response = await JSONPlaceHolder.get("/posts");

	dispatch({ type: "FETCH_POSTS", payload: response });
};
