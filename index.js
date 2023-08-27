// Todo: Make M+ M- and MC functional
let string = "";
// const moveSound = new Audio('sound1.wav');
const clickS = new Audio('click1.mp3');
const eraseS = new Audio('click.mp3');
const finalS = new Audio('final.mp3');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    clickS.play();
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
      finalS.play();
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
      eraseS.play();
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})