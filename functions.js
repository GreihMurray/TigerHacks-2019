var namer = "";

function readSingleFile(evt){
	var f = evt.target.files[0];
	namer = evt.target.files[0].name;
			
	if(f){
		var r = new FileReader();
				
		r.onload = function(e){
			var contents = e.target.result;
			parseData(contents);
		}
		r.readAsText(f);
	}
	else{
		alert("failed to read file");
	}
}

var ifs;
var elses;
var ifelses;
var whiles;
var dowhiles;
var switches;
var tries;
var catches;
var fors;
var slc;
var mlc;
var background;

function colors(){
	ifs = document.getElementById("ifStates").value;
	elses = document.getElementById("elseStates").value;
	ifelses = document.getElementById("elifStates").value;
	whiles = document.getElementById("whileStates").value;
	dowhiles = document.getElementById("dowhiStates").value;
	switches = document.getElementById("switchStates").value;
	tries = document.getElementById("tryStates").value;
	catches = document.getElementById("catchStates").value;
	fors = document.getElementById("forStates").value;
	slc = document.getElementById("slcStates").value;
	mlc = document.getElementById("mlcStates").value;
	background = document.getElementById("background").value;
	
	var eles = document.getElementsByClassName("ifs");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = ifs;
	}
	var eles = document.getElementsByClassName("elses");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = elses;
	}
	var eles = document.getElementsByClassName("ifelses");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = ifelses;
	}
	var eles = document.getElementsByClassName("whiles");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = whiles;
	}
	var eles = document.getElementsByClassName("dowhiles");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = dowhiles;
	}
	var eles = document.getElementsByClassName("switches");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = switches;
	}
	var eles = document.getElementsByClassName("tries");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = tries;
	}
	var eles = document.getElementsByClassName("catches");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = ifs;
	}
	var eles = document.getElementsByClassName("catches");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = ifs;
	}
	var eles = document.getElementsByClassName("fors");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = fors;
	}
	var eles = document.getElementsByClassName("slc");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = slc;
	}
	var eles = document.getElementsByClassName("mlc");
	for(var i = 0; i < eles.length; i++){
		eles[i].style.backgroundColor = mlc;
	}
	document.getElementById("bigDiv").style.backgroundColor = background;
}

function clearer(){
	
	var list = document.getElementById("bigDiv");
	
	while(list.hasChildNodes()){
		list.removeChild(list.firstChild);
	}
	
	document.getElementById("bigDiv").style.backgroundColor = "rgb(0,0,0,0)";
}

