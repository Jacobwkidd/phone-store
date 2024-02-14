import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PhoneCardComponent } from '../phone-card/phone-card.component';
import { Phone } from '../../models/phone';
import { PHONES } from '../../mock-db/phones';
import { PhoneDbService } from '../../services/phone.service';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhoneDb } from '../../models/phone-db';

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [NgFor, PhoneCardComponent, AsyncPipe],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {
  private phoneService: PhoneDbService = inject(PhoneDbService);
  
  public phones: Observable<PhoneDb | null> = of(null);
  ngOnInit(): void{
    this.phones = this.phoneService.loadDb();

  }
}
