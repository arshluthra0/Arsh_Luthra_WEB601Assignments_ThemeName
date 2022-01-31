import { Component, OnInit } from '@angular/core';
import {Contentlist} from '../helper-files/content-list'

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  
  contentList:any = [];
  contentValue: Contentlist;
  contentListLength: number;
  errorArrayIndex: any;
  arrayIndex: any;

  constructor() {
    this.contentValue = new Contentlist();
    this.contentValue.addContent(1, "Home Teams", "It is a comedy and sports movie", "Charles Kinnane");
    this.contentValue.addContent(2, "The ice age adventures of buck wild", "It is adventure, animation and family movie", "John. C Donkin");
    this.contentValue.addContent(3, "Titane", "It is horror, drama and sci-fi movie", "Julia Ducournau");
    this.contentList = this.contentValue.contentOfArray;
    console.log("complete array", this.contentList);
    this.contentListLength = this.contentValue.contentOfArrayLength;
    console.log("length of content list array", this.contentListLength);
    console.log("object at index 2 is ", this.contentValue.contentOfArrayItem(2));
    this.arrayIndex = this.contentValue.contentOfArrayItem(2);
    this.errorArrayIndex = this.contentValue.contentOfArrayItem(3);
   }

  ngOnInit(): void {
    
  }

}
