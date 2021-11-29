import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators';
@customElement( 'my-element' )
export class MyElement extends LitElement {
    createRenderRoot() {
        return this;
    }
    constructor() {
        super();
    }

    render() {
        return html`<div class="px-4 text-xl text-black">
          Lit / Tailwind Template.
        </div>`;
    }
}