#!/usr/bin/env node

//to run bash commands from node
const {execSync} = require('child_process');
const runCommand = command =>{
    try{
        execSync(command, {stdio: 'inherit'});
    }catch(error){
        console.error(error);
        return false;
    }
    return true;
}
//taking input from user by argv
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Sourabh-awasthy/sparkystarts ${repoName}`;
const finalText = `cd ${repoName} && npm install `;


console.log(`Cloning the repository with ${repoName}...`);

const checkOut = runCommand(gitCheckoutCommand);
if(!checkOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}...`);

const install = runCommand(finalText);
if(!install) process.exit(-1);

console.log(`All done! ${repoName} is ready to go! 🚀`);
console.log(`cd ${repoName} to get started!`);

