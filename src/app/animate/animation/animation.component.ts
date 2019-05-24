import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';
import { setClassMetadata } from '@angular/core/src/render3';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("animateParagraph",[
      state("one",style({
        color:'red',transform:'scale(1)',letterSpacing:'15px'
      })),
      state("two",style({
        color:'green',
        transform:'scale(2)',letterSpacing:'-10px'
      })),transition('one -> two', animate('200ms ease-in'))
    ])
  ]
})
export class AnimationComponent implements OnInit {

  myState = "two"
  animateText = function()
  {
    this.myState  = this.myState=== "two" ? "one" : "two"
  }
  constructor() { }

  ngOnInit() {
  }

}
