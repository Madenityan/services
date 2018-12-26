import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserListComponent } from './user-list/user-list.component';
import { TestBemComponent } from './test-bem/test-bem.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserListComponent,
    TestBemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
