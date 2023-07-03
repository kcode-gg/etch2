//select the elements on the page - canvas, shake button

const canvas = document.querySelector("#etch-a-sketch");

const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');

const MOVE_AMOUNT = 30;
//setup our canvas for drawing
const width = canvas.width;
const height = canvas.height;

//create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);




ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); //start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function
function draw ({ key }){
    // increment stroke style color
    hue += 3;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    //start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    //move our x and y values to depending on what the user did
    switch (key) {
        
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
       
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;    
        
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;

        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;

        default:
            break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

//write a handler for the keys
function handleKey(e) {
    
    if (e.key.includes('Arrow')){
        e.preventDefault();
        draw({key: e.key});  
    }
   
};

// clear function - shake button
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function() {
        canvas.classList.remove('shake');
    }, { once: true });
}
//listen for arrow keys
window.addEventListener('keydown', handleKey);

shakeButton.addEventListener('click', clearCanvas);

const secret = document.querySelector('.secret');

secret.addEventListener('click', function(e){
    const getAccess = prompt('Hey, you found me! To get access, what is the secret phrase?');

    if (getAccess === 'KCODE'){
        alert("Congrats! Here is the discord invite code. \n It's valid for 1 use so do not share it.\n xC78KBLdf");
    } else {
        alert("Nice try dog. Come again once you're worthy");
    }

})