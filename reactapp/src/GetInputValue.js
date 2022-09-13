import React, {useState} from 'react'

const GetInputValue = () => {

	const [data, setData] = useState('Nothing to show');
	const [password, setPassword] = useState(false);

	function getData( getValue )
	{
		// console.log(getValue); // Prints the whole DOM
		// console.log(getValue.target); // <imput type='text' />
		// console.log(getValue.target.value) // get the recent value of the input box
		setData(getValue.target.value);
		if(getValue.target.value.length === 1 )
			setPassword(false)
	}

	function showPass()
	{
		setPassword(true)
	}

	function hidePass()
	{
		setPassword(false)
	}

  return (
    <div>
      <h1>Get Input Value</h1>
      <input type="password" onChange={ getData } />

	<hr />

	<button onClick={ showPass } >Show Password</button>
	<button onClick={ hidePass } >Hide Password</button>

      <hr />
      <h2>Your Password is : { (password === true && data.length > 0) ? data : 'Click Button to get Password' }</h2>
    </div>
  )
}

export default GetInputValue
