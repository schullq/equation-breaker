import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[onlyDigit]'
})
export class OnlyDigitDirective {
  private regex: RegExp = new RegExp(/^-?[0-9]+$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-'];

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const current: string = this.el.nativeElement.value;
    if (
      this.specialKeys.indexOf(event.key) === this.specialKeys.indexOf('-') &&
      current.length !== 0
    ) {
      event.preventDefault();
    }
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event'])
  blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event'])
  blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }
}
