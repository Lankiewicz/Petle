function drawTree(height){
for (var i = 0; i < height; i++) {
	var star = "";
	for (var j = 0; j < height - i; j++) {
	star = star + " ";
	}
	for (var l = 0; l < (i * 2) + 1; l++) {
		star = star + "*";
	}
	console.log(star);
}}

drawTree(8);