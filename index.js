const pianokeys = document.querySelectorAll(".piano-keys .key");
volumeliders = document.querySelector(".volumn-slider  input");
keyscheckbox = document.querySelector(".keys-checkbox  input");
let allkeys =[],
audio = new Audio("tunes/a.wav");

const playtune =(key) => {
    audio.src =`tunes/${key}.wav`; // passing audio src based on key pressed
audio.play();
const clickedkey =document.querySelector(`[data-key="${key}"]`); // getting clicked the element
clickedkey.classList.add("active"); // adding  active class  after 150 ms the clicked key element
 setTimeout(() => { // removing active class  after 150 ms the clicked key element
    clickedkey.classList.remove("active");
 }, 150);
}

pianokeys.forEach(key =>{
    allkeys.push(key.dataset.key); // adding data-key value to the allkey array
    key.addEventListener("click" ,() => playtune(key.dataset.key))
    console.log(key.dataset.key);
})

const handlevolume =(e) =>{
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const showhidekey =(e) =>{
    // toggling hide class from each key on the checkbox click
    pianokeys.forEach(key => key.classList.toggle("hide"));
}
const pressedkey = (e) => {
    // if the pressed key is in the allkeys array ,only call the playtune function
    if(allkeys.includes(e.key)) playtune(e.key);
}

volumeliders.addEventListener("input", handlevolume);
document.addEventListener("keydown", pressedkey);
keyscheckbox.addEventListener("click", showhidekey);