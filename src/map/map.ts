import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('spa-map')
export class Map extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100vh;
    }
  `;

  @property({ type: Object }) location: H.geo.IPoint = {
    lat: 40.71427,
    lng: -74.00597,
  };

  render() {
    return html`
      <link
        rel="stylesheet"
        type="text/css"
        href="https://js.api.here.com/v3/3.1/mapsjs-ui.css"
      />
      <div id="spa-map" style="width:100%; height:100vh"></div>
    `;
  }

  firstUpdated() {
    const platform = new H.service.Platform({
      apikey: 'KNVCr0Ee4skXXxb3Ecua1WzsDgaxOhP8oR4bqAx1Yks',
    });

    const defaultLayers = platform.createDefaultLayers();

    const divContainer = this.shadowRoot?.getElementById(
      'spa-map'
    ) as HTMLDivElement;
    const map = new H.Map(divContainer, defaultLayers.vector.normal.map, {
      center: this.location,
      zoom: 10,
      pixelRatio: window.devicePixelRatio || 1,
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    window.addEventListener('resize', () => map.getViewPort().resize());
  }
}
