const game = {
    userSequence: [], //array containing the generated/random button
    playSequence: [], //array containing the users selected button
    numLevels: 20

};
const boardSound = [
    "https://freesound.org/data/previews/151/151022_1838182-lq.mp3",    // blue button
    "https://freesound.org/data/previews/156/156859_2538033-lq.mp3",	// yellow button
    "https://freesound.org/data/previews/171/171495_2437358-lq.mp3",   // green button
    "https://freesound.org/data/previews/191/191591_2437358-lq.mp33",    // orange button
    "https://freesound.org/data/previews/151/151605_57789-lq.mp3"  ,    // winner button
];
const blue = document.querySelector('#shapeB');
const green = document.querySelector('#shapeY');
const orange = document.querySelector('#shapeG');
const yellow = document.querySelector('#shapeO');
const start = document.querySelector('.start');
const strict = document.querySelector('#strict')


let game ={

  strict : false,
   wrong :false,
   turn : 0,
  noise : true ,
  

};

start.addEventListener('click', (event) => {
    $(".counter").text("01");

});
