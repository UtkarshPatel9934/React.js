import React, { Component } from 'react'


export default class ClassChild extends Component {

  constructor()
  {
    super();
    this.state = {
      name: 'Uki',
      email: 'Uki@gmail.com'
    }
    
  }
  
  
  changeEmail()
  {
    this.setState({
      email: 'FuckTrudo@gmail.com'
    })
  }
  
  // Note: render() - is a Life Cycle Method
  // Render get called when props gets Update
  render() {
    
    console.log('Render Methods', this.props);

    return (
      <div>
	      <h1>Class Parent - Props</h1>
        <h3>Name: {this.props.name}</h3>
        <hr />
        <h1>State witin component</h1>
        <h3>Email: {this.state.email}</h3>
        <button onClick={() => {this.changeEmail()}}>Update Email</button>
      </div>
    )
  }
}
