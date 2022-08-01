pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract DaiwanNFT is ERC721{

    bytes32 public root;

    uint256 internal _currentTokenId;

    constructor(bytes32 _root) ERC721("Daiwan","DW"){
        root=_root;
    }

    function freeMint(bytes32[] memory proof) public{
        bytes32 leaf=keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(proof,root,leaf),"not in whitelist");
        _safeMint(msg.sender,_currentTokenId,"");
        _currentTokenId++;
    }

    function _baseURI() internal pure override returns (string memory){
        return "http://localhost:8080/";
    }
}
