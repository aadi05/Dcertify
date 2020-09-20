module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/contracts/DigitalCertification.json":
/*!***************************************************!*\
  !*** ./build/contracts/DigitalCertification.json ***!
  \***************************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"DigitalCertification\",\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"authorizedAccounts\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalCertificatesIssued\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_merkleRoot\",\"type\":\"string\"},{\"internalType\":\"uint128\",\"name\":\"_batchCount\",\"type\":\"uint128\"}],\"name\":\"storeMerkleRoot\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_certificateHash\",\"type\":\"string\"}],\"name\":\"checkRevokeStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_merkleRoot\",\"type\":\"string\"}],\"name\":\"checkMerkleRoot\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_certificateHash\",\"type\":\"string\"}],\"name\":\"revokeCertificate\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_accountAddress\",\"type\":\"address\"}],\"name\":\"addNewAccount\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_accountAddress\",\"type\":\"address\"}],\"name\":\"removeAccount\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.5.12+commit.7709ece9\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_accountAddress\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"addNewAccount\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"authorizedAccounts\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"_merkleRoot\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"checkMerkleRoot\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"_certificateHash\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"checkRevokeStatus\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"manager\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_accountAddress\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"removeAccount\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"_certificateHash\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"revokeCertificate\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"_merkleRoot\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint128\\\",\\\"name\\\":\\\"_batchCount\\\",\\\"type\\\":\\\"uint128\\\"}],\\\"name\\\":\\\"storeMerkleRoot\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"totalCertificatesIssued\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/home/aditya/Documents/projects/Dcertify/contracts/dcertify.sol\\\":\\\"DigitalCertification\\\"},\\\"evmVersion\\\":\\\"petersburg\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":true,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/home/aditya/Documents/projects/Dcertify/contracts/dcertify.sol\\\":{\\\"keccak256\\\":\\\"0x73167a4e5457c3ac8c8d260e703593ec74b695c88a2d6d40ec733465c2a1fdf4\\\",\\\"urls\\\":[\\\"bzz-raw://e727aaa970fb320d4599b030aa6fcbed7e2d28388198e7e144a30861cc2a2f27\\\",\\\"dweb:/ipfs/QmTPdayg1WRkdxaRrW1msAspdbX4JZbvxEWhrv91gT8bvk\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b50600380546001600160a01b0319163317908190556001600160a01b03166000908152600260205260409020805460ff191660011790556107b3806100566000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c80635b6ad6db116100665780635b6ad6db1461024a578063714ae351146102ee578063a5f346e614610308578063c4740a951461032e578063f52590001461035457610092565b80628e07d214610097578063142e15421461014857806324ba5884146101ec578063481c6a7514610226575b600080fd5b610146600480360360408110156100ad57600080fd5b810190602081018135600160201b8111156100c757600080fd5b8201836020820111156100d957600080fd5b803590602001918460018302840111600160201b831117156100fa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550505090356001600160801b031691506103f89050565b005b6101466004803603602081101561015e57600080fd5b810190602081018135600160201b81111561017857600080fd5b82018360208201111561018a57600080fd5b803590602001918460018302840111600160201b831117156101ab57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104d4945050505050565b6102126004803603602081101561020257600080fd5b50356001600160a01b03166105ac565b604080519115158252519081900360200190f35b61022e6105c1565b604080516001600160a01b039092168252519081900360200190f35b6102126004803603602081101561026057600080fd5b810190602081018135600160201b81111561027a57600080fd5b82018360208201111561028c57600080fd5b803590602001918460018302840111600160201b831117156102ad57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105d0945050505050565b6102f661063b565b60408051918252519081900360200190f35b6101466004803603602081101561031e57600080fd5b50356001600160a01b0316610641565b6101466004803603602081101561034457600080fd5b50356001600160a01b03166106ae565b6102126004803603602081101561036a57600080fd5b810190602081018135600160201b81111561038457600080fd5b82018360208201111561039657600080fd5b803590602001918460018302840111600160201b831117156103b757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610718945050505050565b3360009081526002602052604090205460ff16151560011461044b5760405162461bcd60e51b815260040180806020018281038252603481526020018061074b6034913960400191505060405180910390fd5b60016000836040518082805190602001908083835b6020831061047f5780518252601f199092019160209182019101610460565b51815160209384036101000a60001901801990921691161790529201948552506040519384900301909220805460ff1916931515939093179092555050600480546001600160801b0392909216909101905550565b3360009081526002602052604090205460ff1615156001146105275760405162461bcd60e51b815260040180806020018281038252603481526020018061074b6034913960400191505060405180910390fd5b600180826040518082805190602001908083835b6020831061055a5780518252601f19909201916020918201910161053b565b51815160001960209485036101000a810191821691199290921617909152939091019586526040519586900301909420805495151560ff19909616959095179094555050600480549092019091555050565b60026020526000908152604090205460ff1681565b6003546001600160a01b031681565b60006001826040518082805190602001908083835b602083106106045780518252601f1990920191602091820191016105e5565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205460ff16949350505050565b60045481565b6003546001600160a01b0316331461068a5760405162461bcd60e51b815260040180806020018281038252603481526020018061074b6034913960400191505060405180910390fd5b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b6003546001600160a01b031633146106f75760405162461bcd60e51b815260040180806020018281038252603481526020018061074b6034913960400191505060405180910390fd5b6001600160a01b03166000908152600260205260409020805460ff19169055565b60008082604051808280519060200190808383602083106106045780518252601f1990920191602091820191016105e556fe596f7520617265206e6f7420617574686f72697a656420746f206361727279206f75742074686973207472616e73616374696f6ea265627a7a723158207025a95c4b4a0f7cae775f064951d94531b49fb9902ceb2e204f91d0fbd0480f64736f6c634300050c0032\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100925760003560e01c80635b6ad6db116100665780635b6ad6db1461024a578063714ae351146102ee578063a5f346e614610308578063c4740a951461032e578063f52590001461035457610092565b80628e07d214610097578063142e15421461014857806324ba5884146101ec578063481c6a7514610226575b600080fd5b610146600480360360408110156100ad57600080fd5b810190602081018135600160201b8111156100c757600080fd5b8201836020820111156100d957600080fd5b803590602001918460018302840111600160201b831117156100fa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550505090356001600160801b031691506103f89050565b005b6101466004803603602081101561015e57600080fd5b810190602081018135600160201b81111561017857600080fd5b82018360208201111561018a57600080fd5b803590602001918460018302840111600160201b831117156101ab57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104d4945050505050565b6102126004803603602081101561020257600080fd5b50356001600160a01b03166105ac565b604080519115158252519081900360200190f35b61022e6105c1565b604080516001600160a01b039092168252519081900360200190f35b6102126004803603602081101561026057600080fd5b810190602081018135600160201b81111561027a57600080fd5b82018360208201111561028c57600080fd5b803590602001918460018302840111600160201b831117156102ad57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105d0945050505050565b6102f661063b565b60408051918252519081900360200190f35b6101466004803603602081101561031e57600080fd5b50356001600160a01b0316610641565b6101466004803603602081101561034457600080fd5b50356001600160a01b03166106ae565b6102126004803603602081101561036a57600080fd5b810190602081018135600160201b81111561038457600080fd5b82018360208201111561039657600080fd5b803590602001918460018302840111600160201b831117156103b757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610718945050505050565b3360009081526002602052604090205460ff16151560011461044b5760405162461bcd60e51b815260040180806020018281038252603481526020018061074b6034913960400191505060405180910390fd5b60016000836040518082805190602001908083835b6020831061047f5780518252601f199092019160209182019101610460565b51815160209384036101000a60001901801990921691161790529201948552506040519384900301909220805460ff1916931515939093179092555050600480546001600160801b0392909216909101905550565b3360009081526002602052604090205460ff1615156001146105275760405162461bcd60e51b815260040180806020018281038252603481526020018061074b6034913960400191505060405180910390fd5b600180826040518082805190602001908083835b6020831061055a5780518252601f19909201916020918201910161053b565b51815160001960209485036101000a810191821691199290921617909152939091019586526040519586900301909420805495151560ff19909616959095179094555050600480549092019091555050565b60026020526000908152604090205460ff1681565b6003546001600160a01b031681565b60006001826040518082805190602001908083835b602083106106045780518252601f1990920191602091820191016105e5565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205460ff16949350505050565b60045481565b6003546001600160a01b0316331461068a5760405162461bcd60e51b815260040180806020018281038252603481526020018061074b6034913960400191505060405180910390fd5b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b6003546001600160a01b031633146106f75760405162461bcd60e51b815260040180806020018281038252603481526020018061074b6034913960400191505060405180910390fd5b6001600160a01b03166000908152600260205260409020805460ff19169055565b60008082604051808280519060200190808383602083106106045780518252601f1990920191602091820191016105e556fe596f7520617265206e6f7420617574686f72697a656420746f206361727279206f75742074686973207472616e73616374696f6ea265627a7a723158207025a95c4b4a0f7cae775f064951d94531b49fb9902ceb2e204f91d0fbd0480f64736f6c634300050c0032\",\"sourceMap\":\"34:2047:1:-;;;313:102;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;344:7:1;:20;;-1:-1:-1;;;;;;344:20:1;354:10;344:20;;;;;-1:-1:-1;;;;;393:7:1;344;374:27;;;:18;:27;;;;;:34;;-1:-1:-1;;374:34:1;344:20;374:34;;;34:2047;;;;;;\",\"deployedSourceMap\":\"34:2047:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;34:2047:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;587:245;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;587:245:1;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;587:245:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;587:245:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;587:245:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;587:245:1;;-1:-1:-1;;;587:245:1;;-1:-1:-1;;;;;587:245:1;;-1:-1:-1;587:245:1;;-1:-1:-1;587:245:1:i;:::-;;1257:225;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1257:225:1;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;1257:225:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1257:225:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1257:225:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;1257:225:1;;-1:-1:-1;1257:225:1;;-1:-1:-1;;;;;1257:225:1:i;170:50::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;170:50:1;-1:-1:-1;;;;;170:50:1;;:::i;:::-;;;;;;;;;;;;;;;;;;231:22;;;:::i;:::-;;;;-1:-1:-1;;;;;231:22:1;;;;;;;;;;;;;;838:188;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;838:188:1;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;838:188:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;838:188:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;838:188:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;838:188:1;;-1:-1:-1;838:188:1;;-1:-1:-1;;;;;838:188:1:i;264:38::-;;;:::i;:::-;;;;;;;;;;;;;;;;1504:262;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1504:262:1;-1:-1:-1;;;;;1504:262:1;;:::i;1788:::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1788:262:1;-1:-1:-1;;;;;1788:262:1;;:::i;1072:175::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1072:175:1;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;1072:175:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1072:175:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1072:175:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;1072:175:1;;-1:-1:-1;1072:175:1;;-1:-1:-1;;;;;1072:175:1:i;587:245::-;483:10;464:30;;;;:18;:30;;;;;;;;:38;;:30;:38;456:103;;;;-1:-1:-1;;;456:103:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;749:4;716:17;734:11;716:30;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;716:30:1;;;;;-1:-1:-1;716:30:1;;;;;;;;;;:37;;-1:-1:-1;;716:37:1;;;;;;;;;;;-1:-1:-1;;775:23:1;:38;;-1:-1:-1;;;;;775:38:1;;;;;;;;;-1:-1:-1;587:245:1:o;1257:225::-;483:10;464:30;;;;:18;:30;;;;;;;;:38;;:30;:38;456:103;;;;-1:-1:-1;;;456:103:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1412:4;1372:19;1392:16;1372:37;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;-1:-1;;263:2;259:12;;;254:3;250:22;246:30;;340:21;;;311:9;;295:26;;;;377:20;365:33;;;1372:37:1;;;;;;;;;;;;;;;;;:44;;;;;-1:-1:-1;;1372:44:1;;;;;;;;;;-1:-1:-1;;1438:23:1;:25;;;;;;;;-1:-1:-1;;1257:225:1:o;170:50::-;;;;;;;;;;;;;;;:::o;231:22::-;;;-1:-1:-1;;;;;231:22:1;;:::o;838:188::-;917:4;969:19;989:16;969:37;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;969:37:1;;;;;-1:-1:-1;969:37:1;;;;;;;;;;;;;;838:188;-1:-1:-1;;;;838:188:1:o;264:38::-;;;;:::o;1504:262::-;1619:7;;-1:-1:-1;;;;;1619:7:1;1605:10;:21;1597:86;;;;-1:-1:-1;;;1597:86:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1705:35:1;;;;;:18;:35;;;;;:42;;-1:-1:-1;;1705:42:1;1743:4;1705:42;;;1504:262::o;1788:::-;1903:7;;-1:-1:-1;;;;;1903:7:1;1889:10;:21;1881:86;;;;-1:-1:-1;;;1881:86:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1996:35:1;;;;;:18;:35;;;;;1989:42;;-1:-1:-1;;1989:42:1;;;1788:262::o;1072:175::-;1144:4;1196:17;1214:11;1196:30;;;;;;;;;;;;;66:2:-1;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;\",\"source\":\"pragma solidity >=0.4.22 <0.6.0;\\n\\ncontract DigitalCertification{\\n    \\n    mapping(string => bool) storedMerkleRoots;\\n    mapping(string => bool) revokedCertificates;\\n    mapping(address => bool) public authorizedAccounts;\\n    \\n    address public manager;\\n    \\n    uint256 public totalCertificatesIssued;\\n    \\n    constructor() public {\\n        manager = msg.sender;\\n        authorizedAccounts[manager] = true;\\n    }\\n    \\n    modifier restricted(){\\n        require(authorizedAccounts[msg.sender] == true, \\\"You are not authorized to carry out this transaction\\\");\\n        _;\\n    }\\n    \\n    function storeMerkleRoot(string memory _merkleRoot, uint128 _batchCount) public restricted\\n                {\\n                    storedMerkleRoots[_merkleRoot] = true;\\n                    totalCertificatesIssued += _batchCount;\\n                }\\n\\n    function checkRevokeStatus(string memory _certificateHash) public view returns(bool)\\n                {\\n                    return (revokedCertificates[_certificateHash]);\\n                }\\n                                        \\n    function checkMerkleRoot(string memory _merkleRoot) public view returns(bool)\\n                {\\n                    return (storedMerkleRoots[_merkleRoot]);\\n\\n                }\\n    \\n    function revokeCertificate(string memory _certificateHash) public restricted\\n                {\\n                    revokedCertificates[_certificateHash] = true;\\n                    totalCertificatesIssued--;\\n                }\\n                \\n    function addNewAccount(address _accountAddress) public\\n                {\\n                    require(msg.sender == manager, \\\"You are not authorized to carry out this transaction\\\");\\n                    authorizedAccounts[_accountAddress] = true;\\n                }\\n                \\n    function removeAccount(address _accountAddress) public\\n                {\\n                    require(msg.sender == manager, \\\"You are not authorized to carry out this transaction\\\");\\n                    delete authorizedAccounts[_accountAddress];\\n                }\\n                            \\n}\\n\",\"sourcePath\":\"/home/aditya/Documents/projects/Dcertify/contracts/dcertify.sol\",\"ast\":{\"absolutePath\":\"/home/aditya/Documents/projects/Dcertify/contracts/dcertify.sol\",\"exportedSymbols\":{\"DigitalCertification\":[206]},\"id\":207,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":58,\"literals\":[\"solidity\",\">=\",\"0.4\",\".22\",\"<\",\"0.6\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:32:1\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":206,\"linearizedBaseContracts\":[206],\"name\":\"DigitalCertification\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":62,\"name\":\"storedMerkleRoots\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"74:41:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string => bool)\"},\"typeName\":{\"id\":61,\"keyType\":{\"id\":59,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"82:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"nodeType\":\"Mapping\",\"src\":\"74:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string => bool)\"},\"valueType\":{\"id\":60,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"92:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":66,\"name\":\"revokedCertificates\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"121:43:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string => bool)\"},\"typeName\":{\"id\":65,\"keyType\":{\"id\":63,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"129:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"nodeType\":\"Mapping\",\"src\":\"121:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string => bool)\"},\"valueType\":{\"id\":64,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"139:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":70,\"name\":\"authorizedAccounts\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"170:50:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":69,\"keyType\":{\"id\":67,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"178:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"170:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":68,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"189:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"value\":null,\"visibility\":\"public\"},{\"constant\":false,\"id\":72,\"name\":\"manager\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"231:22:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":71,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"231:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"public\"},{\"constant\":false,\"id\":74,\"name\":\"totalCertificatesIssued\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"264:38:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":73,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"264:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"public\"},{\"body\":{\"id\":88,\"nodeType\":\"Block\",\"src\":\"334:81:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":80,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"id\":77,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":72,\"src\":\"344:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":78,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":221,\"src\":\"354:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":79,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"354:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"344:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":81,\"nodeType\":\"ExpressionStatement\",\"src\":\"344:20:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":86,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":82,\"name\":\"authorizedAccounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":70,\"src\":\"374:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":84,\"indexExpression\":{\"argumentTypes\":null,\"id\":83,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":72,\"src\":\"393:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"374:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":85,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"404:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"374:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":87,\"nodeType\":\"ExpressionStatement\",\"src\":\"374:34:1\"}]},\"documentation\":null,\"id\":89,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":75,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"324:2:1\"},\"returnParameters\":{\"id\":76,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"334:0:1\"},\"scope\":206,\"src\":\"313:102:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":102,\"nodeType\":\"Block\",\"src\":\"446:131:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":97,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":92,\"name\":\"authorizedAccounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":70,\"src\":\"464:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":95,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":93,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":221,\"src\":\"483:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":94,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"483:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"464:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":96,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"498:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"464:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420617574686f72697a656420746f206361727279206f75742074686973207472616e73616374696f6e\",\"id\":98,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"504:54:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"},\"value\":\"You are not authorized to carry out this transaction\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"}],\"id\":91,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[224,225],\"referencedDeclaration\":225,\"src\":\"456:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":99,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"456:103:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":100,\"nodeType\":\"ExpressionStatement\",\"src\":\"456:103:1\"},{\"id\":101,\"nodeType\":\"PlaceholderStatement\",\"src\":\"569:1:1\"}]},\"documentation\":null,\"id\":103,\"name\":\"restricted\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":90,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"444:2:1\"},\"src\":\"425:152:1\",\"visibility\":\"internal\"},{\"body\":{\"id\":122,\"nodeType\":\"Block\",\"src\":\"694:138:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":116,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":112,\"name\":\"storedMerkleRoots\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":62,\"src\":\"716:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string memory => bool)\"}},\"id\":114,\"indexExpression\":{\"argumentTypes\":null,\"id\":113,\"name\":\"_merkleRoot\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":105,\"src\":\"734:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"716:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":115,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"749:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"716:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":117,\"nodeType\":\"ExpressionStatement\",\"src\":\"716:37:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":120,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"id\":118,\"name\":\"totalCertificatesIssued\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"775:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"+=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":119,\"name\":\"_batchCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":107,\"src\":\"802:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint128\",\"typeString\":\"uint128\"}},\"src\":\"775:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":121,\"nodeType\":\"ExpressionStatement\",\"src\":\"775:38:1\"}]},\"documentation\":null,\"id\":123,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":110,\"modifierName\":{\"argumentTypes\":null,\"id\":109,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":103,\"src\":\"667:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"667:10:1\"}],\"name\":\"storeMerkleRoot\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":108,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":105,\"name\":\"_merkleRoot\",\"nodeType\":\"VariableDeclaration\",\"scope\":123,\"src\":\"612:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":104,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"612:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":107,\"name\":\"_batchCount\",\"nodeType\":\"VariableDeclaration\",\"scope\":123,\"src\":\"639:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint128\",\"typeString\":\"uint128\"},\"typeName\":{\"id\":106,\"name\":\"uint128\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"639:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint128\",\"typeString\":\"uint128\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"611:48:1\"},\"returnParameters\":{\"id\":111,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"694:0:1\"},\"scope\":206,\"src\":\"587:245:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":135,\"nodeType\":\"Block\",\"src\":\"939:87:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"components\":[{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":130,\"name\":\"revokedCertificates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":66,\"src\":\"969:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string memory => bool)\"}},\"id\":132,\"indexExpression\":{\"argumentTypes\":null,\"id\":131,\"name\":\"_certificateHash\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":125,\"src\":\"989:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"969:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":133,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"968:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":129,\"id\":134,\"nodeType\":\"Return\",\"src\":\"961:46:1\"}]},\"documentation\":null,\"id\":136,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"checkRevokeStatus\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":126,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":125,\"name\":\"_certificateHash\",\"nodeType\":\"VariableDeclaration\",\"scope\":136,\"src\":\"865:30:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":124,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"865:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"864:32:1\"},\"returnParameters\":{\"id\":129,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":128,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":136,\"src\":\"917:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":127,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"917:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"916:6:1\"},\"scope\":206,\"src\":\"838:188:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":148,\"nodeType\":\"Block\",\"src\":\"1166:81:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"components\":[{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":143,\"name\":\"storedMerkleRoots\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":62,\"src\":\"1196:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string memory => bool)\"}},\"id\":145,\"indexExpression\":{\"argumentTypes\":null,\"id\":144,\"name\":\"_merkleRoot\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":138,\"src\":\"1214:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1196:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":146,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"1195:32:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":142,\"id\":147,\"nodeType\":\"Return\",\"src\":\"1188:39:1\"}]},\"documentation\":null,\"id\":149,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"checkMerkleRoot\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":139,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":138,\"name\":\"_merkleRoot\",\"nodeType\":\"VariableDeclaration\",\"scope\":149,\"src\":\"1097:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":137,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1097:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1096:27:1\"},\"returnParameters\":{\"id\":142,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":141,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":149,\"src\":\"1144:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":140,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1144:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1143:6:1\"},\"scope\":206,\"src\":\"1072:175:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":165,\"nodeType\":\"Block\",\"src\":\"1350:132:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":160,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":156,\"name\":\"revokedCertificates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":66,\"src\":\"1372:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string memory => bool)\"}},\"id\":158,\"indexExpression\":{\"argumentTypes\":null,\"id\":157,\"name\":\"_certificateHash\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":151,\"src\":\"1392:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"1372:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":159,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1412:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"1372:44:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":161,\"nodeType\":\"ExpressionStatement\",\"src\":\"1372:44:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":163,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"--\",\"prefix\":false,\"src\":\"1438:25:1\",\"subExpression\":{\"argumentTypes\":null,\"id\":162,\"name\":\"totalCertificatesIssued\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"1438:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":164,\"nodeType\":\"ExpressionStatement\",\"src\":\"1438:25:1\"}]},\"documentation\":null,\"id\":166,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":154,\"modifierName\":{\"argumentTypes\":null,\"id\":153,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":103,\"src\":\"1323:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1323:10:1\"}],\"name\":\"revokeCertificate\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":152,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":151,\"name\":\"_certificateHash\",\"nodeType\":\"VariableDeclaration\",\"scope\":166,\"src\":\"1284:30:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":150,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1284:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1283:32:1\"},\"returnParameters\":{\"id\":155,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1350:0:1\"},\"scope\":206,\"src\":\"1257:225:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":185,\"nodeType\":\"Block\",\"src\":\"1575:191:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":175,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":172,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":221,\"src\":\"1605:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":173,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1605:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"id\":174,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":72,\"src\":\"1619:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1605:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420617574686f72697a656420746f206361727279206f75742074686973207472616e73616374696f6e\",\"id\":176,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1628:54:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"},\"value\":\"You are not authorized to carry out this transaction\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"}],\"id\":171,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[224,225],\"referencedDeclaration\":225,\"src\":\"1597:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":177,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1597:86:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":178,\"nodeType\":\"ExpressionStatement\",\"src\":\"1597:86:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":183,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":179,\"name\":\"authorizedAccounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":70,\"src\":\"1705:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":181,\"indexExpression\":{\"argumentTypes\":null,\"id\":180,\"name\":\"_accountAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":168,\"src\":\"1724:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"1705:35:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":182,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1743:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"1705:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":184,\"nodeType\":\"ExpressionStatement\",\"src\":\"1705:42:1\"}]},\"documentation\":null,\"id\":186,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"addNewAccount\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":169,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":168,\"name\":\"_accountAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":186,\"src\":\"1527:23:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":167,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1527:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1526:25:1\"},\"returnParameters\":{\"id\":170,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1575:0:1\"},\"scope\":206,\"src\":\"1504:262:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":204,\"nodeType\":\"Block\",\"src\":\"1859:191:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":195,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":192,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":221,\"src\":\"1889:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":193,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1889:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"id\":194,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":72,\"src\":\"1903:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1889:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420617574686f72697a656420746f206361727279206f75742074686973207472616e73616374696f6e\",\"id\":196,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1912:54:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"},\"value\":\"You are not authorized to carry out this transaction\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"}],\"id\":191,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[224,225],\"referencedDeclaration\":225,\"src\":\"1881:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":197,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1881:86:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":198,\"nodeType\":\"ExpressionStatement\",\"src\":\"1881:86:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":202,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"1989:42:1\",\"subExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":199,\"name\":\"authorizedAccounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":70,\"src\":\"1996:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":201,\"indexExpression\":{\"argumentTypes\":null,\"id\":200,\"name\":\"_accountAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":188,\"src\":\"2015:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"1996:35:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":203,\"nodeType\":\"ExpressionStatement\",\"src\":\"1989:42:1\"}]},\"documentation\":null,\"id\":205,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"removeAccount\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":189,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":188,\"name\":\"_accountAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":205,\"src\":\"1811:23:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":187,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1811:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1810:25:1\"},\"returnParameters\":{\"id\":190,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1859:0:1\"},\"scope\":206,\"src\":\"1788:262:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":207,\"src\":\"34:2047:1\"}],\"src\":\"0:2082:1\"},\"legacyAST\":{\"absolutePath\":\"/home/aditya/Documents/projects/Dcertify/contracts/dcertify.sol\",\"exportedSymbols\":{\"DigitalCertification\":[206]},\"id\":207,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":58,\"literals\":[\"solidity\",\">=\",\"0.4\",\".22\",\"<\",\"0.6\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:32:1\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":206,\"linearizedBaseContracts\":[206],\"name\":\"DigitalCertification\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":62,\"name\":\"storedMerkleRoots\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"74:41:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string => bool)\"},\"typeName\":{\"id\":61,\"keyType\":{\"id\":59,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"82:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"nodeType\":\"Mapping\",\"src\":\"74:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string => bool)\"},\"valueType\":{\"id\":60,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"92:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":66,\"name\":\"revokedCertificates\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"121:43:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string => bool)\"},\"typeName\":{\"id\":65,\"keyType\":{\"id\":63,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"129:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"nodeType\":\"Mapping\",\"src\":\"121:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string => bool)\"},\"valueType\":{\"id\":64,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"139:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":70,\"name\":\"authorizedAccounts\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"170:50:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":69,\"keyType\":{\"id\":67,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"178:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"170:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":68,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"189:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"value\":null,\"visibility\":\"public\"},{\"constant\":false,\"id\":72,\"name\":\"manager\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"231:22:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":71,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"231:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"public\"},{\"constant\":false,\"id\":74,\"name\":\"totalCertificatesIssued\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"264:38:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":73,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"264:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"public\"},{\"body\":{\"id\":88,\"nodeType\":\"Block\",\"src\":\"334:81:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":80,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"id\":77,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":72,\"src\":\"344:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":78,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":221,\"src\":\"354:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":79,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"354:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"344:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":81,\"nodeType\":\"ExpressionStatement\",\"src\":\"344:20:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":86,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":82,\"name\":\"authorizedAccounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":70,\"src\":\"374:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":84,\"indexExpression\":{\"argumentTypes\":null,\"id\":83,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":72,\"src\":\"393:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"374:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":85,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"404:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"374:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":87,\"nodeType\":\"ExpressionStatement\",\"src\":\"374:34:1\"}]},\"documentation\":null,\"id\":89,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":75,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"324:2:1\"},\"returnParameters\":{\"id\":76,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"334:0:1\"},\"scope\":206,\"src\":\"313:102:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":102,\"nodeType\":\"Block\",\"src\":\"446:131:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":97,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":92,\"name\":\"authorizedAccounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":70,\"src\":\"464:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":95,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":93,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":221,\"src\":\"483:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":94,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"483:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"464:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":96,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"498:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"464:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420617574686f72697a656420746f206361727279206f75742074686973207472616e73616374696f6e\",\"id\":98,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"504:54:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"},\"value\":\"You are not authorized to carry out this transaction\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"}],\"id\":91,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[224,225],\"referencedDeclaration\":225,\"src\":\"456:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":99,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"456:103:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":100,\"nodeType\":\"ExpressionStatement\",\"src\":\"456:103:1\"},{\"id\":101,\"nodeType\":\"PlaceholderStatement\",\"src\":\"569:1:1\"}]},\"documentation\":null,\"id\":103,\"name\":\"restricted\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":90,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"444:2:1\"},\"src\":\"425:152:1\",\"visibility\":\"internal\"},{\"body\":{\"id\":122,\"nodeType\":\"Block\",\"src\":\"694:138:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":116,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":112,\"name\":\"storedMerkleRoots\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":62,\"src\":\"716:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string memory => bool)\"}},\"id\":114,\"indexExpression\":{\"argumentTypes\":null,\"id\":113,\"name\":\"_merkleRoot\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":105,\"src\":\"734:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"716:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":115,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"749:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"716:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":117,\"nodeType\":\"ExpressionStatement\",\"src\":\"716:37:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":120,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"id\":118,\"name\":\"totalCertificatesIssued\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"775:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"+=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":119,\"name\":\"_batchCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":107,\"src\":\"802:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint128\",\"typeString\":\"uint128\"}},\"src\":\"775:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":121,\"nodeType\":\"ExpressionStatement\",\"src\":\"775:38:1\"}]},\"documentation\":null,\"id\":123,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":110,\"modifierName\":{\"argumentTypes\":null,\"id\":109,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":103,\"src\":\"667:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"667:10:1\"}],\"name\":\"storeMerkleRoot\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":108,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":105,\"name\":\"_merkleRoot\",\"nodeType\":\"VariableDeclaration\",\"scope\":123,\"src\":\"612:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":104,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"612:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":107,\"name\":\"_batchCount\",\"nodeType\":\"VariableDeclaration\",\"scope\":123,\"src\":\"639:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint128\",\"typeString\":\"uint128\"},\"typeName\":{\"id\":106,\"name\":\"uint128\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"639:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint128\",\"typeString\":\"uint128\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"611:48:1\"},\"returnParameters\":{\"id\":111,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"694:0:1\"},\"scope\":206,\"src\":\"587:245:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":135,\"nodeType\":\"Block\",\"src\":\"939:87:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"components\":[{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":130,\"name\":\"revokedCertificates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":66,\"src\":\"969:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string memory => bool)\"}},\"id\":132,\"indexExpression\":{\"argumentTypes\":null,\"id\":131,\"name\":\"_certificateHash\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":125,\"src\":\"989:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"969:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":133,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"968:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":129,\"id\":134,\"nodeType\":\"Return\",\"src\":\"961:46:1\"}]},\"documentation\":null,\"id\":136,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"checkRevokeStatus\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":126,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":125,\"name\":\"_certificateHash\",\"nodeType\":\"VariableDeclaration\",\"scope\":136,\"src\":\"865:30:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":124,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"865:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"864:32:1\"},\"returnParameters\":{\"id\":129,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":128,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":136,\"src\":\"917:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":127,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"917:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"916:6:1\"},\"scope\":206,\"src\":\"838:188:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":148,\"nodeType\":\"Block\",\"src\":\"1166:81:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"components\":[{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":143,\"name\":\"storedMerkleRoots\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":62,\"src\":\"1196:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string memory => bool)\"}},\"id\":145,\"indexExpression\":{\"argumentTypes\":null,\"id\":144,\"name\":\"_merkleRoot\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":138,\"src\":\"1214:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1196:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":146,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"1195:32:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":142,\"id\":147,\"nodeType\":\"Return\",\"src\":\"1188:39:1\"}]},\"documentation\":null,\"id\":149,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"checkMerkleRoot\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":139,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":138,\"name\":\"_merkleRoot\",\"nodeType\":\"VariableDeclaration\",\"scope\":149,\"src\":\"1097:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":137,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1097:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1096:27:1\"},\"returnParameters\":{\"id\":142,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":141,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":149,\"src\":\"1144:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":140,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1144:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1143:6:1\"},\"scope\":206,\"src\":\"1072:175:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":165,\"nodeType\":\"Block\",\"src\":\"1350:132:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":160,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":156,\"name\":\"revokedCertificates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":66,\"src\":\"1372:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_string_memory_$_t_bool_$\",\"typeString\":\"mapping(string memory => bool)\"}},\"id\":158,\"indexExpression\":{\"argumentTypes\":null,\"id\":157,\"name\":\"_certificateHash\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":151,\"src\":\"1392:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"1372:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":159,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1412:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"1372:44:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":161,\"nodeType\":\"ExpressionStatement\",\"src\":\"1372:44:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":163,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"--\",\"prefix\":false,\"src\":\"1438:25:1\",\"subExpression\":{\"argumentTypes\":null,\"id\":162,\"name\":\"totalCertificatesIssued\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"1438:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":164,\"nodeType\":\"ExpressionStatement\",\"src\":\"1438:25:1\"}]},\"documentation\":null,\"id\":166,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":154,\"modifierName\":{\"argumentTypes\":null,\"id\":153,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":103,\"src\":\"1323:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1323:10:1\"}],\"name\":\"revokeCertificate\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":152,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":151,\"name\":\"_certificateHash\",\"nodeType\":\"VariableDeclaration\",\"scope\":166,\"src\":\"1284:30:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":150,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1284:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1283:32:1\"},\"returnParameters\":{\"id\":155,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1350:0:1\"},\"scope\":206,\"src\":\"1257:225:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":185,\"nodeType\":\"Block\",\"src\":\"1575:191:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":175,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":172,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":221,\"src\":\"1605:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":173,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1605:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"id\":174,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":72,\"src\":\"1619:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1605:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420617574686f72697a656420746f206361727279206f75742074686973207472616e73616374696f6e\",\"id\":176,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1628:54:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"},\"value\":\"You are not authorized to carry out this transaction\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"}],\"id\":171,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[224,225],\"referencedDeclaration\":225,\"src\":\"1597:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":177,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1597:86:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":178,\"nodeType\":\"ExpressionStatement\",\"src\":\"1597:86:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":183,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":179,\"name\":\"authorizedAccounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":70,\"src\":\"1705:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":181,\"indexExpression\":{\"argumentTypes\":null,\"id\":180,\"name\":\"_accountAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":168,\"src\":\"1724:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"1705:35:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":182,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1743:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"1705:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":184,\"nodeType\":\"ExpressionStatement\",\"src\":\"1705:42:1\"}]},\"documentation\":null,\"id\":186,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"addNewAccount\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":169,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":168,\"name\":\"_accountAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":186,\"src\":\"1527:23:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":167,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1527:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1526:25:1\"},\"returnParameters\":{\"id\":170,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1575:0:1\"},\"scope\":206,\"src\":\"1504:262:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":204,\"nodeType\":\"Block\",\"src\":\"1859:191:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":195,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":192,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":221,\"src\":\"1889:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":193,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1889:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"id\":194,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":72,\"src\":\"1903:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1889:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420617574686f72697a656420746f206361727279206f75742074686973207472616e73616374696f6e\",\"id\":196,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1912:54:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"},\"value\":\"You are not authorized to carry out this transaction\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_8823f4fb0f5000957830b19fcb68efc9d227356c7e15e9075764787925dac51c\",\"typeString\":\"literal_string \\\"You are not authorized to carry out this transaction\\\"\"}],\"id\":191,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[224,225],\"referencedDeclaration\":225,\"src\":\"1881:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":197,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1881:86:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":198,\"nodeType\":\"ExpressionStatement\",\"src\":\"1881:86:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":202,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"1989:42:1\",\"subExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":199,\"name\":\"authorizedAccounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":70,\"src\":\"1996:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":201,\"indexExpression\":{\"argumentTypes\":null,\"id\":200,\"name\":\"_accountAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":188,\"src\":\"2015:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"1996:35:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":203,\"nodeType\":\"ExpressionStatement\",\"src\":\"1989:42:1\"}]},\"documentation\":null,\"id\":205,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"removeAccount\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":189,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":188,\"name\":\"_accountAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":205,\"src\":\"1811:23:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":187,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1811:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1810:25:1\"},\"returnParameters\":{\"id\":190,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1859:0:1\"},\"scope\":206,\"src\":\"1788:262:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":207,\"src\":\"34:2047:1\"}],\"src\":\"0:2082:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.5.12+commit.7709ece9.Emscripten.clang\"},\"networks\":{\"5777\":{\"events\":{},\"links\":{},\"address\":\"0xC38ea41b03B5dA6Cc6E4944e6A2602a241a15230\",\"transactionHash\":\"0xbeee16e2661c2a35fd29eae0e24af6de21406324450db27f6d0d87805e182390\"}},\"schemaVersion\":\"3.0.19\",\"updatedAt\":\"2020-03-01T13:34:06.235Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}}");

/***/ }),

