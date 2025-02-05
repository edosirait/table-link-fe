import { Component } from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {ModalDialogComponent} from '../components/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'modal-dialog-assigment';

  constructor(public dialogRef: MatDialog) {}

  openModal() {
    const dialogRef = this.dialogRef.open(ModalDialogComponent, {
      data: {
        title: 'My Modal',
        content: 'Modal content'
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog close');
    })
  }

}
