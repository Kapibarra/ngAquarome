import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialogComponentComponent } from 'src/app/homepage/shared/components/request-dialog-component/request-dialog-component.component';


@Component({
  selector: 'app-button-main',
  templateUrl: './button-main.component.html',
  styleUrls: ['./button-main.component.scss']
})
export class ButtonMainComponent implements OnInit {
  @Input() label!: string;
  @Output() onClick = new EventEmitter<any>();

  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog() {
    console.log();
    const dialogRef = this.dialog.open(RequestDialogComponentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
