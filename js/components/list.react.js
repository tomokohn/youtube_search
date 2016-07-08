import React from 'react';
import Store from '../store.redux.js';
import md5 from '../md5.min'

class List extends React.Component {
	constructor() {
		super();
		this.state = {id:0} ;
		this.listView= this.listView.bind(this);
	}

	changeState() {
		let {comments} = Store.getState();

		this.setState({comments});
	}

	componentWillMount() {
		this.changeState();

		this.unsubscribe = Store.subscribe(() => {
			this.changeState();
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	listView(){
     return this.state.comments.map((comment) => {
			 if (comment.visible === true) {
				return (
					<li key={comment.id}>
					<img src={`http://www.gravatar.com/avatar/${md5(comment.email.toLowerCase())}`}/>
					<div className="massage-text">
						<h2>{comment.email}</h2>
						<p>{comment.massage}</p>
					</div>
					</li>
				)
			}

		});
	}


	render() {
		return (
				<ul>
				{this.listView()}
				</ul>
		);
	}
}

export default List;
