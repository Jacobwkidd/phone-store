import { NgIf } from '@angular/common';
import { Component, Input, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phone-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './phone-card.component.html',
  styleUrl: './phone-card.component.css'
})
export class PhoneCardComponent {
  private router = inject(Router);
  private phoneService = inject(PhoneService);

  @Input() phone: Phone | null = null;

  public select(phone: Phone){
    this.phoneService.select(phone);

    this.router.navigate(['/phone/' + phone.id]);
  }
}
