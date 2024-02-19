import { Injectable } from '@angular/core';
import { PHONES } from '../mock-db/phones';
import { PhoneDb } from '../models/phone-db';
import { Phone } from '../models/phone';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PhoneDbService } from './phone-db.service';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})// interacting with the phone-db.service.ts
export class PhoneService {

  private phoneDbService = inject(PhoneDbService);

  private curPhoneSubject : BehaviorSubject<Phone | any>

  constructor(){
    this.curPhoneSubject = new BehaviorSubject(null);
  }

  public getPhones():Observable<PhoneDb>{
    return this.phoneDbService.getPhones();
  }

  public select(phone: Phone){
    this.curPhoneSubject.next(phone);
  }

  public getCurPhoneSubject() : BehaviorSubject<Phone>{
    return this.curPhoneSubject;
  }

  public getCurPhone() : Phone{
    return this.curPhoneSubject.value;
  }

  public getPhone(id: string) : Observable<Phone | null>{
    return this.phoneDbService.getPhone(id);
  }
}