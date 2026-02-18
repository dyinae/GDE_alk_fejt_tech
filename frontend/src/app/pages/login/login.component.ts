import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'] 
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin(): void {

    this.authService.login(this.username, this.password)
      .subscribe({
        next: (response: any) => {

          if (response.success) {
            this.authService.setLoggedIn(response.username);
            this.router.navigate(['/accommodations']);
          }

        },
        error: (err) => {
          this.errorMessage =
            err.error?.message || 'Hibás felhasználónév vagy jelszó!';
        }
      });
  }
}
