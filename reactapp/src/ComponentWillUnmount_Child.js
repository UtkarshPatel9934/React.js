import React, { Component } from 'react'

export default class ComponentWillUnmount_Child extends Component {


	componentWillUnmount()
	{
		console.log('componentWillUnmount');
	}

  render() {
    return (
      <div>
	<h1>Child Component</h1>
      </div>
    )
  }
}
