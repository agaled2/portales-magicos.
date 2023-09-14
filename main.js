function setup(){
 video = createCapture(VIDEO);
 Canvas = createCanvas(640,480);
 background("red")
 pose = ml5.poseNet(video, listo)
 pose.on("pose", respuesta);
}
function listo(){
    console.log("ya esta listo")
}
function respuesta (resultados){
    if (resultados[0]) {
    console.log(resultados) 
    narizX = resultados[0].pose.nose.x;
    narizY = resultados[0].pose.nose.y;
    manoIzq = resultados[0].pose.leftWrist.x;
    manoDer = resultados[0].pose.rightWrist.x
    distancia = manoIzq - manoDer;
    }
}
function preload() {
portal = loadImage("portal.png")
}
function draw() {
    background("red")
    var mitad = distancia/2
    image(portal,narizX-mitad,narizY-mitad,distancia,distancia*0.7);
}
var narizX = 0
var narizY = 0
var distancia = 0