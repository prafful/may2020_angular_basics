import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cts-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  personalForm:any
  fname:string = ""
  lname:string=""
  email:string=""

  constructor() { }

  ngOnInit(): void {
    this.personalForm = new FormGroup({
                            fname: new FormControl(),
                            lname: new FormControl(),
                            email: new FormControl()
    })
  }

  captureForm(pf){
    console.log(pf);
    console.log(pf.value);

  }

}
