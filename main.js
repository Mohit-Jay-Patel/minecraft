var canvas= new fabric.Canvas("myCanvas");

var block_width=30;
var block_height=30;

var player_x=10;
var player_y=10;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function New_object(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("p shift pressed");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("m shift pressed");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keypressed=='38'){
        console.log("up");
        up();
    }
    if(keypressed=='40'){
        console.log("down");
        down();
    }
    if(keypressed=='37'){
        console.log("left");
        left();
    }
    if(keypressed=='39'){
        console.log("right");
        right();
    }
    if(keypressed=='87'){
        console.log("w");
        New_object("wall.jpg");
    }
    if(keypressed=='71'){
        console.log("g");
        New_object("ground.png");
    }
    if(keypressed=='76'){
        console.log("l");
        New_object("light_green.png");
    }
    if(keypressed=='84'){
        console.log("t");
        New_object("trunk.jpg");
    }
    if(keypressed=='82'){
        console.log("r");
        New_object("roof.jpg");
    }
    if(keypressed=='89'){
        console.log("y");
        New_object("yellow_wall.png");
    }
    if(keypressed=='85'){
        console.log("u");
        New_object("unique.png");
    }
    if(keypressed=='67'){
        console.log("c");
        New_object("cloud.jpg");
    }
    if(keypressed=='68'){
        console.log("d");
        New_object("dark_green.png");
    }
}
function up(){
    if(player_y >=15){
        player_y=player_y - block_height;
        console.log("block_height="+ block_height);
        console.log("When up arrow key is pressed, X= "+player_x + ",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <=450){
        player_y=player_y + block_height;
        console.log("block_height="+ block_height);
        console.log("When down arrow key is pressed, X= "+player_x + ",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >=0){
        player_x=player_x - block_width;
        console.log("block_width="+ block_width);
        console.log("When left arrow key is pressed, X= "+player_x + ",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <=840){
        player_x=player_x + block_width;
        console.log("block_width="+ block_width);
        console.log("When right arrow key is pressed, X= "+player_x + ",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}