import { TestBed } from '@angular/core/testing';

import { ToDoFirebaseService } from './to-do-firebase.service';

describe('ToDoFirebaseService', () => {
  let service: ToDoFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
