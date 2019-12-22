import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Storage } from '@ionic/storage';
import { IonicTimepickerModule } from '@logisticinfotech/ionic-timepicker';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  storedValue: any;
  timePickerObj: any;
  myTime = 'YOUR_TIME';

  constructor(private localNotifications: LocalNotifications, private storage: Storage) {

    this.localNotifications.schedule([{
      id: 0,
      title: 'Local ILocalNotification Example',
      text: 'Multi ILocalNotification 2',
      icon: 'http://example.com/icon.png'
    }, {
      id: 1,
      text: 'Delayed ILocalNotification',
      trigger: {at: new Date(new Date().getTime() + 3600)},
      led: 'FF0000',
      sound: null
    }]);

    // this.storage.get('something').then((data) => {
    //   this.storedValue = data;
    // });

    this.storedValue = 'heyo!';
    this.timePickerObj = {
      inputTime: '11:01 PM', // for 12 hour time in timePicker
      timeFormat: '', // default 'hh:mm A'
      setLabel: 'Set', // default 'Set'
      closeLabel: 'Close', // default 'Close'
      titleLabel: 'Select a Time', // default 'Time'
      clearButton: false, // default true
      btnCloseSetInReverse: true, // default false
      momentLocale: 'pt-BR', //  default 'en-US'

      btnProperties: {
        expand: '', // "block" | "full" (deafault 'block')
        fill: '', // "clear" | "default" | "outline" | "solid"
        // (deafault 'solid')
        size: '', // "default" | "large" | "small" (deafault 'default')
        disabled: '', // boolean (default false)
        strong: '', // boolean (default false)
        color: ''
        // "primary", "secondary", "tertiary", "success",
        // "warning", "danger", "light", "medium", "dark" ,
        // and give color in string (default 'primary')
      }
    };

  }

  myFunction() {
    console.log('yo');
    this.storedValue = 'heyo!!!!';
    this.localNotifications.schedule([{
      id: 3,
      title: 'Time set',
      trigger: {at: new Date(new Date().getTime() + 3600)},
      text: 'Time set notification',
      icon: 'http://example.com/icon.png'
    }]);
  }

}
