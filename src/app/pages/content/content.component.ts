import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://sm.ign.com/t/ign_br/screenshot/default/hogwarts-legacy-w-szd8_228758_tgj8.960.jpg"
  contentTitle:string = "Hogwarts Legacy para PS4 com 12% de desconto!"
  contentDescription:string = "Jogo é um dos mais desejados pelos gamers e oferece experiência imersiva no mundo Harry Potter"

  constructor() { }

  ngOnInit(): void {
  }

}
