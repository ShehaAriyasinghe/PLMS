import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from "@angular/common/http";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {environment} from "./environments/environment";
import firebase from "firebase/compat";

import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { HttpClientModule } from '@angular/common/http';


bootstrapApplication(AppComponent,appConfig )
  .catch((err) => console.error(err));
