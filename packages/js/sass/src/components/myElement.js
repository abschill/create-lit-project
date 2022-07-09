import { LitElement, html, css } from 'lit';
class MyElement extends LitElement {
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
customElements.define('my-element', MyElement);
