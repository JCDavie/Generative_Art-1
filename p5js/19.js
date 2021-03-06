
class line_circle{
	constructor(x,y,r,strips) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.strips = strips;
  }
 
  display() {
    for (var i = 0; i < this.strips; i ++){
	var x2 = this.r/this.strips * i
	var y2 = Math.sqrt(Math.pow(this.r, 2) - Math.pow(x2, 2))
	
	if (i == 0){
	//line(this.x + x2, this.y - y2, this.x + x2, this.y + y2) 
	push()
	noFill()
	beginShape()
	
	curveVertex(this.x + x2, this.y - y2)
	curveVertex(this.x + x2, this.y - y2)
	for (var j = 5; j < 2*y2; j = j + 5){
	curveVertex(this.x + x2 + map(noise(j/10,i),0,1,-15,15), this.y - y2 + j)
	}
	curveVertex(this.x + x2, this.y + y2)
	curveVertex(this.x + x2, this.y + y2)
	endShape()
	pop()
	}else{
	push()
	noFill()
	beginShape()
	
	curveVertex(this.x + x2, this.y - y2)
	curveVertex(this.x + x2, this.y - y2)
	for (var j = 5; j < 2*y2; j = j + 5){
	curveVertex(this.x + x2 + map(noise(j/10,i),0,1,-15,15), this.y - y2 + j)
	}
	curveVertex(this.x + x2, this.y + y2)
	curveVertex(this.x + x2, this.y + y2)
	endShape()
	pop()
	
	push()
	noFill()
	beginShape()
	
	curveVertex(this.x - x2, this.y - y2)
	curveVertex(this.x - x2, this.y - y2)
	for (var j = 5; j < 2*y2; j = j + 5){
	curveVertex(this.x - x2 + map(noise(j/10,i),0,1,-15,15), this.y - y2 + j)
	}
	curveVertex(this.x - x2, this.y + y2)
	curveVertex(this.x - x2, this.y + y2)
	endShape()
	pop()
	//line(this.x + x2, this.y - y2, this.x + x2, this.y + y2) 
	//line(this.x - x2, this.y - y2, this.x - x2, this.y + y2) 
	}
	}
	
  }


}
function colorPicker(){
c1 = color(246, 118, 94)
c2 = color(246, 172, 94)
c3 = color(63, 131, 154)
c4 = color(69, 180, 107)

var randomNum = Math.random()

if (randomNum <0.25){
linecolor = c1
} else if (randomNum <0.50 && randomNum > 0.25){
linecolor = c2
} else if (randomNum <0.75 && randomNum > 0.50){
linecolor = c3
} else{
linecolor = c4
}
return linecolor
}

function setup() {
	var lengthcanvas = 1000
	var widthcanvas = 1000
	
	createCanvas(lengthcanvas, widthcanvas);
	background(0)
	stroke(color(246, 118, 94))
	
	var randomx = Math.random();
	var randomy = Math.random();
	var randomh = Math.random();
	
	var randomstrips = Math.random();
	
	strokeWeight(1.5)
	stroke(255)//colorPicker())

	circle = new line_circle(500, 500, 450,100);

	circle.display()
	
	
	
}

function draw() {

}