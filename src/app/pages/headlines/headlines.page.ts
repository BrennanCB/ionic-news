import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss']
})
export class HeadlinesPage implements OnInit {
  public news$: Observable<any>;
  public categories: string[] = [
    'World',
    'Business',
    'Technology',
    'Entertainment',
    'Sports',
    'Science'
  ];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  onGetCategoryData(category) {
    this.getCategoryData(category);
  }

  getCategoryData(category) {
    this.news$ = this.newsService.getData(
      `everything?q=${ category.toLowerCase() }`
    );
  }
}
