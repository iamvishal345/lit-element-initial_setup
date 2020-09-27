import { LitElement, html } from "lit-element";
import { navigator } from "lit-element-router";
import { NavLinkStyles } from "./nav-link.styles";
class NavLink extends navigator(LitElement) {
  static get styles() {
    return [NavLinkStyles];
  }
  static get properties() {
    return {
      href: { type: String },
    };
  }
  constructor() {
    super();
    this.href = "";
  }
  render() {
    return html`
      <a class="nav-link" href="${this.href}" @click="${this.handleClick}">
        <slot></slot>
      </a>
    `;
  }
  handleClick(e) {
    e.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define("nav-link", NavLink);
