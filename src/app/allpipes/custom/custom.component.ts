import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  friends= ["zmbr", "OKLA", "YAMNUT", "yamnut", "wander", "AHHA"]

  constructor() { }

  ngOnInit(): void {
  }

}
