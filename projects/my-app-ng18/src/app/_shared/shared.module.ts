import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ModusAngularComponentsModule } from '@trimble-cms/modus-wc-ng';
import { ModusTextInputComponent } from './components/modus-text-input/modus-text-input.component';

@NgModule({
  declarations: [ModusTextInputComponent],
  imports: [CommonModule, ModusAngularComponentsModule],
  exports: [ModusTextInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
