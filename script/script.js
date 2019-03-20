  


let squares = 10;//just to test size
let randomColor = false;

const container = document.getElementById('container');
//creates grid
const div = document.createElement('div') ;
div.id ='grid';
container.appendChild(div);

//fills grid on load (look up for another way)
    for(i=0; i < Math.pow(squares, 2); i++){
        var li = document.createElement('div');
        li.classList.add ('square');

        li.style.width = 500/squares;
        li.style.height = 500/squares;
        div.appendChild(li);
    }
    function fillCircle(){
    for(i=0; i < Math.pow(squares, 2);i++){
        var li = document.createElement('div');
        li.classList.add ('circle');
        li.style.width = 500/squares;
        li.style.height = 500/squares;
        div.appendChild(li);
    }
};


//fills grid
function fill(){
    for(i=0; i < Math.pow(squares, 2); i++){
        var li = document.createElement('div');
        li.classList.add ('square');
        li.style.width = 500/squares;
        li.style.height = 500/squares;
        div.appendChild(li);
    }
};

//deletes all the squares on the grid
function deleteSquares(){
    let grid = document.getElementById('grid');
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
};

//Clear button on click
 let clear = document.getElementById('clear');
 clear.addEventListener('click',function(){ 
    do{
        squares = prompt("How many squares you want? Must be more than 0 and less than 100");
        if(squares==null){
            squares = 16;
        }
    }while(squares>130 || squares < 1 || !isNumber(squares));

    randomColor = false;
    deleteSquares();
    fill();
 });
    let circle = document.getElementById('circle');
    circle.addEventListener('click',function () {

    do{
        
        squares = prompt("How many squares you want? Must be more than 0 and less than 100");
        if(squares==null){
            squares = 16;
        }
    }
    while(squares>100 || squares < 1 || !isNumber(squares));
    randomColor = true;

    deleteSquares();
    fillCircle();
 });

 //Random button on click
 let mixed = document.getElementById('mixed');
 mixed.addEventListener('click',function () {
    do{
        squares = prompt("How many squares you want? Must be more than 0 and less than 100");
        if(squares==null){
            squares = 10;
        }
    }
    while(squares>100 || squares < 1 || !isNumber(squares));
    randomColor = true;
    deleteSquares();
    fill();
 });


//change square color
let changecolor = (e) =>{
    if(e.target.getAttribute('class') == 'square' || 
        e.target.getAttribute('class') == 'circle'){
        if(randomColor){
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            e.target.style.background = color;
        }else{
            e.target.style.background = 'black';
        }
        
    }
};
//change color
let test = document.getElementsByClassName('square');
Array.prototype.forEach.call(test,function(){
    addEventListener('mouseover',changecolor);
});


function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};