import { Routes } from '@angular/router';
import { LoginComponent } from './domains/login/login.component';
import { RegisterComponent } from './domains/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'todos',
    loadChildren: () => import('./domains/todo/todos.routes').then(m => m.TODOS_ROUTES)
  }
];
