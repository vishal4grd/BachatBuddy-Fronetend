// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = !!sessionStorage.getItem('uid');
    console.log("AuthGuard triggered. Logged in:", isLoggedIn);

    if (!isLoggedIn) {
      // ✅ Save the URL the user was trying to access
      sessionStorage.setItem('redirectUrl', state.url);

      // Redirect to login page
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}