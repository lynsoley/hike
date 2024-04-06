/* ----------------- background animation --------------- */
document.getElementById('ani').style.display = "none";

let animationsCount = 200; // Animation count, can be overwritten by attrs
let baseCss = ``;

// set global attributes
if (typeof ANIMATIONS_COUNT !== 'undefined') {
  animationsCount = ANIMATIONS_COUNT;
}
if (typeof BASE_CSS !== 'undefined') {
  baseCss = BASE_CSS;
}

let bodyHeightPx = null;
let pageHeightVh = null;

function setHeightVariables() {
  bodyHeightPx = document.body.offsetHeight;
  pageHeightVh = (100 * bodyHeightPx / window.innerHeight);
}

// get params set in animation div
function getAnimationAttributes() {
  const animationWrapper = document.getElementById('ani');
  if (animationWrapper) {
    animationsCount = Number(
      animationWrapper.attributes?.count?.value || animationsCount
    );
  }
}

// This function allows you to turn on and off the animation
function showAnimation(value) {
  if (value =='fa-play') {
    document.getElementById('ani').style.display = "block";
    const iconElement = document.getElementById("iconElement");

    // Create the new icon element with the "fa-pause" class and the updated "showAnimation" function
    const newIcon = document.createElement("i");
    newIcon.className = "fa-solid fa-pause lupe";
    newIcon.id = 'iconElement';
    newIcon.onclick = function () {
      showAnimation("fa-pause");
    };

    // Replace the old icon with the new one
    iconElement.parentNode.replaceChild(newIcon, iconElement);
  }
  else {
    document.getElementById('ani').style.display = "none";
    const iconElement = document.getElementById("iconElement");

    // Create the new icon element with the "fa-pause" class and the updated "showAnimation" function
    const newIcon = document.createElement("i");
    newIcon.className = "fa-solid fa-play lupe";
    newIcon.id = 'iconElement';
    newIcon.onclick = function () {
      showAnimation("fa-play");
  };

  // Replace the old icon with the new one
  iconElement.parentNode.replaceChild(newIcon, iconElement);
  }
}

// Append style for each animation to the head
function addCss(rule) {
  let css = document.createElement('style');
  css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}

// Math
function randomInt(value = 100) {
  return Math.floor(Math.random() * value) + 1;
}

function randomIntRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Create style for animation
function spawnAnimationCSS(animationDensity = 200) {
  let animationName = "animation";
  let rule = baseCss;

  for (let i = 1; i < animationDensity; i++) {
    let randomX = Math.random() * 100; // vw
    let randomOffset = Math.random() * 10 // vw;
    let randomXEnd = randomX + randomOffset;
    let randomXEndYoyo = randomX + (randomOffset / 2);
    let randomYoyoTime = getRandomArbitrary(0.3, 0.8);
    let randomYoyoY = randomYoyoTime * pageHeightVh; // vh
    let randomScale = Math.random();
    let fallDuration = randomIntRange(10, pageHeightVh / 10 * 3); // s
    let fallDelay = randomInt(pageHeightVh / 10 * 3) * -1; // s
    let opacity = Math.random();

    rule += `
      .${animationName}:nth-child(${i}) {
        opacity: ${opacity};
        transform: translate(${randomX}vw, -10px) scale(${randomScale});
        animation: fall-${i} ${fallDuration}s ${fallDelay}s linear infinite;
      }
      @keyframes fall-${i} {
        ${randomYoyoTime * 100}% {
          transform: translate(${randomXEnd}vw, ${randomYoyoY}vh) scale(${randomScale});
        }
        to {
          transform: translate(${randomXEndYoyo}vw, ${pageHeightVh}vh) scale(${randomScale});
        }
      }
    `
  }
  addCss(rule);
}

// Load the rules and execute after the DOM loads
createAnimation = function () {
  setHeightVariables();
  getAnimationAttributes();
  spawnAnimationCSS(animationsCount);
  spawnAnimation(animationsCount);
};


// export createAnimation function if using node or CommonJS environment
if (typeof module !== 'undefined') {
  module.exports = {
    createAnimation,
    showAnimation,
  };
}
else {
  window.onload = createAnimation;
}



/* -------------------- navigation --------------------- */
var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

window.addEventListener('resize', function() {
  if (window.outerWidth > 535) {
    document.getElementById('menu').style.display = "flex";
  } else {
    document.getElementById('menu').style.display = "block"; 
  }
});



/* ------------------- top button ------------------ */
$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 100){
          $('#scroll').fadeIn();
      }else{
          $('#scroll').fadeOut();
      }
  });
  $('#scroll').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });
});



/* ------------------- navigate to details page ------------------ */
var hike1 = document.getElementById('hike-1');

/*hike1.addEventListener('click', function(){
  var h2 = document.getElementById('hike-name-1')
  var img = document.getElementById('hike-img-1');
  navigateToDetails(h2, img);
});*/

/*function navigateToDetails(name, source){
  window.location.replace('./details.html');
  var h2D = document.getElementById('hike-name')
  var imgD = document.getElementById('hike-img');
  imgD.source = source;
  window.location.reload();
}*/

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function navigateToDetails(name, source){
    window.location.href = './details.html';
    setTimeout(function() {
      setContent(name, source);
    }, 10);
}

function setContent(name, source){
  var h2D = document.getElementById('hike-name-details');
  var imgD = document.getElementById('hike-img-details');
  h2D.innerText = name.innerText;
  imgD.src = source.src;
}