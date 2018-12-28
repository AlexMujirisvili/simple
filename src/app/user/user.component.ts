import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/UserService';
import { User } from '../models/user';
import { MatDialog } from '@angular/material';
import { UserDetailComponent } from '../user-detail/user-detail.component';

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
    this.users = [];
    this.userService.getAll().subscribe(users => this.users = users);
  }

  add(): void {
    let dialogRef = this.dialog.open(UserDetailComponent, {
      width: '600px',
      height: '600px',
      data: {
        
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      alert("Dialog was closed");
    })
  }

}
