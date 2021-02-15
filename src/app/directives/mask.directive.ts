
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[mask]'
})

export class MaskDirective {
    // tslint:disable-next-line:no-input-rename
    @Input('mask') mask: string;

    constructor(private element: ElementRef) { }

    // direcionando a diretiva pra ficar ouvindo os inputs
    @HostListener('input', ['$event']) onInputChange(event) {
        if (event.inputType === 'deleteContentBackward') {
            return;
        }
        const initialValue = this.element.nativeElement.value;
        initialValue.replace(/[ˆ0-9]*/g, '');
        if (initialValue !== this.element.nativeElement.value) {
            // cpf esta correto
            event.stopPropagation();
        }
        // verifica se tem a mascara do cpf
        this.element.nativeElement.value = this.format(this.mask, initialValue);
    }
    format(mask: string, value: any): string {
        let text = '';
        let data: any;
        data = value;
        // tslint:disable-next-line:one-variable-per-declaration
        let c, m, i, x;

        for (i = 0, x = 1; x && i < mask.length; ++i) {
            c = data.charAt(i);
            m = mask.charAt(i);

            switch (mask.charAt(i)) {
                case '#': // permite somente numeros
                    if (/\d/.test(c)) {
                        text += c;
                    } else {
                        x = 0;
                    }
                    break;

                case 'A': // permite caracter alfanumericos
                    if (/[a-z]/i.test(c)) {
                        text += c;
                    } else {
                        x = 0;

                    }
                    break;

                case 'N': // permite de A a Z caracters numericos 
                    if (/[a-z0-9]/i.test(c)) {
                        text += c;
                    } else {
                        x = 0;
                    }
                    break;

                case 'X': // permite qualquer texto
                    text += c;
                    break;

                default:
                    text += m;
                    break;
            }
        }
        return text;
    }
}
