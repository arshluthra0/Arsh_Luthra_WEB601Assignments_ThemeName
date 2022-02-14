import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  moviee = "moviee";
  mycard = "mycard";
  drama = "drama";
  action = "action";
  adventure = "adventure";
  notype = "";

  movieExists = false;
  movieNotExists = false;


  movies = [{
    id: 1,
    Movie: "OLYMPUS HAS FALLEN",
    About: "When the president is kidnapped, a former secret service agent must use his expertise to rescue him as well as the other hostages",
    Boxoffice: "$170.3 milliom",
    imgURL:  '../../assets/img/Olympus has fallen.jpg',
    type:  "action",
    tags: ["Creighton Rothenberger", "Katrin Benedikt"],
  },
{
  id: 2,
    Movie: "THE LAST SAMURAI",
    About: "Captain Nathan Algren hired to train the JApanese army to fight a Samurai rebellion. However, he ends up enbracing the people of Samurai culture after he gets captured by them",
    Boxoffice: "$456.8 million",
    imgURL:  '../../assets/img/Last samurai.jpg',
    type: "drama" ,
    tags: ["Hans Jimmer", "John Logan"],
},
{
  id: 3,
    Movie: "AVENGERS",
    About: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance",
    Boxoffice: "R$279.75 million",
    imgURL:  '../../assets/img/Avengers.jpg',
    type:  "adventure",
    tags: ["Alan Silvesti", "Joe Russo","Anthony Russo"],
},
{
  id: 4,
    Movie: "VAN HELSING",
    About: "Van Helsing, a legendary monster hunter, is sent to Transylvania in order to prevent Count Dracula, a terrorising being from realising evil motives.",
    Boxoffice: "$300.2 million",
    imgURL:  "../../assets/img/Van helsing.jpg",
    type:  "action",
    tags: ["Hugh JAckman","Kate Beckinsale","Richard Roxburgh"],
},
{
  id: 5,
    Movie: "PRINCE OF PERSIA",
    About: "Dastan, a young prince, teams up with princess Tamina to thwart the evil plans of his uncle Nixam, who wants to control time with the help of special dagger.",
    Boxoffice: "$336.4 million",
    imgURL:  "../../assets/img/Prince of persia.jpg",
    type:  "adventure",
    tags: ["Harry williams","Gemma Arterton","Ben Kngsley"],
},
{
  id: 6,
    Movie: "JOHN WICK 2",
    About: "Renowwed assassin John Wick sets out for Rome to duel with some of the deadliest killers to fulfill a vow he made. However, he soon learns that there is a huge bounty on his head.",
    Boxoffice: "$171.5 million",
    imgURL:  "../../assets/img/John wick 2.jpg",
    type:  "action",
    tags: ["Basil Iwanyk","Erica Lee"],
},
{
  id: 7,
    Movie: "House of Gucci",
    About: "When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel their legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately...murder.",
    Boxoffice: "$170.3 milliom",
    imgURL:  '../../assets/img/House of gucci.jpg',
    type:  "",
    tags: ["Ridley Scott"],
}]

  constructor() { }

  ngOnInit(): void {
  }

  searchMovieList(movieName:any){
    console.log(movieName);
    this.movieExists = false;
    this.movieNotExists = false;

    if(movieName.trim()===""){return}
    
    let result = this.movies.find(item => item.Movie.toLocaleLowerCase().includes(movieName.toLocaleLowerCase()))
    console.log("result", result);
    result ?  this.movieExists = true : this.movieNotExists = true;
  }

}
