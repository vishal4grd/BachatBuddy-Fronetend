import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  status: string = '';

  constructor(private router: Router, private userService: UserService) {}

  login(): void {
    const username = this.credentials.username.trim();
    const password = this.credentials.password.trim();

    if (!username || !password) {
      this.status = 'Please enter both username and password.';
      return;
    }

    this.userService.loginUser(username, password).subscribe({
      next: (user: any) => {
        sessionStorage.clear();
        sessionStorage.setItem('uid', username);

        this.userService.setLoginStatus(true); // ✅ Notify global state

        // Optional: reload page to ensure root component sees it
        window.location.href = '/home'; // ✅ guarantees app reload
      },
      error: (err: any) => {
        if (err.status === 404) {
          this.status = 'User not found. Please register.';
        } else if (err.status === 401) {
          this.status = 'Invalid credentials. Try again.';
        } else {
          this.status = 'Login failed due to server error.';
        }
      }
    });
  }
}
