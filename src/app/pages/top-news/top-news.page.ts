import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.page.html',
  styleUrls: ['./top-news.page.scss'],
})
export class TopNewsPage implements OnInit {

  public news$: Observable<any>;

  constructor(private newsService: NewsService) { }

  private getData(): Observable<any> {
    return this.newsService.getData('top-headlines?country=us');
  }

  public onRefresh(event) {
    this.news$ = this.getData().pipe(tap(() => {
      event.target.complete();
    }));
  }

  ngOnInit() {
    this.news$ = this.getData();
  }

}
