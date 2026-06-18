import {AnimationCallbackEvent, booleanAttribute, Component, input, computed, signal, viewChild, ElementRef, effect} from '@angular/core';
import {animate} from 'animejs';

@Component({
  selector: 'gm-accordion-item',
  imports: [],
  template: `<p class="cursor-pointer capitalize font-bold text-lg px-3 py-1
                hover:text-gray-200 hover:bg-gray-800  duration-200 mb-1 bg-gray-700 text-white
                " (click)="handleCollapseState()">{{ title() }}</p>
                @if(isOpen()){
                  <div (animate.enter)="expandPanel($event)"
                       (animate.leave)="collapsePanel($event)"
                       class="pl-2 ml-1 bg-gray-100 border-l-gray-400 duration-500
                       hover:border-l-gray-600 border-l-4 overflow-hidden" >
                    <ng-content>

                    </ng-content>
                  </div>
                }

  `,
  styles: ``,
})
export class AccordionItem {

  protected divElem = viewChild<ElementRef>('div');
  heightExpanded = computed<string>(() => {
    return this.isOpen() ? '300px' : '0px';
  });
  isOpen = signal(true);
  title = input.required<string>();
  id = input("");
  expanded = input(true, { transform : booleanAttribute});

  constructor() {
    effect(() => {
      console.log("Accordion Panel Open State: ",this.isOpen() ? "OPEN" : "CLOSE");
    });
  }

  protected handleCollapseState() {
    console.log("Div Height :" , this.heightExpanded(), this.isOpen(), this.divElem()?.nativeElement);
    this.isOpen.update(x => !x);
    // raise an event to signify current state
  }

  protected expandPanel($event: AnimationCallbackEvent) {
    animate($event.target, {
      height : this.heightExpanded(),
      duration:700,
    });
  }

  protected collapsePanel($event: AnimationCallbackEvent) {
    animate($event.target, {
      duration:500,
      height : this.heightExpanded(),
      onComplete : () => $event.animationComplete()
    });
  }
}
