import { LitElement, html, css } from 'lit';
class MyElement extends LitElement {
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
		return html`<div class="my-element">My Element</div>`;
	}
}
customElements.define('my-element', MyElement);
