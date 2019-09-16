import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTinymcComponent} from './simple-tinymc.component'
 
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleTinymcComponent],
  exports: [
    SimpleTinymcComponent
]
})
export class SimpleTinymcModule { }
