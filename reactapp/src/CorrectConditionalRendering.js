import React, {useState} from 'react'

const CorrectConditionalRendering = () => {


	/* for 2 Conditions */
	/* const [loggedIn, setLoggedIn] = useState(true)
	return (
		<div>
		
		{ loggedIn ?  <h1>Welcome, Utkarsh</h1> :  <h1>Welcome, Guest</h1> }
		</div>
		) */
		
		
	/* For 3 Conditions */
	/* Note: you can make n number of Condition using this Syntax */
	const [loggedIn, setLoggedIn] = useState(3);

	return(
		<div>
			{ 
				loggedIn ===1? 
				<h1>Hello, Utkarsh</h1> : 

				loggedIn ===2? 
				<h1>Hello, Zeel</h1> : 

				<h1>Hello, Guest</h1>
			}
		</div>
	)
		
}

export default CorrectConditionalRendering
