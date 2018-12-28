import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    public dialogRef: MatDialogRef<UserDetailComponent>) { }

  username: string;
  age: number;
  description: string;

  ngOnInit() {
  }

  add(): void {
    this.userService.add(this.username, this.age, this.description);
    this.dialogRef.close();
  }

}
