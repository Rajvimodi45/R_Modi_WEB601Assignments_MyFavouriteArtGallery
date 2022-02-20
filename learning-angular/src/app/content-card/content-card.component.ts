import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() art?: Content;

  constructor() {

  }


  ngOnInit(): void {
  }

  imageClicked(): void {
    console.log("ID: ", this.art?.id, ", Title: ", this.art?.title);
  }

}