let offsetY = 0; 

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(128, 255, 212);
  translate(0, 0, 600);

  //mengatur sudut pandang
  let sudutPandang = PI / 3;
  let kameraZ = (height / 2.0) / tan(sudutPandang / 2.0);
  perspective(sudutPandang, width / height, kameraZ / 10.0, kameraZ * 10.0);
  
  //membuat kupu kupi
  push();
    fill(0, 204, 136); 

    let kepakan1 = sin(millis() * 0.002) * 1; 
    let kepakan2 = sin(millis() * 0.002) * 1; 
    rotateX(kepakan1);

        ellipse(0, 0, 5, 30);
        ellipse(-23, -5, 38, 30);
        fill(255, 128, 255);
        strokeWeight(2);
        ellipse(-15, 18, 23, 15);

    rotateY(kepakan2);
        strokeWeight(1);
        fill(0, 204, 136); 
        ellipse(23, -5, 38, 30);        
        fill(255, 128, 255);
        strokeWeight(2);
        ellipse(15, 18, 23, 15);
  pop();

  //memanggil fungsi sangkar
  sangkar();
}

//fungsi untuk membuat sangkar
function sangkar() {
  push();
    noFill();
    stroke(255, 255, 0);
    strokeWeight(4);

    let rotasiX = millis() / 1000;
    let rotasiY = millis() / 1500;

    rotateX(rotasiX);
    rotateY(rotasiY);
    sphere(300);
  pop();
}
