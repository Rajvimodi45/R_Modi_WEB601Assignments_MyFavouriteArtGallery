import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newGalleryEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGallery?: Content;

  constructor() { }

  ngOnInit(): void {
  }
 
  addGallery(title: string,description: string, creator: string, imgURL: string,type: string, tags: string): void {
    this.newGallery = {
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    };
    this.newGalleryEvent.emit(this.newGallery);
  }


}
