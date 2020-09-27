import { LitElement, html } from "lit-element";
import { router } from "lit-element-router";

//styles
import { AppStyles } from "./App.styles";
//Components
import "./components/navigation/nav-link.component";
import "./components/header/header.component";
import "./router-outlet";

//pages
import "./pages/home/home.page";
import "./pages/contact/contact.page";
import "./pages/about/about.page";

class App extends router(LitElement) {
  static get styles() {
    return [AppStyles];
  }
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
    };
  }

  static get routes() {
    return [
      {
        name: "home",
        pattern: "",
        data: { title: "Home" },
      },
      {
        name: "about",
        pattern: "about",
      },
      {
        name: "contact",
        pattern: "contact",
      },
      {
        name: "not-found",
        pattern: "*",
      },
    ];
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }

  render() {
    return html`
      <app-header></app-header>
      <div class="nav-container">
        <nav-link href="/">Home</nav-link>
        <nav-link href="/contact">Contact</nav-link>
        <nav-link href="/about">About</nav-link>
      </div>

      <router-outlet active-route=${this.route}>
        <home-page route="home"></home-page>
        <about-page route="about"></about-page>
        <contact-page route="contact"></contact-page>
        <h1 route="not-found">Not Found</h1>
      </router-outlet>
    `;
  }
}

customElements.define("app-container", App);

// import { LitElement, html, css } from "lit-element";

// import { AppStyles } from "./App.styles";

// import "./components/Header/header.component";

// class App extends LitElement {
//   static get styles() {
//     return [css``, AppStyles];
//   }

//   render() {
//     return html`
//       <div class="app-container">
//         <app-header></app-header>
//         <h1 class="app-title">App title</h1>
//         <p class="app-body">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
//           numquam in ipsa optio cumque architecto quisquam, at repellendus
//           facere iusto consequatur animi inventore possimus quas, sint sunt
//           quidem maxime libero?
//         </p>
//       </div>
//     `;
//   }
//   constructor() {
//     super();
//   }
// }

// customElements.define("app-container", App);
