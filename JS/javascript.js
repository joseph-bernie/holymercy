"use strict";

/*mouse animation*//*https://www.youtube.com/watch?v=AaowWmq28CY*/
//document.onmousemove = animateCircles;

//var colors = ['#f2ca5a', '#a83c2d', '#588543', '#3f4d9e'];/*#ccc, #6cf', '#eba13a*/

//function animateCircles (event) {                      /*event listener*/
//	var circle = document.createElement("div");
//	circle.setAttribute("class", "circle");              /*"atribute name", "attribute value"*/
//	document.body.appendChild(circle);         /*add element to the DOM manualy*/
	
//	circle.style.left = event.clientX + 'px';
//	circle.style.top = event.clientY + 'px';
	
//	var color = colors[Math.floor(Math.random() * colors.length)];
//	circle.style.borderColor = color;          /*upgrade colors to circle*/
	
//	circle.style.transition = "all 0.5s linear 0s";/*add animation to the circles- all=transition property css, 0.5 duration default, linear(speed)=transition timing function,. 0=transition delay=when it will start, 1=1sec*/
	
//	circle.style.left = circle.offsetLeft - 20 + 'px';  /* -20 mouse to center of circles*/
//	circle.style.top = circle.offsetTop - 20 + 'px';/*- 20*/
	
	
//	circle.style.width = "50px";/*50*/
//	circle.style.height = "50px";/*50*/
//	circle.style.borderWidth = "5px";/*5*/
//	circle.style.opacity = 0;/*0*/
	
	/*add a event listener and remove the elements to keep the DOM clean*/
//}


/*image banner  https://www.youtube.com/watch?v=TLF6r1R6EDw*/
var bannerStatus= 1;
var bannerTimer= 5000; /*4000*/

window.onload = function () {  /*starts the loop*/
	bannerLoop();
}

var startBannerLoop = setInterval(function(){  /*keeps the loop going*/
	bannerLoop();
}, bannerTimer);

document.getElementById("main-banner").onmouseenter = function(){
	clearInterval(startBannerLoop);  /*stops Interval with mouse*/
}
document.getElementById("main-banner").onmouseleave = function(){
	startBannerLoop = setInterval(function(){   /*starts at exit*/
		bannerLoop();  
},	 bannerTimer);
}

/*document.getElementById("imgbanbtn-prev").onclick = function() {
	if (bannerStatus === 1) {
		bannerStatus = 2;
	}
	else if (bannerStatus === 2) {
		bannerStatus = 3;
	}
	else if (bannerStatus === 3) {
		bannerStatus = 1;
	}
	bannerLoop();
} */

document.getElementById("imgbanbtn-next").onclick = function() {
	bannerLoop();
}

function bannerLoop() {
	if (bannerStatus === 1) {
		document.getElementById("imgban2").style.opacity = "0";
		setTimeout(function() {
			document.getElementById("imgban1").style.right = "0px";
		    document.getElementById("imgban1").style.zIndex = "1000";
		    document.getElementById("imgban2").style.right = "-1200px";
			document.getElementById("imgban2").style.zIndex = "1500";
			document.getElementById("imgban3").style.right = "1200px";
			document.getElementById("imgban3").style.zIndex = "500";
		}, 500);
		setTimeout(function() {
			document.getElementById("imgban2").style.opacity = "1";
		}, 1000);
		bannerStatus= 2;
	}
	else if (bannerStatus === 2) {
		document.getElementById("imgban3").style.opacity = "0";
		setTimeout(function() {
			document.getElementById("imgban2").style.right = "0px";
		    document.getElementById("imgban2").style.zIndex = "1000";
		    document.getElementById("imgban3").style.right = "-1200px";
			document.getElementById("imgban3").style.zIndex = "1500";
			document.getElementById("imgban1").style.right = "1200px";
			document.getElementById("imgban1").style.zIndex = "500";
		}, 500);
		setTimeout(function() {
			document.getElementById("imgban3").style.opacity = "1";
		}, 1000);
		bannerStatus= 3;
	}
	else if (bannerStatus === 3) {
		document.getElementById("imgban1").style.opacity = "0";
		setTimeout(function() {
			document.getElementById("imgban3").style.right = "0px";
		    document.getElementById("imgban3").style.zIndex = "1000";
		    document.getElementById("imgban1").style.right = "-1200px";
			document.getElementById("imgban1").style.zIndex = "1500";
			document.getElementById("imgban2").style.right = "1200px";
			document.getElementById("imgban2").style.zIndex = "500";
		}, 500);
		setTimeout(function() {
			document.getElementById("imgban1").style.opacity = "1";
		}, 1000);
		bannerStatus= 1;
	}
}

/*function myFunction() {
  alert("Please clear your browser history (cache) to get the latest updates");
}*/