import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import { APP_ROUTES } from './app.routes';
// Modulos
import {PagesModule} from './pages/pages.module';
// Temporales
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Service

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import {ServiceModule} from './services/service.module';
import {PipesModule} from './pipes/pipes.module';
import {PagesComponent} from './pages/pages.component';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
   //  PagesModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ServiceModule,
    PipesModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
