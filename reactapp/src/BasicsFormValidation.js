import React, {useState} from 'react'

const BasicsFormValidation = () => {
	
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const [userErr, setUserErr] = useState(true);
	const [passwordErr, setPasswordErr] = useState(true);


	const [show, changeShow] = useState(false);

	function login(e)
	{
		// console.log(e);
		e.preventDefault();
	}
	
	function userHandler(e)
	{
		let inValidUser = e.target.value.length
		if(inValidUser > 2)
		{
			setUserErr(false)
			setUser(e.target.value);
		}
		else
		{
			setUser('Not Available');
			setUserErr(true)
		}
	}
	function passwordHandler(e)
	{
		let inValidPass = e.target.value.length
		if(inValidPass > 2)
		{
			setPasswordErr(false)
			setPassword(e.target.value);
		}
		else
		{
			setPassword('Not Available');
			setPasswordErr(true)
		}
	}
	function submitData(e)
	{
		if((userErr === false) && (passwordErr === false) && (e.target.checked) )
		{
			changeShow(true)
		}
		else{
			
			changeShow(false)
		}
	}

  return (
    <div>
      <h1>Form Validation</h1>
      <form action="" onSubmit={login}>
	<input type="text" placeholder='Enter Name Here' onChange={ userHandler } /> {userErr ? <span style={{color: 'red'}}>User Not Valid</span> : null}
	<br /> <br />
	<input type="password" placeholder='Enter Password Here' onChange={passwordHandler}/>{passwordErr ? <span style={{color: 'red'}}>Password Not Valid</span> : null}
	<br /> <br />
	<button type='submit'>Login</button>
      </form>

	<h3>Show Data : <input onClick={submitData} type="checkbox" name="" id="" /> </h3>
      <hr />
      
	<h3>User Name is : { show ? user : 'Please Validate Form, first' }</h3>
	<h3>Password is : { show ? password : 'Please Validate Form, first' }</h3>

    </div>
  )
}

export default BasicsFormValidation
