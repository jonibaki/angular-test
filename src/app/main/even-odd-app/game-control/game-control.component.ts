import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() gameStartTime: EventEmitter<number> =  new EventEmitter<number>();
ref: any;  
constructor() { }

  ngOnInit(): void {
  }
  
  onStartGame(): void {
    let holder = 0;
    this.ref  = setInterval(()=>{
      holder++;
      this.gameStartTime.emit(holder);

    }, 1000);
  }
  onStopGame(): void {
    clearInterval(this.ref)
  }

}
