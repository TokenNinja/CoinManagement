import { Component, OnInit } from '@angular/core';
import { Token } from '../token';

import { EthereumService } from '../ethereum.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  token:Token
  balance;
  view:string='transfer';
  allow;
  defaultAccount:string;

  constructor(
    private ethereumService:EthereumService
  ) {}

  ngOnInit() {
    this.ethereumService.init().then(()=>{
      this.defaultAccount=this.ethereumService.account;
      console.log('form defaultAccount ouput:', this.defaultAccount)
    })
    this.ethereumService.selectToken.subscribe(token=>{
      this.token = token;
      console.log('form ouput currentToken: ',this.ethereumService.currentToken)
      // this.ethereumService.balance(token);
      this.ethereumService.balanceOf(this.defaultAccount).then(x=>{
        this.balance=x;
        // this.allow=null
      });
    })
  }

  test(x){
    console.log(x.value)
  }

  // allowance(){
  //   let from=_from.value.toString();
  //   console.log('checking from: ',typeof(from));
  //   this.ethereumService.allowance()
  //     .then(x=>{
  //       console.log('allowance: ',x);
  //       this.allow=x;
  //     }).catch(err=>console.log(err))
  // }

  transfer(_to,_amount):boolean{
    let to=_to.value;
    let amount=_amount.value;
    console.log(`${to} for ${amount}`)
    this.ethereumService.transfer(to,amount)
      .then(x=>console.log('form transfer output: ',x))
      .catch(err=>console.log('form transfer error output: ',err))
    return false
  }

  transferFrom(_from,_to,_amount){
    let from=_from.value
    let to=_to.value;
    let amount=_amount.value;
    console.log(`${to} for ${amount}`)
    this.ethereumService.transferFrom(from,to,amount)
      .then(x=>console.log('form transfer output: ',x))
      .catch(err=>console.log('form transfer error output: ',err))
  }

  approve(_to,_amount){
    let to=_to.value;
    let amount=_amount.value;
    console.log(`${to} for ${amount}`)
    this.ethereumService.approve(to,amount)
      .then(x=>console.log('form transfer output: ',x))
      .catch(err=>console.log('form transfer error output: ',err))
  }

  sendTransaction(_to,_amount){
    let to=_to.value;
    let amount=_amount.value;
    console.log(`${to} for ${amount}`)
    this.ethereumService.sendTransaction(to,amount)
      .then(x=>console.log(x))
      .catch(err=>console.log(err))
  }

}
