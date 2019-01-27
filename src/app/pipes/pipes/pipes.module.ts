import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [SearchPipe],
  imports: [
    CommonModule
  ],
  exports: [SearchPipe]
})
export class PipesModule {}
