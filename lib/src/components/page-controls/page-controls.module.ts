
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AccordionComponent } from './accordion/accordion.component';
import { AccordionStepComponent } from './accordion/accordion-step.component';
import { StepperComponent } from './stepper/stepper.component';
import { StepperStepComponent } from './stepper/step.component';
import { TabGroupComponent } from './tab-group/tabs.component';
import { TabHeadComponent } from './tab-group/tab-head.component';
import { WidgetsPipeModule } from '../../pipes/pipe.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';

@NgModule({
    declarations: [
        AccordionComponent,
        AccordionStepComponent,
        StepperComponent,
        StepperStepComponent,
        TabGroupComponent,
        TabHeadComponent,
        CarouselComponent,
        CarouselItemComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        WidgetsPipeModule
    ],
    exports: [
        AccordionComponent,
        AccordionStepComponent,
        StepperComponent,
        StepperStepComponent,
        TabGroupComponent,
        TabHeadComponent,
        CarouselComponent,
        CarouselItemComponent
    ],
    entryComponents: [
    ]
})
export class PageControlWidgetsModule {

}

export const ACA_PAGE_CONTROL_WIDGETS_MODULE = PageControlWidgetsModule;