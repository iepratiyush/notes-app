import { Component, Inject, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-note-mobile-dialog',
  templateUrl: './new-note-mobile-dialog.component.html',
  styleUrls: ['./new-note-mobile-dialog.component.scss']
})
export class NewNoteMobileDialogComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<NewNoteMobileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
