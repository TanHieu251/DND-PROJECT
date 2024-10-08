import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

export class authenticatedGuard implements CanActivate{
  constructor() {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    throw new Error('Method not implemented.');
  }



}
