import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const apiKey: string = environment.apiKey;
const apiUrl: string = environment.apiUrl;

const params = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private loading;

  constructor(private http: HttpClient, private loadingController: LoadingController) { }

  public async showLoading_async() {
    this.loading = await this.loadingController.create({
      duration: 5000
    });

    return await this.loading.present();
  }

  public getData(url: string): Observable<any> {
    this.showLoading_async();
    return this.http.get(`${ apiUrl }/${ url }`, {params}).pipe(tap(() => this.loading.dismiss()));
  }
}
