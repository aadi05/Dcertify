const DigitalCertification = artifacts.require("DigitalCertification");

module.exports = function(deployer) {
  deployer.deploy(DigitalCertification);
};
