import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an updated contact when saving a new entry', ()=>{
    service.saveContact$({
      id: -1, // Signifies new contact,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    }).forEach((value)=> {
      expect(value.id).not.toBe(-1)
    });
  });
});
