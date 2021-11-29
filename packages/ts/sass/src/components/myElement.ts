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
        return html`<h1 class="my-element">Sass/Lit Template</h1>`;
    }
}