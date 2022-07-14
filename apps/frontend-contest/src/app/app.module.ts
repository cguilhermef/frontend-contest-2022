import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () =>
          import('@frontend-contest/app/login/feature/shell').then(
            (m) => m.AppLoginFeatureShellModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('@frontend-contest/app/users/feature/shell').then(
            (m) => m.AppUsersFeatureShellModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
