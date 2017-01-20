import { Token } from './token';

export const tokenData:Token[]=[
  {name:"1ST",address:"0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7",digit:18,
  description:"FirstBlood.io (“FirstBlood”) is a decentralized Esports gaming platform that is powered by the blockchain"},
  {name:"MKR",address:"0xc66ea802717bfb9833400264dd12c2bceaa34a6d",digit:18,
  description:"Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain"},
  {name:"Pluton",address:"0xd8912c10681d8b21fd3742244f44658dba12264e",digit:18,
  description:"With Plutus Tap & Pay, you can pay at any NFC-enabled merchant."},
  {name:"SNGLS",address:"0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",digit:0,
  description:"A Blockchain Entertainment Studio, Smart Contract Rights Management Platform and Video On-Demand Portal"},
  {name:"REP",address:"0x48c80f1f4d53d5951e5d5438b54cba84f29f32a5",digit:18,
  description:"Augur combines the magic of prediction markets with the power of a decentralized network to create a stunningly accurate forecasting tool"},
  {name:"GDG",address:"0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",digit:9,
  description:"Every asset represents a unique bullion bar sitting in designated securitised custodial vaults."},
  {name:"NinjaToken",address:"0x45D147C800d401350B24fc1cd5Fbc98040B177C8",digit:18,
  description:"Evolving"},
]

export const ERC20abi=JSON.parse('[{"constant":true,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"uint256"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_onwer","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]');

export const NinjaAbi=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_founder","type":"address"},{"name":"_admin","type":"address"}],"name":"changeFunder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"blockDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingAccount","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"commit","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"startBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_commit","type":"string"}],"name":"buy","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"founder","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_price","type":"uint256"},{"name":"_transferLock","type":"bool"}],"name":"setPrice","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"transferLock","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingExchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_fundinglock","type":"bool"},{"name":"_fundingAccount","type":"address"}],"name":"setFundingLock","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_startBlock","type":"uint256"},{"name":"_blockDuration","type":"uint256"},{"name":"_fundingExchangeRate","type":"uint256"}],"name":"setFundingEnv","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"funding","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"_onwer","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"allowance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"uint256"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingLock","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_founder","type":"address"},{"name":"_admin","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"eth","type":"uint256"}],"name":"Funding","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"buyer","type":"address"},{"indexed":false,"name":"eth","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_onwer","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]');
