import React, {Component} from 'react'

export default class ConstructorLifeCycle extends Component{

	// constructor get called automatically
	constructor()
	{
		// super is used to call Component which is our Parent Class, extends by our Component
		super();
		// console.log('first')

		// as it is called first
		// We can define our state here
		this.state = {
			data: 'Name'
		}

		/* Note: here we must Not Call any API */
		// Therefore we call our API in componentDidMount
	}
	
	render()
	{
		// console.log('second')
		return (
			<div>
				<h1>Constructor Life Cycle</h1>
				<h3>data is - {this.state.data}</h3>
			</div>
		)
	}
}