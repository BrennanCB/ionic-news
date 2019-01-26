import { Component, Input, OnInit } from '@angular/core';
import { ArticleInteface } from './models/article.inteface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() public article: ArticleInteface;

  constructor() { }

  ngOnInit() {
  }

}
