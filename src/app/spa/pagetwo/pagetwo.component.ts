import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'cts-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent implements OnInit {

  sc:number[]=null

  constructor(private ms:MathService) { }

  ngOnInit(): void {
    this.sc = this.ms.getScores()
    this.ms.scores.push(5)
  }

}
