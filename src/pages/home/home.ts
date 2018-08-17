import { User } from './../../models/user.interface';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginForm: FormGroup;
  constructor(public navCtrl: NavController,
    public fb: FormBuilder,
    public alertCtrl: AlertController) {
    this.loginForm = fb.group({
      name: ['', Validators.compose([Validators.required])]
    });
  }

  login() {
    let data = this.loginForm.value;
    const userObj: User = {
      name: data.name,
    };
    this.navCtrl.push('ChatsPage', { username: userObj.name })
  }

}
