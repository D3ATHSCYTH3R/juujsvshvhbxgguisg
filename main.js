function preload(){

}
function setup(){
canvas=createCanvas(650, 450);
canvas.position(325, 150);
video=createCapture(VIDEO);
video.size(650,450);
video.hide();
posenet=ml5.poseNet(video, callanyfunction);
posenet.on('pose', callanotherfunction);

}
function draw(){
image(video,0,0,650,450);

}
function ts(){
    save("bird.png");
}
function callanyfunction(){
    console.log("posenet is loaded");
}
function callanotherfunction(results){
if(results.length>0){
    console.log(results);
    console.log("nose,x="+results[0].pose.nose.x);
    console.log("nose,y="+results[0].pose.nose.y);
}
}