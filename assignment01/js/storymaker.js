// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");

// Variables for pre-defined arrays
var nouns1 = ["cat", "dog", "bird", "elephant", "lion", "turtle", "monkey", "giraffe", "tiger", "rabbit"];
var verbs = ["runs", "jumps", "flies", "swims", "climbs", "hops", "dances", "sings", "crawls", "slides"];
var adjectives = ["happy", "brave", "funny", "smart", "playful", "curious", "silly", "friendly", "cuddly", "energetic"];
var nouns2 = ["ball", "tree", "house", "flower", "mountain", "river", "castle", "car", "boat", "star"];
var settings = ["park", "beach", "forest", "city", "farm", "zoo", "space", "underwater", "jungle", "desert"];
// Variables for count to grab array elements
var noun1Count = 0;
var verbCount = 0;
var adjectiveCount = 0;
var noun2Count = 0;
var settingCount = 0;
/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    choosenNoun1.textContent = nouns1[noun1Count];
    // if-else to change count setting
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
choosenVerb.textContent = verbs[verbCount];
verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
choosenAdjective.textContent = adjectives[adjectiveCount];
adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
choosenNoun2.textContent = nouns2[noun2Count];
noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
choosenSetting.textContent = settings[settingCount];
settingCount = (settingCount + 1) % settings.length;
}

// concatenate the user story and display
function playback_on_click() {
    const finalStory = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`;
    story.textContent = finalStory;
  }

// grabbing random element from arrays, concatenate and display
function random_on_click() {
const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
const randomSetting = settings[Math.floor(Math.random() * settings.length)];

choosenNoun1.textContent = randomNoun1;
choosenVerb.textContent = randomVerb;
choosenAdjective.textContent = randomAdjective;
choosenNoun2.textContent = randomNoun2;
choosenSetting.textContent = randomSetting;

const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
story.textContent = randomStory;
}

function reset_on_click() {
choosenNoun1.textContent = "";
choosenVerb.textContent = "";
choosenAdjective.textContent = "";
choosenNoun2.textContent = "";
choosenSetting.textContent = "";
story.textContent = "";
}


/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
reset.addEventListener("click", reset_on_click);