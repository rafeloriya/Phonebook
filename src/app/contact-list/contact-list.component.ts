import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'mobileNo','email', 'address', 'action'];
  dataSource: never[];
  numbersList: any;
  

  constructor() { }

  ngOnInit(): void {
    let numbers: any = []
    numbers = localStorage.getItem('numbers')
    this.numbersList = JSON.parse(numbers);
    console.log(this.numbersList)
    console.log(this.numbersList[0].id)
  }

  // editNumber(){
  //   console.log(this.numbersList.value)
  onDelete(id:any){
    debugger
    for(var i = 0; i <= this.numbersList.length; i++){
      let eachData: any = this.numbersList[i]
      if(eachData?.id === id){
        this.numbersList.splice(i,1);
      }
    }
    console.log(this.numbersList);
    
    localStorage.setItem('numbers', JSON.stringify(this.numbersList))
    this.numbersList = [...this.numbersList]
  }
    
  

}





