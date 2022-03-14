import { Injectable } from '@angular/core';
import { BUNCHOFGALLERY } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtgalleryService {

  constructor() { }

  getContent(): Content[] { 
    return BUNCHOFGALLERY;
  }

  getContentObs(): Observable<Content[]> { 
    return of(BUNCHOFGALLERY);
  }

  getContentGallery(id:Number): Observable<Content[]> {
    const galleryFiltered = BUNCHOFGALLERY.filter(gallery => {
      return gallery.id === Number(id);
    });
    return of(galleryFiltered);
  } 
}
