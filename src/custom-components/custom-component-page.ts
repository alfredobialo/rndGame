import { Component } from '@angular/core';
import {Accordion} from './accordion/accordion';
import {AccordionItem} from './accordion/accordion-item.component';

@Component({
  selector: 'gm-custom-component-page',
  imports: [
    Accordion,
    AccordionItem,
  ],
  template: `
    <div class="ring-4 ring-orange-600 p-4 min-h-[300px] rounded-3xl" >
      <p class="text-3xl">
          Accordion Custom Components
      </p>
      <gm-accordion>
        <gm-accordion-item>
        </gm-accordion-item>

        <gm-accordion-item>
        </gm-accordion-item>

        <gm-accordion-item>
        </gm-accordion-item>

        <gm-accordion-item>
        </gm-accordion-item>
      </gm-accordion>
    </div>
    `,
  styles: ``,
})
export class CustomComponentPage {}
