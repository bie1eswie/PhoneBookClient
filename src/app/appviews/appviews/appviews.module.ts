import { HomeComponent } from './../home/home.component';
import { PhonebookComponent } from './../phonebook/phonebook.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from '../contacts/contacts.component';
import { LayoutModule } from '../../common/layout/layout.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactsComponent,
    PhonebookComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule
  ],
  exports: [
    ContactsComponent,
    PhonebookComponent,
    HomeComponent
  ]
})
export class AppviewsModule { }
