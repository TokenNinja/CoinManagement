import { Injectable } from '@angular/core';
import { Token } from './token';
import { tokenData,ERC20abi,NinjaAbi } from './data'
import { Subject,Observable,BehaviorSubject } from 'rxjs'

declare let require:any;
let api=require('./api');


@Injectable()
export class EthereumService {
  public abi=ERC20abi;
  public ninja=NinjaAbi;
  public account:string;
  public currentToken:Token;
  selectToken:BehaviorSubject<Token>=new BehaviorSubject<Token>(tokenData[0])

  constructor() {
    console.log('Service working...')
    this.init()
    this.selectToken.subscribe(x=>{
      this.currentToken=x;
    })

  }

  public init():Promise<boolean>{
    return new Promise(resolve=>{
      api.init((err,result)=>{
        if(!err){
          if(!api.web3.eth.defaultAccount){
            api.web3.eth.defaultAccount=api.web3.eth.coinbase;
            this.account=api.web3.eth.coinbase;
          }
          resolve(true)
        } else {
          console.log('init failed')
        }
      })
    })
  }

  select(x:Token){
    this.selectToken.next(x)
  }

  public balanceOf(address):Promise<any>{
    return new Promise(resolve=>{
      api.web3.eth.contract(this.abi).at(this.currentToken.address).balanceOf(address,
        (err,balance)=>{
          if(!err){
            console.log(balance);
            resolve(balance.toNumber()/Math.pow(10,this.currentToken.digit));
          }
        }
      )
    })
  }

  // public allowance():Promise<any>{
  //   // creation of contract object
  //   let MyContract = api.web3.eth.contract(this.abi);
  //   // initiate contract for an address
  //   let myContractInstance = MyContract.at('0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7');
  //   let onwer='0xb18626E852Ab67e854Fd6cC6f4d782A2f893a4c0';
  //   let spender='0xf82a5e7563e5c76363fff2bf83d2ee472ee38380';
  //   return new Promise(resolve=>{
  //     myContractInstance.allowance(onwer,spender,
  //       (err,result)=>{
  //       if(!err){
  //         console.log(result)
  //         resolve(result.toNumber())
  //       } else {
  //         console.log(err)
  //       }
  //     });
  //   })
  // }
    // return new Promise(resolve=>{
    //   api.web3.eth.contract(this.abi).at(this.currentToken.address).allowance.call(x,this.account,{to:this.currentToken.address},(err,allowed)=>{
    //       if(!err){
    //         console.log(`owner: ${x} spender: ${this.account} at ${this.currentToken.address}`)
    //         console.log("allowanceService: ",allowed);
    //         resolve(allowed.toNumber()/Math.pow(10,this.currentToken.digit));
    //       }
    //     }
    //   )
    // })
  // }

  // public allowance(x):Promise<any>{
  //   return new Promise(resolve=>{
  //     api.web3.eth.contract(this.abi).at(this.currentToken.address).allowance.call(x,this.account,{to:this.currentToken.address},(err,allowed)=>{
  //         if(!err){
  //           console.log(`owner: ${x} spender: ${this.account} at ${this.currentToken.address}`)
  //           console.log("allowanceService: ",allowed);
  //           resolve(allowed.toNumber()/Math.pow(10,this.currentToken.digit));
  //         }
  //       }
  //     )
  //   })
  // }

  public transfer(to,amount):Promise<any>{
    let x=amount*Math.pow(10,this.currentToken.digit)
    console.log('amount: ', x)
    console.log(`outter: ${to} for ${amount}`)
    return new Promise(resolve=>{
      api.web3.eth.contract(this.abi).at(this.currentToken.address).transfer.sendTransaction(
        to,x,{gas:301234},
        (err,result)=>{
          console.log(`inner: ${to} for ${amount}`)
          if(!err){
            console.log(result)
            resolve(result);
          } else {
            console.log(err)
          }
        }
      )
    })
  }

  public transferFrom(from,to,amount):Promise<any>{
    let x=amount*Math.pow(10,this.currentToken.digit)
    console.log('amount: ', x)
    console.log(`outter: ${to} for ${amount}`)
    return new Promise(resolve=>{
      api.web3.eth.contract(this.abi).at(this.currentToken.address).transferFrom.sendTransaction(
        from,to,x,{gas:301234},
        (err,result)=>{
          console.log(`inner: ${to} for ${amount}`)
          if(!err){
            resolve(result);
          }
        }
      )
    })
  }

  public approve(to,amount):Promise<any>{
    let x=amount*Math.pow(10,this.currentToken.digit)
    console.log('amount: ', x)
    console.log(`outter: ${to} for ${amount}`)
    return new Promise(resolve=>{
      api.web3.eth.contract(this.abi).at(this.currentToken.address).approve.sendTransaction(
        to,x,{gas:301234},
        (err,result)=>{
          console.log(`inner: ${to} for ${amount}`)
          if(!err){
            console.log(result)
            resolve(result);
          } else {
            console.log(err)
          }
        }
      )
    })
  }


  public sendTransaction(to,amount):Promise<any>{
    console.log('service fired...')
    return new Promise(resolve=>{
      api.web3.eth.sendTransaction(
        {to:to,value:api.web3.toWei(amount, "ether"),gas:301234},
        (err,result)=>{
          if(!err){
            // console.log('web3 fired..')
            console.log(result)
            resolve(result)
          } else {
            console.log(err)
          }
        })
      }
    )
  }

  public donate(commit, amount):Promise<any>{
    return new Promise(resolve=>{
      api.web3.eth.contract(this.ninja).at('0x45D147C800d401350B24fc1cd5Fbc98040B177C8')
        .buy.sendTransaction(commit.toString(),
        {to:'0x45D147C800d401350B24fc1cd5Fbc98040B177C8',value:api.web3.toWei(amount,"ether"),gas:301234},
        (err,result)=>{
          if(!err){
            console.log("recpient: ",result)
            resolve(result)
          }
        }
      )
    })
  }

  public watch():Promise<any>{
    return new Promise(resolve=>{
      api.web3.eth.contract(this.ninja).at('0x45D147C800d401350B24fc1cd5Fbc98040B177C8')
      .Buy({},{fromBlock: 3026764, toBlock: 'latest'}).watch(
        (err,result)=>{
          console.log(result.args.buyer);
          resolve(result.args.buyer)
        })
    })
  }

  public commitOf(address):Promise<any>{
    return new Promise(resolve=>{
      api.web3.eth.contract(this.ninja).at('0x45D147C800d401350B24fc1cd5Fbc98040B177C8').commit(
        '0xb18626e852ab67e854fd6cc6f4d782a2f893a4c0',
        (err,commit)=>{
          if(!err){
            resolve(commit);
          }
        }
      )
    })
  }

}
