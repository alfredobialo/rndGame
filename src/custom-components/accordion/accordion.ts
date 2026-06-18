import {Component, computed , signal, contentChildren, viewChildren} from '@angular/core';
import {AccordionItem} from './accordion-item.component';

@Component({
  selector: 'gm-accordion',
  imports: [],
  template: ` <p>{{length() }} Items => accordion works!</p>
    <ng-content select="gm-accordion-item" >
      <p class="text-gray-500">Accordion Item Goes here!</p>
    </ng-content>
  `,
  styles: ``,
})
export class Accordion {
  protected items  = contentChildren(AccordionItem);
  protected length  = computed(() => this.items().length)
  constructor() {
    console.log("Content Children Used");

  }

}
