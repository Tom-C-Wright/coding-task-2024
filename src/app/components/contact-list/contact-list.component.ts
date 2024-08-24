import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { State, selectActiveContact, selectContactList } from '../../state';
import * as actions from '../../state/actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  /**
   * Whether the component is still awaiting for contact data to be returned by the ngrx store.
   */
  loadingContacts = true;

  contactList$: Observable<Contact[]>;
  activeContact$: Observable<Contact | undefined>;

  constructor(
    private contactService: ContactService,
    private store: Store<State>
  ) {
    this.contactList$ = this.store.select(selectContactList);
    this.activeContact$ = this.store.select(selectActiveContact);

    // Observer definitions
    this.contactList$.subscribe({
      next: (value) => {
        // Do not hide loading message until data is present
        if (value.length > 0) {
          this.onContactsLoaded();
        }
      },
    });
  }

  /**
   * Updates the internal state of the component upon the completion of contact data load.
   */
  protected onContactsLoaded() {
    this.loadingContacts = false;
  }

  viewContactClicked(contactId: number) {
    this.store.dispatch(actions.contactSelected({ contactId }));
  }

  editContactClicked(contact: Contact) {
    this.store.dispatch(actions.editContactClicked({ contact }));
  }
}
