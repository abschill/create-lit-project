import { LitElement, html, css } from 'lit';
class MyElement extends LitElement {
    createRenderRoot() {
        return this;
    }
    constructor() {
        super();
    }

    render() {
        return html`<div class="px-4 text-xl text-black">
          Tailwind Template.
        </div>`;
    }
}
customElements.define( 'my-element', MyElement );