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
        <gm-accordion-item title="Customer Management" id="crm" >
          <div class="flex flex-col w-[200px] gap-y-1.5">
            <a  class="inline-block rounded-md  cursor-pointer text-white bg-orange-700 px-4 py-2">Link #</a>
            <a  class="inline-block rounded-md  cursor-pointer text-white bg-orange-700 px-4 py-2">Link #</a>
            <a  class="inline-block rounded-md  cursor-pointer text-white bg-orange-700 px-4 py-2">Link #</a>
            <a  class="inline-block rounded-md  cursor-pointer text-white bg-orange-700 px-4 py-2">Link #</a>
            <a  class="inline-block rounded-md  cursor-pointer text-white bg-orange-700 px-4 py-2">Link #</a>
          </div>
        </gm-accordion-item>

        <gm-accordion-item title="Sales Rep.">
        </gm-accordion-item>

        <gm-accordion-item title="Products & Services">
        </gm-accordion-item>

        <gm-accordion-item title="Purchase Management">
          <div class="flex flex-col w-[200px] gap-y-1.5">
            <a  class="inline-block rounded-md  cursor-pointer text-white bg-orange-700 px-4 py-2">New Purchase Order</a>
            <a  class="inline-block rounded-md  cursor-pointer text-white bg-orange-700 px-4 py-2">Purchase List</a>
            <a  class="inline-block rounded-md  cursor-pointer text-white bg-orange-700 px-4 py-2">Purchase Receipts</a>
            <a  class="inline-block rounded-md  cursor-pointer text-white bg-orange-700 px-4 py-2">Invoices</a>
            <a  class="inline-block rounded-md  cursor-pointer text-white bg-orange-700 px-4 py-2">Reports</a>
          </div>
        </gm-accordion-item>
      </gm-accordion>
    </div>
    `,
  styles: ``,
})
export class CustomComponentPage {}
