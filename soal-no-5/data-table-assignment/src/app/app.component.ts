import { Component } from '@angular/core';
import {DataTableComponent} from '../components/data-table/data-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DataTableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-table-assignment';
}
