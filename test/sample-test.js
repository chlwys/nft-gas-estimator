const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Deploying orginal ERC721", async function () {
    const Greeter = await ethers.getContractFactory("DefaultNFT");
    const greeter = await Greeter.deploy('Name','Symbol');
    await greeter.deployed();
  });
  it("Deploying new ERC721", async function () {
    const Greeter = await ethers.getContractFactory("NewNFT");
    const greeter = await Greeter.deploy();
    await greeter.deployed();
  });
});
