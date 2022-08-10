noseX = 0;
noseY = 0;

leftWristX = 0;
rightWristX = 0;

difference = 0;

function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(800, 100);
    video = createCapture(VIDEO);
    video.position(200, 100);
    video.size(500, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#fedbff');
    fill("#ed8e9e");
    square(noseX, noseY, difference);
    stroke("#e0aee8");
    strokeWeight(3);
    document.getElementById("WHSQ").innerHTML = "width and height of square is equal to "+difference+" px ";
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x= "+noseX+" nose y= "+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist "+leftWristX+" rightWrist "+rightWristX+" difference "+difference);
    }
}