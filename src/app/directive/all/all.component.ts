import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  display = false

  message="GOY"  //OMG, GOYW, GTW

  friends = ["obb", "cas", "owioh", "bnp", "obb", "cas", "owioh", "bnp", ]

  redcode=50
  greencode=50
  bluecode=50
  boxwidth = 50
  boxheight = 50

  status = true

  todos = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    if(this.display){
      this.display=false
    }else{
      this.display=true
    }

    console.log(this.display);

  }

  getColor(){
    var tempString = "rgb(" + this.redcode+"," +this.greencode + ","+this.bluecode + ")"
    console.log(tempString);
    return tempString
  }

  getWidth(){
    return this.boxwidth + "px"
  }

  getHeight(){
    return this.boxheight+ "px"
  }

  toggleStatus(){
    //this.status = this.status === true ? false: true
    this.status = !this.status
  }

}
