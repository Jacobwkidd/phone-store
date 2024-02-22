import { NgIf } from '@angular/common';
import { Component, Input, OnInit, inject, input } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../../models/phone';
import { switchMap } from 'rxjs';
import { PhoneDbService } from '../../services/phone-db.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent implements OnInit{
  private phoneService = inject(PhoneService);
  private phoneDbService = inject(PhoneDbService);
  private navigate = inject(Router);
  private route = inject(ActivatedRoute);
  @Input() phone: Phone | null = null;
  
  ngOnInit(): void {
    this.phone = this.phoneService.getCurPhone();
  }

  public isEditing(phone : Phone){
    //modify
    console.log(phone);
    this.phoneService.select(phone);
    this.navigate.navigate(['/phone/edit/' + phone.id]);
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
