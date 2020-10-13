canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img = "car1.png";
car1_X = 10;
car1_Y = 10;


car2_width = 120;
car2_height = 70;
car2_img = "car2.png";
car2_X = 10;
car2_Y = 100;

background_img = "racing.jpg";

function add(){
background_imgTag = new Image();
background_imgTag.onload = upload_background;
background_imgTag.src = background_img;

car1_imgTag = new Image();
car1_imgTag.onload = upload_car1;
car1_imgTag.src = car1_img;
 
car2_imgTag = new Image();
car2_imgTag.onload = upload_car2;
car2_imgTag.src = car2_img;
}

function upload_background(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function upload_car1(){
    ctx.drawImage(car1_imgTag, car1_X, car1_Y, car1_width, car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_imgTag, car2_X, car2_Y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypress = e.keyCode;
    console.log("Keypress")
    if (keypress == '38'){
        car1up();
        console.log("up");
    }
    if (keypress == '40'){
        car1down();
        console.log("down");
    }
    if (keypress == '37'){
       car1left();
       console.log("Left");
    }
    if (keypress == '39'){
        car1right();
        console.log("right")
    }
    if (keypress == '68'){
        car2right();
        console.log("d")
    }
    if (keypress == '65'){
        car2left();
        console.log("a");
     }
     if (keypress == '83'){
        car2down();
        console.log("s");
     }
     if (keypress == '87'){
        car2up();
        console.log("w");
    }
    if(car1_X > 700){
        console.log("Car 1 won");
        document.getElementById('game_status').innerHTML = "Car1 won"
    }
    if(car2_X > 700){
        console.log("Car 2 won");
        document.getElementById('game_status').innerHTML = "Car2 won"
    }

}

function car1up(){

    if (car1_Y >= 0){
        car1_Y = car1_Y - 10;
        console.log("When up arrow is pressed X = "+ car1_X + "Y =" + car1_Y);
        upload_background();
        upload_car1();
        upload_car2()
    }
}
function car1down(){
    if (car1_Y <= 500){
        car1_Y = car1_Y + 10;
        console.log("When down arrow is pressed X = "+ car1_X + "Y =" + car1_Y);
        upload_background();
        upload_car1();
        upload_car2()
    }
}
function car1left(){
    if (car1_X >= 0 ){
        car1_X = car1_X - 10;
        console.log("When left arrow is pressed X = "+ car1_X + "Y =" + car1_Y);
        upload_background();
        upload_car1();
        upload_car2()
    }
}
function car1right(){
    if (car1_X <= 700 ){
        car1_X = car1_X + 10;
        console.log("When right arrow is pressed X = "+ car1_X + "Y =" + car1_Y);
        upload_background();
        upload_car1();
        upload_car2()
    }
}
function car2up(){

    if (car2_Y >= 0){
        car2_Y = car2_Y - 10;
        console.log("When w arrow is pressed X = "+ car2_X + "Y =" + car2_Y);
        upload_background();
        upload_car1();
        upload_car2()
    }
}
function car2down(){
    if (car2_Y <= 500){
        car2_Y = car2_Y + 10;
        console.log("When s arrow is pressed X = "+ car2_X + "Y =" + car2_Y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2left(){
    if (car2_X >= 0 ){
        car2_X = car2_X - 10;
        console.log("When up arrow is pressed X = "+ car2_X + "Y =" + car2_Y);
        upload_background();
        upload_car1();
        upload_car2()
    }
}
function car2right(){
    if (car2_X <= 700 ){
        car2_X = car2_X + 10;
        console.log("When up arrow is pressed X = "+ car2_X + "Y =" + car2_Y);
        upload_background();
        upload_car1();
        upload_car2()
    }
}

    
