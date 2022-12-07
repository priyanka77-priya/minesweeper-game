/*
	1.) This class is used for div with valid class and when the 
	div is clicked an object for this class is created and we 
	can call methods in this class with the object.
	
	2.) Valid -- ClassName

	3.) addingAttribute(method) -- Adding respective class or id to the div 

	4.) click(method) -- This method is used when a div with valid 
	class is clicked if the div is not surrounded by any bomb
	it calls the clicking and checkNeighbours method recursively. If the div 
	contains bomb then object for Bomb class is created and
	bomb method is invoked.

	5.) clicking(method) -- This method is executed when this method
	is called from click method.

	6.) checkNeighbours(method) -- This method is executed when it is
  called from click method to recursively check neighbours of 
	corresponding div.  	
*/

class Valid{

	constructor(div){
		this.flagcount = 0;
		this.totalbombs = 20;
	}
	addingAttribute(element,property,value){
		element.setAttribute(property,value)
	}

	click(square){
		// console.log(square);
	    let currentId = square.getAttribute("id")
	    if (square.classList.contains('checked')){
	     	return
	 	}
	    if (square.classList.contains('bomb')) {
			var obj = new Bomb();
			obj.bomb();
	      	return
	    } 
	    else {
	      var total = this.clicking(square);
	      if (total !=0) {
	        square.classList.add('checked')
	        square.innerHTML = total
	        return
	      }
	      this.checkNeighbours(square)
	    }
	    square.classList.add('checked')
  	}
  	clicking(element){
	if(element.classList.contains("bomb")){
		console.log("dfjhbfvu")
		element.style.backgroundImage = "url('https://img.favpng.com/11/14/6/minesweeper-pro-classic-mine-sweeper-minesweeper-plus-likeminesweeper-png-favpng-eFhRd7mQu8efHthfcxcRUz4ub.jpg')";
		element.style.backgroundSize = "cover"
	}
	else{
		console.log("dfgndfgbgyuf")
		var num = element.getAttribute("id");
		if(num%10==1){
			if(num==1){
				num = parseInt(num);
				var count = 0;
				var right = document.getElementById(num+1);
				var bottom = document.getElementById(num+10);
				var bottomright = document.getElementById(num+11);
				if(right.classList.contains("bomb")){
					count+=1;
				}
				if(bottom.classList.contains("bomb")){
					count+=1;
				}
				if(bottomright.classList.contains("bomb")){
					count+=1;
				}
				return count;
				
			}
			else if(num==91){
				num = parseInt(num);
				var count = 0;
				var right = document.getElementById(num+1);
				var top = document.getElementById(num-10);
				var topright = document.getElementById(num-10+1);
				if(right.classList.contains("bomb")){
					count+=1;
				}
				if(top.classList.contains("bomb")){
					count+=1;
				}
				if(topright.classList.contains("bomb")){
					count+=1;
				}
				return count;
				
			}
			else{
				num = parseInt(num);
				var count = 0;
				var top = document.getElementById(num-10);
				var topright = document.getElementById(num-10+1);
				var right = document.getElementById(num+1);
				var bottom = document.getElementById(num+10);
				var bottomright = document.getElementById(num+11);
				if(right.classList.contains("bomb")){
					count+=1;
				}
				if(bottom.classList.contains("bomb")){
					count+=1;
				}
				if(bottomright.classList.contains("bomb")){
					count+=1;
				}
				if(top.classList.contains("bomb")){
					count+=1;
				}
				if(topright.classList.contains("bomb")){
					count+=1;
				}
				return count;
				
			}
		}
		else if(num%10==0){
			if(num==10){
				num = parseInt(num);
				var count = 0;
				var left = document.getElementById(num-1);
				var bottom = document.getElementById(num+10);
				var bottomleft = document.getElementById(num+10-1);
				if(left.classList.contains("bomb")){
					count+=1;
				}
				if(bottom.classList.contains("bomb")){
					count+=1;
				}
				if(bottomleft.classList.contains("bomb")){
					count+=1;
				}
				return count;
				
			}
			else if(num==100){
				num = parseInt(num);
				var count = 0;
				var left = document.getElementById(num-1);
				var top = document.getElementById(num-10);
				var topleft = document.getElementById(num-10-1);
				if(left.classList.contains("bomb")){
					count+=1;
				}
				if(top.classList.contains("bomb")){
					count+=1;
				}
				if(topleft.classList.contains("bomb")){
					count+=1;
				}
				return count;
				
			}
			else{
				num = parseInt(num);
				var count = 0;
				var left = document.getElementById(num-1);
				var top = document.getElementById(num-10);
				var bottom = document.getElementById(num+10);
				var topleft = document.getElementById(num-10-1);
				var bottomleft = document.getElementById(num+10-1);
				if(left.classList.contains("bomb")){
					count+=1;
				}
				if(top.classList.contains("bomb")){
					count+=1;
				}
				if(bottom.classList.contains("bomb")){
					count+=1;
				}
				if(topleft.classList.contains("bomb")){
					count+=1;
				}
				if(bottomleft.classList.contains("bomb")){
					count+=1;
				}
				return count;
				

			}
		}
		else if(num>1 && num<=10){
			if(num==10){
				num = parseInt(num);
				var count = 0;
				var left = document.getElementById(num-1);
				var bottom = document.getElementById(num+10);
				var bottomleft = document.getElementById(num+10-1);
				if(left.classList.contains("bomb")){
					count+=1;
				}
				if(bottom.classList.contains("bomb")){
					count+=1;
				}
				if(bottomleft.classList.contains("bomb")){
					count+=1;
				}
				return count;
				
			}
			else{
				num = parseInt(num);
				var count = 0;
				var left = document.getElementById(num-1);
				var right = document.getElementById(num+1);
				var bottomleft = document.getElementById(num+10-1);
				var bottomright = document.getElementById(num+10+1);
				var bottom = document.getElementById(num+10);
				if(left.classList.contains("bomb")){
					count+=1;
				}
				if(right.classList.contains("bomb")){
					count+=1;
				}
				if(bottom.classList.contains("bomb")){
					count+=1;
				}
				if(bottomleft.classList.contains("bomb")){
					count+=1;
				}
				if(bottomright.classList.contains("bomb")){
					count+=1;
				}
				return count;
				
			}
		}
		else if(num>91 && num<=100){
			if(num==100){
				num = parseInt(num);
				var count = 0;
				var left = document.getElementById(num-1);
				var top = document.getElementById(num-10);
				var topleft = document.getElementById(num-10-1);
				if(left.classList.contains("bomb")){
					count+=1;
				}
				if(top.classList.contains("bomb")){
					count+=1;
				}
				if(topleft.classList.contains("bomb")){
					count+=1;
				}
				return count;
				
			}
			else{
				num = parseInt(num);
				var count = 0;
				var left = document.getElementById(num-1);
				var right = document.getElementById(num+1);
				var topleft = document.getElementById(num-10-1);
				var topright = document.getElementById(num-10+1);
				var top = document.getElementById(num-10);
				if(left.classList.contains("bomb")){
					count+=1;
				}
				if(right.classList.contains("bomb")){
					count+=1;
				}
				if(top.classList.contains("bomb")){
					count+=1;
				}
				if(topleft.classList.contains("bomb")){
					count+=1;
				}
				if(topright.classList.contains("bomb")){
					count+=1;
				}
				return count;
				
			}
		}
		else{
			num = parseInt(num);
			var count = 0;
			var left = document.getElementById(num-1);
			var right = document.getElementById(num+1);
			var top = document.getElementById(num-10);
			var bottom = document.getElementById(num+10);
			var topleft = document.getElementById(num-10-1);
			var topright = document.getElementById(num-10+1);
			var bottomleft = document.getElementById(num+10-1);
			var bottomright = document.getElementById(num+10+1);
			if(left.classList.contains("bomb")){
					count+=1;
			}
			if(right.classList.contains("bomb")){
					count+=1;
			}
			if(top.classList.contains("bomb")){
					count+=1;
			}
			if(bottom.classList.contains("bomb")){
					count+=1;
			}
			if(topleft.classList.contains("bomb")){
					count+=1;
			}
			if(topright.classList.contains("bomb")){
					count+=1;
			}
			if(bottomleft.classList.contains("bomb")){
					count+=1;
			}
			if(bottomright.classList.contains("bomb")){
					count+=1;
			}
			return count;
		}
	}
}
//check neighboring squares once square is clicked
  checkNeighbours(square) {
  	var currentId = square.getAttribute("id")
  	currentId = parseInt(currentId);
    const isLeftEdge = (currentId % 10 === 0)
    const isRightEdge = (currentId % 10 === 10 -1)

    setTimeout(() => {
    	//right
      if (currentId >= 1 && currentId%10!=0) {
        const newId = parseInt(currentId)+1
        const newSquare = document.getElementById(newId)
        this.click(newSquare)
      }
      //left
      if (currentId >=1 && currentId%10!=1) {
        const newId = parseInt(currentId)-1
        const newSquare = document.getElementById(newId)
        this.click(newSquare)
      }
      //top
      if (currentId>10) {
        const newId = parseInt(currentId -10)
        const newSquare = document.getElementById(newId)
        this.click(newSquare)
      }
      //bottom
      if (currentId <91) {
        const newId = parseInt(currentId)+10        
        const newSquare = document.getElementById(newId)
        this.click(newSquare)
      }
      //topleft
      if (currentId>10 && currentId%10!=1) {
        const newId = parseInt(currentId)-10-1
        const newSquare = document.getElementById(newId)
        this.click(newSquare)
      }
      //topright
      if (currentId>10 && currentId%10!=0){
        const newId = parseInt(currentId)-10+1
        const newSquare = document.getElementById(newId)
        this.click(newSquare)
      }
      //bottomleft
      if (currentId < 91 && currentId%10!=1) {
        const newId = parseInt(currentId)+10-1
        const newSquare = document.getElementById(newId)
        this.click(newSquare)
      }
      //bottomright
      if (currentId < 91 && currentId%10!=0) {
        const newId = parseInt(currentId)+10+1
        const newSquare = document.getElementById(newId)
        this.click(newSquare)
      }
    }, 10)
  }
	
}
