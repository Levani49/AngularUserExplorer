import { Posts } from './../../models/posts.model';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { PostsListService } from 'src/app/services/posts-list.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  userId: number | undefined;
  posts: Posts[] | undefined;

  constructor(private route: ActivatedRoute, private postsListService: PostsListService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.postsListService.getPostsByUserId(this.userId).subscribe((posts: Posts[]) => {
        this.posts = posts;
      });
    });
  }


}
