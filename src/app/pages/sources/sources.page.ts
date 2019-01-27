import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { SourcesInterface } from './models/sources.interface';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {

  public sources$: Observable<SourcesInterface>;
  public fakeSources = new Array(20);
  public searchTerm: string = '';

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.sources$ = this.newsService.getData('sources');
  }

}
