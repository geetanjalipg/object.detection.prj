img="";
status="";
objects= [];

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Satus: Detecting Objects";

}
function modelloaded(){
    console.log("Model Loaded!")
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
    objects= results; 
}

function preload(){
img= loadImage('kitchen.png');
}

function draw(){
    image(img,0 ,0 , 640, 420);
    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
    
            fill("blue");
            percent= floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + " %", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("blue");
        rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height);
        }
    }
   

}
