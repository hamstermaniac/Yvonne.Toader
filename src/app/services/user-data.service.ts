import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  showBegin : boolean = true;
  showConsent : boolean = false;
  showChestionar1 : boolean = false;
  showChestionar2 : boolean = false;
  showChestionar3 : boolean = false;
  showChestionar4 : boolean = false;
  showChestionar5 : boolean = false;
  showChestionar6 : boolean = false;
  showChestionar7 : boolean = false;
  showImagini : boolean = false;
  showEnd : boolean = false;

  sexuality : string = "";

  match : boolean = false;

  fillEndDate : any;
  matchData : any[] = [];
  experiment : string = '';
  experimentData : any[] = [];
  age : any = "";
  sex : any = "";
  otherSex: any = "";
  sector: any = "";
  otherSector: any = "";
  chestionar1: any = {
    q1: '',
    q2: ''
  };
  chestionar2: any = {
    q1: '',
    q2: ''
  };
  chestionar3: any = {
    q1: '',
    q2: ''
  };
  chestionar4: any = {
    q1: '',
    q2: ''
  };
  chestionar5: any = {
    q1: '',
    q2: ''
  };
  chestionar6: any = {
    q1: '',
    harta: ''
  };
  chestionar7: any = {
    q1: '',
    q2: ''
  };


  constructor() { }
}
