import { Routes } from '@angular/router';
import { LoginComponent } from './domains/login/login.component';
import { RegisterComponent } from './domains/register/register.component';
import { AuthGuard, NotAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path:'todos',
    loadChildren: () => import('./domains/todo/todos.routes').then(m => m.TODOS_ROUTES)
  }
];
