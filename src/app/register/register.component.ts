import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
  providers: [UserService]
})
export class RegisterComponent {
  user = {
    name: '',
    username: '',
    password: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    nationality: ''
  };

  constructor(private userService: UserService) {}

  onRegister(form: NgForm): void {
    if (form.valid) {
      this.user.username = this.user.name; // optional logic
      this.userService.registerUser(this.user).subscribe({
        next: () => {
          alert('✅ Registration successful!');
          form.resetForm();
        },
        error: (error) => {
          console.error('❌ Registration failed:', error);
          alert('Registration failed. Please try again.');
        }
      });
    } else {
      alert('⚠️ Please fill all required fields correctly.');
    }
  }
}