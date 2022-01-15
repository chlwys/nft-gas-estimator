//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./StrippedDown/token/ERC721/ERC721.sol";

contract NewNFT is ERC721 {
    constructor()
        ERC721()
    {}
}