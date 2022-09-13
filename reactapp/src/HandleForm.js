import React, {useState} from 'react'

const HandleForm = () => {

	// Form data - useState
	const [name, setName] = useState('');
	const [tnc, setTnc] = useState(false);
	const [interest, setInterest] = useState('');

	// Note: in the Form we will get an event called e, when we submit a form
	function getFormData( event )
	{
		// To stop the form to submit, or to reload the page again and again
		event.preventDefault()

		console.log(name, tnc, interest)
	}

	function clearForm(event)
	{
		setName('');
		setInterest('');
		setTnc(false);
	}

  return (
    <div>
      <form onSubmit={getFormData} action="">
	<input type="text" placeholder='Enter Name' value={name} onChange={ (event) => {
		setName(event.target.value);
	} } />

	<br /> <br />

	<select name="" id="" value={interest} onChange={ (event) => {
		setInterest(event.target.value)
	} }>
		<option value="">Select One</option>p
		<option value="Marvel">Marvel</option>
		<option value="DC Comic">DC Comic</option>
	</select>

	<br /> <br />

	<span>Accept Terms</span><input type="checkbox" value={tnc} name="" id="" onChange={ (event) => setTnc(event.target.checked) } />
	<br /> <br />

	{/* Note: when we click on Submit btn the page will refreshing again and again, to stop it we have to make an event */}
	<button type='submit'>Submit</button>
	<button onClick={clearForm}>Clear</button>
      </form>
    </div>
  )
}

export default HandleForm
