import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  artgalleryList: Content[];
  constructor() {
    this.artgalleryList = [{
      id: 0,
      title: "Vancouver Art Gallery",
      description: "As the largest art gallery in Western Canada, Vancouver Art Gallery has an extensive collection of both historical and contemporary paintings, sculptures, photographs and graphic artwork.",
      creator: " Emily Carr",
      imgURL: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/04/2461641462_91897fe01d_b.jpg",
      tags: ["historical", "contemporary paintings"]
    }, {
      id: 1,
      title: "Art Gallery of Nova Scotia",
      description: "The Art Gallery of Nova Scotia is the largest art museum in Atlantic Canada.",
      creator: "Courtesy of Destination Halifax",
      imgURL: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/09/art-gallery-of-nova-scotia.jpg",
      type: "museum",
      tags: ["permanent collection"]
    }, {
      id: 2,
      title: "Art Gallery of Alberta",
      description: "Art Gallery of Alberta is Edmonton’s largest public art gallery with over 6,000 works of art by Canadian and international artists.",
      creator: "Art Gallery of Alberta's quirky exterior",
      imgURL: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/04/15015846212_6f0dcf3799_b.jpg"
    }, {
      id: 3,
      title: "Contemporary Art Museum of Montreal",
      description: "For more than 50 years, the Contemporary Art Museum on Montreal has brought together work from local and international artists for the viewing public’s pleasure.",
      creator: "Museum of Montreal",
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy5gvtCJMcCSPWMJAwKI4je6pZNthNYk0pg&usqp=CAU",
      type: "Museum"
    }, {
      id: 4,
      title: "National Gallery of Canada",
      description: "Although it does hold some notable works by American and European artists, the National Gallery of Canada’s main focus is Canadian art.",
      creator: "Kevin",
      imgURL: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/04/15762277323_25cfacba95_b.jpg",
      type: "Canadian art"
    }, {
      id: 5,
      title: "Art Gallery of Ontario",
      description: "Found in Toronto, the Art Gallery of Ontario has over 80,000 works within its permanent collection, which span from the 1st century to the present day.",
      creator: "Ramin Bahrani",
      imgURL: "https://img.theculturetrip.com/768x/smart/images/default_location.jpg",
      type: "Art Gallery",
      tags: ["permanent collection"]
    }];
  }

  ngOnInit(): void {
  }

}