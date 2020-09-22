import { LitElement, html, css } from "lit-element";

import "./header";

class App extends LitElement {
  static get styles() {
    return [css``];
  }

  render() {
    return html`
      <app-header></app-header>
      <div>Loading Successfully</div>
    `;
  }
  constructor() {
    super();
  }
}

customElements.define("app-container", App);