/***/ "./components/AdminHeader.js":
/*!***********************************!*\
  !*** ./components/AdminHeader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/aditya/Documents/projects/final_year_project/cert-verification/components/AdminHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const menuStyle = {
  fontSize: '17px',
  marginLeft: '0px'
};
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    inverted: true,
    style: menuStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Admin Dcertify"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Help"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "About")));
});

/***/ }),

/***/ "./instances/DigitalCertificationInstance.js":
/*!***************************************************!*\
  !*** ./instances/DigitalCertificationInstance.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./instances/web3.js");
/* harmony import */ var _build_contracts_DigitalCertification_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build/contracts/DigitalCertification.json */ "./build/contracts/DigitalCertification.json");
var _build_contracts_DigitalCertification_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/contracts/DigitalCertification.json */ "./build/contracts/DigitalCertification.json", 1);


const instance = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(_build_contracts_DigitalCertification_json__WEBPACK_IMPORTED_MODULE_1__.abi, '0xC38ea41b03B5dA6Cc6E4944e6A2602a241a15230');
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./instances/web3.js":
/*!***************************!*\
  !*** ./instances/web3.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

const web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a('http://localhost:7545');
/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _instances_DigitalCertificationInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../instances/DigitalCertificationInstance */ "./instances/DigitalCertificationInstance.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_AdminHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AdminHeader */ "./components/AdminHeader.js");
/* harmony import */ var _instances_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../instances/web3 */ "./instances/web3.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "/home/aditya/Documents/projects/final_year_project/cert-verification/pages/admin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








