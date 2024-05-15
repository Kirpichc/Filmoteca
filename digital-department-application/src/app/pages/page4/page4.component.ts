import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {

  users: any[] = [];

  myForm: FormGroup = new FormGroup({
    "userName": new FormControl('', Validators.required),
    "userSurname": new FormControl('', Validators.required),
    "proverka": new FormControl('',Validators.required)
  });;
  selectedType: string= '' 
  submitForm() {
    console.log('Выбранный тип:', this.selectedType);
  }
  

  constructor() {
    this.onreInitForm();
  }
  onSubmit() {
    this.users.push(this.myForm.getRawValue())
  }
  onreInitForm() {
    this.myForm = new FormGroup({
      "userName": new FormControl('', Validators.required),
      "userSurname": new FormControl('', Validators.required),
      "proverka": new FormControl('', Validators.required),
      selectedType: new FormControl('',Validators.required)
    });
  }
}







