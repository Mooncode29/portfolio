import { TestBed, inject } from '@angular/core/testing';

import { PlaygroundProjectService } from './playground-project.service';

describe('PlaygroundProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaygroundProjectService]
    });
  });

  it('should be created', inject([PlaygroundProjectService], (service: PlaygroundProjectService) => {
    expect(service).toBeTruthy();
  }));
});
