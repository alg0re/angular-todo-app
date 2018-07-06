import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircleLoaderComponent } from './circle-loader/circle-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CircleLoaderComponent
  ],
  declarations: [
    CircleLoaderComponent
  ],
  providers: [],
})
export class SharedModule { }
