



//SPLASH
//Vervang 'ID' door div ID en vervang andere paremeters met nieuwe gegevens
//
function Hoofdkeuze(){
	var div = document.getElementById('ID');
	Splash(div, 500, 500, 0, 0, 400, 400, 10);
}

function Subkeuze(){
	var div = document.getElementById('ID2');
	Splash(div, 500, 500, 0, 0, 400, 400, 10);
}

function Splash(div, x, y, sWidth, sHeight, maxWidth, maxHeight, time){
	div.style.top = x - sHeight / 2 + 'px';
	div.style.left = y - sWidth / 2 + 'px';
	div.style.height = sHeight  + 'px';
	div.style.width = sWidth + 'px';
	
	var accuracy = 200;
	
	var stepX = (maxWidth - sWidth) / accuracy;
	var stepY = (maxHeight - sHeight) / accuracy;
	
	SplashLoop(div, x, y, sWidth, sHeight, maxWidth, maxHeight, stepX, stepY, time);
	
		function SplashLoop(div, x, y, width, height, maxWidth, maxHeight, stepX, stepY, time){
		
		height += stepY;
		width += stepX;
		x -= stepX / 2;
		y -= stepY / 2;
		
		div.style.height = height + 'px';
		div.style.width = width + 'px';
		div.style.left = x + 'px';
		div.style.top = y + 'px';
		
			if( width < maxWidth || height < maxHeight){
				setTimeout( function(){ SplashLoop(div, x, y, width, height, maxWidth, maxHeight, stepX, stepY, time); } , time);
			}
		}
}