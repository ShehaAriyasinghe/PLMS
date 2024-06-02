import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {environment} from "../environments/environment";

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/compat/auth";
import {provideHttpClient} from "@angular/common/http";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";

import firebase from "firebase/compat";


export const appConfig: ApplicationConfig = {
  providers:[


    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideHttpClient(),

    provideClientHydration(),
    provideAnimationsAsync(),


  ]
};
