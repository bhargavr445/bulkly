
import { ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChildren, computed, AfterViewInit, output, input } from '@angular/core';

@Component({
  selector: 'bulkly-otp',
  imports: [],
  templateUrl: './otp.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Otp implements AfterViewInit {

  isValid = input.required<boolean>();
  email = input.required<string>();
  otpEmitter = output<string[]>();

  // store 6 digits
  otpControls = Array.from({ length: 6 }, () => '');

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef<HTMLInputElement>>;

  ngAfterViewInit(): void {
    this.focusIndex(0);
  }

  private focusIndex(i: number) {
      const el = this.otpInputs?.get(i)?.nativeElement;
      if (!el) return;
      el.focus();
      el.select();
  }

  onOtpInput(e: Event, index: number) {
    const input = e.target as HTMLInputElement;

    // keep only 1 digit
    const digit = (input.value || '').replace(/\D/g, '').slice(0, 1);
    this.otpControls[index] = digit;
    input.value = digit;

    // move forward if user typed a digit
    if (digit && index < 5) this.focusIndex(index + 1);
    this.otpEmitter.emit(this.otpControls);
  }

  onOtpKeyDown(e: KeyboardEvent, index: number) {
    const key = e.key;

    // backspace behavior
    if (key === 'Backspace') {
      if (this.otpControls[index]) {
        this.otpControls[index] = '';
        // let input clear naturally
        return;
      }
      if (index > 0) {
        this.otpControls[index - 1] = '';
        this.focusIndex(index - 1);
        e.preventDefault();
      }
      
    }

    // left/right navigation
    if (key === 'ArrowLeft' && index > 0) {
      this.focusIndex(index - 1);
      e.preventDefault();
    }
    if (key === 'ArrowRight' && index < 5) {
      this.focusIndex(index + 1);
      e.preventDefault();
    }
    this.otpEmitter.emit(this.otpControls);

  }

  onOtpPaste(e: ClipboardEvent, index: number) {
    const text = e.clipboardData?.getData('text') ?? '';
    const digits = text.replace(/\D/g, '').slice(0, 6);
    if (!digits) return;

    e.preventDefault();

    // fill from current index onward
    for (let i = 0; i < 6; i++) {
      const targetIndex = index + i;
      if (targetIndex > 5) break;
      this.otpControls[targetIndex] = digits[i] ?? '';
    }

    // update inputs + focus next empty / last
    queueMicrotask(() => {
      this.otpInputs.forEach((ref, i) => {
        ref.nativeElement.value = this.otpControls[i] || '';
      });

      const nextEmpty = this.otpControls.findIndex((v) => !v);
      this.focusIndex(nextEmpty === -1 ? 5 : nextEmpty);
    });
    this.otpEmitter.emit(this.otpControls);
  }
}