const SHA256 = __webpack_require__(/*! crypto-js/sha256 */ "crypto-js/sha256");



class Admin extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "state", {
      merkleRoot: "",
      creationStatus: false,
      certificateHash: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onSubmitDeploy", async event => {
      event.preventDefault();
      const resultArray = this.state.merkleRoot.split("/");
      const mRoot = resultArray[0];

      const batchCount = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(resultArray[1]);

      const accounts = await _instances_web3__WEBPACK_IMPORTED_MODULE_8__["default"].eth.getAccounts();

      try {
        const merkleStatus = await _instances_DigitalCertificationInstance__WEBPACK_IMPORTED_MODULE_4__["default"].methods.checkMerkleRoot(mRoot).call();

        if (merkleStatus) {
          sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Merkle Root already exists", mRoot, "warning");
          return;
        }
      } catch (err) {
        console.log(err);
      }

      try {
        await _instances_DigitalCertificationInstance__WEBPACK_IMPORTED_MODULE_4__["default"].methods.storeMerkleRoot(mRoot, batchCount).send({
          gas: "1000000",
          from: accounts[0]
        });
      } catch (err) {
        console.log(err);
      }

      this.setState({
        creationStatus: true
      });
      sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Merkle Root Deployed", mRoot, "success");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "setValues", obj => {
      const data = obj.CertificateData;

