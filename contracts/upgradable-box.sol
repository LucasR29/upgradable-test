//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract UpgradableBox is Initializable {
    uint256 public x;
    bool private initialized;

    function initialize(uint256 _x) public virtual initializer {
        x = _x;
    }
}

contract Upgrade is UpgradableBox {
    uint public y;

    function initialize(uint256 _x) public override initializer {
        UpgradableBox.initialize(_x);
    }
}