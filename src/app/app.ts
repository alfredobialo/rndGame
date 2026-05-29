import {AnimationCallbackEvent, Component, computed, OnInit, signal} from '@angular/core';
import {animate, stagger, utils} from "animejs";

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <div class="bg-amber-50 h-full flex justify-center items-center">
      <div class="">
        <div class="flex flex-col justify-center items-center">
          <h1 class="mb-6 xl:mb-8 text-2xl xl:text-4xl game-name text-red-700 font-bold">{{ title() }}</h1>
          <button class="ring-2 px-6 py-3 xl:px-14 xl:py-6 xl:text-2xl text-xl focus:bg-red-700 cursor-pointer duration-300 hover:bg-red-600
         ring-red-500 text-white bg-red-400 rounded-2xl xl:rounded-4xl"
                  (click)="generateNumber()">
            Play Game
          </button>
        </div>

        @if(gameStarted()){
          <div class="">
            <div class="xl:h-[90px] h-[60px]  mt-10 relative overflow-hidden">
              <div (animate.enter)="animateQuestion($event)" class="relative lg:text-2xl font-bold
              my-4 px-4 xl:text-4xl text-lg xl:py-4 py-2 rounded-xl bg-orange-600 text-white top-0">
                <p class="question-text">{{ question() }}</p>
              </div>
            </div>

            <div class="mt-10 text-5xl space-x-10">
              <div class="flex lg:space-x-3 xl:space-x-6 space-x-2" (animate.enter)="animateQuestionBoxes($event)">
                @for(num of numsArr(); track $index){
                  <div (click)="boxSelected()? null : chooseGeneratedNumber($index)" class="cursor-pointer duration-300 hover:scale-105 hover:xl:scale-125
                  flex justify-center items-center text-white question-box
                  size-[120px] xl:size-[190px] rounded-xl shadow-2xl
                   bg-linear-to-r from-blue-700 to-blue-400" [class]="selectedBoxIndex() === $index && showGeneratedNumbers() ? selectedBoxStyle() : 'not-selected'">

                    @if(showGeneratedNumbers() && selectedBoxIndex() === $index ){
                      <span class="text-shadow-md xl:text-6xl">{{num}}</span>
                    }
                    @else{
                      <span class="text-5xl text-shadow">?</span>
                    }

                  </div>
                }


              </div>

              @if(showAnswer()){
                <div class="mt-4">Answer :  {{ answer() }} </div>
              }


            </div>
            <p class="text-xl">{{selectedBoxIndex()}}  ,,, {{boxSelected()}}</p>
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
  protected boxSelected = computed(() => {
    return this.selectedBoxIndex() > -1;
  });
  protected playAgain = computed(() => {
    return this.boxSelected;
  })
  protected selectedBoxStyle = signal("bg-linear-to-r from-orange-700 to-orange-400 user-selected-box");
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
  this.selectedBoxIndex.set(-1);

  }
  chooseGeneratedNumber(boxIndex: number) {
    this.showGeneratedNumbers.set(true);
    this.selectedBoxIndex.set(boxIndex);
    if(this.boxSelected()){
      // animated selected box
      this.animateUserSelectedOption();
      // then animate the unselected boxes then reveal the options
    }

  }

  protected animateQuestion(evt: AnimationCallbackEvent) {
    animate(evt.target, {
      y: {from: "-100px"},
    });
    const qTextElem = evt.target.querySelector(".question-text") as Element;
    animate(qTextElem, {
      y: {from: "120px", delay: 200, ease: 'inOutBack' , duration: 1400},
    });
  }

  protected animateQuestionBoxes(evt: AnimationCallbackEvent) {
    const boxes = evt.target.querySelectorAll(".question-box") ;
    animate(boxes, {
      scale : {
        from : 0 ,
        delay : stagger(100, {start : 300}),
        duration : stagger(500),
      },
      ease :"inElastic"
    });
  }

  protected animateUserSelectedOption() {


    const animation  = animate("div.user-selected-box", {
      rotateY: {
        from : "270deg"
      },
      scale: [{from : 1.4},{from : 0.6, to : 1.2}, { from : 1.3}],
      ease : "outElastic",
      duration : 700,
      delay:100
    });

    console.log("Animation on Box selected", animation,document.querySelector(".user-selected-box"));
  }
}


function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


