const secretWords = ["london", "newyork", "tehran", "tokyo"];
let randomItem="";
let clicked=[];
let mistakes=0;
let resualt="";


function setUnderLineScores()
{
    let splitedWord=randomItem.split("");
    let mappedWord=splitedWord.map(letter =>(clicked.indexOf(letter)>=0 ? letter : "_"));
    result=mappedWord.join("");
    document.getElementById("clue").querySelector("p").innerText=result;
}

function checkIfLose()
{
    if(mistakes===6)
    {
        document.getElementById("gameOver").querySelector("p").style.display="block";
        document.getElementById("clue").querySelector("p").innerText=`You lose ,  RandoWord is ${randomItem}`;
        document.getElementById("reload").style.display="block";
    }
}
function checkIfWin()
{
    if(result===randomItem)
    {
        document.getElementById("hangManPicture").querySelector("img").src="assets/winner.png";
        document.getElementById("gameOver").querySelector("p").style.display="block";
        document.getElementById("reload").style.display="block";
    }
}
function updateHangmanPicture()
{
    document.getElementById("hangManPicture").querySelector("img").src=`assets/hangman${mistakes}.png`;
}
function letterHandler(letter)
{
    letter=letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className="used";
    if(randomItem.indexOf(letter)>=0)
    {
        setUnderLineScores();
        checkIfWin();

    }
    else if(randomItem.indexOf(letter)===-1)
    {
        mistakes++;
        checkIfLose()
        updateHangmanPicture();
    }


}




function buttonHandler(event)
{
    if(event.target.id !=="Alphabet")
    {
        letterHandler(event.target.id);
    }
}
function keyHandler(event)
{
    letterHandler(event.key);
}
function reload()
{
    window.location.reload();
}



function getInformationFromUser()
{
    document.getElementById("Alphabet").addEventListener("click",buttonHandler);
    window.addEventListener("keydown",keyHandler);
    document.getElementById("reload").addEventListener("click",reload)

    
}
function selectRandomItem()
{
    randomItem=secretWords[Math.floor(Math.random() * secretWords.length)];
    setUnderLineScores();
    console.log(randomItem)
}
getInformationFromUser();
selectRandomItem();