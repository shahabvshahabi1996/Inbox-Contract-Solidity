var path = require('path');
var fs = require('fs');
const solc = require('solc');

const inboxContractPath = path.resolve(__dirname , 'contracts' , 'inbox.sol');
const source = fs.readFileSync(inboxContractPath, 'utf8');

var output = solc.compile(source,1);

console.log(output);