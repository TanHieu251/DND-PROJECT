import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

export class AuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return false; 
    }
  }
}
