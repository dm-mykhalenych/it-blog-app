import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  response: any;

  constructor(private http: HttpClient) {
    this.http.get('https://my-json-server.typicode.com/dm-mykhalenych/it-blog-app/posts')
      .subscribe((response) => {
        this.response = response;
      })
  }
}