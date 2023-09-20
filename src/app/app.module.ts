import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';
import { Interceptor } from './_config/interceptor/interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule, // import NgxUiLoaderRouterModule. By default, it will show foreground loader.
    NgxUiLoaderHttpModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

    ToastrModule.forRoot(),// ToastrModule added
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
