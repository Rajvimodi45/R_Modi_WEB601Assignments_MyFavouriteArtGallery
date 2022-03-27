import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { BUNCHOFGALLERY } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    // setting it to the value of our array of content
    const gallery : Content[] = BUNCHOFGALLERY;
    return {gallery};
  }
  
  genId(content: Content[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id ?? 0)) + 1 : 2000;
  }
}
