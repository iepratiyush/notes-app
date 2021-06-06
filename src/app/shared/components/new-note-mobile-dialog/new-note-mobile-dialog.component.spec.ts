import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteMobileDialogComponent } from './new-note-mobile-dialog.component';

describe('NewNoteMobileDialogComponent', () => {
  let component: NewNoteMobileDialogComponent;
  let fixture: ComponentFixture<NewNoteMobileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNoteMobileDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNoteMobileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
