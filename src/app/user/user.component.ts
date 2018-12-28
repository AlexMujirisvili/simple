import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/UserService';
import { User } from '../models/user';
import { MatDialog } from '@angular/material';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { ActionDialogComponent } from '../action-dialog/action-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService,
    public dialog: MatDialog) { }

  users: User[];

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  add(): void {

    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '600px',
      height: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.get();
    });
  }

  delete(user: User): void {

    const dialogRef = this.dialog.open(ActionDialogComponent, {
      width: '500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const k = result as boolean;
      if (k) {
        this.userService.delete(user);
        this.get();
      } else {
      }
    });

  }

}
