const State = () => {

	let data = 'Patel'
	
	function update()
	{
		data = 'Thakor'
		alert('change to ' + data)
	}

	// Here it will only runs one time
	console.warn('....................');

  return (
    <div>
	{/* the reason for not update data content is React Working Method */}
	{/* States hepls us to provide React Re-Remdering a Component */}
	<h1>State - {data}</h1>

	<button onClick={update}> Update Name </button>
    </div>
  )
}

export default State
