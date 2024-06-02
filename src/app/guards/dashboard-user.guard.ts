import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CookiemanagerService} from "../services/cookiemanager.service";

export const dashboardUserGuard: CanActivateFn =
  async (route, state) => {
    const router = inject(Router);
    const cookie = inject(CookiemanagerService);

    try {
      const hasTokenValue = await cookie.isExistsCookieWithPromise('tokenData')
      if (hasTokenValue) {
        return true;
      } else {
        router.navigateByUrl('/dashboard/login');
        return false;
      }
    } catch (e) {
      router.navigateByUrl('/dashboard/login');
      return false;
    }
  }

