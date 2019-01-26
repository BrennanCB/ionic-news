import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesInterface } from './models/articles.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  @Input() public news: Observable<ArticlesInterface>;

  constructor() { }

  ngOnInit() {
  }

}
