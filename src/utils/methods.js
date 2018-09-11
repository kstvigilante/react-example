import * as Eos from "eosjs";

const network = {
    protocol: "http",
    blockchain: "eos",
    host: "193.93.219.219",
    port: "8888",
    chainId: "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca"
};

const eosOptions = {
    chainId: "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca"
};

const requiredFields = {
    accounts: [
        {
            blockchain: "eos",
            host: "193.93.219.219",
            port: 8888,
            chainId:
                "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca"
        }
    ]
};

export let newgame = async function(creator, tokencontract, entryfee, roundlength, cb)
{
    console.log("new game");
    let scatter = window.scatter;
    const eos = scatter.eos(network, Eos, eosOptions);
    let contract = await eos.contract("sidsidsidsid");
    console.log(contract);
    let result = await contract.newgame(creator, tokencontract, entryfee, roundlength,{ authorization: creator });
    console.log(result);
    console.log("new game function called");
}

export let joingame = async function(id, player, cb)
{
    let scatter = window.scatter;
    const eos = scatter.eos(network, Eos, eosOptions);
    let contract = await eos.contract("sidsidsidsid");
    console.log(contract);
    let result = await contract.joingame(id, player, { authorization: player });
    console.log(result);
    console.log("join game function called");
}

export let delgame = async function(id, challenger, cb)
{
    let scatter = window.scatter;
    const eos = scatter.eos(network, Eos, eosOptions);
    let contract = await eos.contract("sidsidsidsid");
    console.log(contract);
    let result = await contract.delgame(id, challenger, {authorization: challenger} );
    console.log(result);
    console.log("delete game function called");
}

export let submitturn = async function(id, player, answer, cb)
{
    let scatter = window.scatter;
    const eos = scatter.eos(network, Eos, eosOptions);
    let contract = await eos.contract("sidsidsidsid");
    console.log(contract);
    let result = await contract.submitturn(id, player, answer);
    console.log(result);
    console.log("submit turn function called");
}

export let claimvictory = async function(id, winner, cb)
{
    let scatter = window.scatter;
    const eos = scatter.eos(network, Eos, eosOptions);
    let contract = await eos.contract("sidsidsidsid");
    console.log(contract);
    let result = await contract.claimvictory(id, winner);
    console.log(result);
    console.log("claim victory function called");
}