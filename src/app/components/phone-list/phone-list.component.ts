import { AsyncPipe, KeyValuePipe, NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { PhoneCardComponent } from '../phone-card/phone-card.component';
import { Phone } from '../../models/phone';
import { PHONES } from '../../mock-db/phones';
import { PhoneService } from '../../services/phone.service';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhoneDb } from '../../models/phone-db';
import { PhoneDbService } from '../../services/phone-db.service';

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [NgFor, PhoneCardComponent, AsyncPipe, NgForOf, KeyValuePipe],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css' 
})
export class PhoneListComponent {
  private phoneService = inject(PhoneService);
  
  public phones: Observable<PhoneDb | null> = of(null);
  ngOnInit(): void{
    this.phones = this.phoneService.getPhones();

  }
}
