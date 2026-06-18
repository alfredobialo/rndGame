import {Component, computed, signal, contentChildren, viewChildren, AfterContentInit} from '@angular/core';
import {AccordionItem} from './accordion-item.component';

@Component({
  selector: 'gm-accordion',
  imports: [],
  template: ` <p>{{ length() }} Items => accordion works!</p>
  <ng-content select="gm-accordion-item">
    <p class="text-gray-500">Accordion Item Goes here!</p>
  </ng-content>
  `,
  styles: ``,
})
export class Accordion implements AfterContentInit {
  protected items = contentChildren(AccordionItem);
  protected length = computed(() => this.items().length)

  constructor() {

  }

  ngAfterContentInit(): void {
    if (this.items().length > 0) {
      const items = this.items();
      for (let i = 0; i < items.length; i++) {
        items[i].onSelected.subscribe(x => {
          if (x.isOpen) {
            // collapse others
            items.filter((x, index) => {
                return index !== i
            }).forEach((x) => {
              console.log("Collapse Panel", x.isOpen(), x.title());
              x.collapse();
            });


          }
        })
      }
    }
  }


}
