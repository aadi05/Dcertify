const Web3 = require('web3')

const web3 = new Web3('http://localhost:7545');

const acc = async ()=>{

    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
} 

acc();