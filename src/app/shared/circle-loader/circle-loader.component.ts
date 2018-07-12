import { Component, Input } from '@angular/core';

@Component({
  selector: 'circle-loader',
  template: `
  <div [class.loading]="loading" [class.hide]="!loading">
    <div class="lds-roller">
	    <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  `,
  styleUrls: ['./circle-loader.component.css']
})

export class CircleLoaderComponent {
  @Input() loading: boolean = false;
}
