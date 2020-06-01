import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'cts-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {

  myscores:number[] = null
  message:any = ""

  //you inject the service by declaring the service instance as a parameter
  //to constructor
  constructor(private math: MathService) { }

  ngOnInit(): void {
    this.myscores = this.math.scores
    this.message = this.math.welcome()
    this.math.scores.push(4)
  }

}
