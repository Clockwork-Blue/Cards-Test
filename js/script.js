
function fillmaintext(){
document.getElementById("main-content").innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

const adjective = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even","Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "High-pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing", "Thundering", "Voiceless", "Whispering", "glorious", "charming", "serene", "whimsical", "lively", "joyful", "glittering", "shining", "effervescent", "stunning", "blissful", "brilliant", "mesmerizing", "enchanting", "captivating", "peaceful", "gorgeous", "beaming", "twinkling", "vibrant", "shimmering", "beautiful", "dazzling", "radiant", "cheerful", "peaceful", "brilliant", "gleaming", "dazzling", "radiant", "sparkling"];
const object = ["Taco", "Operating System", "Sphere", "Watermelon", "Cheeseburger", "Apple Pie", "Spider", "Dragon", "Remote Control", "Soda", "Barbie Doll", "Watch", "Purple Pen", "Dollar Bill", "Stuffed Animal", "Hair Clip", "Sunglasses", "T-shirt", "Purse", "Towel", "Hat", "Camera", "Hand Sanitizer Bottle", "Photo", "Dog Bone", "Hair Brush", "Birthday Card", "pen", "pencil", "notebook", "eraser", "ruler", "calculator", "stapler", "paper clip", "binder", "highlighter", "marker", "pen case", "protractor", "compass", "scissors", "tape", "glue", "magnifying glass", "whiteboard", "dry erase marker", "clipboard", "pencil sharpener", "hole punch", "white out", "paper", "cardboard", "file folder", "sticky note", "index card", "manila envelope", "pen refill", "photo album", "picture frame", "address book", "journal", "sticky tack", "cardboard box", "cardboard tube", "paper shredder", "file cabinet", "paper weight", "desk lamp", "desk chair", "desk pad", "memo pad", "adventurous_explorer", "creative_genius", "curious_cat", "music_lover", "bookworm", "foodie", "traveler", "adventurer", "nature_enthusiast", "photographer", "yogi", "fitness_fanatic", "techie", "gamer", "movie_buff", "science_nerd", "history_enthusiast", "art_appreciator", "fashionista", "pet_lover", "family_first", "outdoor_adventurer", "hiker", "skier", "surfer", "paddleboarder", "kayaker", "fisher", "biker", "runner", "swimmer", "climber", "spelunker", "skydiver", "paraglider", "sailor", "pilot", "veteran", "teacher", "student", "scientist", "engineer", "doctor", "nurse", "lawyer", "artist", "writer", "musician", "dancer", "actor", "director", "producer", "entrepreneur", "philanthropist", "environmentalist", "humanitarian", "activist", "philosopher", "theologian", "psychologist", "sociologist", "economist", "politician", "diplomat", "military_member", "peacekeeper", "human_rights_advocate", "cultural_ambassador", "interpreter", "translator", "explorer", "archaeologist", "astronomer", "geologist", "meteorologist", "oceanographer", "biologist", "botanist", "zoologist", "entomologist", "ornithologist", "herpetologist", "ichthyologist", "mammalogist", "paleontologist", "ecologist", "agronomist", "forest_scientist", "wildlife_biologist", "marine_biologist", "veterinarian", "doctor_of_veterinary_medicine", "animal_behaviorist", "animal_trainer", "pet_groomer", "pet_sitter", "dog_walker", "cat_sitter", "horseback_rider", "equestrian", "cowboy", "rodeo_rider", "farmer", "rancher"];
let list;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function gtRndImg() {
    let number = getRndInteger(1,506);
    return "img/img ("+ number +").webp";
}

function createcard(cnumber) {
    //card
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("dflex");
    mainContainer.classList.add("wrap");
    document.body.appendChild(mainContainer);
    for(let i = 0; i < cnumber; i++ ){
    let card = document.createElement("div");
    card.classList.add("bGrey");
    card.classList.add("Card");
    mainContainer.appendChild(card);
    //top
    let topRow = document.createElement("div");
    topRow.classList.add("CardRow");
    topRow.classList.add("c-top");
    card.appendChild(topRow);
    let cardName = document.createElement("span");
    cardName.classList.add("card-name");
    let nameT = "u/" + adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];
    cardName.innerHTML = nameT;
    cardName.title = nameT;
    topRow.appendChild(cardName);
    //img
    let cardCenter = document.createElement("div");
    cardCenter.classList.add("CardRow");
    cardCenter.classList.add("c-center");
    card.appendChild(cardCenter);
    let cardImg = document.createElement("img");
    cardImg.classList.add("emph-hov");
    cardImg.src = gtRndImg();
    cardCenter.appendChild(cardImg);
    //footer
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("CardRow");
    cardFooter.classList.add("c-footer");
    card.appendChild(cardFooter);
    let cardFooterContent = document.createElement("span");
    cardFooterContent.innerText= "ImView 2023©";
    cardFooter.appendChild(cardFooterContent);
    }
}