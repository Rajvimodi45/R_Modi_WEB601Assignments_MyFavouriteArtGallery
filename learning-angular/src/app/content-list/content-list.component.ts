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
  gallery_id!: number;
  singleItem:Content[] = [];
  constructor(private artgalleryService: ArtgalleryService) {
    this.bunchOfGallery = [];
    
   }
  
  ngOnInit(): void {
    this.artgalleryService.getContentObs().subscribe(galleryArray => this.bunchOfGallery = galleryArray);
    this.artgalleryService.getContentGallery(2).subscribe(featchedgallery => {
      this.singleItem = featchedgallery;
    });
  }

  

  }


