import { Component, OnInit, Input } from "@angular/core";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-visualizza",
  templateUrl: "./visualizza.component.html",
  styleUrls: ["./visualizza.component.css"]
})
export class VisualizzaComponent implements OnInit {
  constructor() {}

  @Input() msg;
  @Output() daCancellare = new EventEmitter<string>();
  visibile = false;

  mostra() {
    this.visibile = !this.visibile;
  }

  cancella() {
    this.daCancellare.emit(this.msg.titolo);
  }

  ngOnInit() {
    console.log(JSON.stringify(this.msg));
  }
}
