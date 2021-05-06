import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGalleryComponent } from './card-gallery/card-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: CardGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
