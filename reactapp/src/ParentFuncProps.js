import React from 'react'
import ChildFuncProps from './ChildFuncProps';

const ParentFuncProps = () => {

	function getData()
	{
		alert('From Parent Component');
	}

  return (
    <div>
      <h1>Parent Component</h1>

	<hr />
	
      <ChildFuncProps data={getData} ></ChildFuncProps>
    </div>
  )
}

export default ParentFuncProps
