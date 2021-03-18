import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  number: any;
  id: any;

  constructor(public formBuilder: FormBuilder,public router: Router) { }
  
  public contactForm: FormGroup;

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      id:[],
      Name:[,Validators.required ],
      mobileNo:[, Validators.required ],
      email:[],
      address:[]

    }

    )
    
  }
  onSubmit(){
    console.log(this.contactForm.value)
    // this.id = this.number    
    this.number = this.contactForm.value
    console.log("form object",this.number)
    console.log("id",this.number.id)
    this.addNumber(this.number);
  }
  addNumber(number:any){
    let numbers =[];
    if(localStorage.getItem('numbers')){
      numbers = JSON.parse(localStorage.getItem('numbers') || '{}');
      // let lastUser = numbers[numbers.length - 1]
      number.id = numbers[0].id + 1
      numbers = [number, ...numbers];
      console.log(numbers);
      
    }else{
      this.number.id = 1
      numbers =[number];
      console.log(numbers);
    }
    localStorage.setItem('numbers', JSON.stringify(numbers));
    this.router.navigate(['/contactList/'])

  }


}
