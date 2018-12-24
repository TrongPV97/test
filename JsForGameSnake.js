function	ChangeColor(){
	var color = ["red", "blue", "black","pink","gray"];
	var m=Math.floor((Math.random() * color.length) + 1);

	document.getElementById("Div_Color").style.backgroundColor = color[m];
	//alert(m);
}