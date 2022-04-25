import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { LogUpdateService } from './services/log-update.service';
import { MovieServiceService } from './services/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = `Alex's Movie Sample Solution`;
  someMovie?: Content;

  constructor(private mService: MovieServiceService,
    private logUpdateService: LogUpdateService,
    private appRef: ApplicationRef,
    private updates: SwUpdate) { }

  ngOnInit(): void {
    if (navigator.serviceWorker) { // browser supports service worker
      this.logUpdateService.init();

      const appIsStable$ = this.appRef.isStable.pipe(
        first(isThisStableYet => isThisStableYet === true));
      // appIsStable$.subscribe(() => { });
      const everyHalfHour$ = interval((1 * 60 * 60 * 1000) / 2);
      const everyHalfHourOnceAppIsStable$ =
        concat(appIsStable$, everyHalfHour$);
      everyHalfHourOnceAppIsStable$.subscribe(
        () => this.updates.checkForUpdate());
    }
    else {
      //browser doesn't support service worker yet :(
    }
    this.mService.getSingleMovie(1).subscribe(movie => this.someMovie = movie);
  }
  displayMovieItem(id: string): void {
    this.mService.getSingleMovie(parseInt(id)).subscribe(movie => this.someMovie = movie);
  }
}
