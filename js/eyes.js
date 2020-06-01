

const irisLeft = document.querySelector('div.iris-left')

let interval = null

// move the eyes every three seconds
const startInterval = function () {
    clearInterval(interval)
    interval = setInterval(() => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      
      moveEye(irisLeft, x, y)
    }, 3000)
  }

const moveEye = function(tag, mouseX, mouseY){
  
  // center of the eye
  const eyeMidX = tag.getBoundingClientRect().left
  const eyeMidY = tag.getBoundingClientRect().top
  
  // find the difference between the eye and the mouse
  const diffX = mouseX - eyeMidX
  const diffY = mouseY - eyeMidY - window.pageYOffset
  
  // pythagoras theorem
  const diff = Math.sqrt(diffX * diffX + diffY * diffY)
  
  // what is the capped radius
  const radius = Math.min(12, diff)
  
  // tan in math
  const angle = Math.atan2(diffY, diffX)
  
  // lets get the capped versoin of this, based on the angle
  const cappedX = radius * Math.cos(angle)
  const cappedY = radius * Math.sin(angle)
  
  const eyeTag = tag.querySelector("div.iris-inner")
  
    eyeTag.style.left = cappedX + "px"
    eyeTag.style.top = cappedY + "px"
}

startInterval()

document.addEventListener("mousemove", function(event){
    startInterval()
    moveEye(irisLeft, event.pageX, event.pageY)
});