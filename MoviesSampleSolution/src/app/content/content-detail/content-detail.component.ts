import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../helper-files/content-interface';
import { MessageService } from '../../services/message.service';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id?: number;
  movie?: Content;
  constructor(private messageService: MessageService, private mService: MovieServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);
      this.mService.getSingleMovie(this.id).subscribe(movie => {
        this.movie = movie;
        this.messageService.add(`Content at id ${movie.id} was retrieved, with a title of ${movie.title}`)
      });
    });
  }

}
