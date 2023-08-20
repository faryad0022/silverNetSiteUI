import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';
import { Interceptor } from './_config/interceptor/interceptor';
import { HomePageService } from './_core/_services/home-page.service';
import { LayoutModule } from './_shared/layout/layout.module';
import { SharedModule } from './_shared/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromStore from 'src/app/_core/_stateManagement/Home'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
    LayoutModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,

    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule, // import NgxUiLoaderRouterModule. By default, it will show foreground loader.
    NgxUiLoaderHttpModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    StoreModule.forRoot({}), 
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), // ToastrModule added

    StoreModule.forFeature('homeManagementSection', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),

    ToastrModule.forRoot(),// ToastrModule added
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    HomePageService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
