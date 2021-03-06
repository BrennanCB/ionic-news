import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { SourceInterface } from './models/source.interface';
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

  constructor(private newsService: NewsService, private storage: Storage, private toastController: ToastController) { }

  private async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added to favourites.',
      color: 'success'
    });

    toast.present();
  }

  public async addToFavourite(source: SourceInterface) {
    const val = await this.storage.get('favourite');

    let items = [];

    if (val !== null) {
      items = JSON.parse(val);
    }

    items.push(source);

    await this.storage.set('favourite', JSON.stringify(items));
    this.presentToast();
  }

  ngOnInit() {
    this.sources$ = this.newsService.getData('sources');
  }

}
