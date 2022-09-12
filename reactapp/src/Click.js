function Click()
{
	let data = 'Utkarsh';

	function onClick()
	{
		data = 'Perter'
		alert('changed to ' + data);
	}

	return (
		<div>
			{/* Note: Here we can not able to see the changed value in the Data */}
			{/* That's why we are using States and Props in React */}
			<h1>{data}</h1>

			<button onClick={onClick}> Click ME </button>
		</div>
	)
}

export default Click;;