import React, { Component, Children } from 'react';

class WithLogging extends Component {
	constructor(props) {
		super(props);
	};

	componentDidMount() {
		let msg = this.props.children.type.name || 'Component';
		console.log(`Component ${msg} is mounted`);
	};

	componentWillUnmount() {
		let msg = this.props.children.type.name || 'Component';
		console.log(`Component ${msg} is going to unmount`);
	};

	render() {
		return (this.props.children);
	};
};

export default WithLogging;