import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditDialogComponent } from './contact-edit-dialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactEditDialogComponent', () => {
  let component: ContactEditDialogComponent;
  let fixture: ComponentFixture<ContactEditDialogComponent>;
  const fakeMatDialogRef = jasmine.createSpyObj(['close']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEditDialogComponent ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: fakeMatDialogRef },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
