import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './map/map';

@customElement('spa-heremaps-lit')
export class SpaHeremapsLit extends LitElement {
  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }
  `;

  render() {
    return html` <spa-map></spa-map> `;
  }
}
