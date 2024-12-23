const ContentVerification = artifacts.require("ContentVerification");

module.exports = function (deployer) {
    deployer.deploy(ContentVerification);
};