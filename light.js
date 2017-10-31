var blinkBtn = document.querySelector('.blinkBtn');
var green = document.querySelector('.green');
var orange = document.querySelector('.orange');
var red = document.querySelector('.red');
var offBtn = document.querySelector('.offkBtn');
var blink;
var Light = function(id, color) {

  //get the target element to render the light into
  var elem = document.getElementById(id);
  elem.classList.add('light-background');

  //append a div into the target element
  var lightElem = document.createElement('div');
  lightElem.classList.add('light');
  lightElem.classList.add(color);
  elem.appendChild(lightElem);

  this.on = function() {
    lightElem.classList.add('on');
  };
  this.off = function() {
    lightElem.classList.remove('on');
  };
  this.terminate = function() {
    clearInterval(blink);
    this.off();
  };
}

var stopLight = new Light('light', 'red');
var warnLight = new Light('light', 'orange');
var light = new Light('light', 'green');


blinkBtn.addEventListener('click', function() {
  // let the light blink
   blink = setInterval(function() {
    light.on();
    warnLight.on();
    stopLight.on();
    setTimeout(function() {
      light.off();
      warnLight.off();
      stopLight.off();
    }, 500);
  }, 1000);
});

green.addEventListener('click', function() {
  // switch the light on/off
  light.on();
  // warnLight.on();
  // stopLight.on();
});
orange.addEventListener('click', function() {
  // switch the light on/off

  warnLight.on();

});
red.addEventListener('click', function() {
  // switch the light on/off
  // light.on();
// warnLight.on();
  stopLight.on();
});

offBtn.addEventListener('click', function() {
  // switch the light on/off
  light.terminate();
  warnLight.terminate();
  stopLight.terminate();

});
