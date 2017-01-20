import { Component, OnInit } from '@angular/core';
import { tokenData } from '../data';
import { Token } from '../token';

import { EthereumService } from '../ethereum.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers:[EthereumService]
})
export class PageComponent implements OnInit {
  tokens: Token[]=tokenData;
  view:string='show'

  constructor(
    private ethereumService:EthereumService
  ) {}

  ngOnInit() {
    setTimeout(()=>{
      this.view='hide'
    },10000)
  }

  select(x:Token):boolean{
    this.ethereumService.select(x);
    return false
  }

}
