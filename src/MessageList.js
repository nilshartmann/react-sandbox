import React from 'react';

// if you forget the export, you might get Uncaught TypeError: type.toUpperCase is not a function
// if you forget the default, you might get Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
export default class MessageList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.items.map((item) => {
					return <p key={item} onClick={() => this.props.onItemSelected(item)}>{item}</p>
				})
				}
			</div>
		);
	}
}