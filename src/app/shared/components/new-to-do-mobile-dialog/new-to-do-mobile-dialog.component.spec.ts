import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToDoMobileDialogComponent } from './new-to-do-mobile-dialog.component';

describe('NewToDoMobileDialogComponent', () => {
  let component: NewToDoMobileDialogComponent;
  let fixture: ComponentFixture<NewToDoMobileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewToDoMobileDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewToDoMobileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
