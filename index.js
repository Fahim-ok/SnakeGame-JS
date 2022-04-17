let inputDir = {x:0,y:0};
const foodSound = new Audio ('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio ('music/move.mp3');
const musicSound  = new Audio('music/music.mp3');
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArray = [{x:13,y:15}];
food = {x:6,y:7};

//game functions
function main(ctime){
    //running game loop
    window.requestAnimationFrame(main);
    //console.log(ctime)
    //rendering fps
    if((ctime - lastPaintTime)/1000< 1/speed){
        return;
    }
    //update

    lastPaintTime = ctime;
    gameEngine();

   
}

function isCollide(snake){
    //bumping myself the snake
    for (let i = 1; i < snakeArray.length; i++) {
        //const element = array[index];
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y ){
            return true;
        }
        

    }
    //bump into the wall
    if(snake[0].x >=20 || snake[0]<=0 || snake[0].y >=20 || snake[0].y<=0 ){
        return true;
    }
}


   



function gameEngine(){
    if(isCollide(snakeArray)){
        gameOverSound.play();
        musicSound.play();
        inputDir ={x:0,y:0};
        alert("Game over.Try hard")

        // again in the same postion
        snakeArray =[{x:13,y:15}]
        musicSound.play();
        score =0;



        


    }

//     //part-1 updating snake variable array and food

//increament the score if you have eaten the food

if(snakeArray[0].y == food.y && snakeArray[0].x == food.x){
    foodSound.play();
    snakeArray.unshift({x:snakeArray[0].x + inputDir.x,y:snakeArray[0].y + inputDir.y})
    //meassruing taking the grid
    let a = 2 ;
    let b= 16;
    food = {x:Math.round(a+(b-a) * Math.random()),y:Math.round(a+ (b-a)* Math.random())}
}

//moving the snake
for(let i =snakeArray.length -2 ; i>=0;i--){
   // const element = array[i];
    snakeArray[i+1] = {...snakeArray[i]};
    //calling through the object
}

snakeArray[0].x  += inputDir.x;
snakeArray[0].y  += inputDir.y;

//part-2 displatying the snake
//making snake
    board.innerHTML = "";
    //moving those elements
    snakeArray.forEach((e,index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        

        //adding the head of the snake
        if(index == 0){
        snakeElement.classList.add('head');
        }
        else{
        snakeElement.classList.add('snake');
        }
     

        board.appendChild(snakeElement);
    });
    //making the foood
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);




}
   






    //part-2 render the snake and food




//game logics
//using this frame for high quality animation 
window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {x: 0, y: 1} // Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }

});