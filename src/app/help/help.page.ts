import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor( private router: Router) { }
  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['start'])
  }
}
