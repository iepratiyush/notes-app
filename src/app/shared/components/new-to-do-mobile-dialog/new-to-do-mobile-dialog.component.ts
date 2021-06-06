import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-to-do-mobile-dialog',
  templateUrl: './new-to-do-mobile-dialog.component.html',
  styleUrls: ['./new-to-do-mobile-dialog.component.scss']
})
export class NewToDoMobileDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewToDoMobileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
