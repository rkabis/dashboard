import React, { Component } from 'react'

import Drawer from './Drawer'
import AppBar from './AppBar'
import BackgroundMap from './BackgroundMap'
import FilterMenu from './FilterMenu'
import ElectionModule from './ElectionModule'

const componentStyle = {
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: 'white'	
}

export default class extends Component {
	constructor () {
		super()
		this.state = {
			mapdata: 'event',
			filterValue: [],
			filterOpen: false,
			showElection: true
		}
		this.onChangeMapData = (e) => this.setState({mapdata: e})
		this.onChangeMapFilter = this.addArrayFilter.bind(this)
		this.filterModal = (e) => this.setState({filterOpen: e})
		this.resetFilter = this.resetFilter.bind(this)
		this.electionModal = () => this.setState({showElection: !this.state.showElection})
	}

	addArrayFilter(num, e) {
		if (num === 1) {
			let arrayTemp = this.state.filterValue
			arrayTemp.push(e)
			this.setState({filterValue: arrayTemp})
		}
		if (num === 0) {
			let arrayTemp = this.state.filterValue
			let indexDelete = arrayTemp.indexOf(e)
			arrayTemp.splice(indexDelete,1)
			this.setState({filterValue: arrayTemp})
		}
	}

	resetFilter() {
		this.state.filterValue = []
	}

	render() {
		const {
			mapdata,
			filterValue
		} = this.state

		return (
			<div className='min-vh-100 w-100' style={componentStyle}>
				<ElectionModule
					showElection={this.state.showElection}
					onClose={this.electionModal}
				/>
				<Drawer
					onChangeMapData={this.onChangeMapData}
					mapdata={mapdata}
					filterModal={this.filterModal}
					resetFilter={this.resetFilter}
				/>
				<AppBar />
				<BackgroundMap
					mapdata={mapdata}
					filterValue={filterValue}
				/>
				<FilterMenu
					show={this.state.filterOpen}
					onChangeMapFilter={this.onChangeMapFilter}
					resetFilter={this.resetFilter}
				/>
			</div>
		)
	}
}