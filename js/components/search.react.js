import React from 'react';

class Search_bar extends React.Component {
	constructor(props) {
		super();
		this.state = {
			term: ''
			} ;
		this.change = this.change.bind(this);
	}
	change(e) {
		this.setState({
			term: e.target.value
		});
		console.log(this.state.term)
		this.props.onSreachTermChange(e.target.value)
	}
	render() {
		return (
			<div className='search-bar'>
				<input type="text" placeholder=" 🔍 Search"  value={this.state.term} onChange={this.change}
				 />
			</div>
		);
	}
}

export default Search_bar;

