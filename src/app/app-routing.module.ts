import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';

const routes: Routes = [
  { path: '', children: []},
  { path: 'twitter', component: TwitterFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
