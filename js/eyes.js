

const irisOne = document.querySelector('div.iris-one')
const irisTwo = document.querySelector('div.iris-two')
const irisThree = document.querySelector('div.iris-three')
const irisFour = document.querySelector('div.iris-four')

let interval = null

// move the eyes every three seconds
const startInterval = function () {
    clearInterval(interval)
    interval = setInterval(() => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const z = Math.random() * window.innerWidth
      const w = Math.random() * window.innerHeight
      const u = Math.random() * window.innerWidth
      const v = Math.random() * window.innerHeight
      const m = Math.random() * window.innerWidth
      const n = Math.random() * window.innerHeight

      
      moveEye(irisOne, x, y)
      moveEye(irisTwo, z, w)
      moveEye(irisThree, u, v)
      moveEye(irisFour, m, n)
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
  const radius = Math.min(10, diff)
  
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
    moveEye(irisOne, event.pageX, event.pageY)
    moveEye(irisTwo, event.pageX, event.pageY)
    moveEye(irisThree, event.pageX, event.pageY)
    moveEye(irisFour, event.pageX, event.pageY)
});