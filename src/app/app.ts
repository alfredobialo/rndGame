import {Component, computed, OnInit, signal} from '@angular/core';
import {animate} from "animejs";

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <div class="bg-amber-100 h-full flex justify-center items-center">
      <div class="">
        <h1 class="mb-6 xl:mb-8 text-2xl xl:text-4xl game-name text-red-700 font-bold">{{ title() }}</h1>
        <button class="ring-2 px-6 py-3 xl:px-14 xl:py-6 xl:text-2xl text-xl focus:bg-red-700 cursor-pointer duration-300 hover:bg-red-600
         ring-red-500 text-white bg-red-400 rounded-2xl xl:rounded-4xl"
        (click)="generateNumber()">
        Play Game
        </button>
        @if(gameStarted()){
          <div class="">
            <p class="text-xl my-4">{{question()}}</p>
            <div class="mt-10 text-5xl space-x-10">
              <div class="flex lg:space-x-3 xl:space-x-6 space-x-2">
                @for(num of numsArr(); track $index){
                  <div (click)="chooseGeneratedNumber($index)" class="cursor-pointer duration-300 hover:scale-105 hover:xl:scale-125
                  flex justify-center items-center text-white size-[120px] xl:size-[190px] rounded-xl shadow-2xl bg-linear-to-r from-blue-700 to-blue-400">

                    @if(showGeneratedNumbers() && selectedBoxIndex() === $index){
                      <span class="text-shadow-md">{{num}}</span>
                    }

                  </div>
                }


              </div>

              @if(showAnswer()){
                <div class="mt-4">Answer :  {{ answer() }} </div>
              }


            </div>
            <p class="text-xl">{{selectedBoxIndex()}}</p>
          </div>
        }


      </div>

    </div>


  `,
  styles: ``
})
export class App implements OnInit {
  protected readonly title = signal('Number Guess Game');
  protected numsArr = signal<number[]>([0,0,0]);
  protected answer = signal(0);
  protected selectedBoxIndex = signal(-1);
  protected gameStarted = signal(false);
  protected showGeneratedNumbers = signal(false);
  protected question = computed(() => {
    return `Choose where ${this.answer()} is in the boxes`;
  });
  showAnswer = signal(false);


  constructor() {

  }

  ngOnInit(): void {
    animate("h1.game-name", {
      y: {from: "-100px"},
      opacity: {from: 0},
      scale: [{from: 0, to: 1.2, duration: 1000}
        , {to: 1, duration: 900, ease: 'inCubic'}
      ],
      duration: 2000,
    });
  }

  protected generateNumber() {
      this.gameStarted.set(true);

      const num  = getRandomInt(1,10);
      const num2  = getRandomInt(1,10);
      const num3  = getRandomInt(1,10);

      const ans = getRandomInt(1,3);
      if(ans === 1)
        this.answer.set(num);
      else if (ans === 2)
        this.answer.set(num2);
      else if (ans === 3)
        this.answer.set(num3);


  this.numsArr.set([num,num2,num3]);
  this.showGeneratedNumbers.set(false);

  }
  chooseGeneratedNumber(boxIndex: number) {
    this.showGeneratedNumbers.set(true);
    this.selectedBoxIndex.set(boxIndex);
  }
}


function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