      const cert = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data);

      const certiHash = SHA256(cert).toString();
      this.setState({
        merkleRoot: obj.MerkleRoot,
        certificateHash: certiHash
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleFile", selectorFiles => {
      const reader = new FileReader();
      reader.onload = this.onReaderLoad;
      reader.readAsText(selectorFiles[0]);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onReaderLoad", event => {
      var obj = JSON.parse(event.target.result);
      this.setValues(obj);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onSubmitRevoke", async event => {
      event.preventDefault();
      const accounts = await _instances_web3__WEBPACK_IMPORTED_MODULE_8__["default"].eth.getAccounts();
      sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
        title: "Are you sure?",
        text: "Once revoked, the certificate will be permanently removed!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(async willDelete => {
        if (willDelete) {
          sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Certificate succesfully revoked!", {
            icon: "success"
          });

          try {
            await _instances_DigitalCertificationInstance__WEBPACK_IMPORTED_MODULE_4__["default"].methods.revokeCertificate(this.state.certificateHash).send({
              gas: "1000000",
              from: accounts[0]
            });
            console.log("Revoked!");
          } catch (err) {
            console.log("revoke unsuccessfull");
          }
        } else {
          sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Certificate is safe!");
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "generateJSX", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Segment"], {
      style: {
        background: "white"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onSubmit: this.onSubmitDeploy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"].Field, {
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Merkle Root"), __jsx("input", {
      placeholder: "Merkle Root",
      onChange: event => this.setState({
        merkleRoot: event.target.value
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      loading: this.state.loading,
      fluid: true,
      primary: true,
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Deploy"))));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "revokeJSX", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      style: {
        marginTop: "10px"
      },
      onSubmit: this.onSubmitRevoke,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"].Field, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("label", {
      style: {
        fontSize: "15px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Revoking certificate will permanently remove the copy of certificate."), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      type: "file",
      labelPosition: "right",
      style: {
        color: "red"
      },
      onChange: event => this.handleFile(event.target.files),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "submit",
      fluid: true,
      style: {
        background: "red",
        color: "white"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "Revoke")));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "panes", [{
      menuItem: 'Deploy Merkle root',
      render: () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, this.generateJSX)
    }, {
      menuItem: 'Revoke Certificate',
      render: () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, this.revokeJSX)
    }, {
      menuItem: 'Create Account',
      render: () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Unimplemented")
    }]);
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx(_components_AdminHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("link", {
      rel: "stylesheet",
      href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), __jsx("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, 'body { background-color: "white"; }')), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Tab"], {
      panes: this.panes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/admin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aditya/Documents/projects/final_year_project/cert-verification/pages/admin.js */"./pages/admin.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "crypto-js/sha256":
/*!***********************************!*\
  !*** external "crypto-js/sha256" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-js/sha256");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map