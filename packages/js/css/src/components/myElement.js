import { LitElement, html } from 'lit';
export class MyElement extends LitElement {
	createRenderRoot() {
		return this;
	}
	constructor() {
		super();
	}

	render() {
		return html`<div class="myElement">PostCSS / Lit Starter JS</div>`;
	}
}
customElements.define('my-element', MyElement);
