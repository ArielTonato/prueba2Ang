import { Routes } from "@angular/router";
import { TodoListComponent } from "./pages/todo-list/todo-list.component";
import { AuthGuard } from "../../core/guards/auth.guard";

export const TODOS_ROUTES: Routes =[
  {
    path: '',
    component: TodoListComponent,
    canActivate: [AuthGuard]
  }
]
