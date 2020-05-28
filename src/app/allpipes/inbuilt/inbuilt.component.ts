import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  message = "LorEM IPSUM Doroth MonoTH"
  birthday = new Date()
  salary = 8888

  constructor() { }

  ngOnInit(): void {
  }

}
