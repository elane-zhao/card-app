import { Component, Input, OnInit } from "@angular/core";
import { Card } from "../classes/card";

@Component({
  selector: "app-card-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.scss"],
})
export class CardDetailsComponent implements OnInit {
  @Input() card!: Card;
  @Input() i!: number;
  myId = "card-details";

  constructor() {}

  ngOnInit(): void {}
}
