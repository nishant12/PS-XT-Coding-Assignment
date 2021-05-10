import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HttpClientModule } from '@angular/common/http';

import { LazyLoadImageModule} from 'ng-lazyload-image'; // <-- include ScrollHooks

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppServerModule {}
