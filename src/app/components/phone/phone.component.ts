import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../../models/phone';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [NgIf],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent implements OnInit{
  private phoneService = inject(PhoneService);
  private route = inject(ActivatedRoute);
  public phone: Phone | null = null;
  
  ngOnInit(): void {
    this.getPhone();
  }

  public isEditing(){
    //modify
    
  }

  public saveChanges(){

  }
  public cancel(){
    
  }

  public getPhone(): void{
    if(!this.phone){
      this.route.paramMap.pipe(
        switchMap(params => {
          let phoneId = params.get('phoneId');
          phoneId = (phoneId ? phoneId : '-1');
          return this.phoneService.getPhone(phoneId);
        })
      ).subscribe(phone => {
        this.phone = phone;
      })
    }
  }
}
