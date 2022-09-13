import React, {useState} from 'react'

const HideShowToogle = () => {

	const [showStatus, changeShowStatus] = useState(false)

	function toogle()
	{
		changeShowStatus(!showStatus);
	}

  return (
    <div>
      <h1>{ showStatus ? 'Hide, Show and Toogle' : null}</h1>
      <hr />
      <button onClick={toogle}>Toogle</button>
    </div>
  )
}

export default HideShowToogle
