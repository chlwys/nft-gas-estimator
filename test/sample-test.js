const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Deploying orginal ERC721", async function () {
    const Greeter = await ethers.getContractFactory("DefaultNFT");
    const greeter = await Greeter.deploy('Name','Symbol');
    await greeter.deployed();
    console.log()
  });
  it("Deploying new ERC721", async function () {
    const Greeter = await ethers.getContractFactory("bridgeRegistry");
    const greeter = await Greeter.deploy('name');
    await greeter.deployed();
  });
  it("mintNew", async () => {
    // Deploy contract
    const Distributor = await ethers.getContractFactory("bridgeRegistry");
    const distributor = await Distributor.deploy('name');
    await distributor.deployed();

    // random amount
    await expect(
      await distributor.mintInReg('name', 'symbol', 'no asset data')
    ).to.emit("new token minted");


    // random address
    await expect(
      distributor.claim(0,
        "0x94069d197c64D831fdB7C3222Dd512af5339bd2d",
        users[3].amount,
        proof
      )
    ).to.be.revertedWith("Invalid proof.");
  });
});
