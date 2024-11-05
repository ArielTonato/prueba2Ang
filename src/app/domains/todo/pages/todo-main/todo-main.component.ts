import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";

@Component({
  selector: 'app-todo-main',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.css'
})
export class TodoMainComponent {

}
