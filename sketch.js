function setup() {
  createCanvas(600, 450);
}

function preload() {
  Robot = loadImage('Robot.jpg');
}

function draw() {
  background(140, 255, 97);
  //image(Robot, -500, -225, 1600, 900);
  print(mouseX, mouseY);
  
  noStroke();
  
//lowerjaw
  fill(200);
  beginShape();
    curveVertex(378, 194);
    curveVertex(378, 194);
    curveVertex(429, 147);
    curveVertex(448, 173);
    curveVertex(427, 234);
    curveVertex(394, 267);
    curveVertex(362, 306);
    curveVertex(362, 306);
    curveVertex(334, 313);
    curveVertex(307, 315);
    curveVertex(307, 315);
    curveVertex(298, 297);
    curveVertex(298, 297);
    curveVertex(304, 279);
    curveVertex(310, 264);
    curveVertex(310, 264);
    curveVertex(374, 190);
    curveVertex(390, 190);
    curveVertex(378, 194);
  endShape();
  
//lowerjaw shadow
  fill(150);
  beginShape();
    curveVertex(361, 203);
    curveVertex(361, 203);
    curveVertex(382, 226);
    curveVertex(375, 256);
    curveVertex(351, 287);
    curveVertex(351, 287);
    curveVertex(329, 294);
    curveVertex(316, 292);
    curveVertex(316, 292);
    curveVertex(331, 256);
    curveVertex(361, 203);
    curveVertex(361, 203);
  endShape();
  
//Powerbeam thingy shadow
  fill(60);
  beginShape();
    curveVertex(338, 218);
    curveVertex(338, 218);
    curveVertex(356, 220);
    curveVertex(366, 232);
    curveVertex(367, 249);
    curveVertex(357, 254);
    curveVertex(348, 250);
    curveVertex(339, 234);
    curveVertex(338, 218);
    curveVertex(338, 218);
  endShape();
  
//Laser
if(mouseY>260) {
  if(mouseX<260) {
    strokeWeight(30);
    stroke(78, 255, 219);
    line(350, 238, 40, 470);
    strokeWeight(50);
    stroke(78, 255, 219, 100);
    line(350, 238, 40, 470);
    noStroke();
  }
}
  
//Powerbeam thingy
  fill(78, 255, 219);
  beginShape();
    curveVertex(348, 221);
    curveVertex(348, 221);
    curveVertex(359, 233);
    curveVertex(360, 251);
    curveVertex(349, 249);
    curveVertex(339, 233);
    curveVertex(348, 221);
    curveVertex(348, 221);
  endShape();
  
//upperjaw
  fill(255);
  beginShape();
    curveVertex(385, 185);
    curveVertex(385, 185);
    curveVertex(344, 226);
    curveVertex(343, 250);
    curveVertex(326, 264);
    curveVertex(299, 267);
  //possible issues in lower cord
    curveVertex(288, 261);
    curveVertex(289, 272);
    curveVertex(272, 273);
    curveVertex(253, 241);
    curveVertex(256, 224);
    curveVertex(274, 203);
    curveVertex(304, 198);
    curveVertex(325, 198);
    curveVertex(353, 192);
    curveVertex(385, 185);
    curveVertex(385, 185);
  endShape();
  
//neck
  fill(227);
  beginShape();
    curveVertex(508, 244);
    curveVertex(508, 244);
    curveVertex(442, 217);
    curveVertex(447, 192);
    curveVertex(435, 153);
    curveVertex(402, 177);
    curveVertex(382, 174);
    curveVertex(391, 137);
    curveVertex(416, 109);
    curveVertex(467, 103);
    curveVertex(509, 164);
    curveVertex(508, 244);
    curveVertex(508, 255);
  endShape();
  
//left ear
  fill(220);
  beginShape();
    curveVertex(291, 174);
    curveVertex(291, 174);
    curveVertex(284, 151);
    curveVertex(291, 130);
    curveVertex(317, 138);
    curveVertex(328, 150);
    curveVertex(328, 150);
    curveVertex(291, 174);
    curveVertex(291, 174);
  endShape();
  
//left ear shadow
  fill(185);
  beginShape();
    curveVertex(297, 180);
    curveVertex(297, 180);
    curveVertex(291, 165);
    curveVertex(291, 139);
    curveVertex(312, 147);
    curveVertex(320, 165);
    curveVertex(297, 180);
    curveVertex(297, 180);
  endShape();
  
//white top of head
  fill(227);
  beginShape();
    curveVertex(298, 164);
    curveVertex(298, 164);
    curveVertex(331, 136);
    curveVertex(375, 130);
    curveVertex(394, 117);
    curveVertex(422, 106);
    curveVertex(461, 102);
    curveVertex(461, 102);
    curveVertex(430, 113);
    curveVertex(401, 132);
    curveVertex(370, 145);
    curveVertex(331, 151);
    curveVertex(298, 164);
    curveVertex(298, 164);
  endShape();
  
  
//right ear
  fill(220);
  beginShape();
    curveVertex(358, 155);
    curveVertex(358, 155);
    curveVertex(355, 128);
    curveVertex(365, 106);
    curveVertex(391, 122);
    curveVertex(389, 141);
    curveVertex(358, 155);
    curveVertex(358, 155);
  endShape();
  
//right ear shadow
  fill(185);
  beginShape();
    curveVertex(363, 158);
    curveVertex(363, 158);
    curveVertex(360, 143);
    curveVertex(367, 115);
    curveVertex(391, 138);
    curveVertex(380, 156);
    curveVertex(363, 158);
    curveVertex(363, 158);
  endShape();
  
//gray nose thingy
  fill(150);
  beginShape();
    curveVertex(276, 218);
    curveVertex(276, 218);
    curveVertex(311, 190);
    curveVertex(311, 190);
    curveVertex(328, 190);
    curveVertex(328, 190);
    curveVertex(288, 225);
    curveVertex(288, 225);
    curveVertex(276, 218);
    curveVertex(276, 218);
  endShape();
  
//green top of head
  fill(93, 149, 48);
  beginShape();
    curveVertex(391, 183);
    curveVertex(391, 183);
    curveVertex(393, 140);
    curveVertex(364, 141);
    curveVertex(350, 144);
    curveVertex(292, 164);
    curveVertex(277, 185);
    curveVertex(274, 203);
    curveVertex(274, 203);
    curveVertex(326, 200);
    curveVertex(391, 183);
    curveVertex(391, 183);
  endShape();
  
//top of head shadow
  fill(120);
  beginShape();
    vertex(357, 192);
    vertex(359, 180);
    vertex(393, 160);
    vertex(391, 183);
  endShape();
  
//Jaw thingy shadow
  fill(160);
  beginShape();
    curveVertex(393, 160);
    curveVertex(393, 160);
    curveVertex(435, 136);
    curveVertex(455, 172);
    curveVertex(453, 203);
    curveVertex(440, 219);
    curveVertex(412, 222);
    curveVertex(398, 202);
    curveVertex(391, 181);
    curveVertex(393, 160);
    curveVertex(393, 160);
  endShape();
  
//Jaw thingy
  fill(93, 149, 48);
  beginShape();
    curveVertex(378, 194);
    curveVertex(378, 194);
    curveVertex(403, 227);
    curveVertex(403, 260);
    curveVertex(444, 213);
    curveVertex(446, 172)
    curveVertex(429, 148);
    curveVertex(378, 194);
    curveVertex(378, 194);
  endShape();
  
//nose
  fill(60);
  beginShape();
    curveVertex(279, 246);
    curveVertex(279, 246);
    curveVertex(264, 239);
    curveVertex(257, 230);
    curveVertex(257, 230);
    curveVertex(267, 225);
    curveVertex(277, 217);
    curveVertex(277, 217);
    curveVertex(283, 221);
    curveVertex(291, 222);
    curveVertex(291, 222);
    curveVertex(277, 238);
    curveVertex(279, 246);
    curveVertex(279, 246);
  endShape();
  
//left eye shadow
  fill(60);
  beginShape();
    vertex(276, 189);
    vertex(282, 187);
    vertex(290, 192);
    vertex(288, 201);
    vertex(281, 204);
    vertex(274, 200);
  endShape();
  
//left eye
  fill(255, 220, 74);
  beginShape();
    vertex(274, 187);
    vertex(280, 185);
    vertex(288, 190);
    vertex(286, 199);
    vertex(279, 202);
    vertex(272, 198);
  endShape();
  
//right eye shadow
  fill(60);
  beginShape();
    vertex(323, 182);
    vertex(351, 173);
    vertex(359, 180);
    vertex(357, 189);
    vertex(331, 198);
    vertex(322, 193);
    vertex(323, 182);
  endShape();
  
//right eye
  stroke(60);
  strokeWeight(1);
  fill(255, 220, 74);
  beginShape();
    vertex(321, 180);
    vertex(349, 171);
    vertex(357, 178);
    vertex(355, 187);
    vertex(329, 196);
    vertex(320, 191);
    vertex(321, 180);
  endShape();
  
  //image(Robot, -500, -225, 1600, 900);
}