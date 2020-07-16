pragma solidity >=0.4.22 <0.6.0;

contract DigitalCertification{
    
    mapping(string => bool) storedMerkleRoots;
    mapping(string => bool) revokedCertificates;
    mapping(address => bool) public authorizedAccounts;
    
    address public manager;
    
    uint256 public totalCertificatesIssued;
    
    constructor() public {
        manager = msg.sender;
        authorizedAccounts[manager] = true;
    }
    
    modifier restricted(){
        require(authorizedAccounts[msg.sender] == true, "You are not authorized to carry out this transaction");
        _;
    }
    
    function storeMerkleRoot(string memory _merkleRoot, uint128 _batchCount) public restricted
                {
                    storedMerkleRoots[_merkleRoot] = true;
                    totalCertificatesIssued += _batchCount;
                }

    function checkRevokeStatus(string memory _certificateHash) public view returns(bool)
                {
                    return (revokedCertificates[_certificateHash]);
                }
                                        
    function checkMerkleRoot(string memory _merkleRoot) public view returns(bool)
                {
                    return (storedMerkleRoots[_merkleRoot]);

                }
    
    function revokeCertificate(string memory _certificateHash) public restricted
                {
                    revokedCertificates[_certificateHash] = true;
                    totalCertificatesIssued--;
                }
                
    function addNewAccount(address _accountAddress) public
                {
                    require(msg.sender == manager, "You are not authorized to carry out this transaction");
                    authorizedAccounts[_accountAddress] = true;
                }
                
    function removeAccount(address _accountAddress) public
                {
                    require(msg.sender == manager, "You are not authorized to carry out this transaction");
                    delete authorizedAccounts[_accountAddress];
                }
                            
}
