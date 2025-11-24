import { formatCurrency, getLocaleCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true,
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, digitsInfo?: string): unknown {
    const localeCurrencySimbol = getLocaleCurrencySymbol('es-PE')!;
    const digist = digitsInfo ? digitsInfo : '.2-2';

    return formatCurrency(value, 'es-PE', localeCurrencySimbol, 'PEN', digist);
  }
}
