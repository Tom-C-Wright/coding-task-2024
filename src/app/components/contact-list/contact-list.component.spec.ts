import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { delay } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactListComponent, ContactDetailComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