function parseData(contents){
    console.log(namer);
	var hold;
	var divHeight = document.getElementById("bigDiv").clientHeight;
	var divWidth = document.getElementById("bigDiv").clientWidth;
	
	document.getElementById("bigDiv").style.backgroundColor = background;
	
	for(var i = 0; i < contents.length; i++){
		hold = contents.substring(i,i+3);
		
		var flip = 1;
		
		if(hold == 'if(' && contents.charAt(i-2) != 'e'){
		    console.log("if");
			var ifState = hold;
			var start = i + 1;
			var totalBraces = 1;
			var charNum = 3;
			var semicolons = 0;
			
			i+=3;
			
			while(contents.charAt(i) != '{'){
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			
			ifState = ifState + '{';
			
			i++;
			charNum++;
			
			var braces = 1;
			
			while(braces != 0){
				if(contents.charAt(i) == '{'){
					braces += 1;
					totalBraces += 1;
				}
				else if(contents.charAt(i) == '}'){
					braces -= 1;
				}
				if(contents.charAt(i) == ';'){
					semicolons++;
				}
				
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			i = start;
			
			totalBraces = (totalBraces * charNum);
			var braceNum = totalBraces;
			totalBraces = totalBraces + "px";
			
			semicolons = charNum * semicolons;
			var semiNum = semicolons;
			semicolons = semicolons + "px";
			
			var radius = (braceNum/charNum) * semiNum;
			radius = radius + "%";
			
			var rotate;
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(45deg)";
			}
			var topPoint = divHeight - (braceNum + charNum);
			topPoint = topPoint + "px";
			
			var left = (semiNum + charNum) * 2;
			left = left + "px";
			
			var opa;
			
			var para = document.createElement("P");
			para.style.border = "2px solid green";
			para.style.borderRadius = radius;
			para.style.width = totalBraces;
			para.style.height = semicolons;
			para.style.display = "inline-block";
			para.style.backgroundColor = ifs;
			para.style.transform = rotate;
			para.className = "ifs";
			para.style.position = "absolute";
			
			if((i%2)==0){
				para.style.top = topPoint;
			}
			else{
				para.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para.style.left = left;
			}
			else{
				para.style.right = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para);
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			var para2 = document.createElement("P");
			para2.style.border = "2px solid green";
			para2.style.borderRadius = radius;
			para2.style.width = totalBraces;
			para2.style.height = semicolons;
			para2.style.display = "inline-block";
			para2.style.backgroundColor = ifs;
			para2.style.transform = rotate;
			para2.style.position = "absolute";
			para2.className = "ifs";
			
			if((i%2)==0){
				para2.style.top = topPoint;
			}
			else{
				para2.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para2.style.right = left;
			}
			else{
				para2.style.left = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para2.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para2);
		}
		else if(hold.substring(0,2) == '/*'){
		    console.log("comment M");
			var comment = "";
			var charNum = 0;
			while(!hold.includes("*/")){
				comment = comment + hold;
				i+=1;
				charNum++;
				hold = contents.substring(i,i+2);
			}
			comment = comment + "*/";
			
			var radius = charNum;
			radius = radius + "%";
			
			var rotate;
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(45deg)";
			}
			
			var topPoint = charNum/3;
			
			var opa;
			
			var para = document.createElement("P");
			para.style.border = "2px solid green";
			para.style.borderRadius = radius;
			para.style.width = "25px";
			para.style.height = "25px";
			para.style.display = "inline-block";
			para.style.backgroundColor = mlc;
			para.style.transform = rotate;
			para.className = "mlc";
			para.style.position = "absolute";
			
			if((i%2)==0){
				para.style.top = topPoint;
			}
			else{
				para.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para.style.left = topPoint;
			}
			else{
				para.style.right = topPoint;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para);
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			var para2 = document.createElement("P");
			para2.style.border = "2px solid green";
			para2.style.borderRadius = radius;
			para2.style.width = "25px";
			para2.style.height = "25px";
			para2.style.display = "inline-block";
			para2.style.backgroundColor = mlc;
			para2.style.transform = rotate;
			para2.className = "mlc";
			para2.style.position = "absolute";
			
			if((i%2)==0){
				para2.style.top = topPoint;
			}
			else{
				para2.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para2.style.right = topPoint;
			}
			else{
				para2.style.left = topPoint;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para2.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para2);
		}
		else if(hold.substring(0,2) == "//"){
		    console.log("comment S");
			var comment = "";
			while(!hold.includes("\n") && !hold.includes("\r\n") && !hold.includes("\r") && !hold.includes("\t") && contents.charAt(i+1)){
				comment = comment + hold.substring(0,2);
				i+=2;
				hold = contents.substring(i,i+2);
			}
			comment = comment + contents.charAt(i);
		}
		else if(hold == 'if(' && contents.charAt(i-2) == 'e'){
		    console.log("else if");
			var ifState = contents.substring(i-5,i) + hold;
			var start = i + 1;
			var charNum = 3;
			var totalBraces = 1;
			var semicolons = 0;
			
			i+=3;
			
			while(contents.charAt(i) != '{'){
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			
			ifState = ifState + '{';
			
			i++;
			charNum++;
			
			var braces = 1;
			
			while(braces != 0){
				if(contents.charAt(i) == '{'){
					braces += 1;
					totalBraces++;
				}
				else if(contents.charAt(i) == '}'){
					braces -= 1;
				}
				if(contents.charAt(i) == ';'){
					semicolons++;
				}
				
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}			
			i = start;
			
			totalBraces = (totalBraces*12);
			var braceNum = totalBraces;
			totalBraces = totalBraces + "px";
			
			semicolons = semicolons*10;
			var semiNum = semicolons;
			semicolons = semicolons + "px";
			
			var rotate;
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(45deg)";
			}
			
			var topPoint = (braceNum + charNum);
			topPoint = topPoint + "px";
			
			var left = (semiNum + charNum) * 2;
			left = left + "px";
			
			var opa;
			
			var para = document.createElement("P");
			para.style.border = "2px solid green";
			para.style.width = totalBraces;
			para.style.height = semicolons;
			para.style.display = "inline-block";
			para.style.backgroundColor = ifelses;
			para.style.transform = rotate;
			para.className = "ifelses";
			para.style.position = "absolute";
			
			if((i%2)==0){
				para.style.top = topPoint;
			}
			else{
				para.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para.style.left = left;
			}
			else{
				para.style.right = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para);
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			var para2 = document.createElement("P");
			para2.style.border = "2px solid green";
			para2.style.width = totalBraces;
			para2.style.height = semicolons;
			para2.className = "ifelses";
			para2.style.display = "inline-block";
			para2.style.backgroundColor = ifelses;
			para2.style.transform = rotate;
			para2.style.position = "absolute";
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			if((i%2)==0){
				para2.style.top = topPoint;
			}
			else{
				para2.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para2.style.right = left;
			}
			else{
				para2.style.left = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para2.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para2);
		}
		else if(hold == 'se(' && contents.charAt(i-1) == "l"){
		    contents.log("else");
			var ifState = contents.substring(i-2,i) + hold;
			var start = i+1;
			var totalBraces = 1;
			var semicolons = 0;
			var charNum = 3;
			
			i+=3;
			
			while(contents.charAt(i) != '{'){
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			
			ifState = ifState + '{';
			
			i++;
			charNum++;
			
			var braces = 1;
			
			while(braces != 0){
				if(contents.charAt(i) == '{'){
					braces += 1;
					totalBraces++;
				}
				else if(contents.charAt(i) == '}'){
					braces -= 1;
				}
				if(contents.charAt(i) == ';'){
					semicolons++;
				}
				
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}		
			i = start;
			
			totalBraces = (totalBraces*10);
			var braceNum = totalBraces;
			totalBraces = totalBraces + "px";
			
			semicolons = semicolons*10;
			var semiNum = semicolons;
			semicolons = semicolons + "px";
			
			var rotate;
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(45deg)";
			}
			
			var topPoint = (braceNum + charNum);
			topPoint = topPoint + "px";
			
			var left = (semiNum + charNum) * 2;
			left = left + "px";
			
			var opa;
			
			var para = document.createElement("P");
			para.style.border = "2px solid green";
			para.style.width = totalBraces;
			para.style.height = semicolons;
			para.className = "elses";
			para.style.display = "inline-block";
			para.style.backgroundColor = elses;
			para.style.transform = rotate;
			para.style.position = "absolute";
			
			if((i%2)==0){
				para.style.top = topPoint;
			}
			else{
				para.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para.style.left = left;
			}
			else{
				para.style.right = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para);
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			var para2 = document.createElement("P");
			para2.style.border = "2px solid green";
			para2.style.width = totalBraces;
			para2.style.height = semicolons;
			para2.className = "elses";
			para2.style.display = "inline-block";
			para2.style.backgroundColor = elses;
			para2.style.transform = rotate;
			para2.style.position = "absolute";
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			if((i%2)==0){
				para2.style.top = topPoint;
			}
			else{
				para2.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para2.style.right = left;
			}
			else{
				para2.style.left = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para2.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para2);
		}
		else if(hold == 'ch(' && contents.charAt(i-1) == "t"){
		    console.log("catch");
			var ifState = contents.substring(i-4,i) + hold;
			var start = i+1;
			var charNum = 0;
			var cases = 0;
			
			i+=3;
			charNum += 3;
			
			while(contents.charAt(i) != '{'){
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			
			ifState = ifState + '{';
			
			i++;
			charNum++;
			
			var braces = 1;
			
			while(braces != 0){
				if(contents.charAt(i) == '{'){
					braces += 1;
				}
				else if(contents.charAt(i) == '}'){
					braces -= 1;
				}
				if(contents.charAt(i) == ':'){
					cases++;
				}
				
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}	
			i=start;
			
			var topPoint = divHeight/3;
			topPoint = topPoint + "px";
			
			var left = divWidth/(charNum+cases);
			
			var div = document.createElement("div");
			div.style.border = "2px solid black";
			div.style.backgroundColor = switches;
			div.style.top = topPoint;
			div.style.left = left;
			div.className = "switches";
			div.style.width = charNum;
			div.style.height = charNum;
			div.style.zIndex = "100";
			div.style.position = "relative";
			document.getElementById("bigDiv").appendChild(div);
		}
		else if(hold == 'or(' && contents.charAt(i-1) == "f"){
		    console.log("for");
		    console.log(contents.substring(i-15,i+15));
			var ifState = contents.substring(i-1,i) + hold;
			var start = i + 1;
			var totalBraces = 1;
			var charNum = 3;
			var semicolons = 0;
			
			i+=4;
			
			while(contents.charAt(i) != '{'){
				ifState = ifState + contents.charAt(i);
				i++;
			}
			
			ifState = ifState + '{';
			
			i++;
			
			var braces = 1;
			
			while(braces != 0){
				if(contents.charAt(i) == '{'){
					braces += 1;
					totalBraces++;
				}
				else if(contents.charAt(i) == '}'){
					braces -= 1;
				}
				if(contents.charAt(i) == ';'){
					semicolons++;
				}
				
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			i = start;
			
			totalBraces = (totalBraces*8);
			var braceNum = totalBraces;
			totalBraces = totalBraces + "px";
			
			semicolons = semicolons*10;
			var semiNum = semicolons;
			semicolons = semicolons + "px";
			
			var rotate;
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(45deg)";
			}
			
			var topPoint = (braceNum + charNum);
			topPoint = topPoint + "px";
			
			var left = (semiNum + charNum) * 2;
			left = left + "px";
			
			var opa;
			
			var para = document.createElement("P");
			para.style.border = "2px solid green";
			para.style.width = totalBraces;
			para.style.height = semicolons;
			para.className = "fors";
			para.style.display = "inline-block";
			para.style.backgroundColor = fors;
			para.style.transform = rotate;
			para.style.position = "absolute";
			
			if((i%2)==0){
				para.style.top = topPoint;
			}
			else{
				para.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para.style.left = left;
			}
			else{
				para.style.right = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para);
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			var para2 = document.createElement("P");
			para2.style.border = "2px solid green";
			para2.style.width = totalBraces;
			para2.style.height = semicolons;
			para2.style.display = "inline-block";
			para2.style.backgroundColor = fors;
			para2.style.transform = rotate;
			para2.className = "fors";
			para2.style.position = "absolute";
	
			if((i%2)==0){
				para2.style.top = topPoint;
			}
			else{
				para2.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para2.style.right = left;
			}
			else{
				para2.style.left = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para2.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para2);
		}
		else if(hold == 'le(' && contents.charAt(i-1) == "i" && contents.charAt(i-4) != ' ' && contents.charAt(i-2) == "h"){
		    console.log("do while");
			var start = i + 1;
			var totalBraces = 1;
			var charNum = 3;
			var semicolons = 0;
			var ifState = contents.substring(i-3,i) + hold;
			
			i+=3;
			
			while(contents.charAt(i) != '{' && contents.charAt(i) != ';'){
				ifState = ifState + contents.charAt(i);
				i++;
			}
			
			ifState = ifState + '{';
			
			i++;
			
			var braces = 1;
			
			while(braces != 0){
				if(contents.charAt(i) == '{'){
					braces += 1;
					totalBraces++;
				}
				else if(contents.charAt(i) == '}'){
					braces -= 1;
				}
				if(contents.charAt(i) == ';'){
					semicolons++;
				}
				
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			i=start;
			
			totalBraces = (totalBraces*12);
			var braceNum = totalBraces;
			totalBraces = totalBraces + "px";
			
			semicolons = semicolons*10;
			var semiNum = semicolons;
			semicolons = semicolons + "px";
			
			var rotate;
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(45deg)";
			}
			
			var topPoint = (braceNum + charNum);
			topPoint = topPoint + "px";
			
			var left = (semiNum + charNum) * 2;
			left = left + "px";
			
			var opa;
			
			var para = document.createElement("P");
			para.style.border = "2px solid green";
			para.style.width = totalBraces;
			para.style.height = semicolons;
			para.style.display = "inline-block";
			para.style.backgroundColor = whiles;
			para.style.transform = rotate;
			para.className = "whiles";
			para.style.position = "absolute";
			
			if((i%2)==0){
				para.style.top = topPoint;
			}
			else{
				para.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para.style.left = left;
			}
			else{
				para.style.right = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para);
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			var para2 = document.createElement("P");
			para2.style.border = "2px solid green";
			para2.style.width = totalBraces;
			para2.style.height = semicolons;
			para2.className = "whiles";
			para2.style.display = "inline-block";
			para2.style.backgroundColor = whiles;
			para2.style.transform = rotate;
			para2.style.position = "absolute";
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			if((i%2)==0){
				para2.style.top = topPoint;
			}
			else{
				para2.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para2.style.right = left;
			}
			else{
				para2.style.left = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para2.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para2);
		}
		else if(hold == 'le(' && contents.charAt(i-1) == "i" && contents.charAt(i-4) == ' ' && contents.charAt(i-2) == "h"){
		    console.log("while");
			var ifState = contents.substring(i-3,i) + hold;
			var start = i+1;
			var charNum = 0;
			var totalBraces = 1; 
			var semicolons = 0;
			
			i+=3;
			charNum+=3;
			
			while(contents.charAt(i) != '{'){
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			
			ifState = ifState + '{';
			
			i++;
			charNum++;
			
			var braces = 1;
			
			while(braces != 0){
				if(contents.charAt(i) == '{'){
					braces += 1;
					totalBraces++;
				}
				else if(contents.charAt(i) == '}'){
					braces -= 1;
				}
				if(contents.charAt(i) == ";"){
					semicolons++;
				}
				
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			i = start;
			
			totalBraces = (totalBraces*12);
			var braceNum = totalBraces;
			totalBraces = totalBraces + "px";
			
			semicolons = semicolons*10;
			var semiNum = semicolons;
			semicolons = semicolons + "px";
			
			var rotate;
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(45deg)";
			}
			
			var topPoint = (braceNum + charNum);
			topPoint = topPoint + "px";
			
			var left = (semiNum + charNum) * 2;
			left = left + "px";
			
			var opa;
			
			var para = document.createElement("P");
			para.style.border = "2px solid green";
			para.style.width = totalBraces;
			para.style.height = semicolons;
			para.style.display = "inline-block";
			para.style.backgroundColor = dowhiles;
			para.style.transform = rotate;
			para.className = "dowhiles";
			para.style.position = "absolute";
			
			if((i%2)==0){
				para.style.top = topPoint;
			}
			else{
				para.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para.style.left = left;
			}
			else{
				para.style.right = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para);
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			var para2 = document.createElement("P");
			para2.style.border = "2px solid green";
			para2.style.width = totalBraces;
			para2.style.height = semicolons;
			para2.style.display = "inline-block";
			para2.style.backgroundColor = dowhiles;
			para2.style.transform = rotate;
			para2.className = "dowhiles";
			para2.style.position = "absolute";
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			if((i%2)==0){
				para2.style.top = topPoint;
			}
			else{
				para2.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para2.style.right = left;
			}
			else{
				para2.style.left = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para2.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para2);
		}
		else if(hold == 'ry(' && contents.charAt(i-2) == 't'){
		    console.log("try");
			var ifState = contents.substring(i-1,i) + hold;
			var start = i + 1;
			var totalBraces = 1;
			var semicolons = 0;
			var charNum = 1;
			
			i+=1;
			
			while(contents.charAt(i) != '{'){
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			
			ifState = ifState + '{';
			
			i++;
			charNum++;
			
			var braces = 1;
			
			while(braces != 0){
				if(contents.charAt(i) == '{'){
					braces += 1;
					totalBraces++;
				}
				else if(contents.charAt(i) == '}'){
					braces -= 1;
				}
				if(contents.charAt(i) == ';'){
					semicolons++;
				}
				
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}			
			i = start;
			
			totalBraces = (totalBraces*12);
			var braceNum = totalBraces;
			totalBraces = totalBraces + "px";
			
			semicolons = semicolons*10;
			var semiNum = semicolons;
			semicolons = semicolons + "px";
			
			var rotate;
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(45deg)";
			}
			
			var topPoint = (braceNum + charNum);
			topPoint = topPoint + "px";
			
			var left = (semiNum + charNum) * 2;
			left = left + "px";
			
			var opa;
			
			var para = document.createElement("P");
			para.style.border = "2px solid green";
			para.style.width = totalBraces;
			para.style.height = semicolons;
			para.style.display = "inline-block";
			para.style.backgroundColor = tries;
			para.style.transform = rotate;
			para.style.position = "absolute";
			para.className = "tries";
			
			if((i%2)==0){
				para.style.top = topPoint;
			}
			else{
				para.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para.style.left = left;
			}
			else{
				para.style.right = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para);
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			var para2 = document.createElement("P");
			para2.style.border = "2px solid green";
			para2.style.width = totalBraces;
			para2.style.height = semicolons;
			para2.style.display = "inline-block";
			para2.style.backgroundColor = tries;
			para2.style.transform = rotate;
			para2.style.position = "absolute";
			para2.className = "tries";
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			if((i%2)==0){
				para2.style.top = topPoint;
			}
			else{
				para2.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para2.style.right = left;
			}
			else{
				para2.style.left = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para2.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para2);
		}
		else if(hold == 'ch(' && contents.charAt(i-2) == 't'){
		    console.log("catch");
			var ifState = contents.substring(i-3,i) + hold;
			var start = i + 1;
			var charNum = 3;
			var totalBraces = 1;
			var semicolons = 0;
			
			i+=3;
			
			while(contents.charAt(i) != '{'){
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}
			
			ifState = ifState + '{';
			
			i++;
			charNum++;
			
			var braces = 1;
			
			while(braces != 0){
				if(contents.charAt(i) == '{'){
					braces += 1;
					totalBraces++;
				}
				else if(contents.charAt(i) == '}'){
					braces -= 1;
				}
				if(contents.charAt(i) == ';'){
					semicolons++;
				}
				
				ifState = ifState + contents.charAt(i);
				i++;
				charNum++;
			}			
			i = start;
			
			totalBraces = (totalBraces*12);
			var braceNum = totalBraces;
			totalBraces = totalBraces + "px";
			
			semicolons = semicolons*10;
			var semiNum = semicolons;
			semicolons = semicolons + "px";
			
			var rotate;
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(45deg)";
			}
			
			var topPoint = (braceNum + charNum);
			topPoint = topPoint + "px";
			
			var left = (semiNum + charNum) * 2;
			left = left + "px";
			
			var opa;
			
			var para = document.createElement("P");
			para.style.border = "2px solid green";
			para.style.width = totalBraces;
			para.style.height = semicolons;
			para.style.display = "inline-block";
			para.style.backgroundColor = catches;
			para.style.transform = rotate;
			para.className = "catches";
			para.style.position = "absolute";
			
			if((i%2)==0){
				para.style.top = topPoint;
			}
			else{
				para.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para.style.left = left;
			}
			else{
				para.style.right = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para);
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			var para2 = document.createElement("P");
			para2.style.border = "2px solid green";
			para2.style.width = totalBraces;
			para2.style.height = semicolons;
			para2.style.display = "inline-block";
			para2.style.backgroundColor = catches;
			para2.style.transform = rotate;
			para2.className = "catches";
			para2.style.position = "absolute";
			
			if((charNum%2) == 0){
				rotate = "rotate(90deg)";
			}
			else if((charNum%3) == 0){
				rotate = "rotate(315deg)";
			}
			
			if((i%2)==0){
				para2.style.top = topPoint;
			}
			else{
				para2.style.bottom = topPoint;
			}
			
			if((i%3)==0 && (i%2)!=0){
				para2.style.right = left;
			}
			else{
				para2.style.left = left;
			}
			if(charNum > 100){
				opa = charNum - 100;
				opa = opa/100;
			}
			else{
				opa = 100-charNum;
				opa = opa/100;
			}
			
			para2.style.opacity = opa;
			
			document.getElementById("bigDiv").appendChild(para2);
		}
	}
}	

