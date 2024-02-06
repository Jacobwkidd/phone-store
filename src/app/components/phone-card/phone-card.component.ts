import { NgIf } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

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

  @Input() phones: Phone | null = null;

  public select(phone: Phone){
    this.phoneService.select(phone);

    this.router.navigate(['/phones' + phone.id]);
  }
}
