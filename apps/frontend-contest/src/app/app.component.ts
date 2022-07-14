import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Component({
  selector: 'frontend-contest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.http
      .post('/api/login', {
        email: 'usuario123@email.com',
        password: '123456',
      })
      .pipe(first())
      .subscribe();
  }
}
