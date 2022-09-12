/* We must have to use this statement to use State in component */

/* Note: useState - is a Hook which allows us to maintain state and update state */
import React, {useState} from 'react'

const StateSyntax = () => {

	function update()
	{
		// Here we are updating our Data content in our component
		setData('Thakor');
	}
	function increase()
	{
		// Here we are updating our Data content in our component
		setNumber(number + 1);
	}

	// Now we dont want this
	// let data = 'Patel';

	// Syntax
	// here we destructure it as : data, setData
	// Here data is a state and if we want to update it then we have to use setData
	// inside the useState('') we have to provide the initial value to it
	// Note: we must have to use Const keyword here
	const [data, setData] = useState('Patel');
	
	const [number, setNumber] = useState(0);


	console.warn('________________');

  return (
    <div>
	<h1>React State - {data}</h1>
	<button onClick={update} >Update Data</button>
	
	<h1>React State - {number}</h1>
	<button onClick={increase} >Increase Number</button>
    </div>
  )
}

export default StateSyntax
