import React, {useState, useEffect} from 'react'

const UseEffectWithCondt = () => {

	const [data, setData] = useState(10)
	const [count, setCount] = useState(100)

	useEffect(
		() => {
			alert('useEffect for only Data State')
		}, [data])
		// Here we pass parameter as a 'data', so useEffect only runs for Data
		// we can also do this for Props: [props.data]
		
		
		
	useEffect(
		() => {
			alert('useEffect for only Count State')
		}, [count])
		// Here we pass parameter as a [count], so useEffect only runs for Count
		// We can pass multiple parameter in it as well.

  return (
    <div>
	<h1>UseEffectWithCondt</h1>
	<h1>Count - {count}</h1>
	<h1>Data - {data}</h1>
	<button onClick={() => {setCount(count + 1)}}>Increase Count</button>
	<button onClick={() => {setData(data + 1)}}>Increase Data</button>

    </div>
  )
}

export default UseEffectWithCondt