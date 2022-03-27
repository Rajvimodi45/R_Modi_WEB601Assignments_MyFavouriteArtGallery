import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ArtgalleryService } from '../services/artgallery.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  
  bunchOfGallery: Content[];

  constructor(private artgalleryService: ArtgalleryService) {
    this.bunchOfGallery = [];
    
   }

   ngOnInit(): void {
    this.getGalleryFromServer();
  }

  getGalleryFromServer(): void{
    this.artgalleryService.getContent().subscribe(galleryArray => this.bunchOfGallery = galleryArray);
  }

  addGalleryToList(newGalleryFromChild: Content): void {
    this.artgalleryService.addContent(newGalleryFromChild).subscribe(newContentFromServer => {
      console.log("New content from server: ", newContentFromServer);
      // potentially useful if the server data is frequently updated
      // this.getFoodFromServer();


      // more efficient way of getting just 1 new item and adding it to the list
      this.bunchOfGallery.push(newContentFromServer);
      this.bunchOfGallery = [...this.bunchOfGallery]; // using the spread operator

    });
  }


  }




