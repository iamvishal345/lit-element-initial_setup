import { LitElement, html, css } from "lit-element";

import { AppStyles } from "./App.styles";

import "./header";

class App extends LitElement {
  static get styles() {
    return [css``, AppStyles];
  }

  render() {
    return html`
      <div class="app-container">
        <app-header></app-header>
        <h1 class="app-title">App title</h1>
        <p class="app-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          numquam in ipsa optio cumque architecto quisquam, at repellendus
          facere iusto consequatur animi inventore possimus quas, sint sunt
          quidem maxime libero?
        </p>
      </div>
    `;
  }
  constructor() {
    super();
  }
}

customElements.define("app-container", App);
