import { PostsListComponent } from './components/posts-list/posts-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'user/:id/posts', component: PostsListComponent },
  { path: '**',  component: UsersListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    RouterModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
