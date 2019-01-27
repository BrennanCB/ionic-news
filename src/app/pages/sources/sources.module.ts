import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipes/pipes/pipes.module';

import { SourcesPage } from './sources.page';

const routes: Routes = [
  {
    path: '',
    component: SourcesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [SourcesPage]
})
export class SourcesPageModule {}
