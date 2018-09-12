import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodosService]
    });
  });

  it('should be created', inject([TodosService], (service: TodosService) => {
    expect(service).toBeTruthy();
  }));
});
