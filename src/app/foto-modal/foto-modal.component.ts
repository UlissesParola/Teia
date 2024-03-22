import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-foto-modal',
  templateUrl: './foto-modal.component.html',
  styleUrls: ['./foto-modal.component.css']
})
export class FotoModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string; title: string; album: string}) {

    
  }
}
