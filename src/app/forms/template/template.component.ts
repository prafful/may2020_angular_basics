import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  fname:string = ""
  lname:string=""
  email:string=""

  constructor() { }

  ngOnInit(): void {
  }

  captureForm(pf){
    console.log("In Capture form");
    console.log(pf);
    console.log(pf.value);
  }

}
