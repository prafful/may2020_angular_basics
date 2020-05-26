import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  city = "Chennai"

  welcome(){
    return "Welcome to " + this.city
  }

  constructor() { }

  ngOnInit(): void {
  }

}
