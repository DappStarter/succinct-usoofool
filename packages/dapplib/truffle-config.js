require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict prison sugar spot tower ring remind purpose hunt kite orange ten'; 
let testAccounts = [
"0x7febb1762944b87c465339a23576f6fbbb2edb8b93f6cd78891ffe91d0176db7",
"0xae1c86bb09fc3e6c8c6d2360c87568e155d608737b4f2bb5df64b221475f6185",
"0x8693b81bb5f7235001ff560835f90ae193f2ae371d78786f612d1c868820e949",
"0xe501f8e4374b4262a55fa0acb46868f1429046039780036836225e2034883d76",
"0xa2f302f07b8c8ccf47bcf793b1585e1b2ead001c00c15aa773d1cbf3cf408a48",
"0x9a8a9dc02afac81b3555f6769a8a8fd15e9158c46b59a730957833d4f121a0f4",
"0x9686ddd5385df790d2c1a04a91616a1cd2d21ad699c500ec039915a0032f1bcc",
"0x04d3ac7caeb57f8fad0beeae3b4a15c401cd48fa9e42231cd9b9c20ee2517934",
"0xf9648005b8d91eebbcd49c8affa90d3dc53954f390b68b53fdff448f4966c78c",
"0x3af22608712071d20dadd3734acb9410f290d777c72096ac365229188831711c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

