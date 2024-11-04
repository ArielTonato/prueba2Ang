import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { map } from "rxjs";

export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getCurrentUser().pipe(
    map(user => {
      console.log(user);
      if(user){
        return true;
      }
      router.navigate(['/']);
      return false;
    })
  )
}
