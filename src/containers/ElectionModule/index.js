import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import OnlineBulletin from './OnlineBulletin.js'
import TwitterTimelineEmbed from 'react-twitter-embed'

const backdropStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50,
  zIndex: 200
}

const modalStyle = {
  backgroundColor: '#fff',
  width: 600,
  height: 400,
  margin: 'auto',
  marginTop: 100,
  padding: 30,
  overflow: 'scroll',
  fontFamily: 'Lato',
  fontSize: 13,
}

const lineStyle = {
  width: 540,
  height: 2,
  backgroundColor: '#3A4047'
}

const closeStyle = {
  position: 'fixed',
  marginTop: -25,
  marginLeft: 540,
  fontFamily: 'Lato',
  fontSize: 26,
  color: '#3A4047',
  cursor: 'pointer'
}

const titleStyle = {
	fontFamily: 'Lato',
	fontSize: 22,
	fontWeight: 'bold',
	marginTop: 5,
	marginBottom: 5
}

export default class extends Component {
  render() {
    if(!this.props.showElection) {
      return null
    }

    return (
      <div>
      <MediaQuery minWidth={480}>
        <div style={backdropStyle}>
          <div style={modalStyle}>
   					<div style={closeStyle} onClick={this.props.onClose}>
   						x
   					</div>

   					<div style={titleStyle}>
   						HALALAN 2018
   					</div>
   					<div style={lineStyle} />

            <OnlineBulletin />
            
          </div>
        </div>
      </MediaQuery>
      </div>
    )
  }
}