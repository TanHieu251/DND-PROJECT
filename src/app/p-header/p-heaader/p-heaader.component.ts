import { Component } from '@angular/core';
import { AuthServiceService } from '../../auth/shared/services/auth-service.service';

@Component({
  selector: 'app-p-heaader',
  templateUrl: './p-heaader.component.html',
  styleUrl: './p-heaader.component.scss',
})
export class HeaaderComponent {
  reloadPage() {
    window.location.href = '/home';
  }
  constructor(private authService: AuthServiceService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  onLogOut() {
    return this.authService.onLogout();
  }
}
