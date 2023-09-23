import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
	static styles = css`
		@unocss-placeholder;
	`;
	render() {
		return html`<p class="bg-blue text-green">template content</p>`;
	}
}
