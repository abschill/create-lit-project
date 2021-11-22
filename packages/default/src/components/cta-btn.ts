import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement("cta-button")
export class CTAButton extends LitElement {
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    button{
      outline:1px solid black;
    }
  `;


  // Define reactive properties--updating a reactive property causes
  // the component to update.
  @property() text1?:string="a button";

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  // Expressions can set attribute values, proeprty values, event handlers,
  // and child nodes/text.
  render() {
    return html`
      <button  @click=${this.bar}>${this.text1}</button>
    `;
  }
  bar(){
    console.log("hi")
  }
  // Event handlers can update the state of @properties on the element
  // instance, causing it to re-render
  // togglePlanet() {
  //   this.planet = this.planet === "World" ? "Mars" : "World";
  // }
}