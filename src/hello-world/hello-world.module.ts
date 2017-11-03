import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent]
})
export class HelloWorldModule{
  static foorRoot(): ModuleWithProviders{
    return { ngModule: HelloWorldModule, providers: [] };
  }
}
