import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { ArtgalleryService } from './services/artgallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'learning-angular';
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }


}

console.log ("First console log");
setTimeout(function(){ console.log("Second console log"); }, 0);
Promise.resolve().then(function(){ console.log("Third console log"); });
console.log("Fourth console log");