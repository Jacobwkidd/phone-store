import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PhoneCardComponent } from '../phone-card/phone-card.component';
import { Phone } from '../../models/phone';
import { PHONES } from '../../mock-db/phones';
import { PhoneDbService } from '../../services/phone.service';
import { inject } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [NgFor, PhoneCardComponent],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {
  private phoneService = inject(PhoneDbService);
  
  phones: Observable<Phone[]> = of([]);
  ngOnInit(): void{
    this.phones = this.phoneService.getPhone();
  }
}
