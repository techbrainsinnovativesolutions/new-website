import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './services/common.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[CommonService],
  providers: []
})
export class SharedModule { }
