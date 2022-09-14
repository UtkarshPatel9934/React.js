// Note: useState is a Hook that provides by ClassBased Component
import React, {useState} from 'react'

const HooksUnderstanding = () => {

	// Hooks can be use differently
	const [data, setData] = useState('Uki')

  return (
    <div>
	<h1>HooksUnderstanding</h1>
	<h3>data: {data}</h3>

	<button onClick={()=> {setData('Zeel')}}>Update Data</button>
    </div>
  )
}

export default HooksUnderstanding