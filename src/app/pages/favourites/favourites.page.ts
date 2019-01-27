import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SourceInterface } from '../sources/models/source.interface';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  public sources: SourceInterface[] = [];

  constructor(private storage: Storage) { }

  private async getFavourites_async() {
    const val = await this.storage.get('favourite');

    if (val !== null) {
      this.sources = JSON.parse(val);
    }
  }

  public onRefresh() {
    this.getFavourites_async();
  }

  public async removeFromFavourite(source: SourceInterface) {
    this.sources = this.sources.splice(this.sources.indexOf(source), 1);
    await this.storage.set('favourite', JSON.stringify(this.sources));
  }

  public ngOnInit() {
    this.getFavourites_async();
  }
}
