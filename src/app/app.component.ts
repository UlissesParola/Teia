import { Component } from '@angular/core';
import { MatSidenavModule } from "./material/material.module"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teia_c071615';
  opened: boolean = false;

  constructor(){
  }

  toogleMenu() : void{
    this.opened = !this.opened;
  }
}
