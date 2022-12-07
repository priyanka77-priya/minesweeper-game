/*
	1.) This class is used for a div with bomb class when the 
	div is clicked an object for this class is created and 
	we can call methods in this class with the object.

	2.) Bomb -- ClassName
	
	3.) addingAttribute(method) -- Adding respective class or id to the div 
	bomb(method) -- This method is used when a bomb class div is clicked
	and this method is used to end the game..

*/

class Bomb{
	constructor(div){
		this.flagcount = 0;
		this.totalbombs = 20;
	}
	addingAttribute(element,property,value){
		element.setAttribute(property,value)
	}
	bomb(){
		var par = document.getElementById("mainbox");
		for(var i=0;i<par.children.length;i++){
				var chil = par.children[i]
				if(chil.classList.contains("bomb")){
					chil.style.backgroundImage = "url('https://img.favpng.com/11/14/6/minesweeper-pro-classic-mine-sweeper-minesweeper-plus-likeminesweeper-png-favpng-eFhRd7mQu8efHthfcxcRUz4ub.jpg')";
					chil.style.backgroundSize = "cover"
				}
		}
  		setTimeout(function(){ 
  			alert("Game over, Better Luck next time");
  			window.location.reload();
  	 	}, 100)
  	}

}
