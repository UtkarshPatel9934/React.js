import React, {Component} from 'react';


export default class ClassBasedProps extends Component{

	constructor()
	{
		super();
		this.state = {
			data : 'Fetching...'
		}
	}
	

	fetchName()
	{
		console.log('triggered');
		this.setState({
			data: this.props.name
		})
	}
	
	render()
	{
		// Note: we always get Props in Object Form
		// console.log(this.props);
		// {name: 'Utkarsh', email: 'uki@yahoo.com'}

		return(
			<div>
				{/* Accessing Props value using this Keyword */}
				<h1>{this.state.data}</h1>
				<button onClick={ () => {this.fetchName()} } >Fetch Name</button>
			</div>
		)
	}
}