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

  async ngOnInit() {
    const val = await this.storage.get('favourite');

    if (val !== null) {
      this.sources = JSON.parse(val);
    }
  }
}
