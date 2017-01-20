var Web3 = require('web3');

function API() {
  var self = this;
  self.initted = false;
  self.web3;
  self.status=0;
}

API.init = function(callback) {
  var self = this;

  if (!self.initted) {
    //initialize Web3
    if(typeof web3 !== 'undefined') { //metamask situation
      self.web3 = new Web3(web3.currentProvider);
      self.status=1;
      console.log(self.status);
    } else if (window.location.protocol != "https:") { //mist/geth/parity situation
      try {
        self.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); //mist/geth/parity situation
        self.web3.eth.coinbase;
        console.log(self.status);
        self.status=2;
      } catch (err) {
        // self.web3 = new Web3(new Web3.providers.HttpProvider('YOUR_INFURA_API_URL_IF_YOU_HAVE_ONE')); //Infura situation
        self.status=3
        console.log(self.status);
      }
    } else { //Infura situation
      // self.web3 = new Web3(new Web3.providers.HttpProvider('YOUR_INFURA_API_URL_IF_YOU_HAVE_ONE'));
      self.status=3
      console.log(self.status);
    }

  //   function contractAt(abi, address) {
  //    var contract = self.web3.eth.contract(abi);
  //    contract = contract.at(address);
  //    return contract;
  //  }
   // now you can use contractAt to generate a web3 contract that will have all the abi functions attached to it




}
  callback(null, true);
}

if (require.main === module) {
  console.log('This is a test.');
  API.init(function(err, result){
    console.log(API.web3.accounts);
  })
}

module.exports = API;
