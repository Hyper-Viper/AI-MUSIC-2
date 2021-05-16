megalovania = "";
come_2gether = "";

function preload(){
    megalovania = loadSound("Megalovania.mp3");
    come_2gether = loadSound("Come_2gether.mp3");
}

function setup(){
    canvas = createCanvas(490, 350);
    canvas.parent("center");

    document.getElementById("defaultCanvas0").style.removeProperty("position");

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 1, -1, 490, 350);
}
