import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'cts-textanimate',
  templateUrl: './textanimate.component.html',
  styleUrls: ['./textanimate.component.css'],
  animations:[
    trigger("textAnimate", [state("one", style({
                                                  color:'red',
                                                  transform:'scale(1)',
                                                  letterSpacing:'5px'
    })), state("two", style({
                                                  color:'blue',
                                                  transform:'scale(2)',
                                                  letterSpacing:'-2px'
    })), transition('one <-> two', animate('500ms ease-in')) ])
  ]
})
export class TextanimateComponent implements OnInit {

  currentState = "two"

  constructor() { }

  ngOnInit(): void {
  }

  animateNow(){
    console.log("Animate text!!!!");
    this.currentState = this.currentState == "one" ? "two":"one"
    console.log(this.currentState);
  }

}

/**
 * trigger -> gives animation the name so that it can be triggred
 * state -> when animation is triggred, element changes from one state to another state
 * style -> style is useed to define the state
 * transition -> effect with which state is changed!
 * animate -> animation used by transition!
 */
