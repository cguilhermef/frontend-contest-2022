import { Component, OnInit } from '@angular/core';
import { AppUsersService } from '@frontend-contest/app/users/data-access';

@Component({
  selector: 'fc-users-feature-list',
  templateUrl: './users-feature-list.component.html',
  styleUrls: ['./users-feature-list.component.scss'],
})
export class UsersFeatureListComponent implements OnInit {
  constructor(private service: AppUsersService) {}

  ngOnInit(): void {
    this.service.list().subscribe((users) => console.log(users));
  }
}
