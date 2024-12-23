// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContentVerification {
    struct Content {
        string hash;
        address author;
        uint256 timestamp;
    }

    mapping(string => Content) public contents;

    event ContentRegistered(string hash, address author, uint256 timestamp);

    function registerContent(string memory hash) public {
        require(contents[hash].timestamp == 0, "Content already registered");
        contents[hash] = Content(hash, msg.sender, block.timestamp);
        emit ContentRegistered(hash, msg.sender, block.timestamp);
    }

    function verifyContent(string memory hash) public view returns (address, uint256) {
        require(contents[hash].timestamp != 0, "Content not found");
        return (contents[hash].author, contents[hash].timestamp);
    }
}