import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {

	constructor()
	{
		super();
		console.log('constructor');

		this.state = {
			counter: 0
		}
	}

	shouldComponentUpdate()
	{
		// This prevents render
		// Note: here we get the actual updated value of counter
		// but it block the render to call and update the whole HTML
		console.log('shouldComponentUpdate', this.state.counter)

		/* Note: by default the retuen is nothing and this we get an error */

		// if we return false it will not render our component upon state or props update
		// return false
		
		// if we return true it will  render our component upon state or props update
		// return true;

		if(this.state.counter <= 2)
		{
			return false
		}
		else
		{
			return true
		}

	}

  render() {
	console.log('render');
    return (
      <div>
	<h1>ShouldComponentUpdate</h1>
	<h3>Counter: {this.state.counter}</h3>

	<button onClick={()=>{this.setState({counter: this.state.counter +1})}}>Increase Counter</button>
      </div>
    )
  }
}
