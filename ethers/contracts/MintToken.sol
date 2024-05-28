// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MintToken is ERC20 {
    constructor(uint256 _initEther, string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(msg.sender, _initEther * 10 ** 18);
    }

    function burnToken(uint256 _etherAmount) public {
        _burn(msg.sender, _etherAmount * 10 ** 18);
    }

    function burnSomeoneToken(address _account, uint _amount) public {
        _burn(_account, _amount * 10 ** 18);
    }
}