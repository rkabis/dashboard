import React, { Component } from 'react'

import DrawerButton from './DrawerButton'
import MiscButton from './MiscButton'
import AddButton from './AddButton.js'

const componentStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	width: '4vw',
	backgroundColor: '#1C232C',
	zIndex: 10
}

export default class extends Component {
	constructor() {
		super()
		this.state = {
			addOpen: false,
			arrayOfFeatures: ['building', 'bike', 'jeep', 'rental', 'toilet'],
			newsOpen: false,
			plusStatus: true
		}
		this.newsModal = () => this.setState({newsOpen: !this.state.newsOpen})
		this.addModal = () => this.setState({addOpen: !this.state.addOpen})
		this.plusOpen = () => this.setState({plusStatus: !this.state.plusStatus})
		this.removeFeature = this.removeFeature.bind(this)
	}

	removeFeature(icon) {
		const categoryIndex = this.state.arrayOfFeatures.indexOf(icon)
		let test = this.state.arrayOfFeatures
		test.splice(categoryIndex, 1)
		this.setState({arrayOfFeatures: test})
	}

	render() {
		const {
			onChangeMapData,
			mapdata
		} = this.props

		return (
			<div style={componentStyle}>
				<DrawerButton
					icon={'menu'}
				/>

				{this.state.arrayOfFeatures.map(featureElement => 
					<DrawerButton
						key={featureElement}
						icon={featureElement}
						onChangeMapData={onChangeMapData}
						mapdata={mapdata}
						arrayOfFeatures={this.state.arrayOfFeatures}
						removeFeature={this.removeFeature}
					/>
				)}

				<AddButton
					status={this.state.plusStatus}
					plusOpen={this.plusOpen}
					onClick={this.addModal}
					icon={'plus'}
					show={this.state.addOpen}
					onClose={this.addModal}
					arrayOfFeatures={this.state.arrayOfFeatures}
				/>

				<div>
					<div onClick={this.newsModal}>
						<DrawerButton
							icon={'news'}
						/>
					</div>
					<MiscButton
						show={this.state.newsOpen}
						onClose={this.newsModal}
					>
					</MiscButton>
				</div>
				
			</div>
		)
	}
}