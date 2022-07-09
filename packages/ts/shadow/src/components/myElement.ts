import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement('my-element')
export class MyElement extends LitElement {
	static get styles() {
		return css`
			@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
			.my-element {
				font-family: 'Fira Sans', sans-serif;
			}
		`;
	}
	constructor() {
		super();
	}

	render() {
		return html`<div class="my-element">Default Lit Template.</div>`;
	}
}
