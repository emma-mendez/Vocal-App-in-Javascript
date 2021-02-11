import React, { Component } from "react";
import FontPicker from "font-picker-react";

export default class ExampleComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeFontFamily: "Open Sans",
		};
	}

	render() {
		return (
			<div class="content">
			<div>
				<FontPicker
					apiKey="YOUR_API_KEY"
					activeFontFamily={this.state.activeFontFamily}
					onChange={(nextFont) =>
						this.setState({
							activeFontFamily: nextFont.family,
						})
					}
				/>
				<p className="apply-font">The font will be applied to this text.</p>
			</div>
			</div>
		);
	}
}