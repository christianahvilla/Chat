import { Message } from './../../models/message.interface';
import { Component,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  @ViewChild('content') content: Content;
  username = '';
  inputMessage;
  newMessage: Message;
  allmessages: Array<Message>;
  date;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,    
    public chatservice: ChatProvider,    
  ) {
    this.username = this.navParams.get('username');
    this.scrollto();
    this.chatservice.getMessages().subscribe(data => {
      this.allmessages = data;
      this.allmessages.sort(function (a, b) {
        return (a.sendDate > b.sendDate) ? 1 : -1;
      });
    });
  }

  addmessage() {
    this.date = new Date();
    this.newMessage = {
      user: this.username,
      text: this.inputMessage,
      sendDate: this.date
    }
    this.chatservice.newMessage(this.newMessage);
    this.inputMessage = '';
  }

  ionViewDidEnter() {
    this.chatservice.getMessages();
  }
  scrollto() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 1000);
  }

  getDate(dateD) {
    return dateD.toDate().toISOString();
  }
}
