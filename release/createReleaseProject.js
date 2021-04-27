// Requiring filesystem.
var fs = require("fs");
// Requiring ncp package for folder cloning.
var ncp = require('ncp').ncp;
ncp.limit = 16;
// Requiring javascript-obfuscator package for JS obfuscation.
var jsObfuscator = require('javascript-obfuscator');
// Preparing the sleep command to delay obfuscation and minification.
const sleep = (milliseconds) => {
 return new Promise(resolve => setTimeout(resolve, milliseconds))
}
// Array of projects to prepare for release.
// Add new project names exactly as they appear in the repo folder.
// Projects must be placed in the lowest part of the repo folder (the repo name).
// Example: "marystoys" is the project name, and is placed in '/yourRepoName/' (NOT '/yourRepoName/Projects/' or similar)
var projectNames = [
 "AceFrontier"
];
// Calling the preparingReleaseFolders() function on each project name defined.
projectNames.forEach(prepareReleaseFolders);
// Prepares each project with a release folder labeled with the current date.
function prepareReleaseFolders(projectName, index){
 var releaseFolderExists = false;
 //console.log('Preparing '+ projectName + ' for release...');
 // Getting current date and preparing it to be appended to the project folder.
 var currentDate = "_" + new Date().toDateString().split(' ').map(function(item){return item.trim();}).join('_');
 // Creating the release project directory string (example: 'release/marystoys_Sun_Mar_29_2020/' ).
 var releaseProjectDirectory = 'release/' + projectName + currentDate + '/';
 // Calling the cloneFolder method, passing in the name of the project and what the result directory should be.
 releaseFolderExists = cloneFolder(projectName, releaseProjectDirectory);
 // Verifying the directory exists before confirming a successful clone.
 if (fs.existsSync(releaseProjectDirectory)){
 console.log('Successfully cloned '+ projectName + ' project ( ' + releaseProjectDirectory + ' )');
 console.log('');
 };
 // Waiting 100ms before verifying a second time that the directory exists, then starting obfuscation and minification process.
 sleep(100).then(() => {
 if (fs.existsSync(releaseProjectDirectory)){
 console.log('');
 console.log('Obfuscating JS and Minifying CSS of ' + projectName + '...');
 obfuscateJS(releaseProjectDirectory);
 minifyCSS(releaseProjectDirectory);
 // Alerting user that the project is prepared for release.
 console.log(projectName + ' prepared for release. ( ' + releaseProjectDirectory + ' )');
 }
 })
}
// Clones the folder located at projectName into a new directory defined by releaseProjectDirectory.
function cloneFolder(projectName, releaseProjectDirectory){
 ncp(projectName + '/', releaseProjectDirectory, function (err) {
 if (err) {
 console.log('ERROR: Could not find ' + projectName + '!');
 console.log('Please verify project name is correct and '+
 'project folder is in the lowest repo directory. ( repoName/yourProjectName )');
 //return console.error(err);
 return console.error('');
 }
 });
 // The release folder is done, returning true to start obfuscation and minification process.
 return true;
}
// Obfuscates the site.js javascript file within Source/js/ of the releaseProjectDirectory parameter
function obfuscateJS(releaseProjectDirectory){
 var codeToObfuscate = releaseProjectDirectory + 'Source/js/site.js'
 //console.log("Getting JS code from " + codeToObfuscate)
 // Reading the Javascript file as text.
 fs.readFile(codeToObfuscate, "UTF-8", function(err, data){
 if (err){
 return console.error('');
 }
 //console.log("Obfuscating code...")
 // Obfuscate the file.
 var obfuscateResult = jsObfuscator.obfuscate(data);


 //console.log("Creating new JS file in " + codeToObfuscate)
 // Creating a new Javascript file with the obfuscate results.
 fs.writeFile(codeToObfuscate, obfuscateResult.getObfuscatedCode(), function(err){
 if (err){
 return console.error('');
 }
 //console.log("The file was saved! ("+ codeToObfuscate +").")
 });
 });
}
// Obfuscates the site.css javascript file within Source/css/ of the releaseProjectDirectory parameter
function minifyCSS(releaseProjectDirectory){
 var codeToMinify = releaseProjectDirectory + 'Source/css/site.css'
 //console.log("Getting CSS code from " + codeToMinify)
 fs.readFile(codeToMinify, "UTF-8", function(err, data){
 if (err){
 return console.error('');
 }
 //console.log("Minifying code...")
 // Splitting by spaces, brackets, and semicolons to minify the file.
 // I couldn't find an online solution that worked through a javascript file, so I made it myself.
 // If I missed anything, it should be easy to add in the character that's not properly being removed.
 // Make sure you have a split, map, then join for each new character added!
 var minifiedCode = data.split(' ') // Splitting string by spaces
 .map(function(item){
 return item.trim(); // Trimming each split item, removing extra spaces around the items.
 })
 .join('') // Joining the items back together without any spaces.
 .split('}') // Splitting string by right bracket
 .map(function(item){
 return item.trim(); // Trimming each split item, removing extra spaces around the items.
 })
 .join('}') // Joining the items back together and re-adding the bracket.
 .split('{') // Splitting string by left bracket
 .map(function(item){
 return item.trim(); // Trimming each split item, removing extra spaces around the items.
 })
 .join('{') // Joining the items back together and re-adding the bracket.
 .split(';') // Splitting string by semicolon
 .map(function(item){
 return item.trim(); // Trimming each split item, removing extra spaces around the items.
 })
 .join(';'); // Joining the items back together and re-adding the semicolon.
 // Creating a new CSS file in the location designated above.
 //console.log("Creating new CSS file in " + codeToMinify)
 fs.writeFile(codeToMinify, minifiedCode, function(err){
 if (err){
 return console.error('');
 }

 //console.log("The file was saved! ("+ codeToMinify +").")
 });
 });
}