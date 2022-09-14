import React, { useEffect, useState } from 'react'

const UseEffectWithoutCondt = () => {

	const [data, setData] = useState(0);

	// Here useEffect() is already a function and required a callback function as a Parameter
	useEffect( () => {
		console.log('useEffect') // conponentDidMount()
	} )

	/* Note: we can use useEffect multiple time as we want, incase if we want to set condititon */

  return (
    <div>
	<h1>UseEffectWithoutCondt</h1>
	{/* Here useEffect work as componentDidUpdate */}
	<button onClick={() => {setData(data+1)}}>Update Counter - {data}</button>
    </div>
  )
}

export default UseEffectWithoutCondt