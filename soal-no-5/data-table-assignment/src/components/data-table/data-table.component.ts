import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  MatTableDataSource, MatTableModule
} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {UserServices} from '../../services/user.services';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'age', 'occupation'];

  pageSize: number = 5;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserServices) {}

  ngOnInit() {
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = this.pageSize
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.dataSource.data = data;
    })
  }

  updatePageSize(size: number) {
    this.pageSize = size;
    this.paginator.pageSize = size
  }

  applyFilter(event: Event) {
    const  filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
