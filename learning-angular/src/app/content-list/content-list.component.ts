import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  searchMessage: string = "";
  searchFlag: boolean = false;
  artgalleryList: Content[];
  constructor() {
    this.artgalleryList = [{
      id: 0,
      title: "Vancouver Art Gallery",
      description: "As the largest art gallery in Western Canada, Vancouver Art Gallery has an extensive collection of both historical and contemporary paintings, sculptures, photographs and graphic artwork.",
      creator: " Emily Carr",
      imgURL: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/04/2461641462_91897fe01d_b.jpg",
      type: "artgallery",
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
      type: "museum"
    }, {
      id: 4,
      title: "National Gallery of Canada",
      description: "Although it does hold some notable works by American and European artists, the National Gallery of Canada’s main focus is Canadian art.",
      creator: "Kevin",
      imgURL: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/04/15762277323_25cfacba95_b.jpg",
    }, {
      id: 5,
      title: "Art Gallery of Ontario",
      description: "Found in Toronto, the Art Gallery of Ontario has over 80,000 works within its permanent collection, which span from the 1st century to the present day.",
      creator: "Ramin Bahrani",
      imgURL: "https://img.theculturetrip.com/768x/smart/images/default_location.jpg",
      type: "artgallery",
      tags: ["permanent collection"]
    },
    {
      id: 6,
      title: "Montreal Museum of Fine Arts",
      description: "Located on Montreal’s historic Golden Square Mile on Sherbrooke Street, the Montreal Museum of Fine Arts is Montreal’s largest museum and one of the most recognisable in the country.",
      creator: "Andrea Wright",
      imgURL: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/04/18045219032_d9cd502045_b.jpg",
      type: "museum"
    }];
  }

  ngOnInit(): void {
  }

   checkForTitle(searchValue: string): void{
    let searchList = this.artgalleryList.filter(c => c.title == searchValue);
    if (searchList.length > 0){
      this.searchMessage  = "Found the movie!";
      this.searchFlag = true;
    }
    else{
      this.searchMessage  = "No movie with that title";
      this.searchFlag = false;
    }
  }
  donothing(){

  }

}