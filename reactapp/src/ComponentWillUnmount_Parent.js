/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import ComponentWillUnmount_Child from './ComponentWillUnmount_Child'

export default class ComponentWillUnmount_Parent extends Component {


	constructor()
	{
		super();

		this.state = {
			show: true
		}
	}

  render() {
    return (
      <div>
		<h1>Parent Component</h1>
		<button onClick={()=>
			this.setState({show: !this.state.show}
    			)}>Toggle Child Component - {this.state.show ? 'Hide' : 'Show'}</button>
		<hr />

		{
			this.state.show ? <ComponentWillUnmount_Child></ComponentWillUnmount_Child> : <h1>Child Removed from DOM</h1>
		}
      		
      </div>
    )
  }
}
