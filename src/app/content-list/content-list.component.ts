import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  // moviee = "moviee";
  // mycard = "mycard";
  // drama = "drama";
  // action = "action";
  // adventure = "adventure";
  // notype = "";
  searchMessage: string = '';
  searchFlag: boolean = false;
  noImageAvailable = '../../assets/img/no_image_available.jpg';
  movies: Content[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'OLYMPUS HAS FALLEN',
        description:
          'When the president is kidnapped, a former secret service agent must use his expertise to rescue him as well as the other hostages',
        creator: '$170.3 milliom',
        imgURL: '../../assets/img/Olympus has fallen.jpg',
        type: ['action', 'adventure'],
        tags: ['Creighton Rothenberger', 'Katrin Benedikt'],
      },
      {
        id: 2,
        title: 'THE LAST SAMURAI',
        description:
          'Captain Nathan Algren hired to train the JApanese army to fight a Samurai rebellion. However, he ends up enbracing the people of Samurai culture after he gets captured by them',
        creator: '$456.8 million',
        imgURL: '../../assets/img/Last samurai.jpg',
        type: ['drama', 'action'],
        tags: ['Hans Jimmer', 'John Logan'],
      },
      {
        id: 3,
        title: 'AVENGERS',
        description:
          'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance',
        creator: 'R$279.75 million',
        imgURL: '../../assets/img/Avengers.jpg',
        type: ['adventure', 'action'],
        tags: ['Alan Silvesti', 'Joe Russo', 'Anthony Russo'],
      },
      {
        id: 4,
        title: 'VAN HELSING',
        description:
          'Van Helsing, a legendary monster hunter, is sent to Transylvania in order to prevent Count Dracula, a terrorising being from realising evil motives.',
        creator: '$300.2 million',
        imgURL: '../../assets/img/Van helsing.jpg',
        type: ['action', 'adventure'],
        tags: ['Hugh JAckman', 'Kate Beckinsale', 'Richard Roxburgh'],
      },
      {
        id: 5,
        title: 'PRINCE OF PERSIA',
        description:
          'Dastan, a young prince, teams up with princess Tamina to thwart the evil plans of his uncle Nixam, who wants to control time with the help of special dagger.',
        creator: '$336.4 million',
        imgURL: '../../assets/img/Prince of persia.jpg',
        type: ['adventure', 'action'],
        tags: ['Harry williams', 'Gemma Arterton', 'Ben Kngsley'],
      },
      {
        id: 6,
        title: 'JOHN WICK 2',
        description:
          'Renowwed assassin John Wick sets out for Rome to duel with some of the deadliest killers to fulfill a vow he made. However, he soon learns that there is a huge bounty on his head.',
        creator: '$171.5 million',
        imgURL: '../../assets/img/John wick 2.jpg',
        type: ['action', 'drama'],
        tags: ['Basil Iwanyk', 'Erica Lee'],
      },
      {
        id: 7,
        title: 'House of Gucci',
        description:
          'When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel their legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately...murder.',
        creator: '$170.3 milliom',
        imgURL: '',
        type: ['action', 'drama'],
        tags: ['Ridley Scott'],
      },
    ];
  }

  ngOnInit(): void {}

  checkForTitle(searchValue: string): void {
    let searchList = this.movies.filter((c) => c.title == searchValue);
    if (searchList.length > 0) {
      this.searchMessage = 'Found the movie!';
      this.searchFlag = true;
    } else {
      this.searchMessage = 'No movie with that title';
      this.searchFlag = false;
    }
  }
  // searchtitleList(movieName:any){
  //   console.log(movieName);
  //   this.movieExists = false;
  //   this.movieNotExists = false;

  //   if(movieName.trim()===""){return}

  //   let result = this.movies.find(item => item.Movie.toLocaleLowerCase().includes(movieName.toLocaleLowerCase()))
  //   console.log("result", result);
  //   result ?  this.movieExists = true : this.movieNotExists = true;
  // }
  addContentToParent(contentFromChild: Content) {
    console.log('got to the parent', contentFromChild);
    this.movies.push(contentFromChild);
    console.log("what's actually in the movie list? ", this.movies);
    this.movies = [...this.movies]; //clone for the pipe
  }
}
