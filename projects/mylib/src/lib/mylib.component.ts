import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TEST_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MylibComponent),
  multi: true,
};

@Component({
  selector: 'lib-mylib',
  template: ` <p>mylib works!</p> `,
  styles: [],
  providers: [TEST_VALUE_ACCESSOR],
})
export class MylibComponent implements OnInit, ControlValueAccessor {
  constructor() {}

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
}
