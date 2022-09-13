import React, { Component } from 'react'

export default class StateInClass extends Component {

	/* Here we do thing different from Functional Component */
	constructor()
	{
		// here we write super() - because this is not react functionality this is JavaScript functionality
		// whenever we are using this Keyword in the Js as well as extending another class in a subclass, then we have to use Super() so that parent constructor also get called automatically
		super();

		// here we are setting a state as an object
		this.state = {
			data: 'Utkarsh'
		}
	}


	apple(params) {
		this.setState( {
			data: this.state.data + ' Patel'
		} )
	}

  render() {
    return (
      <div>
	{/* Here we are accessing states data */}
	<h1>State in Classbased Component - {this.state.data}</h1>

	<button onClick={ () => this.apple() }>Update Data</button>
      </div>
    )
  }
}
