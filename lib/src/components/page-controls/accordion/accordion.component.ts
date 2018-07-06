/**
 * @Author: Alex Sorafumo <Yuion>
 * @Date:   12/12/2016 10:41 AM
 * @Email:  alex@yuion.net
 * @Filename: stepper.component.ts
 * @Last modified by:   alex.sorafumo
 * @Last modified time: 20/01/2017 3:45 PM
 */

import { Component, Input } from '@angular/core';

@Component({
    selector: 'accordion',
    template: `
        <div [class]="'accordion ' + name" widget>
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .accordion {
            width: 100%;
            border: 1px solid #ccc;
        }
    `],
})
export class AccordionComponent {
    @Input() public name = '';
}
