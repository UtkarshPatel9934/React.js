// in the class based component we have to use the import statement for the React

// Note: as we have to make a class bases component we must have to import Component from the react aslo

import React, { Component } from 'react';


// We must have to extends the Component as we want to make a class based component
class ClassBased extends Component
{
	render()
	{
		return (
			<h1>Class Based Component</h1>
		)
	}
}

export default ClassBased