
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { DynamicBaseComponent } from '../dynamic-base.component';

import * as moment from 'moment';

@Component({
    selector: 'tooltip',
    templateUrl: './tooltip.template.html',
    styleUrls: ['./tooltip.styles.css'],
})
export class TooltipComponent extends DynamicBaseComponent {
    public container: any = {};
    public shown: boolean = false;
    public mouse_state: string = 'up';

    protected type: string = 'Tooltip';

    public init(parent?: any, id?: string) {
        super.init(parent, id);
        this.renderer.listen('window', 'wheel', () => {
            if (this.shown && !this.model.hover) {
                this.close();
            }
        });
    }

    public resize(tries: number = 0) {
        if (tries > 5) { return; }
        super.resize();
        this.shown = false;
        setTimeout(() => {
            const el = this.model.el;
            if (el && el.nativeElement) {
                this.container = el.nativeElement.getBoundingClientRect();
                setTimeout(() => {
                    this.shown = true;
                }, 50);
            }
            if (!el || !this.container || ((this.container.height <= 0 || this.container.width <= 0) && this.container.top <= 0)) {
                setTimeout(() => {
                    this.resize(tries+1);
                }, 200);
            }
        }, 100);
    }

    public mouseDown(e?: any) {
        this.mouse_state = 'down';
        if (e && this.box) {
            const c = { x: e.clientX, y: e.clientY };
            if (c.x >= this.box.left && c.y >= this.box.top && c.x <= this.box.left + this.box.width && c.y <= this.box.top + this.box.height) {
                this.model.tapped = true;
            }
        }
    }

    public mouseUp() {
        this.mouse_state = 'up';
        setTimeout(() => {
            this.model.tapped = false;
        }, 100);
    }

    public mouseMove(e?: any) {
        if (this.mouse_state === 'down') {
            this.close();
        }
    }

    protected update(data: any) {
        this.resize();
        super.update(data);
    }
}
