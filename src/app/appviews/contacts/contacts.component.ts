import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/dtos/contact';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PhoneBook } from 'src/app/dtos/phoneBook';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() phoneBook: PhoneBook;
  private originalcontacts: Array<Contact>;

  private searchText = '';

  public get SearchText(): string {
    return this.searchText;
  }
  public set SearchText(value: string) {
    this.searchText = value;
  }

  constructor(public contactservice: ContactsService, public router: Router) { }

  ngOnInit(): void {
    this.originalcontacts = this.phoneBook.contacts;
  }

    onFilterChanged(filter: any): void {
      this.SearchText = filter;

      if (this.SearchText && this.phoneBook.contacts != null) {
        this.phoneBook.contacts = this.originalcontacts.filter(item =>  item.name.toLowerCase().includes(filter.toLowerCase())
                                                            || item.phoneNumber.includes(filter));
      }
      else{
        this.phoneBook.contacts = this.originalcontacts;
      }
    }

    editContact(contact: Contact): void {
      contact.edit = !contact.edit;
    }

    saveUpdates(contact: Contact): void{
      this.contactservice.updateContact(contact)
      .subscribe((res: any) => {
       if (res.result) {
        contact.edit = false;
       }
      });
    }

    addNewContact(): void {
      const newContact: Contact = new Contact('', '', this.phoneBook.id);
      this.phoneBook.contacts.push(newContact);
      this.phoneBook.contacts.reverse();
    }

    saveNewContact(contact: Contact): void {
      this.contactservice.addContact(contact)
      .subscribe((res: any) => {
       if (res.result) {
        contact.edit = false;
        contact.isNew = false;
       }
      });
    }

}
