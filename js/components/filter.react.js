import React from 'react';
import Store from '../store.redux.js';

class Filter extends React.Component {
	constructor() {
		super();
		this.state = {
			filterInput: ''
			} ;
		this.change = this.change.bind(this);
	}
	change() {
		Store.dispatch({
			type:'FILTER',
			filter: this.state.filterInput.value
		});
	}
	render() {
		return (
			<div className='filter'>
				<input type="text" placeholder=" 🔍 Search"  ref={node => {
				this.state.filterInput = node}} onChange={this.change}
				 />
			</div>
		);
	}
}

export default Filter;
