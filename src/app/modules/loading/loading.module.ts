import { NgModule } from '@angular/core';
import { LoadingDirective } from './loading/directives/loading.directive';
import { LoadingComponent } from './loading/components/loading.component';
import { NgTemplateOutlet } from '@angular/common';

@NgModule({
  declarations: [
    LoadingDirective,
    LoadingComponent
  ],
  imports: [
    NgTemplateOutlet
  ],
  exports: [LoadingDirective]
})
export class LoadingModule { }
