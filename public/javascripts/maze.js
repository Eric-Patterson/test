// function random() {
//   maze = ["/right/first", "/right/secondL", "/right/secondR"];
//   let randomItem = maze[Math.floor(Math.random() * maze.length)];

//   console.log(randomItem);
// }

// // module.exports = random();

typingTest = [
  {
    number: 1,
    passage:
      "except for the occasional episode of teenage acne, he rarely saw anyone under forty.He specialized in cosmetic dermatology-Botox injections, chemical peels, nail fungus treatments. Hopeless cases of upper-middle-aged women trying to look the way they did at twenty. Imploring him like Rumplestiltskin to spin straw into gold. Stiltskin, yes, that's exactly how they saw him. As if he might boost up faces with the lift of a magic wand. These people kept him in business, but he knew what they refused to admit: youth is only eternal in fairy tales. Blend in the age spots, smooth out the wrinkles, thicken the lips-still, old is old.",
  },
  {
    number: 2,
    passage:
      "no one can escape it. The doctor reveled in it. He wore his age like a weapon, like an accusation, refusing even the mildest of his own remedies.Once he had wanted to change people's lives, save them from the crippling effects of facial disfigurement. Now he only wanted to make it through each day. The doctor had a very comfortable routine. He rose every morning at six o' clock, sipped coffee and watched the weather report. In the office by 7:30 to review files and get ready for the first patient at nine. He would prescribe creams and ointments, perform minor surgical procedures under local anesthetic, do follow-up checks.",
  },
  {
    number: 3,
    passage:
      "two hours off for lunch, then out the door by five on the dot. Stop by the florist for a fresh bouquet-something to match up with the multi-floral pattern of Clara's curtains, all the better if on sale. Home by six to catch the evening news while he ate whatever the housekeeper had prepared him for dinner. Though he used to enjoy cooking occasionally, he'd rarely touched the stove since Clara died, some twenty-odd years ago. Didn't seem worth the energy to cook for one. The housekeeper made large meals that could be frozen in individual portions, placed a different selection in the oven to warm for him each night.",
  },
];
// random number based on number of arrays
const randomNumber = Math.floor(Math.random() * typingTest.length);

// console.log(randomNumber);
// console.log(typingTest[randomNumber].passage);

// fills out textarea with random passage
randomPassage = document.getElementById("passage").innerHTML =
  typingTest[randomNumber].passage;

console.log(randomPassage.length);

const log = document.getElementById("log");
document.addEventListener("keydown", logKey);

let keyCounter = 0;
let counter = 0;
// function keys() {
//   if ((keyDown = true)) {
//     //displays each character on press
//     console.log(randomPassage.charAt(keyCounter));
//     keyCounter++;
//   }
// }
// console.log();
// this logs users keypresses

function logKey(e) {
  //   let keysInput = e.key;
  // logs the data in the <p id="log">

  let keysInput = e.key;
  //   console.log("Key Pressed", keysInput);

  if (keysInput === randomPassage[counter]) {
    log.innerHTML += `${e.key}`;
    counter++;
    console.log(counter);
    console.log(`Success ${keysInput}`);
  } else {
    console.log("Try Again");
  }

  if ((keysInput = true)) {
    //displays each character on press
    currentKey = randomPassage.charAt(keyCounter);
    // console.log("testing", currentKey);
    keyCounter++;
  } else {
    console.log("error");
  }
  startTimerOnce();

  //   loops through text and get character
  // for (let i = 0; i < randomPassage.length; i++) {
  //   console.log(randomPassage.charAt(keyCounter));
  // }
}

function match() {
  if (logKey(e) === randomPassage[0]) {
    console.log("sucess");
  }
}

// If timer not started, call once, wont call repeatidly on keypress
function startTimerOnce() {
  if (!timerStarted) startClock();
}
// start timer off false
let timerStarted = false;

function startClock() {
  setInterval(setTime, 1000);
  timerStarted = true;
}

// timer
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let timer = 0;
let wordPerMin = 0;

function setTime() {
  ++timer;
  seconds.innerHTML = pad(timer % 60);
  minutes.innerHTML = pad(parseInt(timer / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
