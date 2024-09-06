import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'post', component: PostComponent},
    {path: '', component: HomeComponent}
];
