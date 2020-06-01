// date copyright

var d = new Date();
var n = d.getFullYear();
document.getElementById("copyright").innerHTML = n;


// eye move test


$("body").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;

  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});



//this is the Info-Button Toggle

$('a.show-menu').on('click', function() {
  if ($('.menu').is(':visible')) {
    $('.menu').slideUp()
  } else {
    $('.menu').slideDown()
  }

  return false
})


// this is the about page word animation

let skillNumber = 0

//this is the content
const skills = [
  {copy: 'Illustration', background: '#b83b3b'},
  {copy: 'Web Design', background: '#b83b3b'},
  {copy: 'Brand Identities', background: '#b83b3b'},
  {copy: 'Logo Development', background: '#b83b3b'},
  {copy: 'Visual Strategies', background: '#b83b3b'},
  {copy: 'artistic collaborations', background: '#b83b3b'},
  {copy: '[enter fancy Design buzzword]', background: '#b83b3b'},
  {copy: "basically a lot of things. Just ask me, I'll try and help!", background: '#b83b3b'},
  {copy: 'Graphic Design', background: '#b83b3b'}
]

// pick relevant tag
const wordTag = document.querySelector('.cando')

//make function for count
const loop = function() {
  skillNumber = skillNumber + 1

  if (skillNumber > skills.length - 1) {
    skillNumber = 0
  }

  updateSection()
}

const updateSection = function() {
  wordTag.innerHTML = skills[skillNumber].copy
  wordTag.style.color = skills[skillNumber].background
}

wordTag.addEventListener('click', function() {
  loop()
})

wordTag.addEventListener('mouseenter', function() {
  loop()
})


