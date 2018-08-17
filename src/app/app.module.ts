import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatProvider } from '../providers/chat/chat';

const config = {
  apiKey: "AIzaSyDz_hjcSzW8nr5Z0HCQm9pIv5ScwruqHzE",
  authDomain: "chat-faa69.firebaseapp.com",
  databaseURL: "https://chat-faa69.firebaseio.com",
  projectId: "chat-faa69",
  storageBucket: "chat-faa69.appspot.com",
  messagingSenderId: "1009511284920"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider
  ]
})
export class AppModule {}
