import React, {useState} from 'react'
import Child from './ClassChild'

const ClassParent = () => {
	const [name, setName] = useState('Utkarsh');

	function changeName()
	{
		setName('Zeel');
	}
  return (
    <div>
	<h1>Parent</h1>

	<hr />
	<button onClick={changeName}>Update Name</button>
	<Child name={name}></Child>
    </div>
  )
}

export default ClassParent