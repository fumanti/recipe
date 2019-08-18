import { Directive, Input, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        if (this.elementRef.nativeElement.contains(event.target)) {
            this.isOpen = !this.isOpen;
        } else {
            this.isOpen = false;
        }
    }

    constructor(private elementRef: ElementRef) { }
}
