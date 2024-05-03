import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { getFirestore } from 'firebase/firestore';
import { initializeApp as initializeApp_alias, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore as getFirestore_alias, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}), provideFirebaseApp(() => initializeApp({"projectId":"paylandeproj","appId":"1:751789842:web:8b328c4428cdc6a7b7f5cb","storageBucket":"paylandeproj.appspot.com","apiKey":"AIzaSyD6tyjuwUXyDOdijPouC6qHsNNdW2BPx64","authDomain":"paylandeproj.firebaseapp.com","messagingSenderId":"751789842"})), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  app = initializeApp(environment.firebaseConfig);
  firestore = getFirestore(this.app);
}
