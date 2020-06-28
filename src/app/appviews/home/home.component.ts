import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router } from '@angular/router';
import { PhoneBook } from 'src/app/dtos/phoneBook';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private phoneBooks: Array<PhoneBook>;
  public get PhoneBooks(): Array<PhoneBook> {
    return this.phoneBooks;
  }
  public set PhoneBooks(value: Array<PhoneBook>) {
    this.phoneBooks = value;
  }

  constructor(public contactService: ContactsService, public router: Router) { }

  ngOnInit(): void {
    this.getPhoneBooks();
  }
  getPhoneBooks(): void {
    this.contactService.getAllContacts()
      .subscribe((res: any) => {
        this.PhoneBooks = res.result;
      });
    }

}
