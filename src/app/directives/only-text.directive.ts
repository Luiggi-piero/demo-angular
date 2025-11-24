import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyText]',
  standalone: true,
})
export class OnlyTextDirective {
  private element: ElementRef<HTMLInputElement> = inject(ElementRef);
  // - para manipular la variables del ngmodel
  // - accedemos a la instancia NgControl que es creado por el ngmodel
  // - optional = true : accede a esta instancia NgControl si esta disponible
  ngControl = inject(NgControl, { optional: true });

  // ["$event"] : accedemos a los valores q emite el evento
  // capturar eventos de js,captura el evento input
  @HostListener('input') onInput() {
    const value = this.element.nativeElement.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (!regex.test(value)) {
      this._setValue(value);
    }
  }

  private _setValue(value: string): void {
    const cleanValue = value.replace(/[^a-zA-Z\s]/g, ''); // limpia los elementos que no coincidan con la expresion regular y cambiala por vacio
    if (this.ngControl) {
      // control!: el control si o si va a tener un valor
      this.ngControl.control!.setValue(cleanValue);
    } else {
      this.element.nativeElement.value = cleanValue;
    }
  }
}
