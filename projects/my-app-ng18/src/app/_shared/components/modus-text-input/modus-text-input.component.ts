import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-modus-text-input',
  templateUrl: './modus-text-input.component.html',
  styleUrl: './modus-text-input.component.css',
})
export class ModusTextInputComponent
  implements ControlValueAccessor, Validator
{
  @Input() label = 'test label';
  @Input() placeholder = 'test placeholder';
  @Input() disabled = false;

  bordered = true;
  ariaLabel = 'test aria label';
  value = '';
  touched = false;

  onChange = (value: any) => {
    console.log('onChange', value);
  };

  onFocus = (event: any) => {
    console.log('onFocus', event);
  };

  onBlur = (event: any) => {
    console.log('onBlur', event);
  };

  onTouched = () => {};

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {}

  writeValue(val: any): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
