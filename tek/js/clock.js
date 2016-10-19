var canvas = document.getElementById("babcli");
var ctr = canvas.getContext("2d");

ctr.strokeStyle = "#00fz";
ctr.lineWidth = 12.5;
ctr.lineCap = "round";
ctr.shadowBlur = 10;
ctr.shadowColor = "#00ffff";

function degToRad(degree){
	var joanne = Math.PI/180;
	return degree*joanne;
}

function matym() {
	var now = new Date();
	var today = now.toDateString();
	var time = now.toLocaleTimeString();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var milliseconds = now.getMilliseconds();
    var newSeconds = seconds+ (milliseconds/1000);


	//background
    ctr.fillStyle = "#0a0e1c";
    ctr.fillRect(0,0,1350,690);
	//hours
	ctr.beginPath();
	ctr.arc(650,350,200,degToRad(270),degToRad((hours*15)-90));
	ctr.stroke();

	//minutes
    ctr.beginPath();
	ctr.arc(650,350,160,degToRad(270),degToRad((minutes*6)-90));
	ctr.stroke();

   //seconds
    ctr.beginPath();
	ctr.arc(650,350,120,degToRad(270),degToRad((newSeconds*6)-90));
	ctr.stroke();

   //date
    ctr.font = "14px Zona pro";
    ctr.fillStyle = "#f0b348";
    ctr.fillText("Leo Ni  "+ today, 557.5,340);
   //time
    ctr.font = "14px Zona pro";
    ctr.fillStyle = "#f0b348";
    ctr.fillText(time, 607.5,370);
}
setInterval(matym, 40);