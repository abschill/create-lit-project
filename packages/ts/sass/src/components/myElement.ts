import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement('my-element')
export class MyElement extends LitElement {
	createRenderRoot() {
		return this;
	}
	constructor() {
		super();
	}

	render() {
		return html`<h1 class="my-element">My Element</h1>`;
	}
}
