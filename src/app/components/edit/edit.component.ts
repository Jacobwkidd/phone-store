import { Component, Input, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Phone } from '../../models/phone';
import { PhoneDbService } from '../../services/phone-db.service';
import { PhoneService } from '../../services/phone.service';
import { NgIf, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  private phoneService = inject(PhoneService);
  private phoneDbService = inject(PhoneDbService);
  private navigate = inject(Router);
  private route = inject(ActivatedRoute);
  public phone: Phone | null = null;

  constructor(public viewportScroller: ViewportScroller){

  }
  
  ngOnInit(): void {
    this.phone = this.phoneService.getCurPhone();

  }



  public saveChanges(phone: Phone){
    this.phoneDbService.updatePhone(phone);
    this.phoneDbService.saveDb();
    this.navigate.navigate(['/phone/all']);
  }
  public cancel(phone : Phone){
    this.navigate.navigate(['/phone/' + phone.id]);
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
