import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {
		console.log(this.props.posts);
		let newArray = [1, 2, 3];
		let newArray2 = this.props.posts;
		newArray2 = Array.from(newArray2);
		console.log("New array" + this.props.posts);
		return newArray.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description" />
						<h2>{post.title}</h2>
						<p> {post.body}</p>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="ui relaxed divided list">{this.renderList()}</div>
		);
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ fetchPosts }
)(PostList);
