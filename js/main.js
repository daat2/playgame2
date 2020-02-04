const game = {
    userSequence: [], //array containing the user selected button
    playSequence: [], //array containing simon random button
    numLevels: 20

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
const strict = document.querySelector('#strict');


// let game ={

//   strict : false,
//    wrong :false,
//    turn : 0,
//   noise : true ,


// };

// start.addEventListener('click', (event) => { 
//     $(".counter").text("01");

$(document).ready(function () {
    $(".start").click(function () {
        level++;
        startSequence();

    })

})
/*playSequence */
function startSequence() {
    $(".counter").text(level);
    getRandomNumber();
    var i = 0;
    var myInterval = setInterval(function () {
        id = playSequence[i];
        color = $("#+id").attr("class").split(" ")[id];
        addClassSound(id, color);
        i++;
    }, 1000);

    if (i == playSequence.length)
        i = 0;
    clearInterval(myInterval);
}
/*generate random number */
function getRandomNumber() {
    var random = math.floor(math.random() * 4);
    playSequence.push(random);
}
/* class sound */
function addClassSound(id, color) {
    $("# +id ").addClassSound(color + ".active");
    // playSound()
    setTimeout(function () {
        $("#+id").removeClass(Color + ".active");
    },500);
/* play board sound  */
function playSound(id) {
    var sound =new Audio(boardSound)[id];
    sound.play();

}
};