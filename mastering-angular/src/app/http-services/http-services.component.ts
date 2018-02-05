import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.css']
})
export class HttpServicesComponent implements OnInit {

  posts: Post[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http : HttpClient) {

   }

   ngOnInit(): void {
    this._http.get(this.url)
    .subscribe(posts => {
      this.posts = <Post[]>posts;
    });
  }

    onSearch(input){
      console.log(input);
    }

  createPost(input : HTMLInputElement){
    // creating an object to be passed
    let post: any = {title: input.value };
    input.value = '';
    this._http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = (<Post>response).id;
        console.log(post);
        this.posts.splice( 0 , 0 , post);
      });
  }

  updatePost(post){
    console.log(this.url + '/' + post.id);// URL being used to update post
    this._http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
    .subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post){
    this._http.delete(this.url + '/' + post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}

interface Post{
 id: number;
 title: string;
 body: string;
}
