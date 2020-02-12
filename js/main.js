const game = {
    playerSequence: [], //array containing the user selected button
    simonSequence: [], //array containing simon(computer) random button
    numLevels: 20,  //gave max level
   

};
const boardSound = [
    "https://freesound.org/data/previews/151/151022_1838182-lq.mp3",    // blue button
    "https://freesound.org/data/previews/156/156859_2538033-lq.mp3",	// yellow button
    "https://freesound.org/data/previews/171/171495_2437358-lq.mp3",   // green button
    "https://freesound.org/data/previews/191/191591_2437358-lq.mp33",    // orange button
    "https://freesound.org/data/previews/151/151605_57789-lq.mp3",    // winner button
];
const blue = document.querySelector('#shapeB');
const green = document.querySelector('#shapeY');
const orange = document.querySelector('#shapeG');
const yellow = document.querySelector('#shapeO');
const start = document.querySelector('.start');
const strictButton = document.querySelector('#strict')
const counter= document.querySelector('.counter');


let id,color,level=0;

let error =false;
let turn =0; //to keep count of game 
let mode =false;
let win; // to indicate if game is being won 

document.getElementById("strict").addEventListener("click", function(){
 console.log("checked")
});