
  
var vscale = 16;
var g_index = 0;
  
function preload() {
  img = loadImage("https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/11219434_768156156622605_1626346366045884567_n.jpg?_nc_cat=106&_nc_ht=scontent-ort2-2.xx&oh=4b9e38138b8160b571e0055b91d7c4bc&oe=5C7F2E07"); 
  
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function randomBezier(x,y,numCurves){



}

function setup() {
	
  createCanvas(img.width, img.height);
  pixelDensity(1)
  img.resize(img.width*0.8,img.height*0.8)
  background(255)
  g_index = 0
  img.loadPixels();
  loadPixels()
 
 coords = []
  for (x= 0; x < img.width; x ++){
    for (y = 0; y < img.height; y ++){
    	  index = (x + y * img.width) * 4;
          r = img.pixels[index]
          b = img.pixels[index + 1]
          g = img.pixels[index + 2]
          a = img.pixels[index + 3]
      
      	brightness = (r + g + b) / 3;
      	stroke(0.1)
      	noFill()
      	if (brightness <135 && brightness > 20){
      	coords.push({x_loc: x, y_loc: y})
		//ellipse(x,y,brightness/10)
      	      	
      	}
         }
         } 
shuffled_coords = shuffleArray(coords);

console.log(shuffled_coords.length)


}
function draw() {

for (i = 0; i < 45; i ++){
randomPt = Math.floor(random(0,shuffled_coords.length))
ellipse(shuffled_coords[randomPt].x_loc,shuffled_coords[randomPt].y_loc,4)
}
}