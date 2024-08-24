import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

const initialState = {};
const fakeMatDialogRef = jasmine.createSpyObj(['close']);

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactListComponent,
        ContactDetailComponent
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: fakeMatDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'coding-task-2024'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('coding-task-2024');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span.content')?.textContent).toContain('coding-task-2024 app is running!');
  });
});
