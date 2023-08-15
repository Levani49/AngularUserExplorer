import { Posts } from './../../models/posts.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { PostsListService } from 'src/app/services/posts-list.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  userId: number | undefined;
  posts: Posts[] | undefined;

  constructor(private route: ActivatedRoute, private postsListService: PostsListService,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.postsListService.getPostsByUserId(this.userId)
      .pipe(
        catchError(error => {
          console.error('ინფორმაციის წამოღებისას მოხდა შეცდომა:', error);
          return throwError('ინფორმაციის წამოღებისას მოხდა შეცდომა, გთხოვთ სცადოთ თავიდან.');
        })
      )
      .subscribe((posts: Posts[]) => {
        this.posts = posts;
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
