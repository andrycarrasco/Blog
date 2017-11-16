import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyDmc0PHpLZoheEipnGQ8izXDD9DsNJS5IE",
    authDomain: "programacion-aplic.firebaseapp.com",
    databaseURL: "https://programacion-aplic.firebaseio.com",
    projectId: "programacion-aplic",
    storageBucket: "programacion-aplic.appspot.com",
    messagingSenderId: "916021161485"
    };
    firebase.initializeApp(config);
  }

}
