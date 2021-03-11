require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace hero fortune skull trap birth spider unhappy grace bread slot gaze'; 
let testAccounts = [
"0x8db0b9e0c9cfd3e0e32776aadd9f8ac6d4ce608a9a71b9fed417876cf048b5a4",
"0x3917f62ab7056720a542777ebfeb62bf5e1b2d31a2d8fdbaef4e7c8da4ec08a2",
"0xf7de0148c12319ab33f70991b4e589b4d62c7762d4fa5251f7e1a5e49f3800eb",
"0x2d9727086fba8192044c34cf92fdc6948199ba9addf9f7232bda6affc908363e",
"0x656f80f47ab283bbf2e22ad26d472b0bb75a16b8be0200100406d30d7693c139",
"0x3401ef8f67637bbe80e0a061366b22827f170a8e6bad7c04e072570e6cb5b922",
"0xc0ccfa68272b420aa1d93f9ea0f02f4c3d0b3821d756f592a46f19dfbc6ff91f",
"0xaa40e235ff0c5fefc1a4a24781e52112699a70a5601a0ea7853c3d57e96ed8ca",
"0x755c5c21eb4e9c8207a2c87882a3f8ff7ff3a7d834f89b159bfa361ce5c653ae",
"0xf84d1137f86ab5cb39ce26b919b2181ea721f2b0ed4fa34eff37d27cba9ca0da"
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

