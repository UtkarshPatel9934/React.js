import React, {useState} from 'react'

// Note: we get it as an Object
function FunctionalProps(acceptProps) {
	// console.log(acceptProps)

	const [name, setName] = useState('Fetch From Backend.');

return (
    <div style={{ backgroundColor: 'lightblue', color: 'red', padding: '20px', margin: '10px', borderRadius: 
    '10px' }}>
      <h1>Student Component</h1>
      <li>Name: {name}</li>
      <li>Email: {acceptProps.email}</li>
      <li>Address: {acceptProps.other.address}</li>
      <li>Pincode: {acceptProps.other.pincode}</li>
      <hr />
      <button onClick={ () => {
	setName(acceptProps.name)
      } } style={{ backgroundColor: 'red', padding: '10px', color: 'darkblue', fontWeight: 'bold', fontSize: '20px' }}>Update Name</button>
    </div>
  )
}

export default FunctionalProps
