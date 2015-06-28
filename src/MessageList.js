import React from 'react';

// if you forget the export, you might get Uncaught TypeError: type.toUpperCase is not a function
// if you forget the default, you might get Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
export default class MessageList extends React.Component {
	constructor(props) {
		super(props);
	}

	// WORKAROUND: =====
	onItemClicked(item) {
		this.props.onItemSelected(item);
	}
	// ==================

	render() {
		return (
			<div>
				{this.props.items.map((item) => {
					return <p key={item} onClick={this.onItemClicked.bind(this, item)}>{item}</p>
					// return <p key={item} onClick={this.props.onItemClicked.bind(this, item)}>{item}</p>
				})
				}
			</div>
		);
	}
}