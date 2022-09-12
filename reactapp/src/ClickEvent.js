function ClickEvent()
{
	// Note: Apple () function is getting called Automatically when we start our app, and after that we can't able to trigger our Alert again
	function Apple()
	{
		alert('Function Called...')
	}

	return (
		<div>
			<h1>Cick Events</h1>
			{/* <button onClick={Apple()} >Click ME</button> */}

			{/* To prevent the problem we get we have to remove () after the function definition */}
			
			{/* We must have to use this technique */}
			<button onClick={Apple} >Click ME</button>

			<br />

			{/* It get called alert automatically when we run the app, so we have to use arrow function instead  */}
			{/* <button onClick={alert('hello')} >Alert</button> */}
			<button onClick={ () => { alert('hello') }} >Alert</button>


		</div>
	)
}

export default ClickEvent;