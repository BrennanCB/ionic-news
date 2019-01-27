import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private storage: Storage, private toastController: ToastController) { }

  private async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cleared favourites.',
      color: 'success'
    });

    toast.present();
  }

  public onClearFavourites() {
    this.storage.remove('favourite');
    this.presentToast();
  }

  public ngOnInit() {
  }

}
