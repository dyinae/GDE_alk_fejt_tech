import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  username = '';
  password = '';

  message = '';
  isError = false;
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(): void {

    if (!this.username || !this.password) {
      this.message = 'Minden mező kitöltése kötelező!';
      this.isError = true;
      return;
    }

    this.loading = true;
    this.message = '';
    this.isError = false;

    this.authService.register(this.username, this.password)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (res: any) => {

          console.log('REGISTER RESPONSE:', res);

          if (res.success) {

            this.message = 'Sikeres regisztráció!';
            this.isError = false;

            this.username = '';
            this.password = '';
            
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);
          }
        },
        error: (err) => {

          this.message =
            err.error?.message || 'Hiba történt';

          this.isError = true;
        }
      });
  }
}
