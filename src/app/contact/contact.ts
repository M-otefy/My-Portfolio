import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  submitted = false;

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      console.log('Contact form data:', this.contact);

      this.submitted = true;

      this.contact = { name: '', email: '', message: '' };
    }
  }
}
