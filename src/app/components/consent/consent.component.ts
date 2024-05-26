import { Component } from '@angular/core';

import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


import { UserDataService } from '../../services/user-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-consent',
  standalone: true,
  imports: [CheckboxModule, ButtonModule,RadioButtonModule,ReactiveFormsModule,FormsModule,CommonModule,InputTextModule,InputTextareaModule,MapComponent],
  templateUrl: './consent.component.html',
  styleUrl: './consent.component.css'
})
export class ConsentComponent {

  consentCheck: boolean = false;
  showConsentForm : boolean = true;
  showUserData : boolean = false;

  constructor(
    public userData : UserDataService
    ) { }

  ngOnInit(): void {

  }

  check(){
    let btn = <HTMLInputElement> document.getElementById('consentBtn');
    if(this.consentCheck){
      btn.classList.remove('disabled');
    }
    else{
      btn.classList.add('disabled');
    }
  }

  next(){
    this.showConsentForm = false;
    this.showUserData = true;
  }

  next1(){
    this.userData.showConsent = false;
    this.showUserData = false;
    this.userData.showChestionar1 = true;
  }

  next2(){
    this.userData.showChestionar1 = false;
    this.userData.showChestionar2 = true;
  }
  next3(){
    this.userData.showChestionar2 = false;
    this.userData.showChestionar3 = true;
  }
  next4(){
    this.userData.showChestionar3 = false;
    this.userData.showChestionar4 = true;
  }
  next5(){
    this.userData.showChestionar4 = false;
    this.userData.showChestionar5 = true;
  }
  next6(){
    this.userData.showChestionar5 = false;
    this.userData.showChestionar6 = true;
  }
  next7(){
    this.userData.showChestionar6 = false;
    this.userData.showChestionar7 = true;
  }
  next8(){
    this.userData.showChestionar7 = false;
    this.userData.showEnd = true;
  }
  checkFilled(){
    if ( this.userData.sex != "" && this.userData.age != "" && this.userData.sector != "") {
      let btn = <HTMLInputElement> document.getElementById('dataBtn');
      btn.classList.remove("disabled");
    }
  }
  checkFilled1(){
    if ( this.userData.chestionar1.q1 != "" && this.userData.chestionar1.q2 != "") {
      let btn = <HTMLInputElement> document.getElementById('dataBtn1');
      btn.classList.remove("disabled");
    }
  }
  checkFilled2(){
    if ( this.userData.chestionar2.q1 != "" && this.userData.chestionar2.q2 != "") {
      let btn = <HTMLInputElement> document.getElementById('dataBtn2');
      btn.classList.remove("disabled");
    }
  }
  checkFilled3(){
    if ( this.userData.chestionar3.q1 != "" && this.userData.chestionar3.q2 != "") {
      let btn = <HTMLInputElement> document.getElementById('dataBtn3');
      btn.classList.remove("disabled");
    }
  }
  checkFilled4(){
    if ( this.userData.chestionar4.q1 != "" && this.userData.chestionar4.q2 != "") {
      let btn = <HTMLInputElement> document.getElementById('dataBtn4');
      btn.classList.remove("disabled");
    }
  }
  checkFilled5(){
    if ( this.userData.chestionar5.q1 != "" && this.userData.chestionar5.q2 != "") {
      let btn = <HTMLInputElement> document.getElementById('dataBtn5');
      btn.classList.remove("disabled");
    }
  }
  checkFilled6(){
    if ( this.userData.chestionar6.q1 != "") {
      let btn = <HTMLInputElement> document.getElementById('dataBtn6');
      btn.classList.remove("disabled");
    }
  }
  checkFilled7(){
    if ( this.userData.chestionar7.q1 != "" && this.userData.chestionar7.q2 != "") {
      let btn = <HTMLInputElement> document.getElementById('dataBtn7');
      btn.classList.remove("disabled");
    }
  }

}
