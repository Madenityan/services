import { Component } from '@angular/core';
import {UserListComponent} from './user-list/user-list.component';
import {UserTableComponent} from './user-table/user-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services';
}
