//window.alert("anyád se szeret!")

var slider_t   = document.getElementById("timeRange");
var output_t   = document.getElementById("sld_t");
var velocity_t = document.getElementById("vel_t")
var comped_t   = document.getElementById("t_t");

//output.innerHTML = slider.value;

slider_t.oninput = function() {
  var normedValue_t = this.value / 1000;
  var calculatedValue_t = 1 / Math.sqrt(1 - Math.pow(normedValue_t, 2));
  var velo_t = 29979245 * normedValue_t;

  output_t.innerHTML   = normedValue_t;
  velocity_t.innerHTML = velo_t.toFixed();
  comped_t.innerHTML   = calculatedValue_t.toFixed(3);
}

//Random stuff
