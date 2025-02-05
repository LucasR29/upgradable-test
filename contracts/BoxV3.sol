// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import {Box} from "./Box.sol";

/// @title BoxV2
/// @notice An improved box with objects inside.
/// @custom:oz-upgrades-from Box
contract BoxV3 is Box {
    string t;
    /*//////////////////////////////////////////////////////////////
                                FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    /// @notice Add an object to the box.
    function teste(string memory a) public {
        t = a;
    }

    /// @notice Returns the box version.
    function boxVersion() external pure returns (uint256) {
        return 2;
    }
}