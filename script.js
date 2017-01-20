
function showElement(currentSet){
	let count = 0,text=".", ul = document.createElement("ul");
	ul.className += "ElmenentPrint";
	
	for (i=0; i<currentSet.elements.length, currentSet.elements[i].getAttribute("type")!== "button";i++)
	{
		count++;
		if(currentSet.elements[i].value == null || currentSet.elements[i].value == ""){
			text += "not set the value";
		}
		else{
			 let li = document.createElement("li");
			  textnode = document.createTextNode("Your are Enter the value in " + currentSet.elements[i].name + '= ' + 
			  	currentSet.elements[i].value + ".");
			  li.appendChild(textnode);
			  ul.appendChild(li);
		}
	}
	text += "<br> <br>has "+ count + "Total tags  <br><br> ------------------" ;
	currentSet.appendChild(ul);
}
