import { Component, OnInit } from '@angular/core';
import {EthereumService} from '../ethereum.service'

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit {
  view:string='show';
  billboard:string;
  constructor(private ethereumService:EthereumService) { }

  ngOnInit() {
    this.show();
  }

  public shoutout(_amount,_comment){
    let comment=_comment.value
    let amount=_amount.value
    console.log(`comment: ${comment}`)
    console.log(`amount: ${amount}`)
    this.ethereumService.donate(comment,amount).then(result=>{
      console.log('shoutout result: ',result)
    })
  }

  public show(){
    this.ethereumService.watch().then(x=>{
      console.log("latest comment: ",x)
      this.ethereumService.commitOf(x).then(x=>{
        this.billboard=x;
        console.log('billboard: ',this.billboard)
      })
    })
  }
}
