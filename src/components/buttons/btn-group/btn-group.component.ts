/**
* @Author: Alex Sorafumo <Yuion>
* @Date:   13/09/2016 2:55 PM
* @Email:  alex@yuion.net
* @Filename: btn-group.component.ts
* @Last modified by:   Yuion
* @Last modified time: 15/12/2016 11:28 AM
*/

import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'btn-group',
    templateUrl: './btn-group.template.html',
    styleUrls: [ './btn-group.styles.css', '../../material-styles/material-styles.css'  ]
})
export class ButtonGroup {
    @Input() items: any;
    @Input() model: number = 0;
    @Input() color: string = 'blue';
    @Input() primary: string = 'C500';
    @Input() secondary: string = 'C600';
    @Input() cssClass: string = '';
    @Output() modelChange = new EventEmitter();

    btn_class: string = '';
    hover: boolean = false;

    constructor(){

    }

    ngOnInit() {
        this.loadClasses();
    }

    ngOnChanges(changes: any){
        if(changes.color || changes.primary || changes.secondary) {
            this.loadClasses();
        }
        if(changes.model) {

        }
    }

    ngAfterViewChecked() {

    }

    loadClasses() {
        this.btn_class = '';
        if(this.cssClass === '') {
            if(!this.hover) {
            	this.btn_class = `color bg-${this.color}-${this.primary} font-white`;
            } else {
            	this.btn_class = `color bg-${this.color}-${this.secondary} font-white`;
            }
        }
    }

    setHover(state: boolean) {
    	this.hover = state;
    	this.loadClasses();
    }

    toggle(index: number){
        this.model = index;
        this.modelChange.emit(this.model);
    }
}
