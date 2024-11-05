import { Routes } from "@angular/router";

import { AuthGuard } from "../../core/guards/auth.guard";
import { TodoMainComponent } from "./pages/todo-main/todo-main.component";

export const TODOS_ROUTES: Routes =[
  {
    path: '',
    component: TodoMainComponent,
    canActivate: [AuthGuard]
  }
]
