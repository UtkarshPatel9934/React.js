import React, {Component} from 'react'

export default class ComponentDidMount extends Component{

	constructor()
	{
		super();
		console.log('constructor') // called first (1st)


		/* Note: there is not Effect of State and Props in componentDidMount */
		this.state = {
			data: 'Utkarsh'
		}
	}

	// componentDidMount sit between constructor and render
	componentDidMount()
	{
		console.log('componentDidMount') // called third (3rd)
	}

	/* Note: whenever we change the data value, only render get called in updating state or props, componentDidMount will not called while updating State or Props */

	
	changeName()
	{
		this.setState({
			data: 'Zeel'
		})
	}
	render()
	{
		console.log('render') // called second (2nd)
		return(
			<div>
				<h1>componentDidMount</h1>
				<h3>data : {this.state.data}</h3>
				<button onClick={() => {this.changeName()}} >Update Name</button>
			</div>
		)
	}
}