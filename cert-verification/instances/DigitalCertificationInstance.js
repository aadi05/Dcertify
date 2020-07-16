import web3 from './web3';
import DigitalCertification from '../build/contracts/DigitalCertification.json';

const instance = new web3.eth.Contract(DigitalCertification.abi,'0xC38ea41b03B5dA6Cc6E4944e6A2602a241a15230');

export default instance;