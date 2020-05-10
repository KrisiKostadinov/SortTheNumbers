import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayingComponent } from './playing/playing.component';


const routes: Routes = [
  { path: '', component: PlayingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
