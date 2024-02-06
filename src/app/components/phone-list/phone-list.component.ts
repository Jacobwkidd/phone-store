import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PhoneCardComponent } from '../phone-card/phone-card.component';
import { Phone } from '../../models/phone';
import { PHONES } from '../../mock-db/phones';

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [NgFor, PhoneCardComponent],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {
  phones: Phone[] = PHONES;
}
