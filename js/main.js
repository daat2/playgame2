const game = {
    playerSequence: [], //array containing the user selected button
    simonSequence: [], //array containing simon(computer) random button
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




// start.addEventListener('click', (event) => { 
//     $(".counter").text("01");
/* 1 start board sequence */


let id,color,level=0;

let error =false;

$(document).ready(function () {
    $(".start").click(function () {
        level++;
      simonSequence(); //start

    })
//user button listner //
$(".button").click(function(){
    id =$(this).attr("id");
    color =$(this).attr("class").split("")[1];
    userSequence.push(id);
    console.log (id+" "+color);
    addClassSound(id,color);

    //check user sequence 
//usercorrect
    if (!checkUserSeq()) { 
displayErr();
userSequence =[];
    }
//check end of sequence
    if (userSequence.lenght ==playSequence.lenght && userSeq.length<
        numLevels){
        level++;
        userSequence=[];
        playSequence=[];

    }
    // check for winners
if (userSeq.length==numLevels) {
    $(."display").text("win");
}
})

})

//checking user sequence aginst playsequence

function checkUserSeq () {
    for(var i=0;1 < userSequenc.lenght; i++){
        if (userSequence[i] != playSequence[i]){
                return false;
        }
    }
    return true;
}

//display error f
function displayError() {
console.log("Err");
var count =0 ;
var myError = setInterval(fuction(), {
    $(".counter").text("Err"),
        count++;
}
    if(count== 3){
$(".counter").text(level);
clearInterval();
userSequenc=[]
count=0;
 }
}, 500);
};

/* 2 playSequence */
function playSequence() { //start
    console.log(level);
    $(".counter").text(level);
    // getRandomNumber();
    var i = 0;
    var myInterval = setInterval(function () {
        id = playSequence[i];
        color = $("#+id").attr("class").split(" ")[id];
        console.log(id+" "+ color);
        addClassSound(id, color);
        i++;
         if (i == playSequence.length)
        i = 0;
    clearInterval(myInterval);
    }, 1000);

   
}
/* 3 generate random number */
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
    var sound =new Audio(boardSound [id]);
    sound.play();

}
}


