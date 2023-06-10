import { TestBed } from '@angular/core/testing';

import { GalleryFeedService } from './gallery-feed.service';

describe('GalleryFeedService', () => {
  let service: GalleryFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
