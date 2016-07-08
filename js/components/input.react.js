import React from 'react';
import Store from '../store.redux.js';

class Input extends React.Component {
	constructor() {
		super();
		this.state = {
			id:0,
			emailInput: '',
			massageInput: ''
			} ;
		this.valueChangeEmail = this.valueChangeEmail.bind(this);
		this.valueChangeMassage = this.valueChangeMassage.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	valueChangeEmail(e){
		this.setState({
			emailInput: e.target.value
		})
	}

	valueChangeMassage(e){
		this.setState({
			massageInput: e.target.value
		})
	}


	submitForm(e) {
		console.log('submit');
		e.preventDefault();
		Store.dispatch({
			type: 'ADD_COMMENT',
			id: this.state.id++,
			email: this.state.emailInput,
			massage: this.state.massageInput
		});
		this.setState({
			emailInput: '',
			massageInput: ''
		})
	}


	render() {
		return (
			<div className='input'>
				<form action="" onSubmit={this.submitForm}>
					<input type="email"
						   placeholder=" Email"
						   required
						   value={this.state.emailInput}
						   onChange={this.valueChangeEmail}/>
					<textarea type="text"
							  placeholder=" Massage"
							  required
							  value={this.state.massageInput}
							  onChange={this.valueChangeMassage}/>
					<input type="submit"
						   value="SUBMIT"/>
				</form>
			</div>
		);
	}
}

export default Input;
