function setup() {
createCanvas(600, 600);
angleMode(DEGREES);
rectMode(CENTER)
}


function draw() {
background(160);
//beanie
fill(83,128,95);
ellipse(383, 207, 275, 329);
fill(96,161,114);;
ellipse(309, 290, 419, 473);
fill(160);
rect(120,100,200,700);

//headshape
noStroke();
fill(247, 236, 215);
ellipse(316, 357, 327, 465);

//jaw cuts
push();
translate(148,515);
rotate(148);
fill(160);
rect(0, 0, 130,280);
pop();

push();
translate(486,547);
rotate(48);
fill(160);
rect(0, 0, 130,280);
pop();

//hair
fill(0);
ellipse(188,114,61,59);
fill(160);
ellipse(199,97,50,56);
fill(0);
ellipse(168,149,61,59);
fill(160);
ellipse(155,133,14,27);
fill(0);
ellipse(282, 224, 305, 318);

push();
translate(430,284)
rotate(-10);
ellipse(0, 0, 87, 221);
pop();

fill(247, 236, 215);
ellipse(326, 326, 271, 238);
fill(247, 236, 215);
ellipse(440, 357, 49, 132);
rect(205,326,100,70);

//eyebrows
push();
fill(0);
translate(354,265);
rotate(-7);
ellipse(0,0,101,32);
pop();
push();
translate(356,275);
rotate(-7);
ellipse(0,0,86,34);
pop();

fill(0);
ellipse(205,290,69,27);
fill(247, 236, 215);
ellipse(205,298,63,26);

//eyes
//right eye
//eyelining_right
fill(0);
ellipse(359,307,65,33);
fill(247, 236, 215);
ellipse(360,309,65,33);
fill(0);
ellipse(359,313,62,31);
fill(247, 236, 215);
ellipse(359,315,62,31);

//sclera_right_right
fill(255);
ellipse(364,307,42,15);
push();
fill(255);
translate(364,312)
rotate(-17);
ellipse(0,0,42,15);
pop();
//sclera_right_left
push();
fill(255);
translate(348,307)
rotate(-17);
ellipse(0,0,29,15);
pop();
push();
fill(255);
translate(348,315)
rotate(15);
ellipse(0,0,26,13);
pop();

//iris_right
fill(0);
ellipse(356,310,29,22);
//highlight_right
fill(255);
ellipse(369,307,13,4);

//left eye
//eyelining_left
fill(0);
ellipse(211,321,56,28);
fill(247, 236, 215);
ellipse(211,325,60,33);
fill(0);
ellipse(213,320,53,20);
fill(247, 236, 215);
ellipse(213,321,53,20);

//sclera_left_left
push();
fill(255);
translate(206,319);
rotate(-7);
ellipse(0,0,41,16);
pop();
push();
fill(255);
translate(205,327);
rotate(15);
ellipse(0,0,39,13);
pop();
//sclera_left_right
push();
fill(255);
translate(230,317)
rotate(20);
ellipse(0,0,17,9);
pop();
push();
fill(255);
translate(228,326)
rotate(-24);
ellipse(0,0,24,14);
pop();

//iris_left
fill(0);
ellipse(219,322,28,22);
//highlight_left
fill(255);
ellipse(228,318,11,3);

//nose
push();
strokeWeight(3);
stroke(0);
beginShape(LINES);
vertex(282,316);
vertex(273,398);
endShape();
pop();
fill(230,224,186);
triangle(282,316,273,398,249,407);


//mouth
fill(255);
ellipse(300,463,103,45);
fill(247, 236, 215);
rect(300,442,106,45);

fill(0);
rect(330,473,33,1);
}
