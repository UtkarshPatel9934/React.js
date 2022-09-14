import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {

	constructor()
	{
		super();
		console.log('constructor'); // 1st 


		this.state = {
			counter: 0
		}
	}
	
	// Only get called when we update our state or props
	// we can access out previousProps or previousState
	// we also have access to snapshot
	componentDidUpdate(previousProps, previousState, snapshot)
	{
		console.log('componentDidUpdate');
		// console.log('componentDidUpdate Previous State is', previousState);

		/* The use of previous state is in the API, means when we get the same data from API as of previous state we set message for the use that No New data is Added*/


		console.log('componentDidUpdate Previous State is', previousState.counter, this.state.counter)
		
		
		/* if(previousState.counter === this.state.counter)
		{
			alert('No New Data is available');
		} */
		
		// This will produce infinite loop
		// this.setState( { counter: this.state.counter +1 } )
		
		
		// We must have to use condt to prevent infinite loop
		if(this.state.counter < 10)
		{
			this.setState( { counter: this.state.counter +1 } )
		}

		// Note: we always get:  undefined
		console.log('componentDidUpdate snapshot is', snapshot)
	}
	
	
  render() {
	console.log('render'); // 2nd
    return (
      <div>
	<h1>componentDidUpdate</h1> 
	<h3>Current Counter: {this.state.counter}</h3>
	{/* <button onClick={()=> { this.setState({counter: this.state.counter+1})}} >Update Name</button> */}
	<button onClick={()=> { this.setState({counter: 1})}} >Update counter</button>
      </div>
    )
  }
}
