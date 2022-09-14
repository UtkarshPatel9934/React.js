import React from 'react'

const ChildFuncProps = (props) => {
  return (
    <div>
	<h1>Child Component</h1>

	<button onClick={() => {props.data()}}>Call Get Data From Parent</button>
    </div>
  )
}

export default ChildFuncProps