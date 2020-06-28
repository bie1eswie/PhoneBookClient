import { Observable } from 'rxjs';
import { Contact } from './../dtos/contact';
import { Constants } from './../utilities/constants';
import { Injectable } from '@angular/core';
import { DataServiceService } from './DataServiceService';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private addContactEndPoint: string = Constants.ServerURL + '/api/contact/addNewContact';
  private getAllContactsEndPoint: string = Constants.ServerURL + '/api/contact/getContacts';
  private getContactEndPoint: string = Constants.ServerURL + '/api/contact/';
  private deleteContactEndPoint: string = Constants.ServerURL + '/api/contact/';
  private updateContactEndPoint: string = Constants.ServerURL + '/api/contact/updateContact';
  constructor(public dataService: DataServiceService) { }

  addContact(newContact: Contact): Observable<any> {

    this.dataService.set(this.addContactEndPoint);
    return this.dataService.post(JSON.stringify(newContact));
  }
  getUserByID(id: string): Observable<any> {
    const getByIdUrl = this.getContactEndPoint + '/' + id;
    this.dataService.set(getByIdUrl);
    return this.dataService.get();
  }
  getAllContacts(): Observable<any> {
    this.dataService.set(this.getAllContactsEndPoint);
    return this.dataService.get();
  }

  updateContact(contact: Contact): Observable<string> {
    this.dataService.set(this.updateContactEndPoint);
    return this.dataService.put(contact);
  }

  deleteUser(id: string): Observable<number> {
    const deleteByIdUrl = this.deleteContactEndPoint + '/' + id;
    this.dataService.set(deleteByIdUrl);
    return this.dataService.delete();
  }
}
