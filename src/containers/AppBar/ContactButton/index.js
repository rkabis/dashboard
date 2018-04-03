import React, { Component } from 'react'

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50
}

const modalStyle = {
  backgroundColor: '#fff',
  width: '500px',
  height: '300px',
  marginTop: '100px',
  marginLeft: ' 340px',
  padding: 30,
  overflow: 'scroll',
  fontFamily: 'Lato',
  fontSize: '10pt',
}

export default class extends Component {
  render() {
    if(!this.props.show) {
      return null
    }
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <button onClick={this.props.onClose}>
            x
          </button>
        	<iframe title='Dashboard Survey' src="https://docs.google.com/forms/d/e/1FAIpQLSehba86m0qvlBiDFnp_9ol6WXsSD52RnfLK4HO4zP9QFrZFvQ/viewform?embedded=true" width="500" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
        </div>
      </div>
    )
  }
}