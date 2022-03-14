import { TestBed } from '@angular/core/testing';

import { ArtgalleryService } from './artgallery.service';

describe('ArtgalleryService', () => {
  let service: ArtgalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtgalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
