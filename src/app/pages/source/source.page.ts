import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticlesInterface } from '../../components/articles/models/articles.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss'],
})
export class SourcePage implements OnInit {

  public id: string;
  public news$: Observable<ArticlesInterface>;

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.news$ = this.newsService.getData('everything?sources=' + this.id);
  }
}
