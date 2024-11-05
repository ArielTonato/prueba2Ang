import { Component, inject } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    OverlayPanelModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  email:string | null = '';
  authService = inject(AuthService);
  router = inject(Router);

  constructor() { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.email = user.email;
      }
    });
  }
  logout() {
    this.authService.logOut();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }
}
