import { Events } from 'ionic-angular';
import { Message } from './../../models/message.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '../../../node_modules/angularfire2/firestore';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';

@Injectable()
export class ChatProvider {

  chats: Observable<Message[]>;
  chatsColletion: AngularFirestoreCollection<Message>;


  constructor(public db: AngularFirestore, public events: Events) {
    this.chatsColletion = this.db.collection('messages');  
    this.chats = this.chatsColletion.valueChanges();  
  }

  async newMessage(message) {
      this.chatsColletion.add(message);    
  }

  getMessages(){    
    return this.chats = this.chatsColletion.valueChanges();
  }

}
