import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup;
  localStorage: any;
  id: Number;
  userData = [];
  dataIndex: any;

  constructor(public formBuilder: FormBuilder, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.editForm = this.formBuilder.group({
      id: [],
      Name: [],
      mobileNo: [],
      email: [],
      address: []
    })

    this.getUserData()
  }

  getUserData() {
    let userDataFound: any
    let dataArray: any = localStorage.getItem("numbers")
    this.userData = JSON.parse(dataArray)
    for(var i = 0; i <= this.userData.length; i++){
      let eachData: any = this.userData[i]
      if(eachData?.id === this.id ){
        this.dataIndex = i
        userDataFound = this.userData[i]
      }
    }
    this.editForm.patchValue(userDataFound)
    console.log(userDataFound, this.editForm.value);

  }

  updateUser(){
    // let form = this.editForm.value
    // let formdata: never = form
    // this.userData.splice(this.dataIndex, 1, formdata);
    

    for(var i = 0; i <= this.userData.length; i++){
      let eachData: any = this.userData[i]
      if(eachData?.id === this.id ){
        eachData.Name = this.editForm.controls['Name'].value
        eachData.mobileNo = this.editForm.controls['mobileNo'].value
        eachData.email = this.editForm.controls['email'].value
        eachData.address = this.editForm.controls['address'].value
      }
    }
    console.log(this.userData);
    localStorage.setItem('numbers', JSON.stringify(this.userData));
    
    
    
  }
  

  }


