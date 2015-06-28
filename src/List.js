"use strict";

import React from 'react';
import MessageList from './MessageList';

const ALL_ITEMS = ['One', 'Two', 'Three'];

export default class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selection: null
		}
	}

	selectionChange(newSelection) {
		this.setState({selection: newSelection});
	}

	render() {
		return (
			<div>
				<MessageList items={ALL_ITEMS} onItemSelected={this.selectionChange}/>

				<p>SELECTION: {this.state.selection}</p>
			</div>
		);
	}
}
