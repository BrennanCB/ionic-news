import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.page.html',
  styleUrls: ['./top-news.page.scss'],
})
export class TopNewsPage implements OnInit {

  public news: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.getData('top-headlines?country=us').pipe(tap(data => console.log(data)));
  }

}
