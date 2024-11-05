import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { FormComponent } from "../../components/form/form.component";
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-todo-main',
  standalone: true,
  imports: [HeaderComponent, FormComponent, TableComponent],
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.css'
})
export class TodoMainComponent {

}
