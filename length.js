var slider_l   = document.getElementById("lengthRange");
var output_l   = document.getElementById("sld_l");
var velocity_l = document.getElementById("vel_l")
var comped_l   = document.getElementById("l_l");

//output.innerHTML = slider.value;

var canvas = document.getElementById('rectContainer');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#4CAF50";
ctx.fillRect(10, 10, 500, 50);
ctx.stroke();

var length = 0.0;

slider_l.oninput = function() {
  var normedValue_l = this.value / 1000;
  var calculatedValue_l = Math.sqrt(1 - Math.pow(normedValue_l, 2));
  var velo_l = 29979245 * normedValue_l;

  output_l.innerHTML = normedValue_l;
  velocity_l.innerHTML = velo_l.toFixed();
  comped_l.innerHTML = calculatedValue_l.toFixed(3);

  length = Math.round(calculatedValue_l * 500).toString()+'px';

  console.log(length);

  canvas.style.width = length;
}
