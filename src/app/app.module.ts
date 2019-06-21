import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_NAME } from './appName';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';
import { TestDirective } from './test.directive';
import { ClickLoggerDirective } from './click-logger.directive';

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent,
    TestDirective,
    ClickLoggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_NAME,
    useValue: 'Foo',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
