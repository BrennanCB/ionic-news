import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {path: 'top-news', loadChildren: '../top-news/top-news.module#TopNewsPageModule'},
      {path: 'headlines', loadChildren: '../headlines/headlines.module#HeadlinesPageModule'},
      {path: 'sources', loadChildren: '../sources/sources.module#SourcesPageModule'},
      {path: 'favourites', loadChildren: '../favourites/favourites.module#FavouritesPageModule'},
      {path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule'},

      // {

      //   path: 'tab1',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../tab1/tab1.module#Tab1PageModule'
      //     }
      //   ]
      // },
      // {
      //   path: 'tab2',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../tab2/tab2.module#Tab2PageModule'
      //     }
      //   ]
      // },
      // {
      //   path: 'tab3',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../tab3/tab3.module#Tab3PageModule'
      //     }
      //   ]
      // },
      {
        path: '',
        redirectTo: '/tabs/top-news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/top-news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
